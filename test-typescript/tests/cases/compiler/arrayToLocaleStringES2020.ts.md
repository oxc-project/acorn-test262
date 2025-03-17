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
      "end": 551,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 550,
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
          "end": 550,
          "arguments": [
            {
              "type": "Literal",
              "start": 505,
              "end": 509,
              "raw": "'de'",
              "value": "de"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 518,
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
                    "start": 520,
                    "end": 530,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 532,
                  "end": 547,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 532,
                    "end": 540,
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
                    "start": 542,
                    "end": 547,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
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
      "start": 558,
      "end": 682,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 681,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 558,
          "end": 561,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 564,
          "end": 681,
          "arguments": [
            {
              "type": "Literal",
              "start": 619,
              "end": 623,
              "raw": "'de'",
              "value": "de"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 635,
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
                    "start": 637,
                    "end": 642,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                },
                {
                  "type": "Property",
                  "start": 644,
                  "end": 661,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 649,
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
                    "start": 651,
                    "end": 661,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 663,
                  "end": 678,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 671,
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
                    "start": 673,
                    "end": 678,
                    "raw": "'UTC'",
                    "value": "UTC"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 564,
            "end": 618,
            "computed": false,
            "object": {
              "type": "TSAsExpression",
              "start": 565,
              "end": 602,
              "expression": {
                "type": "Identifier",
                "start": 565,
                "end": 570,
                "decorators": [],
                "name": "mixed",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 574,
                "end": 602,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 597,
                            "end": 601,
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
                  "start": 574,
                  "end": 587,
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
              "start": 604,
              "end": 618,
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
      "start": 690,
      "end": 740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 739,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 703,
            "decorators": [],
            "name": "bigInts",
            "optional": false,
            "typeAnnotation": null
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
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 714,
                    "end": 715,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 713,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 718,
                "end": 727,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 725,
                    "end": 726,
                    "raw": "2",
                    "value": 2
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 724,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 729,
                "end": 738,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 736,
                    "end": 737,
                    "raw": "3",
                    "value": 3
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 735,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
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
      "start": 741,
      "end": 772,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 741,
        "end": 771,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 741,
          "end": 744,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 747,
          "end": 771,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 747,
            "end": 769,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 747,
              "end": 754,
              "decorators": [],
              "name": "bigInts",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 755,
              "end": 769,
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
      "start": 779,
      "end": 817,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 779,
        "end": 816,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 779,
          "end": 782,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 785,
          "end": 816,
          "arguments": [
            {
              "type": "Literal",
              "start": 808,
              "end": 815,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 785,
            "end": 807,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 785,
              "end": 792,
              "decorators": [],
              "name": "bigInts",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 793,
              "end": 807,
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
      "start": 824,
      "end": 902,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 824,
        "end": 901,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 824,
          "end": 827,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 830,
          "end": 901,
          "arguments": [
            {
              "type": "Literal",
              "start": 853,
              "end": 860,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 869,
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
                    "start": 871,
                    "end": 881,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 883,
                  "end": 898,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 891,
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
                    "start": 893,
                    "end": 898,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 830,
            "end": 852,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 830,
              "end": 837,
              "decorators": [],
              "name": "bigInts",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 838,
              "end": 852,
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
      "start": 910,
      "end": 945,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 916,
          "end": 944,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 916,
            "end": 925,
            "decorators": [],
            "name": "int8Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 928,
            "end": 944,
            "arguments": [
              {
                "type": "Literal",
                "start": 942,
                "end": 943,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 932,
              "end": 941,
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
      "start": 946,
      "end": 979,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 946,
        "end": 978,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 946,
          "end": 949,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 952,
          "end": 978,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 952,
            "end": 976,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 952,
              "end": 961,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 962,
              "end": 976,
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
      "start": 986,
      "end": 1026,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 986,
        "end": 1025,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 986,
          "end": 989,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 992,
          "end": 1025,
          "arguments": [
            {
              "type": "Literal",
              "start": 1017,
              "end": 1024,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 992,
            "end": 1016,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 992,
              "end": 1001,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1002,
              "end": 1016,
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
      "start": 1033,
      "end": 1113,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1033,
        "end": 1112,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1033,
          "end": 1036,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1039,
          "end": 1112,
          "arguments": [
            {
              "type": "Literal",
              "start": 1064,
              "end": 1071,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1075,
                    "end": 1080,
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
                    "start": 1082,
                    "end": 1092,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1094,
                  "end": 1109,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1094,
                    "end": 1102,
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
                    "start": 1104,
                    "end": 1109,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1039,
            "end": 1063,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1039,
              "end": 1048,
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1049,
              "end": 1063,
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
      "start": 1121,
      "end": 1158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1127,
          "end": 1157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1127,
            "end": 1137,
            "decorators": [],
            "name": "uint8Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1140,
            "end": 1157,
            "arguments": [
              {
                "type": "Literal",
                "start": 1155,
                "end": 1156,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1144,
              "end": 1154,
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
      "start": 1159,
      "end": 1193,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1159,
        "end": 1192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1159,
          "end": 1162,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1165,
          "end": 1192,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1165,
            "end": 1190,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1165,
              "end": 1175,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1176,
              "end": 1190,
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
      "start": 1200,
      "end": 1241,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1200,
        "end": 1240,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1200,
          "end": 1203,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1206,
          "end": 1240,
          "arguments": [
            {
              "type": "Literal",
              "start": 1232,
              "end": 1239,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1206,
            "end": 1231,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1206,
              "end": 1216,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1217,
              "end": 1231,
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
      "start": 1248,
      "end": 1329,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1248,
        "end": 1328,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1248,
          "end": 1251,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1254,
          "end": 1328,
          "arguments": [
            {
              "type": "Literal",
              "start": 1280,
              "end": 1287,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1291,
                    "end": 1296,
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
                    "start": 1298,
                    "end": 1308,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1310,
                  "end": 1325,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1310,
                    "end": 1318,
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
                    "start": 1320,
                    "end": 1325,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1254,
            "end": 1279,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1254,
              "end": 1264,
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1265,
              "end": 1279,
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
      "start": 1337,
      "end": 1388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1343,
          "end": 1387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1343,
            "end": 1360,
            "decorators": [],
            "name": "uint8ClampedArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1363,
            "end": 1387,
            "arguments": [
              {
                "type": "Literal",
                "start": 1385,
                "end": 1386,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1367,
              "end": 1384,
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
      "start": 1389,
      "end": 1430,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1389,
        "end": 1429,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1389,
          "end": 1392,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1395,
          "end": 1429,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1395,
            "end": 1427,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1395,
              "end": 1412,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1413,
              "end": 1427,
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
      "start": 1437,
      "end": 1485,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1437,
        "end": 1484,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1437,
          "end": 1440,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1443,
          "end": 1484,
          "arguments": [
            {
              "type": "Literal",
              "start": 1476,
              "end": 1483,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1443,
            "end": 1475,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1443,
              "end": 1460,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1461,
              "end": 1475,
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
      "start": 1492,
      "end": 1580,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1492,
        "end": 1579,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1492,
          "end": 1495,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1498,
          "end": 1579,
          "arguments": [
            {
              "type": "Literal",
              "start": 1531,
              "end": 1538,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1542,
                    "end": 1547,
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
                    "start": 1549,
                    "end": 1559,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1561,
                  "end": 1576,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1561,
                    "end": 1569,
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
                    "start": 1571,
                    "end": 1576,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1498,
            "end": 1530,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1498,
              "end": 1515,
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1516,
              "end": 1530,
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
      "start": 1588,
      "end": 1625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1594,
          "end": 1624,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1594,
            "end": 1604,
            "decorators": [],
            "name": "int16Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1607,
            "end": 1624,
            "arguments": [
              {
                "type": "Literal",
                "start": 1622,
                "end": 1623,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1611,
              "end": 1621,
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
      "start": 1626,
      "end": 1660,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1626,
        "end": 1659,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1626,
          "end": 1629,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1632,
          "end": 1659,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1632,
            "end": 1657,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1632,
              "end": 1642,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1643,
              "end": 1657,
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
      "start": 1667,
      "end": 1708,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1667,
        "end": 1707,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1667,
          "end": 1670,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1673,
          "end": 1707,
          "arguments": [
            {
              "type": "Literal",
              "start": 1699,
              "end": 1706,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1673,
            "end": 1698,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1673,
              "end": 1683,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1684,
              "end": 1698,
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
      "start": 1715,
      "end": 1796,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1715,
        "end": 1795,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1715,
          "end": 1718,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1721,
          "end": 1795,
          "arguments": [
            {
              "type": "Literal",
              "start": 1747,
              "end": 1754,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1758,
                    "end": 1763,
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
                    "start": 1765,
                    "end": 1775,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1777,
                  "end": 1792,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1777,
                    "end": 1785,
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
                    "start": 1787,
                    "end": 1792,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1721,
            "end": 1746,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1721,
              "end": 1731,
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1732,
              "end": 1746,
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
      "start": 1804,
      "end": 1843,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1810,
          "end": 1842,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1810,
            "end": 1821,
            "decorators": [],
            "name": "uint16Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1824,
            "end": 1842,
            "arguments": [
              {
                "type": "Literal",
                "start": 1840,
                "end": 1841,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1828,
              "end": 1839,
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
      "start": 1844,
      "end": 1879,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1844,
        "end": 1878,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1844,
          "end": 1847,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1850,
          "end": 1878,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 1850,
            "end": 1876,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1850,
              "end": 1861,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1862,
              "end": 1876,
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
      "start": 1886,
      "end": 1928,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1886,
        "end": 1927,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1886,
          "end": 1889,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1892,
          "end": 1927,
          "arguments": [
            {
              "type": "Literal",
              "start": 1919,
              "end": 1926,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1892,
            "end": 1918,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1892,
              "end": 1903,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1904,
              "end": 1918,
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
      "start": 1935,
      "end": 2017,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1935,
        "end": 2016,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1935,
          "end": 1938,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1941,
          "end": 2016,
          "arguments": [
            {
              "type": "Literal",
              "start": 1968,
              "end": 1975,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1979,
                    "end": 1984,
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
                    "start": 1986,
                    "end": 1996,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 1998,
                  "end": 2013,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1998,
                    "end": 2006,
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
                    "start": 2008,
                    "end": 2013,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1941,
            "end": 1967,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1941,
              "end": 1952,
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1953,
              "end": 1967,
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
      "start": 2025,
      "end": 2062,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2031,
          "end": 2061,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2031,
            "end": 2041,
            "decorators": [],
            "name": "int32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2044,
            "end": 2061,
            "arguments": [
              {
                "type": "Literal",
                "start": 2059,
                "end": 2060,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2048,
              "end": 2058,
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
      "start": 2063,
      "end": 2097,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2063,
        "end": 2096,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2063,
          "end": 2066,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2069,
          "end": 2096,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2069,
            "end": 2094,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2069,
              "end": 2079,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2080,
              "end": 2094,
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
      "start": 2104,
      "end": 2145,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2104,
        "end": 2144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2104,
          "end": 2107,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2110,
          "end": 2144,
          "arguments": [
            {
              "type": "Literal",
              "start": 2136,
              "end": 2143,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2110,
            "end": 2135,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2110,
              "end": 2120,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2121,
              "end": 2135,
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
      "start": 2152,
      "end": 2233,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2152,
        "end": 2232,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2152,
          "end": 2155,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2158,
          "end": 2232,
          "arguments": [
            {
              "type": "Literal",
              "start": 2184,
              "end": 2191,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2195,
                    "end": 2200,
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
                    "start": 2202,
                    "end": 2212,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2214,
                  "end": 2229,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2214,
                    "end": 2222,
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
                    "start": 2224,
                    "end": 2229,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2158,
            "end": 2183,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2158,
              "end": 2168,
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2169,
              "end": 2183,
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
      "start": 2241,
      "end": 2280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2247,
          "end": 2279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2247,
            "end": 2258,
            "decorators": [],
            "name": "uint32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2261,
            "end": 2279,
            "arguments": [
              {
                "type": "Literal",
                "start": 2277,
                "end": 2278,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2265,
              "end": 2276,
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
      "start": 2281,
      "end": 2316,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2281,
        "end": 2315,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2281,
          "end": 2284,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2287,
          "end": 2315,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2287,
            "end": 2313,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2287,
              "end": 2298,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2299,
              "end": 2313,
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
      "start": 2323,
      "end": 2365,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2323,
        "end": 2364,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2323,
          "end": 2326,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2329,
          "end": 2364,
          "arguments": [
            {
              "type": "Literal",
              "start": 2356,
              "end": 2363,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2329,
            "end": 2355,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2329,
              "end": 2340,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2341,
              "end": 2355,
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
      "start": 2372,
      "end": 2454,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2372,
        "end": 2453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2372,
          "end": 2375,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2378,
          "end": 2453,
          "arguments": [
            {
              "type": "Literal",
              "start": 2405,
              "end": 2412,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2416,
                    "end": 2421,
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
                    "start": 2423,
                    "end": 2433,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2435,
                  "end": 2450,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2435,
                    "end": 2443,
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
                    "start": 2445,
                    "end": 2450,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2378,
            "end": 2404,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2378,
              "end": 2389,
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2390,
              "end": 2404,
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
      "start": 2462,
      "end": 2503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2468,
          "end": 2502,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2468,
            "end": 2480,
            "decorators": [],
            "name": "float32Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2483,
            "end": 2502,
            "arguments": [
              {
                "type": "Literal",
                "start": 2500,
                "end": 2501,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2487,
              "end": 2499,
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
      "start": 2504,
      "end": 2540,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2504,
        "end": 2539,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2504,
          "end": 2507,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2510,
          "end": 2539,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2510,
            "end": 2537,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2510,
              "end": 2522,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2523,
              "end": 2537,
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
      "start": 2547,
      "end": 2590,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2547,
        "end": 2589,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2547,
          "end": 2550,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2553,
          "end": 2589,
          "arguments": [
            {
              "type": "Literal",
              "start": 2581,
              "end": 2588,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2553,
            "end": 2580,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2553,
              "end": 2565,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2566,
              "end": 2580,
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
      "start": 2597,
      "end": 2680,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2597,
        "end": 2679,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2597,
          "end": 2600,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2603,
          "end": 2679,
          "arguments": [
            {
              "type": "Literal",
              "start": 2631,
              "end": 2638,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2642,
                    "end": 2647,
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
                    "start": 2649,
                    "end": 2659,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2661,
                  "end": 2676,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2661,
                    "end": 2669,
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
                    "start": 2671,
                    "end": 2676,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2603,
            "end": 2630,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2603,
              "end": 2615,
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2616,
              "end": 2630,
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
      "start": 2688,
      "end": 2729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2694,
          "end": 2728,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2694,
            "end": 2706,
            "decorators": [],
            "name": "float64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2709,
            "end": 2728,
            "arguments": [
              {
                "type": "Literal",
                "start": 2726,
                "end": 2727,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2713,
              "end": 2725,
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
      "start": 2730,
      "end": 2766,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2730,
        "end": 2765,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2730,
          "end": 2733,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2736,
          "end": 2765,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2736,
            "end": 2763,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2736,
              "end": 2748,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2749,
              "end": 2763,
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
      "start": 2773,
      "end": 2816,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2773,
        "end": 2815,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2773,
          "end": 2776,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2779,
          "end": 2815,
          "arguments": [
            {
              "type": "Literal",
              "start": 2807,
              "end": 2814,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2779,
            "end": 2806,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2779,
              "end": 2791,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2792,
              "end": 2806,
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
      "start": 2823,
      "end": 2906,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2823,
        "end": 2905,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2823,
          "end": 2826,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2829,
          "end": 2905,
          "arguments": [
            {
              "type": "Literal",
              "start": 2857,
              "end": 2864,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2868,
                    "end": 2873,
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
                    "start": 2875,
                    "end": 2885,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 2887,
                  "end": 2902,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2887,
                    "end": 2895,
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
                    "start": 2897,
                    "end": 2902,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2829,
            "end": 2856,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2829,
              "end": 2841,
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2842,
              "end": 2856,
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
      "start": 2914,
      "end": 2957,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2920,
          "end": 2956,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2920,
            "end": 2933,
            "decorators": [],
            "name": "bigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2936,
            "end": 2956,
            "arguments": [
              {
                "type": "Literal",
                "start": 2954,
                "end": 2955,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2940,
              "end": 2953,
              "decorators": [],
              "name": "BigInt64Array",
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
      "start": 2958,
      "end": 2995,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2958,
        "end": 2994,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2958,
          "end": 2961,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2964,
          "end": 2994,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 2964,
            "end": 2992,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2964,
              "end": 2977,
              "decorators": [],
              "name": "bigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2978,
              "end": 2992,
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
      "start": 3002,
      "end": 3046,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3002,
        "end": 3045,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3002,
          "end": 3005,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3008,
          "end": 3045,
          "arguments": [
            {
              "type": "Literal",
              "start": 3037,
              "end": 3044,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 3008,
            "end": 3036,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3008,
              "end": 3021,
              "decorators": [],
              "name": "bigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3022,
              "end": 3036,
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
      "start": 3053,
      "end": 3137,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3053,
        "end": 3136,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3053,
          "end": 3056,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3059,
          "end": 3136,
          "arguments": [
            {
              "type": "Literal",
              "start": 3088,
              "end": 3095,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3099,
                    "end": 3104,
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
                    "start": 3106,
                    "end": 3116,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 3118,
                  "end": 3133,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3118,
                    "end": 3126,
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
                    "start": 3128,
                    "end": 3133,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 3059,
            "end": 3087,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3059,
              "end": 3072,
              "decorators": [],
              "name": "bigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3073,
              "end": 3087,
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
      "start": 3145,
      "end": 3193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3151,
          "end": 3192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3151,
            "end": 3168,
            "decorators": [],
            "name": "bigIntUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 3171,
            "end": 3192,
            "arguments": [
              {
                "type": "Literal",
                "start": 3190,
                "end": 3191,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3175,
              "end": 3189,
              "decorators": [],
              "name": "BigUint64Array",
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
      "start": 3194,
      "end": 3235,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3194,
        "end": 3234,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3194,
          "end": 3197,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3200,
          "end": 3234,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 3200,
            "end": 3232,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3200,
              "end": 3217,
              "decorators": [],
              "name": "bigIntUint64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3218,
              "end": 3232,
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
      "start": 3242,
      "end": 3290,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3242,
        "end": 3289,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3242,
          "end": 3245,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3248,
          "end": 3289,
          "arguments": [
            {
              "type": "Literal",
              "start": 3281,
              "end": 3288,
              "raw": "'en-US'",
              "value": "en-US"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 3248,
            "end": 3280,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3248,
              "end": 3265,
              "decorators": [],
              "name": "bigIntUint64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3266,
              "end": 3280,
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
      "start": 3297,
      "end": 3385,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3297,
        "end": 3384,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3297,
          "end": 3300,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3303,
          "end": 3384,
          "arguments": [
            {
              "type": "Literal",
              "start": 3336,
              "end": 3343,
              "raw": "'en-US'",
              "value": "en-US"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3347,
                    "end": 3352,
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
                    "start": 3354,
                    "end": 3364,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 3366,
                  "end": 3381,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3366,
                    "end": 3374,
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
                    "start": 3376,
                    "end": 3381,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 3303,
            "end": 3335,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3303,
              "end": 3320,
              "decorators": [],
              "name": "bigIntUint64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3321,
              "end": 3335,
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
