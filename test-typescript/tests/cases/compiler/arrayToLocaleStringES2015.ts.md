__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2733,
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
      "end": 511,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 510,
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
          "end": 510,
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
      "start": 518,
      "end": 591,
      "expression": {
        "type": "AssignmentExpression",
        "start": 518,
        "end": 590,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 518,
          "end": 521,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 524,
          "end": 590,
          "callee": {
            "type": "MemberExpression",
            "start": 524,
            "end": 544,
            "object": {
              "type": "Identifier",
              "start": 524,
              "end": 529,
              "name": "mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 530,
              "end": 544,
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
              "start": 545,
              "end": 549,
              "value": "de",
              "raw": "'de'"
            },
            {
              "type": "ObjectExpression",
              "start": 551,
              "end": 589,
              "properties": [
                {
                  "type": "Property",
                  "start": 553,
                  "end": 570,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 558,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 560,
                    "end": 570,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 572,
                  "end": 587,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 580,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 582,
                    "end": 587,
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
      "start": 598,
      "end": 722,
      "expression": {
        "type": "AssignmentExpression",
        "start": 598,
        "end": 721,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 598,
          "end": 601,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 604,
          "end": 721,
          "callee": {
            "type": "MemberExpression",
            "start": 604,
            "end": 658,
            "object": {
              "type": "TSAsExpression",
              "start": 605,
              "end": 642,
              "expression": {
                "type": "Identifier",
                "start": 605,
                "end": 610,
                "name": "mixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 614,
                "end": 642,
                "typeName": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 627,
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 627,
                  "end": 642,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 628,
                      "end": 641,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 628,
                          "end": 634
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 637,
                          "end": 641,
                          "typeName": {
                            "type": "Identifier",
                            "start": 637,
                            "end": 641,
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
              "start": 644,
              "end": 658,
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
              "start": 659,
              "end": 663,
              "value": "de",
              "raw": "'de'"
            },
            {
              "type": "ObjectExpression",
              "start": 665,
              "end": 720,
              "properties": [
                {
                  "type": "Property",
                  "start": 667,
                  "end": 682,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 667,
                    "end": 675,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 677,
                    "end": 682,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 684,
                  "end": 701,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 689,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 691,
                    "end": 701,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 703,
                  "end": 718,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 703,
                    "end": 711,
                    "name": "timeZone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 713,
                    "end": 718,
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
      "start": 730,
      "end": 765,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 736,
          "end": 764,
          "id": {
            "type": "Identifier",
            "start": 736,
            "end": 745,
            "name": "int8Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 748,
            "end": 764,
            "callee": {
              "type": "Identifier",
              "start": 752,
              "end": 761,
              "name": "Int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 762,
                "end": 763,
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
      "start": 766,
      "end": 799,
      "expression": {
        "type": "AssignmentExpression",
        "start": 766,
        "end": 798,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 766,
          "end": 769,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 772,
          "end": 798,
          "callee": {
            "type": "MemberExpression",
            "start": 772,
            "end": 796,
            "object": {
              "type": "Identifier",
              "start": 772,
              "end": 781,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 782,
              "end": 796,
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
      "start": 806,
      "end": 846,
      "expression": {
        "type": "AssignmentExpression",
        "start": 806,
        "end": 845,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 806,
          "end": 809,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 812,
          "end": 845,
          "callee": {
            "type": "MemberExpression",
            "start": 812,
            "end": 836,
            "object": {
              "type": "Identifier",
              "start": 812,
              "end": 821,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 822,
              "end": 836,
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
              "start": 837,
              "end": 844,
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
      "start": 853,
      "end": 933,
      "expression": {
        "type": "AssignmentExpression",
        "start": 853,
        "end": 932,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 853,
          "end": 856,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 859,
          "end": 932,
          "callee": {
            "type": "MemberExpression",
            "start": 859,
            "end": 883,
            "object": {
              "type": "Identifier",
              "start": 859,
              "end": 868,
              "name": "int8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 869,
              "end": 883,
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
              "start": 884,
              "end": 891,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 893,
              "end": 931,
              "properties": [
                {
                  "type": "Property",
                  "start": 895,
                  "end": 912,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 900,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 902,
                    "end": 912,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 914,
                  "end": 929,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 914,
                    "end": 922,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 924,
                    "end": 929,
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
      "start": 941,
      "end": 978,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 947,
          "end": 977,
          "id": {
            "type": "Identifier",
            "start": 947,
            "end": 957,
            "name": "uint8Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 960,
            "end": 977,
            "callee": {
              "type": "Identifier",
              "start": 964,
              "end": 974,
              "name": "Uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 975,
                "end": 976,
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
      "start": 979,
      "end": 1013,
      "expression": {
        "type": "AssignmentExpression",
        "start": 979,
        "end": 1012,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 979,
          "end": 982,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 985,
          "end": 1012,
          "callee": {
            "type": "MemberExpression",
            "start": 985,
            "end": 1010,
            "object": {
              "type": "Identifier",
              "start": 985,
              "end": 995,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 996,
              "end": 1010,
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
      "start": 1020,
      "end": 1061,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1020,
        "end": 1060,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1020,
          "end": 1023,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1026,
          "end": 1060,
          "callee": {
            "type": "MemberExpression",
            "start": 1026,
            "end": 1051,
            "object": {
              "type": "Identifier",
              "start": 1026,
              "end": 1036,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1037,
              "end": 1051,
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
              "start": 1052,
              "end": 1059,
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
      "start": 1068,
      "end": 1149,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1068,
        "end": 1148,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1068,
          "end": 1071,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1074,
          "end": 1148,
          "callee": {
            "type": "MemberExpression",
            "start": 1074,
            "end": 1099,
            "object": {
              "type": "Identifier",
              "start": 1074,
              "end": 1084,
              "name": "uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1085,
              "end": 1099,
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
              "start": 1100,
              "end": 1107,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1109,
              "end": 1147,
              "properties": [
                {
                  "type": "Property",
                  "start": 1111,
                  "end": 1128,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1116,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1118,
                    "end": 1128,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1130,
                  "end": 1145,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1130,
                    "end": 1138,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1140,
                    "end": 1145,
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
      "start": 1157,
      "end": 1208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1163,
          "end": 1207,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1180,
            "name": "uint8ClampedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1183,
            "end": 1207,
            "callee": {
              "type": "Identifier",
              "start": 1187,
              "end": 1204,
              "name": "Uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1205,
                "end": 1206,
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
      "start": 1209,
      "end": 1250,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1209,
        "end": 1249,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1209,
          "end": 1212,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1215,
          "end": 1249,
          "callee": {
            "type": "MemberExpression",
            "start": 1215,
            "end": 1247,
            "object": {
              "type": "Identifier",
              "start": 1215,
              "end": 1232,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1233,
              "end": 1247,
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
      "start": 1257,
      "end": 1305,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1257,
        "end": 1304,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1257,
          "end": 1260,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1263,
          "end": 1304,
          "callee": {
            "type": "MemberExpression",
            "start": 1263,
            "end": 1295,
            "object": {
              "type": "Identifier",
              "start": 1263,
              "end": 1280,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1281,
              "end": 1295,
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
              "start": 1296,
              "end": 1303,
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
      "start": 1312,
      "end": 1400,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1312,
        "end": 1399,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1312,
          "end": 1315,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1318,
          "end": 1399,
          "callee": {
            "type": "MemberExpression",
            "start": 1318,
            "end": 1350,
            "object": {
              "type": "Identifier",
              "start": 1318,
              "end": 1335,
              "name": "uint8ClampedArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1336,
              "end": 1350,
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
              "start": 1351,
              "end": 1358,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1360,
              "end": 1398,
              "properties": [
                {
                  "type": "Property",
                  "start": 1362,
                  "end": 1379,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1362,
                    "end": 1367,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1369,
                    "end": 1379,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1381,
                  "end": 1396,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1381,
                    "end": 1389,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1391,
                    "end": 1396,
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
      "start": 1408,
      "end": 1445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1414,
          "end": 1444,
          "id": {
            "type": "Identifier",
            "start": 1414,
            "end": 1424,
            "name": "int16Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1427,
            "end": 1444,
            "callee": {
              "type": "Identifier",
              "start": 1431,
              "end": 1441,
              "name": "Int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1442,
                "end": 1443,
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
      "start": 1446,
      "end": 1480,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1446,
        "end": 1479,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1446,
          "end": 1449,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1452,
          "end": 1479,
          "callee": {
            "type": "MemberExpression",
            "start": 1452,
            "end": 1477,
            "object": {
              "type": "Identifier",
              "start": 1452,
              "end": 1462,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1463,
              "end": 1477,
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
      "start": 1487,
      "end": 1528,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1487,
        "end": 1527,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1487,
          "end": 1490,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1493,
          "end": 1527,
          "callee": {
            "type": "MemberExpression",
            "start": 1493,
            "end": 1518,
            "object": {
              "type": "Identifier",
              "start": 1493,
              "end": 1503,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1504,
              "end": 1518,
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
              "start": 1519,
              "end": 1526,
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
      "start": 1535,
      "end": 1616,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1535,
        "end": 1615,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1535,
          "end": 1538,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1541,
          "end": 1615,
          "callee": {
            "type": "MemberExpression",
            "start": 1541,
            "end": 1566,
            "object": {
              "type": "Identifier",
              "start": 1541,
              "end": 1551,
              "name": "int16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1552,
              "end": 1566,
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
              "start": 1567,
              "end": 1574,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1576,
              "end": 1614,
              "properties": [
                {
                  "type": "Property",
                  "start": 1578,
                  "end": 1595,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1578,
                    "end": 1583,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1585,
                    "end": 1595,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1597,
                  "end": 1612,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1597,
                    "end": 1605,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1607,
                    "end": 1612,
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
      "start": 1624,
      "end": 1663,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1630,
          "end": 1662,
          "id": {
            "type": "Identifier",
            "start": 1630,
            "end": 1641,
            "name": "uint16Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1644,
            "end": 1662,
            "callee": {
              "type": "Identifier",
              "start": 1648,
              "end": 1659,
              "name": "Uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1660,
                "end": 1661,
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
      "start": 1664,
      "end": 1699,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1664,
        "end": 1698,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1664,
          "end": 1667,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1670,
          "end": 1698,
          "callee": {
            "type": "MemberExpression",
            "start": 1670,
            "end": 1696,
            "object": {
              "type": "Identifier",
              "start": 1670,
              "end": 1681,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1682,
              "end": 1696,
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
      "start": 1706,
      "end": 1748,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1706,
        "end": 1747,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1706,
          "end": 1709,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1712,
          "end": 1747,
          "callee": {
            "type": "MemberExpression",
            "start": 1712,
            "end": 1738,
            "object": {
              "type": "Identifier",
              "start": 1712,
              "end": 1723,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1724,
              "end": 1738,
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
              "start": 1739,
              "end": 1746,
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
      "start": 1755,
      "end": 1837,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1755,
        "end": 1836,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1755,
          "end": 1758,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1761,
          "end": 1836,
          "callee": {
            "type": "MemberExpression",
            "start": 1761,
            "end": 1787,
            "object": {
              "type": "Identifier",
              "start": 1761,
              "end": 1772,
              "name": "uint16Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1773,
              "end": 1787,
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
              "start": 1788,
              "end": 1795,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 1797,
              "end": 1835,
              "properties": [
                {
                  "type": "Property",
                  "start": 1799,
                  "end": 1816,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1799,
                    "end": 1804,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1806,
                    "end": 1816,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1818,
                  "end": 1833,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1818,
                    "end": 1826,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1828,
                    "end": 1833,
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
      "start": 1845,
      "end": 1882,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1851,
          "end": 1881,
          "id": {
            "type": "Identifier",
            "start": 1851,
            "end": 1861,
            "name": "int32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1864,
            "end": 1881,
            "callee": {
              "type": "Identifier",
              "start": 1868,
              "end": 1878,
              "name": "Int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1879,
                "end": 1880,
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
      "start": 1883,
      "end": 1917,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1883,
        "end": 1916,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1883,
          "end": 1886,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1889,
          "end": 1916,
          "callee": {
            "type": "MemberExpression",
            "start": 1889,
            "end": 1914,
            "object": {
              "type": "Identifier",
              "start": 1889,
              "end": 1899,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1900,
              "end": 1914,
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
      "start": 1924,
      "end": 1965,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1924,
        "end": 1964,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1924,
          "end": 1927,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1930,
          "end": 1964,
          "callee": {
            "type": "MemberExpression",
            "start": 1930,
            "end": 1955,
            "object": {
              "type": "Identifier",
              "start": 1930,
              "end": 1940,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1941,
              "end": 1955,
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
              "start": 1956,
              "end": 1963,
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
      "start": 1972,
      "end": 2053,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1972,
        "end": 2052,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1972,
          "end": 1975,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1978,
          "end": 2052,
          "callee": {
            "type": "MemberExpression",
            "start": 1978,
            "end": 2003,
            "object": {
              "type": "Identifier",
              "start": 1978,
              "end": 1988,
              "name": "int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1989,
              "end": 2003,
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
              "start": 2004,
              "end": 2011,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2013,
              "end": 2051,
              "properties": [
                {
                  "type": "Property",
                  "start": 2015,
                  "end": 2032,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2015,
                    "end": 2020,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2022,
                    "end": 2032,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2034,
                  "end": 2049,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2034,
                    "end": 2042,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2044,
                    "end": 2049,
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
      "start": 2061,
      "end": 2100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2067,
          "end": 2099,
          "id": {
            "type": "Identifier",
            "start": 2067,
            "end": 2078,
            "name": "uint32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2081,
            "end": 2099,
            "callee": {
              "type": "Identifier",
              "start": 2085,
              "end": 2096,
              "name": "Uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2097,
                "end": 2098,
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
      "start": 2101,
      "end": 2136,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2101,
        "end": 2135,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2101,
          "end": 2104,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2107,
          "end": 2135,
          "callee": {
            "type": "MemberExpression",
            "start": 2107,
            "end": 2133,
            "object": {
              "type": "Identifier",
              "start": 2107,
              "end": 2118,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2119,
              "end": 2133,
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
      "start": 2143,
      "end": 2185,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2143,
        "end": 2184,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2143,
          "end": 2146,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2149,
          "end": 2184,
          "callee": {
            "type": "MemberExpression",
            "start": 2149,
            "end": 2175,
            "object": {
              "type": "Identifier",
              "start": 2149,
              "end": 2160,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2161,
              "end": 2175,
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
              "start": 2176,
              "end": 2183,
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
      "start": 2192,
      "end": 2274,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2192,
        "end": 2273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2192,
          "end": 2195,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2198,
          "end": 2273,
          "callee": {
            "type": "MemberExpression",
            "start": 2198,
            "end": 2224,
            "object": {
              "type": "Identifier",
              "start": 2198,
              "end": 2209,
              "name": "uint32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2210,
              "end": 2224,
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
              "start": 2225,
              "end": 2232,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2234,
              "end": 2272,
              "properties": [
                {
                  "type": "Property",
                  "start": 2236,
                  "end": 2253,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2236,
                    "end": 2241,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2243,
                    "end": 2253,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2255,
                  "end": 2270,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2255,
                    "end": 2263,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2265,
                    "end": 2270,
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
      "start": 2282,
      "end": 2323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2288,
          "end": 2322,
          "id": {
            "type": "Identifier",
            "start": 2288,
            "end": 2300,
            "name": "float32Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2303,
            "end": 2322,
            "callee": {
              "type": "Identifier",
              "start": 2307,
              "end": 2319,
              "name": "Float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2320,
                "end": 2321,
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
      "start": 2324,
      "end": 2360,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2324,
        "end": 2359,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2324,
          "end": 2327,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2330,
          "end": 2359,
          "callee": {
            "type": "MemberExpression",
            "start": 2330,
            "end": 2357,
            "object": {
              "type": "Identifier",
              "start": 2330,
              "end": 2342,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2343,
              "end": 2357,
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
      "start": 2367,
      "end": 2410,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2367,
        "end": 2409,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2367,
          "end": 2370,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2373,
          "end": 2409,
          "callee": {
            "type": "MemberExpression",
            "start": 2373,
            "end": 2400,
            "object": {
              "type": "Identifier",
              "start": 2373,
              "end": 2385,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2386,
              "end": 2400,
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
              "start": 2401,
              "end": 2408,
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
      "start": 2417,
      "end": 2500,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2417,
        "end": 2499,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2417,
          "end": 2420,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2423,
          "end": 2499,
          "callee": {
            "type": "MemberExpression",
            "start": 2423,
            "end": 2450,
            "object": {
              "type": "Identifier",
              "start": 2423,
              "end": 2435,
              "name": "float32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2436,
              "end": 2450,
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
              "start": 2451,
              "end": 2458,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2460,
              "end": 2498,
              "properties": [
                {
                  "type": "Property",
                  "start": 2462,
                  "end": 2479,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2462,
                    "end": 2467,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2469,
                    "end": 2479,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2481,
                  "end": 2496,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2481,
                    "end": 2489,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2491,
                    "end": 2496,
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
      "start": 2508,
      "end": 2549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2514,
          "end": 2548,
          "id": {
            "type": "Identifier",
            "start": 2514,
            "end": 2526,
            "name": "float64Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2529,
            "end": 2548,
            "callee": {
              "type": "Identifier",
              "start": 2533,
              "end": 2545,
              "name": "Float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2546,
                "end": 2547,
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
      "start": 2550,
      "end": 2586,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2550,
        "end": 2585,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2550,
          "end": 2553,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2556,
          "end": 2585,
          "callee": {
            "type": "MemberExpression",
            "start": 2556,
            "end": 2583,
            "object": {
              "type": "Identifier",
              "start": 2556,
              "end": 2568,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2569,
              "end": 2583,
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
      "start": 2593,
      "end": 2636,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2593,
        "end": 2635,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2593,
          "end": 2596,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2599,
          "end": 2635,
          "callee": {
            "type": "MemberExpression",
            "start": 2599,
            "end": 2626,
            "object": {
              "type": "Identifier",
              "start": 2599,
              "end": 2611,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2612,
              "end": 2626,
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
              "start": 2627,
              "end": 2634,
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
      "start": 2643,
      "end": 2726,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2643,
        "end": 2725,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2643,
          "end": 2646,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 2649,
          "end": 2725,
          "callee": {
            "type": "MemberExpression",
            "start": 2649,
            "end": 2676,
            "object": {
              "type": "Identifier",
              "start": 2649,
              "end": 2661,
              "name": "float64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2662,
              "end": 2676,
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
              "start": 2677,
              "end": 2684,
              "value": "en-US",
              "raw": "'en-US'"
            },
            {
              "type": "ObjectExpression",
              "start": 2686,
              "end": 2724,
              "properties": [
                {
                  "type": "Property",
                  "start": 2688,
                  "end": 2705,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2688,
                    "end": 2693,
                    "name": "style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2695,
                    "end": 2705,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2707,
                  "end": 2722,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2707,
                    "end": 2715,
                    "name": "currency",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2717,
                    "end": 2722,
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
