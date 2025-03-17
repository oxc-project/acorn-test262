__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3392,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 29,
            "end": 38,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "value": 3,
                "raw": "3"
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
      "type": "ExpressionStatement",
      "start": 40,
      "end": 67,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 66,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 46,
          "end": 66,
          "callee": {
            "type": "MemberExpression",
            "start": 46,
            "end": 64,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 64,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 80,
          "end": 107,
          "callee": {
            "type": "MemberExpression",
            "start": 80,
            "end": 98,
            "object": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 98,
              "name": "toLocaleString",
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
              "start": 99,
              "end": 106,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 189,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 188,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 121,
          "end": 188,
          "callee": {
            "type": "MemberExpression",
            "start": 121,
            "end": 139,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 125,
              "end": 139,
              "name": "toLocaleString",
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
              "start": 140,
              "end": 147,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 149,
              "end": 187,
              "properties": [
                {
                  "type": "Property",
                  "start": 151,
                  "end": 168,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 156,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 158,
                    "end": 168,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 170,
                  "end": 185,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 178,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 180,
                    "end": 185,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 225,
            "name": "dates",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 225,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 210,
                "end": 225,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 219,
                  "end": 225,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 219,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 223,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 228,
            "end": 252,
            "elements": [
              {
                "type": "NewExpression",
                "start": 229,
                "end": 239,
                "callee": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 237,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 241,
                "end": 251,
                "callee": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 249,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 254,
      "end": 283,
      "expression": {
        "type": "AssignmentExpression",
        "start": 254,
        "end": 282,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 254,
          "end": 257,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 260,
          "end": 282,
          "callee": {
            "type": "MemberExpression",
            "start": 260,
            "end": 280,
            "object": {
              "type": "Identifier",
              "start": 260,
              "end": 265,
              "name": "dates",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 266,
              "end": 280,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 323,
      "expression": {
        "type": "AssignmentExpression",
        "start": 290,
        "end": 322,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 296,
          "end": 322,
          "callee": {
            "type": "MemberExpression",
            "start": 296,
            "end": 316,
            "object": {
              "type": "Identifier",
              "start": 296,
              "end": 301,
              "name": "dates",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 302,
              "end": 316,
              "name": "toLocaleString",
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
              "start": 317,
              "end": 321,
              "value": "fr",
              "raw": "'fr'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 384,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 383,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 333,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 336,
          "end": 383,
          "callee": {
            "type": "MemberExpression",
            "start": 336,
            "end": 356,
            "object": {
              "type": "Identifier",
              "start": 336,
              "end": 341,
              "name": "dates",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 342,
              "end": 356,
              "name": "toLocaleString",
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
              "start": 357,
              "end": 361,
              "value": "fr",
              "raw": "'fr'"
            },
            {
              "type": "ObjectExpression",
              "start": 363,
              "end": 382,
              "properties": [
                {
                  "type": "Property",
                  "start": 365,
                  "end": 380,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 373,
                    "name": "timeZone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 375,
                    "end": 380,
                    "value": "UTC",
                    "raw": "'UTC'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 403,
            "name": "mixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 406,
            "end": 440,
            "elements": [
              {
                "type": "Literal",
                "start": 407,
                "end": 408,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "NewExpression",
                "start": 410,
                "end": 420,
                "callee": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 418,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 422,
                "end": 427,
                "value": 59782,
                "raw": "59782"
              },
              {
                "type": "NewExpression",
                "start": 429,
                "end": 439,
                "callee": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 437,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 442,
      "end": 471,
      "expression": {
        "type": "AssignmentExpression",
        "start": 442,
        "end": 470,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 442,
          "end": 445,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 448,
          "end": 470,
          "callee": {
            "type": "MemberExpression",
            "start": 448,
            "end": 468,
            "object": {
              "type": "Identifier",
              "start": 448,
              "end": 453,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 454,
              "end": 468,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 551,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 550,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 478,
          "end": 481,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 484,
          "end": 550,
          "callee": {
            "type": "MemberExpression",
            "start": 484,
            "end": 504,
            "object": {
              "type": "Identifier",
              "start": 484,
              "end": 489,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 490,
              "end": 504,
              "name": "toLocaleString",
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
              "start": 505,
              "end": 509,
              "value": "de",
              "raw": "'de'"
            },
            {
              "type": "ObjectExpression",
              "start": 511,
              "end": 549,
              "properties": [
                {
                  "type": "Property",
                  "start": 513,
                  "end": 530,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 518,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 520,
                    "end": 530,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 532,
                  "end": 547,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 532,
                    "end": 540,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 542,
                    "end": 547,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 558,
      "end": 682,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 681,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 558,
          "end": 561,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 564,
          "end": 681,
          "callee": {
            "type": "MemberExpression",
            "start": 564,
            "end": 618,
            "object": {
              "type": "TSAsExpression",
              "start": 565,
              "end": 602,
              "expression": {
                "type": "Identifier",
                "start": 565,
                "end": 570,
                "name": "mixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 574,
                "end": 602,
                "typeName": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 587,
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 587,
                  "end": 602,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 588,
                      "end": 601,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 588,
                          "end": 594
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 597,
                          "end": 601,
                          "typeName": {
                            "type": "Identifier",
                            "start": 597,
                            "end": 601,
                            "name": "Date",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "property": {
              "type": "Identifier",
              "start": 604,
              "end": 618,
              "name": "toLocaleString",
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
              "start": 619,
              "end": 623,
              "value": "de",
              "raw": "'de'"
            },
            {
              "type": "ObjectExpression",
              "start": 625,
              "end": 680,
              "properties": [
                {
                  "type": "Property",
                  "start": 627,
                  "end": 642,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 635,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 637,
                    "end": 642,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 644,
                  "end": 661,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 649,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 651,
                    "end": 661,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 663,
                  "end": 678,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 671,
                    "name": "timeZone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 673,
                    "end": 678,
                    "value": "UTC",
                    "raw": "'UTC'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 690,
      "end": 740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 703,
            "name": "bigInts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 706,
            "end": 739,
            "elements": [
              {
                "type": "CallExpression",
                "start": 707,
                "end": 716,
                "callee": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 713,
                  "name": "BigInt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 714,
                    "end": 715,
                    "value": 1,
                    "raw": "1"
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 718,
                "end": 727,
                "callee": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 724,
                  "name": "BigInt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 725,
                    "end": 726,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 729,
                "end": 738,
                "callee": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 735,
                  "name": "BigInt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 736,
                    "end": 737,
                    "value": 3,
                    "raw": "3"
                  }
                ],
                "optional": false,
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 741,
      "end": 772,
      "expression": {
        "type": "AssignmentExpression",
        "start": 741,
        "end": 771,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 741,
          "end": 744,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 747,
          "end": 771,
          "callee": {
            "type": "MemberExpression",
            "start": 747,
            "end": 769,
            "object": {
              "type": "Identifier",
              "start": 747,
              "end": 754,
              "name": "bigInts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 755,
              "end": 769,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 779,
      "end": 817,
      "expression": {
        "type": "AssignmentExpression",
        "start": 779,
        "end": 816,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 779,
          "end": 782,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 785,
          "end": 816,
          "callee": {
            "type": "MemberExpression",
            "start": 785,
            "end": 807,
            "object": {
              "type": "Identifier",
              "start": 785,
              "end": 792,
              "name": "bigInts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 793,
              "end": 807,
              "name": "toLocaleString",
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
              "start": 808,
              "end": 815,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 824,
      "end": 902,
      "expression": {
        "type": "AssignmentExpression",
        "start": 824,
        "end": 901,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 824,
          "end": 827,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 830,
          "end": 901,
          "callee": {
            "type": "MemberExpression",
            "start": 830,
            "end": 852,
            "object": {
              "type": "Identifier",
              "start": 830,
              "end": 837,
              "name": "bigInts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 838,
              "end": 852,
              "name": "toLocaleString",
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
              "start": 853,
              "end": 860,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 862,
              "end": 900,
              "properties": [
                {
                  "type": "Property",
                  "start": 864,
                  "end": 881,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 869,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 871,
                    "end": 881,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 883,
                  "end": 898,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 891,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 893,
                    "end": 898,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 910,
      "end": 945,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 916,
          "end": 944,
          "id": {
            "type": "Identifier",
            "start": 916,
            "end": 925,
            "name": "int8Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 928,
            "end": 944,
            "callee": {
              "type": "Identifier",
              "start": 932,
              "end": 941,
              "name": "Int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 942,
                "end": 943,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 946,
      "end": 979,
      "expression": {
        "type": "AssignmentExpression",
        "start": 946,
        "end": 978,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 946,
          "end": 949,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 952,
          "end": 978,
          "callee": {
            "type": "MemberExpression",
            "start": 952,
            "end": 976,
            "object": {
              "type": "Identifier",
              "start": 952,
              "end": 961,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 962,
              "end": 976,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 986,
      "end": 1026,
      "expression": {
        "type": "AssignmentExpression",
        "start": 986,
        "end": 1025,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 986,
          "end": 989,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 992,
          "end": 1025,
          "callee": {
            "type": "MemberExpression",
            "start": 992,
            "end": 1016,
            "object": {
              "type": "Identifier",
              "start": 992,
              "end": 1001,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1002,
              "end": 1016,
              "name": "toLocaleString",
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
              "start": 1017,
              "end": 1024,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1033,
      "end": 1113,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1033,
        "end": 1112,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1033,
          "end": 1036,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1039,
          "end": 1112,
          "callee": {
            "type": "MemberExpression",
            "start": 1039,
            "end": 1063,
            "object": {
              "type": "Identifier",
              "start": 1039,
              "end": 1048,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1049,
              "end": 1063,
              "name": "toLocaleString",
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
              "start": 1064,
              "end": 1071,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1073,
              "end": 1111,
              "properties": [
                {
                  "type": "Property",
                  "start": 1075,
                  "end": 1092,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1075,
                    "end": 1080,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1082,
                    "end": 1092,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1094,
                  "end": 1109,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1094,
                    "end": 1102,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1104,
                    "end": 1109,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1121,
      "end": 1158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1127,
          "end": 1157,
          "id": {
            "type": "Identifier",
            "start": 1127,
            "end": 1137,
            "name": "uint8Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1140,
            "end": 1157,
            "callee": {
              "type": "Identifier",
              "start": 1144,
              "end": 1154,
              "name": "Uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1155,
                "end": 1156,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1159,
      "end": 1193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1159,
        "end": 1192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1159,
          "end": 1162,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1165,
          "end": 1192,
          "callee": {
            "type": "MemberExpression",
            "start": 1165,
            "end": 1190,
            "object": {
              "type": "Identifier",
              "start": 1165,
              "end": 1175,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1176,
              "end": 1190,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1200,
      "end": 1241,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1200,
        "end": 1240,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1200,
          "end": 1203,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1206,
          "end": 1240,
          "callee": {
            "type": "MemberExpression",
            "start": 1206,
            "end": 1231,
            "object": {
              "type": "Identifier",
              "start": 1206,
              "end": 1216,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1217,
              "end": 1231,
              "name": "toLocaleString",
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
              "start": 1232,
              "end": 1239,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1248,
      "end": 1329,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1248,
        "end": 1328,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1248,
          "end": 1251,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1254,
          "end": 1328,
          "callee": {
            "type": "MemberExpression",
            "start": 1254,
            "end": 1279,
            "object": {
              "type": "Identifier",
              "start": 1254,
              "end": 1264,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1265,
              "end": 1279,
              "name": "toLocaleString",
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
              "start": 1280,
              "end": 1287,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1289,
              "end": 1327,
              "properties": [
                {
                  "type": "Property",
                  "start": 1291,
                  "end": 1308,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1291,
                    "end": 1296,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1298,
                    "end": 1308,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1310,
                  "end": 1325,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1310,
                    "end": 1318,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1320,
                    "end": 1325,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1337,
      "end": 1388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1343,
          "end": 1387,
          "id": {
            "type": "Identifier",
            "start": 1343,
            "end": 1360,
            "name": "uint8ClampedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1363,
            "end": 1387,
            "callee": {
              "type": "Identifier",
              "start": 1367,
              "end": 1384,
              "name": "Uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1385,
                "end": 1386,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1389,
      "end": 1430,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1389,
        "end": 1429,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1389,
          "end": 1392,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1395,
          "end": 1429,
          "callee": {
            "type": "MemberExpression",
            "start": 1395,
            "end": 1427,
            "object": {
              "type": "Identifier",
              "start": 1395,
              "end": 1412,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1413,
              "end": 1427,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1437,
      "end": 1485,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1437,
        "end": 1484,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1437,
          "end": 1440,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1443,
          "end": 1484,
          "callee": {
            "type": "MemberExpression",
            "start": 1443,
            "end": 1475,
            "object": {
              "type": "Identifier",
              "start": 1443,
              "end": 1460,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1461,
              "end": 1475,
              "name": "toLocaleString",
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
              "start": 1476,
              "end": 1483,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1492,
      "end": 1580,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1492,
        "end": 1579,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1492,
          "end": 1495,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1498,
          "end": 1579,
          "callee": {
            "type": "MemberExpression",
            "start": 1498,
            "end": 1530,
            "object": {
              "type": "Identifier",
              "start": 1498,
              "end": 1515,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1516,
              "end": 1530,
              "name": "toLocaleString",
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
              "start": 1531,
              "end": 1538,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1540,
              "end": 1578,
              "properties": [
                {
                  "type": "Property",
                  "start": 1542,
                  "end": 1559,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1542,
                    "end": 1547,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1549,
                    "end": 1559,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1561,
                  "end": 1576,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1561,
                    "end": 1569,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1571,
                    "end": 1576,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1588,
      "end": 1625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1594,
          "end": 1624,
          "id": {
            "type": "Identifier",
            "start": 1594,
            "end": 1604,
            "name": "int16Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1607,
            "end": 1624,
            "callee": {
              "type": "Identifier",
              "start": 1611,
              "end": 1621,
              "name": "Int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1622,
                "end": 1623,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1626,
      "end": 1660,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1626,
        "end": 1659,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1626,
          "end": 1629,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1632,
          "end": 1659,
          "callee": {
            "type": "MemberExpression",
            "start": 1632,
            "end": 1657,
            "object": {
              "type": "Identifier",
              "start": 1632,
              "end": 1642,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1643,
              "end": 1657,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1667,
      "end": 1708,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1667,
        "end": 1707,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1667,
          "end": 1670,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1673,
          "end": 1707,
          "callee": {
            "type": "MemberExpression",
            "start": 1673,
            "end": 1698,
            "object": {
              "type": "Identifier",
              "start": 1673,
              "end": 1683,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1684,
              "end": 1698,
              "name": "toLocaleString",
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
              "start": 1699,
              "end": 1706,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1715,
      "end": 1796,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1715,
        "end": 1795,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1715,
          "end": 1718,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1721,
          "end": 1795,
          "callee": {
            "type": "MemberExpression",
            "start": 1721,
            "end": 1746,
            "object": {
              "type": "Identifier",
              "start": 1721,
              "end": 1731,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1732,
              "end": 1746,
              "name": "toLocaleString",
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
              "start": 1747,
              "end": 1754,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1756,
              "end": 1794,
              "properties": [
                {
                  "type": "Property",
                  "start": 1758,
                  "end": 1775,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1758,
                    "end": 1763,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1765,
                    "end": 1775,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1777,
                  "end": 1792,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1777,
                    "end": 1785,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1787,
                    "end": 1792,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1804,
      "end": 1843,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1810,
          "end": 1842,
          "id": {
            "type": "Identifier",
            "start": 1810,
            "end": 1821,
            "name": "uint16Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1824,
            "end": 1842,
            "callee": {
              "type": "Identifier",
              "start": 1828,
              "end": 1839,
              "name": "Uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1840,
                "end": 1841,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1844,
      "end": 1879,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1844,
        "end": 1878,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1844,
          "end": 1847,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1850,
          "end": 1878,
          "callee": {
            "type": "MemberExpression",
            "start": 1850,
            "end": 1876,
            "object": {
              "type": "Identifier",
              "start": 1850,
              "end": 1861,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1862,
              "end": 1876,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1886,
      "end": 1928,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1886,
        "end": 1927,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1886,
          "end": 1889,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1892,
          "end": 1927,
          "callee": {
            "type": "MemberExpression",
            "start": 1892,
            "end": 1918,
            "object": {
              "type": "Identifier",
              "start": 1892,
              "end": 1903,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1904,
              "end": 1918,
              "name": "toLocaleString",
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
              "start": 1919,
              "end": 1926,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1935,
      "end": 2017,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1935,
        "end": 2016,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1935,
          "end": 1938,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1941,
          "end": 2016,
          "callee": {
            "type": "MemberExpression",
            "start": 1941,
            "end": 1967,
            "object": {
              "type": "Identifier",
              "start": 1941,
              "end": 1952,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1953,
              "end": 1967,
              "name": "toLocaleString",
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
              "start": 1968,
              "end": 1975,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1977,
              "end": 2015,
              "properties": [
                {
                  "type": "Property",
                  "start": 1979,
                  "end": 1996,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1979,
                    "end": 1984,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1986,
                    "end": 1996,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1998,
                  "end": 2013,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1998,
                    "end": 2006,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2008,
                    "end": 2013,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2025,
      "end": 2062,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2031,
          "end": 2061,
          "id": {
            "type": "Identifier",
            "start": 2031,
            "end": 2041,
            "name": "int32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2044,
            "end": 2061,
            "callee": {
              "type": "Identifier",
              "start": 2048,
              "end": 2058,
              "name": "Int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2059,
                "end": 2060,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2063,
      "end": 2097,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2063,
        "end": 2096,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2063,
          "end": 2066,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2069,
          "end": 2096,
          "callee": {
            "type": "MemberExpression",
            "start": 2069,
            "end": 2094,
            "object": {
              "type": "Identifier",
              "start": 2069,
              "end": 2079,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2080,
              "end": 2094,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2104,
      "end": 2145,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2104,
        "end": 2144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2104,
          "end": 2107,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2110,
          "end": 2144,
          "callee": {
            "type": "MemberExpression",
            "start": 2110,
            "end": 2135,
            "object": {
              "type": "Identifier",
              "start": 2110,
              "end": 2120,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2121,
              "end": 2135,
              "name": "toLocaleString",
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
              "start": 2136,
              "end": 2143,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2152,
      "end": 2233,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2152,
        "end": 2232,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2152,
          "end": 2155,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2158,
          "end": 2232,
          "callee": {
            "type": "MemberExpression",
            "start": 2158,
            "end": 2183,
            "object": {
              "type": "Identifier",
              "start": 2158,
              "end": 2168,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2169,
              "end": 2183,
              "name": "toLocaleString",
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
              "start": 2184,
              "end": 2191,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2193,
              "end": 2231,
              "properties": [
                {
                  "type": "Property",
                  "start": 2195,
                  "end": 2212,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2195,
                    "end": 2200,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2202,
                    "end": 2212,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2214,
                  "end": 2229,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2214,
                    "end": 2222,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2224,
                    "end": 2229,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2241,
      "end": 2280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2247,
          "end": 2279,
          "id": {
            "type": "Identifier",
            "start": 2247,
            "end": 2258,
            "name": "uint32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2261,
            "end": 2279,
            "callee": {
              "type": "Identifier",
              "start": 2265,
              "end": 2276,
              "name": "Uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2277,
                "end": 2278,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2281,
      "end": 2316,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2281,
        "end": 2315,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2281,
          "end": 2284,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2287,
          "end": 2315,
          "callee": {
            "type": "MemberExpression",
            "start": 2287,
            "end": 2313,
            "object": {
              "type": "Identifier",
              "start": 2287,
              "end": 2298,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2299,
              "end": 2313,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2323,
      "end": 2365,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2323,
        "end": 2364,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2323,
          "end": 2326,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2329,
          "end": 2364,
          "callee": {
            "type": "MemberExpression",
            "start": 2329,
            "end": 2355,
            "object": {
              "type": "Identifier",
              "start": 2329,
              "end": 2340,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2341,
              "end": 2355,
              "name": "toLocaleString",
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
              "start": 2356,
              "end": 2363,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2372,
      "end": 2454,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2372,
        "end": 2453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2372,
          "end": 2375,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2378,
          "end": 2453,
          "callee": {
            "type": "MemberExpression",
            "start": 2378,
            "end": 2404,
            "object": {
              "type": "Identifier",
              "start": 2378,
              "end": 2389,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2390,
              "end": 2404,
              "name": "toLocaleString",
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
              "start": 2405,
              "end": 2412,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2414,
              "end": 2452,
              "properties": [
                {
                  "type": "Property",
                  "start": 2416,
                  "end": 2433,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2416,
                    "end": 2421,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2423,
                    "end": 2433,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2435,
                  "end": 2450,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2435,
                    "end": 2443,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2445,
                    "end": 2450,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2462,
      "end": 2503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2468,
          "end": 2502,
          "id": {
            "type": "Identifier",
            "start": 2468,
            "end": 2480,
            "name": "float32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2483,
            "end": 2502,
            "callee": {
              "type": "Identifier",
              "start": 2487,
              "end": 2499,
              "name": "Float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2500,
                "end": 2501,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2504,
      "end": 2540,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2504,
        "end": 2539,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2504,
          "end": 2507,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2510,
          "end": 2539,
          "callee": {
            "type": "MemberExpression",
            "start": 2510,
            "end": 2537,
            "object": {
              "type": "Identifier",
              "start": 2510,
              "end": 2522,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2523,
              "end": 2537,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2547,
      "end": 2590,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2547,
        "end": 2589,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2547,
          "end": 2550,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2553,
          "end": 2589,
          "callee": {
            "type": "MemberExpression",
            "start": 2553,
            "end": 2580,
            "object": {
              "type": "Identifier",
              "start": 2553,
              "end": 2565,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2566,
              "end": 2580,
              "name": "toLocaleString",
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
              "start": 2581,
              "end": 2588,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2597,
      "end": 2680,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2597,
        "end": 2679,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2597,
          "end": 2600,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2603,
          "end": 2679,
          "callee": {
            "type": "MemberExpression",
            "start": 2603,
            "end": 2630,
            "object": {
              "type": "Identifier",
              "start": 2603,
              "end": 2615,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2616,
              "end": 2630,
              "name": "toLocaleString",
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
              "start": 2631,
              "end": 2638,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2640,
              "end": 2678,
              "properties": [
                {
                  "type": "Property",
                  "start": 2642,
                  "end": 2659,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2642,
                    "end": 2647,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2649,
                    "end": 2659,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2661,
                  "end": 2676,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2661,
                    "end": 2669,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2671,
                    "end": 2676,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2688,
      "end": 2729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2694,
          "end": 2728,
          "id": {
            "type": "Identifier",
            "start": 2694,
            "end": 2706,
            "name": "float64Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2709,
            "end": 2728,
            "callee": {
              "type": "Identifier",
              "start": 2713,
              "end": 2725,
              "name": "Float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2726,
                "end": 2727,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2730,
      "end": 2766,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2730,
        "end": 2765,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2730,
          "end": 2733,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2736,
          "end": 2765,
          "callee": {
            "type": "MemberExpression",
            "start": 2736,
            "end": 2763,
            "object": {
              "type": "Identifier",
              "start": 2736,
              "end": 2748,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2749,
              "end": 2763,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2773,
      "end": 2816,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2773,
        "end": 2815,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2773,
          "end": 2776,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2779,
          "end": 2815,
          "callee": {
            "type": "MemberExpression",
            "start": 2779,
            "end": 2806,
            "object": {
              "type": "Identifier",
              "start": 2779,
              "end": 2791,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2792,
              "end": 2806,
              "name": "toLocaleString",
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
              "start": 2807,
              "end": 2814,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2823,
      "end": 2906,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2823,
        "end": 2905,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2823,
          "end": 2826,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2829,
          "end": 2905,
          "callee": {
            "type": "MemberExpression",
            "start": 2829,
            "end": 2856,
            "object": {
              "type": "Identifier",
              "start": 2829,
              "end": 2841,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2842,
              "end": 2856,
              "name": "toLocaleString",
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
              "start": 2857,
              "end": 2864,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2866,
              "end": 2904,
              "properties": [
                {
                  "type": "Property",
                  "start": 2868,
                  "end": 2885,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2868,
                    "end": 2873,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2875,
                    "end": 2885,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2887,
                  "end": 2902,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2887,
                    "end": 2895,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2897,
                    "end": 2902,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2914,
      "end": 2957,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2920,
          "end": 2956,
          "id": {
            "type": "Identifier",
            "start": 2920,
            "end": 2933,
            "name": "bigInt64Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2936,
            "end": 2956,
            "callee": {
              "type": "Identifier",
              "start": 2940,
              "end": 2953,
              "name": "BigInt64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2954,
                "end": 2955,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2958,
      "end": 2995,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2958,
        "end": 2994,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2958,
          "end": 2961,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2964,
          "end": 2994,
          "callee": {
            "type": "MemberExpression",
            "start": 2964,
            "end": 2992,
            "object": {
              "type": "Identifier",
              "start": 2964,
              "end": 2977,
              "name": "bigInt64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2978,
              "end": 2992,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3002,
      "end": 3046,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3002,
        "end": 3045,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3002,
          "end": 3005,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3008,
          "end": 3045,
          "callee": {
            "type": "MemberExpression",
            "start": 3008,
            "end": 3036,
            "object": {
              "type": "Identifier",
              "start": 3008,
              "end": 3021,
              "name": "bigInt64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3022,
              "end": 3036,
              "name": "toLocaleString",
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
              "start": 3037,
              "end": 3044,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3053,
      "end": 3137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3053,
        "end": 3136,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3053,
          "end": 3056,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3059,
          "end": 3136,
          "callee": {
            "type": "MemberExpression",
            "start": 3059,
            "end": 3087,
            "object": {
              "type": "Identifier",
              "start": 3059,
              "end": 3072,
              "name": "bigInt64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3073,
              "end": 3087,
              "name": "toLocaleString",
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
              "start": 3088,
              "end": 3095,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 3097,
              "end": 3135,
              "properties": [
                {
                  "type": "Property",
                  "start": 3099,
                  "end": 3116,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3099,
                    "end": 3104,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3106,
                    "end": 3116,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3118,
                  "end": 3133,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3118,
                    "end": 3126,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3128,
                    "end": 3133,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3145,
      "end": 3193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3151,
          "end": 3192,
          "id": {
            "type": "Identifier",
            "start": 3151,
            "end": 3168,
            "name": "bigIntUint64Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3171,
            "end": 3192,
            "callee": {
              "type": "Identifier",
              "start": 3175,
              "end": 3189,
              "name": "BigUint64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3190,
                "end": 3191,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3194,
      "end": 3235,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3194,
        "end": 3234,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3194,
          "end": 3197,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3200,
          "end": 3234,
          "callee": {
            "type": "MemberExpression",
            "start": 3200,
            "end": 3232,
            "object": {
              "type": "Identifier",
              "start": 3200,
              "end": 3217,
              "name": "bigIntUint64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3218,
              "end": 3232,
              "name": "toLocaleString",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3242,
      "end": 3290,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3242,
        "end": 3289,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3242,
          "end": 3245,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3248,
          "end": 3289,
          "callee": {
            "type": "MemberExpression",
            "start": 3248,
            "end": 3280,
            "object": {
              "type": "Identifier",
              "start": 3248,
              "end": 3265,
              "name": "bigIntUint64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3266,
              "end": 3280,
              "name": "toLocaleString",
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
              "start": 3281,
              "end": 3288,
              "value": "en-US",
              "raw": "'en-US'"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3297,
      "end": 3385,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3297,
        "end": 3384,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3297,
          "end": 3300,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3303,
          "end": 3384,
          "callee": {
            "type": "MemberExpression",
            "start": 3303,
            "end": 3335,
            "object": {
              "type": "Identifier",
              "start": 3303,
              "end": 3320,
              "name": "bigIntUint64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3321,
              "end": 3335,
              "name": "toLocaleString",
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
              "start": 3336,
              "end": 3343,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 3345,
              "end": 3383,
              "properties": [
                {
                  "type": "Property",
                  "start": 3347,
                  "end": 3364,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3347,
                    "end": 3352,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3354,
                    "end": 3364,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3366,
                  "end": 3381,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3366,
                    "end": 3374,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3376,
                    "end": 3381,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
