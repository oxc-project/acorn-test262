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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 66,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 46,
          "end": 66,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 46,
            "end": 64,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 64,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 80,
          "end": 107,
          "arguments": [
            {
              "type": "Literal",
              "start": 99,
              "end": 106,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 80,
            "end": 98,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 98,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 189,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 188,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 121,
          "end": 188,
          "arguments": [
            {
              "type": "Literal",
              "start": 140,
              "end": 147,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 156,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 158,
                    "end": 168,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 170,
                  "end": 185,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 178,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 180,
                    "end": 185,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 121,
            "end": 139,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 125,
              "end": 139,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 225,
            "decorators": [],
            "name": "dates",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 223,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
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
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 237,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 241,
                "end": 251,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 249,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 283,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 254,
        "end": 282,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 254,
          "end": 257,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 260,
          "end": 282,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 260,
            "end": 280,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 260,
              "end": 265,
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 266,
              "end": 280,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 323,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 290,
        "end": 322,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 296,
          "end": 322,
          "arguments": [
            {
              "type": "Literal",
              "start": 317,
              "end": 321,
              "raw": "'fr'",
              "value": "fr"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 296,
            "end": 316,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 296,
              "end": 301,
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 302,
              "end": 316,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 384,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 383,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 333,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 336,
          "end": 383,
          "arguments": [
            {
              "type": "Literal",
              "start": 357,
              "end": 361,
              "raw": "'fr'",
              "value": "fr"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 373,
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 375,
                    "end": 380,
                    "raw": "'UTC'",
                    "value": "UTC"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 336,
            "end": 356,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 336,
              "end": 341,
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 342,
              "end": 356,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 403,
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "NewExpression",
                "start": 410,
                "end": 420,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 418,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 422,
                "end": 427,
                "raw": "59782",
                "value": 59782
              },
              {
                "type": "NewExpression",
                "start": 429,
                "end": 439,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 437,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 471,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 442,
        "end": 470,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 442,
          "end": 445,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 448,
          "end": 470,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 448,
            "end": 468,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 448,
              "end": 453,
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 454,
              "end": 468,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 511,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 510,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 478,
          "end": 481,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 484,
          "end": 510,
          "arguments": [
            {
              "type": "Literal",
              "start": 505,
              "end": 509,
              "raw": "'fr'",
              "value": "fr"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 484,
            "end": 504,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 484,
              "end": 489,
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 490,
              "end": 504,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 518,
      "end": 591,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 518,
        "end": 590,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 518,
          "end": 521,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 524,
          "end": 590,
          "arguments": [
            {
              "type": "Literal",
              "start": 545,
              "end": 549,
              "raw": "'de'",
              "value": "de"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 558,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 560,
                    "end": 570,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 572,
                  "end": 587,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 580,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 582,
                    "end": 587,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 524,
            "end": 544,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 524,
              "end": 529,
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 530,
              "end": 544,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 598,
      "end": 722,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 598,
        "end": 721,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 598,
          "end": 601,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 604,
          "end": 721,
          "arguments": [
            {
              "type": "Literal",
              "start": 659,
              "end": 663,
              "raw": "'de'",
              "value": "de"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 667,
                    "end": 675,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 677,
                    "end": 682,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                },
                {
                  "type": "Property",
                  "start": 684,
                  "end": 701,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 689,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 691,
                    "end": 701,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 703,
                  "end": 718,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 703,
                    "end": 711,
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 713,
                    "end": 718,
                    "raw": "'UTC'",
                    "value": "UTC"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 604,
            "end": 658,
            "computed": false,
            "object": {
              "type": "TSAsExpression",
              "start": 605,
              "end": 642,
              "expression": {
                "type": "Identifier",
                "start": 605,
                "end": 610,
                "decorators": [],
                "name": "mixed",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 614,
                "end": 642,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 637,
                            "end": 641,
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 627,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 644,
              "end": 658,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 736,
            "end": 745,
            "decorators": [],
            "name": "int8Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 748,
            "end": 764,
            "arguments": [
              {
                "type": "Literal",
                "start": 762,
                "end": 763,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 752,
              "end": 761,
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 766,
      "end": 799,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 766,
        "end": 798,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 766,
          "end": 769,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 772,
          "end": 798,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 772,
            "end": 796,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 772,
              "end": 781,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 782,
              "end": 796,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 806,
      "end": 846,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 806,
        "end": 845,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 806,
          "end": 809,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 812,
          "end": 845,
          "arguments": [
            {
              "type": "Literal",
              "start": 837,
              "end": 844,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 812,
            "end": 836,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 812,
              "end": 821,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 822,
              "end": 836,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 853,
      "end": 933,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 853,
        "end": 932,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 853,
          "end": 856,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 859,
          "end": 932,
          "arguments": [
            {
              "type": "Literal",
              "start": 884,
              "end": 891,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 900,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 902,
                    "end": 912,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 914,
                  "end": 929,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 914,
                    "end": 922,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 924,
                    "end": 929,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 859,
            "end": 883,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 859,
              "end": 868,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 869,
              "end": 883,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 947,
            "end": 957,
            "decorators": [],
            "name": "uint8Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 960,
            "end": 977,
            "arguments": [
              {
                "type": "Literal",
                "start": 975,
                "end": 976,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 964,
              "end": 974,
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 979,
      "end": 1013,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 979,
        "end": 1012,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 979,
          "end": 982,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 985,
          "end": 1012,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 985,
            "end": 1010,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 985,
              "end": 995,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 996,
              "end": 1010,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1020,
      "end": 1061,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1020,
        "end": 1060,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1020,
          "end": 1023,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1026,
          "end": 1060,
          "arguments": [
            {
              "type": "Literal",
              "start": 1052,
              "end": 1059,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1026,
            "end": 1051,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1026,
              "end": 1036,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1037,
              "end": 1051,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1068,
      "end": 1149,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1068,
        "end": 1148,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1068,
          "end": 1071,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1074,
          "end": 1148,
          "arguments": [
            {
              "type": "Literal",
              "start": 1100,
              "end": 1107,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1116,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1118,
                    "end": 1128,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1130,
                  "end": 1145,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1130,
                    "end": 1138,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1140,
                    "end": 1145,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1074,
            "end": 1099,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1074,
              "end": 1084,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1085,
              "end": 1099,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1180,
            "decorators": [],
            "name": "uint8ClampedArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1183,
            "end": 1207,
            "arguments": [
              {
                "type": "Literal",
                "start": 1205,
                "end": 1206,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1187,
              "end": 1204,
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1250,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1209,
        "end": 1249,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1209,
          "end": 1212,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1215,
          "end": 1249,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1215,
            "end": 1247,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1215,
              "end": 1232,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1233,
              "end": 1247,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1257,
      "end": 1305,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1257,
        "end": 1304,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1257,
          "end": 1260,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1263,
          "end": 1304,
          "arguments": [
            {
              "type": "Literal",
              "start": 1296,
              "end": 1303,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1263,
            "end": 1295,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1263,
              "end": 1280,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1281,
              "end": 1295,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1312,
      "end": 1400,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1312,
        "end": 1399,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1312,
          "end": 1315,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1318,
          "end": 1399,
          "arguments": [
            {
              "type": "Literal",
              "start": 1351,
              "end": 1358,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1362,
                    "end": 1367,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1369,
                    "end": 1379,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1381,
                  "end": 1396,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1381,
                    "end": 1389,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1391,
                    "end": 1396,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1318,
            "end": 1350,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1318,
              "end": 1335,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1336,
              "end": 1350,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1414,
            "end": 1424,
            "decorators": [],
            "name": "int16Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1427,
            "end": 1444,
            "arguments": [
              {
                "type": "Literal",
                "start": 1442,
                "end": 1443,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1431,
              "end": 1441,
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1446,
      "end": 1480,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1446,
        "end": 1479,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1446,
          "end": 1449,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1452,
          "end": 1479,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1452,
            "end": 1477,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1452,
              "end": 1462,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1463,
              "end": 1477,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1487,
      "end": 1528,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1487,
        "end": 1527,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1487,
          "end": 1490,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1493,
          "end": 1527,
          "arguments": [
            {
              "type": "Literal",
              "start": 1519,
              "end": 1526,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1493,
            "end": 1518,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1493,
              "end": 1503,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1504,
              "end": 1518,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1535,
      "end": 1616,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1535,
        "end": 1615,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1535,
          "end": 1538,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1541,
          "end": 1615,
          "arguments": [
            {
              "type": "Literal",
              "start": 1567,
              "end": 1574,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1578,
                    "end": 1583,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1585,
                    "end": 1595,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1597,
                  "end": 1612,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1597,
                    "end": 1605,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1607,
                    "end": 1612,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1541,
            "end": 1566,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1541,
              "end": 1551,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1552,
              "end": 1566,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1630,
            "end": 1641,
            "decorators": [],
            "name": "uint16Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1644,
            "end": 1662,
            "arguments": [
              {
                "type": "Literal",
                "start": 1660,
                "end": 1661,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1648,
              "end": 1659,
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1664,
      "end": 1699,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1664,
        "end": 1698,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1664,
          "end": 1667,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1670,
          "end": 1698,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1670,
            "end": 1696,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1670,
              "end": 1681,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1682,
              "end": 1696,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1706,
      "end": 1748,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1706,
        "end": 1747,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1706,
          "end": 1709,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1712,
          "end": 1747,
          "arguments": [
            {
              "type": "Literal",
              "start": 1739,
              "end": 1746,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1712,
            "end": 1738,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1712,
              "end": 1723,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1724,
              "end": 1738,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1755,
      "end": 1837,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1755,
        "end": 1836,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1755,
          "end": 1758,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1761,
          "end": 1836,
          "arguments": [
            {
              "type": "Literal",
              "start": 1788,
              "end": 1795,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1799,
                    "end": 1804,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1806,
                    "end": 1816,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1818,
                  "end": 1833,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1818,
                    "end": 1826,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1828,
                    "end": 1833,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1761,
            "end": 1787,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1761,
              "end": 1772,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1773,
              "end": 1787,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1851,
            "end": 1861,
            "decorators": [],
            "name": "int32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1864,
            "end": 1881,
            "arguments": [
              {
                "type": "Literal",
                "start": 1879,
                "end": 1880,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1868,
              "end": 1878,
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1883,
      "end": 1917,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1883,
        "end": 1916,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1883,
          "end": 1886,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1889,
          "end": 1916,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1889,
            "end": 1914,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1889,
              "end": 1899,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1900,
              "end": 1914,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1924,
      "end": 1965,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1924,
        "end": 1964,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1924,
          "end": 1927,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1930,
          "end": 1964,
          "arguments": [
            {
              "type": "Literal",
              "start": 1956,
              "end": 1963,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1930,
            "end": 1955,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1930,
              "end": 1940,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1941,
              "end": 1955,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1972,
      "end": 2053,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1972,
        "end": 2052,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1972,
          "end": 1975,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1978,
          "end": 2052,
          "arguments": [
            {
              "type": "Literal",
              "start": 2004,
              "end": 2011,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2015,
                    "end": 2020,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2022,
                    "end": 2032,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2034,
                  "end": 2049,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2034,
                    "end": 2042,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2044,
                    "end": 2049,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1978,
            "end": 2003,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1978,
              "end": 1988,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1989,
              "end": 2003,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2067,
            "end": 2078,
            "decorators": [],
            "name": "uint32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2081,
            "end": 2099,
            "arguments": [
              {
                "type": "Literal",
                "start": 2097,
                "end": 2098,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2085,
              "end": 2096,
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2101,
      "end": 2136,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2101,
        "end": 2135,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2101,
          "end": 2104,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2107,
          "end": 2135,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2107,
            "end": 2133,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2107,
              "end": 2118,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2119,
              "end": 2133,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2143,
      "end": 2185,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2143,
        "end": 2184,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2143,
          "end": 2146,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2149,
          "end": 2184,
          "arguments": [
            {
              "type": "Literal",
              "start": 2176,
              "end": 2183,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2149,
            "end": 2175,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2149,
              "end": 2160,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2161,
              "end": 2175,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2192,
      "end": 2274,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2192,
        "end": 2273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2192,
          "end": 2195,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2198,
          "end": 2273,
          "arguments": [
            {
              "type": "Literal",
              "start": 2225,
              "end": 2232,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2236,
                    "end": 2241,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2243,
                    "end": 2253,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2255,
                  "end": 2270,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2255,
                    "end": 2263,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2265,
                    "end": 2270,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2198,
            "end": 2224,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2198,
              "end": 2209,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2210,
              "end": 2224,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2288,
            "end": 2300,
            "decorators": [],
            "name": "float32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2303,
            "end": 2322,
            "arguments": [
              {
                "type": "Literal",
                "start": 2320,
                "end": 2321,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2307,
              "end": 2319,
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2324,
      "end": 2360,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2324,
        "end": 2359,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2324,
          "end": 2327,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2330,
          "end": 2359,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2330,
            "end": 2357,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2330,
              "end": 2342,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2343,
              "end": 2357,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2367,
      "end": 2410,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2367,
        "end": 2409,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2367,
          "end": 2370,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2373,
          "end": 2409,
          "arguments": [
            {
              "type": "Literal",
              "start": 2401,
              "end": 2408,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2373,
            "end": 2400,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2373,
              "end": 2385,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2386,
              "end": 2400,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2417,
      "end": 2500,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2417,
        "end": 2499,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2417,
          "end": 2420,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2423,
          "end": 2499,
          "arguments": [
            {
              "type": "Literal",
              "start": 2451,
              "end": 2458,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2462,
                    "end": 2467,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2469,
                    "end": 2479,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2481,
                  "end": 2496,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2481,
                    "end": 2489,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2491,
                    "end": 2496,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2423,
            "end": 2450,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2423,
              "end": 2435,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2436,
              "end": 2450,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2514,
            "end": 2526,
            "decorators": [],
            "name": "float64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2529,
            "end": 2548,
            "arguments": [
              {
                "type": "Literal",
                "start": 2546,
                "end": 2547,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2533,
              "end": 2545,
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2550,
      "end": 2586,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2550,
        "end": 2585,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2550,
          "end": 2553,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2556,
          "end": 2585,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2556,
            "end": 2583,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2556,
              "end": 2568,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2569,
              "end": 2583,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2593,
      "end": 2636,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2593,
        "end": 2635,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2593,
          "end": 2596,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2599,
          "end": 2635,
          "arguments": [
            {
              "type": "Literal",
              "start": 2627,
              "end": 2634,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2599,
            "end": 2626,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2599,
              "end": 2611,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2612,
              "end": 2626,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2643,
      "end": 2726,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2643,
        "end": 2725,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2643,
          "end": 2646,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2649,
          "end": 2725,
          "arguments": [
            {
              "type": "Literal",
              "start": 2677,
              "end": 2684,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2688,
                    "end": 2693,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2695,
                    "end": 2705,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2707,
                  "end": 2722,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2707,
                    "end": 2715,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 2717,
                    "end": 2722,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2649,
            "end": 2676,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2649,
              "end": 2661,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2662,
              "end": 2676,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
