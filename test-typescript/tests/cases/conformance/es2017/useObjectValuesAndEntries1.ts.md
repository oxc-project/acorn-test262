__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1112,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 22,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
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
                  "start": 13,
                  "end": 14,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 16,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
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
                  "start": 19,
                  "end": 20,
                  "raw": "2",
                  "value": 2
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
      "type": "ForOfStatement",
      "start": 25,
      "end": 75,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 73,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 72,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 35,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 34,
            "end": 35,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "CallExpression",
        "start": 39,
        "end": 55,
        "arguments": [
          {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 39,
          "end": 52,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "Object",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "decorators": [],
            "name": "values",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "decorators": [],
            "name": "entries",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 91,
            "end": 108,
            "arguments": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "o",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 105,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 97,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 105,
                "decorators": [],
                "name": "entries",
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
      "start": 151,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 161,
            "decorators": [],
            "name": "values",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 164,
            "end": 180,
            "arguments": [
              {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "o",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 164,
              "end": 177,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 164,
                "end": 170,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 177,
                "decorators": [],
                "name": "values",
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
      "start": 216,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 228,
            "decorators": [],
            "name": "entries1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 231,
            "end": 248,
            "arguments": [
              {
                "type": "Literal",
                "start": 246,
                "end": 247,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 231,
              "end": 245,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 231,
                "end": 237,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 245,
                "decorators": [],
                "name": "entries",
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
      "start": 287,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 298,
            "decorators": [],
            "name": "values1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 301,
            "end": 317,
            "arguments": [
              {
                "type": "Literal",
                "start": 315,
                "end": 316,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 301,
              "end": 314,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 301,
                "end": 307,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 314,
                "decorators": [],
                "name": "values",
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
      "start": 349,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 361,
            "decorators": [],
            "name": "entries2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 364,
            "end": 397,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 379,
                "end": 396,
                "properties": [
                  {
                    "type": "Property",
                    "start": 381,
                    "end": 388,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
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
                      "start": 384,
                      "end": 388,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 390,
                    "end": 394,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 391,
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
                      "start": 393,
                      "end": 394,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 364,
              "end": 378,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 364,
                "end": 370,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 371,
                "end": 378,
                "decorators": [],
                "name": "entries",
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
      "start": 431,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 477,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 442,
            "decorators": [],
            "name": "values2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 445,
            "end": 477,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 459,
                "end": 476,
                "properties": [
                  {
                    "type": "Property",
                    "start": 461,
                    "end": 468,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
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
                      "start": 464,
                      "end": 468,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 470,
                    "end": 474,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
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
                      "start": 473,
                      "end": 474,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 445,
              "end": 458,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 445,
                "end": 451,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 452,
                "end": 458,
                "decorators": [],
                "name": "values",
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
      "start": 506,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 518,
            "decorators": [],
            "name": "entries3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 521,
            "end": 539,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 536,
                "end": 538,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 521,
              "end": 535,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 521,
                "end": 527,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 528,
                "end": 535,
                "decorators": [],
                "name": "entries",
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
      "start": 576,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 607,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 580,
            "end": 587,
            "decorators": [],
            "name": "values3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 590,
            "end": 607,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 604,
                "end": 606,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 590,
              "end": 603,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 590,
                "end": 596,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 597,
                "end": 603,
                "decorators": [],
                "name": "values",
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
      "start": 637,
      "end": 661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 641,
          "end": 660,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 641,
            "end": 642,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 645,
            "end": 660,
            "elements": [
              {
                "type": "Literal",
                "start": 646,
                "end": 649,
                "raw": "\"a\"",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 651,
                "end": 654,
                "raw": "\"b\"",
                "value": "b"
              },
              {
                "type": "Literal",
                "start": 656,
                "end": 659,
                "raw": "\"c\"",
                "value": "c"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 662,
      "end": 695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 694,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 674,
            "decorators": [],
            "name": "entries4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 677,
            "end": 694,
            "arguments": [
              {
                "type": "Identifier",
                "start": 692,
                "end": 693,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 677,
              "end": 691,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 677,
                "end": 683,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 684,
                "end": 691,
                "decorators": [],
                "name": "entries",
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
      "start": 736,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 740,
          "end": 766,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 747,
            "decorators": [],
            "name": "values4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 750,
            "end": 766,
            "arguments": [
              {
                "type": "Identifier",
                "start": 764,
                "end": 765,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 750,
              "end": 763,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 750,
                "end": 756,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 757,
                "end": 763,
                "decorators": [],
                "name": "values",
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
      "type": "TSEnumDeclaration",
      "start": 801,
      "end": 816,
      "body": {
        "type": "TSEnumBody",
        "start": 808,
        "end": 816,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 810,
            "end": 811,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 810,
              "end": 811,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 813,
            "end": 814,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 813,
              "end": 814,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 807,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 817,
      "end": 850,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 849,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 829,
            "decorators": [],
            "name": "entries5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 832,
            "end": 849,
            "arguments": [
              {
                "type": "Identifier",
                "start": 847,
                "end": 848,
                "decorators": [],
                "name": "E",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 832,
              "end": 846,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 832,
                "end": 838,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 839,
                "end": 846,
                "decorators": [],
                "name": "entries",
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
      "start": 888,
      "end": 919,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 892,
          "end": 918,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 892,
            "end": 899,
            "decorators": [],
            "name": "values5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 902,
            "end": 918,
            "arguments": [
              {
                "type": "Identifier",
                "start": 916,
                "end": 917,
                "decorators": [],
                "name": "E",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 902,
              "end": 915,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 902,
                "end": 908,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 909,
                "end": 915,
                "decorators": [],
                "name": "values",
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
      "type": "TSInterfaceDeclaration",
      "start": 950,
      "end": 965,
      "body": {
        "type": "TSInterfaceBody",
        "start": 962,
        "end": 965,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 961,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 966,
      "end": 980,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 970,
          "end": 979,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 970,
            "end": 974,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 971,
              "end": 974,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 973,
                "end": 974,
                "typeName": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 974,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 977,
            "end": 979,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 981,
      "end": 1014,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 985,
          "end": 1013,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 985,
            "end": 993,
            "decorators": [],
            "name": "entries6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 996,
            "end": 1013,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1011,
                "end": 1012,
                "decorators": [],
                "name": "i",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 996,
              "end": 1010,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 996,
                "end": 1002,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1003,
                "end": 1010,
                "decorators": [],
                "name": "entries",
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
      "start": 1052,
      "end": 1083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1056,
          "end": 1082,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1056,
            "end": 1063,
            "decorators": [],
            "name": "values6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1066,
            "end": 1082,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1080,
                "end": 1081,
                "decorators": [],
                "name": "i",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1066,
              "end": 1079,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1066,
                "end": 1072,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1073,
                "end": 1079,
                "decorators": [],
                "name": "values",
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
