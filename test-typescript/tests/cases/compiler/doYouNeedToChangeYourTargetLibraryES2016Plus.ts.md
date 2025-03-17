__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 2014,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 28,
            "decorators": [],
            "name": "testIncludes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 31,
            "end": 58,
            "arguments": [
              {
                "type": "Literal",
                "start": 50,
                "end": 57,
                "raw": "\"world\"",
                "value": "world"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 31,
              "end": 49,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 31,
                "end": 40,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 32,
                    "end": 39,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 41,
                "end": 49,
                "decorators": [],
                "name": "includes",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 95,
            "decorators": [],
            "name": "testStringPadStart",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 98,
            "end": 112,
            "arguments": [
              {
                "type": "Literal",
                "start": 110,
                "end": 111,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 98,
              "end": 109,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 98,
                "end": 100,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 101,
                "end": 109,
                "decorators": [],
                "name": "padStart",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 136,
            "decorators": [],
            "name": "testStringPadEnd",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 139,
            "end": 151,
            "arguments": [
              {
                "type": "Literal",
                "start": 149,
                "end": 150,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 139,
              "end": 148,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 139,
                "end": 141,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 142,
                "end": 148,
                "decorators": [],
                "name": "padEnd",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 186,
            "decorators": [],
            "name": "testObjectConstructorValues",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 206,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 203,
                "end": 205,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 189,
              "end": 202,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 189,
                "end": 195,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 196,
                "end": 202,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 242,
            "decorators": [],
            "name": "testObjectConstructorEntries",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 245,
            "end": 263,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 260,
                "end": 262,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 245,
              "end": 259,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 251,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 356,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 317,
            "decorators": [],
            "name": "testObjectConstructorGetOwnPropertyDescriptors",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 320,
            "end": 356,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 353,
                "end": 355,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 320,
              "end": 352,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 320,
                "end": 326,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 327,
                "end": 352,
                "decorators": [],
                "name": "getOwnPropertyDescriptors",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 385,
            "decorators": [],
            "name": "testIntlFormatToParts",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 388,
            "end": 436,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 388,
              "end": 434,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 388,
                "end": 420,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 412,
                    "end": 419,
                    "raw": "\"en-US\"",
                    "value": "en-US"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 392,
                  "end": 411,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 396,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 411,
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 421,
                "end": 434,
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 455,
            "decorators": [],
            "name": "testAtomics",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 458,
            "end": 494,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 470,
                "end": 487,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 484,
                  "decorators": [],
                  "name": "Uint8Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 489,
                "end": 490,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 492,
                "end": 493,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 458,
              "end": 469,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 458,
                "end": 465,
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 466,
                "end": 469,
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 496,
      "end": 551,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 550,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 523,
            "decorators": [],
            "name": "testSharedArrayBuffer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 526,
            "end": 550,
            "arguments": [
              {
                "type": "Literal",
                "start": 548,
                "end": 549,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 547,
              "decorators": [],
              "name": "SharedArrayBuffer",
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
      "type": "VariableDeclaration",
      "start": 563,
      "end": 622,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 621,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 587,
            "decorators": [],
            "name": "testPromiseFinally",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 590,
            "end": 621,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 590,
              "end": 619,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 590,
                "end": 611,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 602,
                    "end": 610,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 608,
                      "end": 610,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 601,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 612,
                "end": 619,
                "decorators": [],
                "name": "finally",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 623,
      "end": 742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 741,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 655,
            "decorators": [],
            "name": "testRegExpMatchArrayGroups",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 658,
            "end": 741,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 658,
              "end": 734,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 677,
                  "end": 733,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "flags": "g",
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})"
                  },
                  "value": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 658,
                "end": 676,
                "computed": false,
                "object": {
                  "type": "Literal",
                  "start": 658,
                  "end": 670,
                  "raw": "\"2019-04-30\"",
                  "value": "2019-04-30"
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 676,
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 735,
              "end": 741,
              "decorators": [],
              "name": "groups",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 743,
      "end": 860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 859,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 774,
            "decorators": [],
            "name": "testRegExpExecArrayGroups",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 777,
            "end": 859,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 777,
              "end": 852,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 839,
                  "end": 851,
                  "raw": "\"2019-04-30\"",
                  "value": "2019-04-30"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 777,
                "end": 838,
                "computed": false,
                "object": {
                  "type": "Literal",
                  "start": 777,
                  "end": 833,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "flags": "g",
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})"
                  },
                  "value": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 838,
                  "decorators": [],
                  "name": "exec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 853,
              "end": 859,
              "decorators": [],
              "name": "groups",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 861,
      "end": 900,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 867,
          "end": 899,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 867,
            "end": 883,
            "decorators": [],
            "name": "testRegExpDotAll",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 886,
            "end": 899,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 886,
              "end": 892,
              "raw": "/foo/g",
              "regex": {
                "flags": "g",
                "pattern": "foo"
              },
              "value": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 893,
              "end": 899,
              "decorators": [],
              "name": "dotAll",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 969,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 907,
          "end": 968,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 907,
            "end": 926,
            "decorators": [],
            "name": "testIntlPluralRules",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 929,
            "end": 968,
            "arguments": [
              {
                "type": "Literal",
                "start": 966,
                "end": 967,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 929,
              "end": 965,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 929,
                "end": 958,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 950,
                    "end": 957,
                    "raw": "\"ar-EG\"",
                    "value": "ar-EG"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 933,
                  "end": 949,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 933,
                    "end": 937,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 938,
                    "end": 949,
                    "decorators": [],
                    "name": "PluralRules",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 959,
                "end": 965,
                "decorators": [],
                "name": "select",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 970,
      "end": 1030,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 1029,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 1015,
            "decorators": [],
            "name": "testAsyncGenerator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 994,
              "end": 1015,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 996,
                "end": 1015,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1010,
                  "end": 1015,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1011,
                      "end": 1014
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 1010,
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1018,
            "end": 1029,
            "expression": {
              "type": "Literal",
              "start": 1018,
              "end": 1022,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1026,
              "end": 1029
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1031,
      "end": 1102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1037,
          "end": 1101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1037,
            "end": 1087,
            "decorators": [],
            "name": "testAsyncGeneratorFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1063,
              "end": 1087,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1065,
                "end": 1087,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1087,
                  "decorators": [],
                  "name": "AsyncGeneratorFunction",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1090,
            "end": 1101,
            "expression": {
              "type": "Literal",
              "start": 1090,
              "end": 1094,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1098,
              "end": 1101
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1103,
      "end": 1161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1109,
          "end": 1160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1109,
            "end": 1146,
            "decorators": [],
            "name": "testAsyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1126,
              "end": 1146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1128,
                "end": 1146,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1141,
                  "end": 1146,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1142,
                      "end": 1145
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1141,
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1149,
            "end": 1160,
            "expression": {
              "type": "Literal",
              "start": 1149,
              "end": 1153,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1157,
              "end": 1160
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1162,
      "end": 1236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1168,
          "end": 1235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1168,
            "end": 1221,
            "decorators": [],
            "name": "testAsyncIterableIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1193,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1195,
                "end": 1221,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1216,
                  "end": 1221,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1217,
                      "end": 1220
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1195,
                  "end": 1216,
                  "decorators": [],
                  "name": "AsyncIterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1224,
            "end": 1235,
            "expression": {
              "type": "Literal",
              "start": 1224,
              "end": 1228,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1232,
              "end": 1235
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1237,
      "end": 1322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1243,
          "end": 1321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1243,
            "end": 1272,
            "decorators": [],
            "name": "testNumberFormatFormatToParts",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1275,
            "end": 1321,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1275,
              "end": 1319,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 1275,
                "end": 1305,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1297,
                    "end": 1304,
                    "raw": "\"en-US\"",
                    "value": "en-US"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1279,
                  "end": 1296,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1279,
                    "end": 1283,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1284,
                    "end": 1296,
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1306,
                "end": 1319,
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1334,
      "end": 1366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1340,
          "end": 1365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1340,
            "end": 1353,
            "decorators": [],
            "name": "testArrayFlat",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1356,
            "end": 1365,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1356,
              "end": 1363,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 1356,
                "end": 1358,
                "elements": []
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1359,
                "end": 1363,
                "decorators": [],
                "name": "flat",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1367,
      "end": 1405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1373,
          "end": 1404,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1373,
            "end": 1389,
            "decorators": [],
            "name": "testArrayFlatMap",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1392,
            "end": 1404,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1392,
              "end": 1402,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 1392,
                "end": 1394,
                "elements": []
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1395,
                "end": 1402,
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1406,
      "end": 1470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1412,
          "end": 1469,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1412,
            "end": 1444,
            "decorators": [],
            "name": "testObjectConstructorFromEntries",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1447,
            "end": 1469,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1466,
                "end": 1468,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1447,
              "end": 1465,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1447,
                "end": 1453,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1454,
                "end": 1465,
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1471,
      "end": 1514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1477,
          "end": 1513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1496,
            "decorators": [],
            "name": "testStringTrimStart",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1499,
            "end": 1513,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1499,
              "end": 1511,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 1499,
                "end": 1501,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1502,
                "end": 1511,
                "decorators": [],
                "name": "trimStart",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1515,
      "end": 1554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1521,
          "end": 1553,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1521,
            "end": 1538,
            "decorators": [],
            "name": "testStringTrimEnd",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1541,
            "end": 1553,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1541,
              "end": 1551,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 1541,
                "end": 1543,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1544,
                "end": 1551,
                "decorators": [],
                "name": "trimEnd",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1555,
      "end": 1596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1561,
          "end": 1595,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1579,
            "decorators": [],
            "name": "testStringTrimLeft",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1582,
            "end": 1595,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1582,
              "end": 1593,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 1582,
                "end": 1584,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1585,
                "end": 1593,
                "decorators": [],
                "name": "trimLeft",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1597,
      "end": 1640,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1603,
          "end": 1639,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1603,
            "end": 1622,
            "decorators": [],
            "name": "testStringTrimRight",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1625,
            "end": 1639,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1625,
              "end": 1637,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 1625,
                "end": 1627,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1628,
                "end": 1637,
                "decorators": [],
                "name": "trimRight",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1641,
      "end": 1697,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1647,
          "end": 1696,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1647,
            "end": 1668,
            "decorators": [],
            "name": "testSymbolDescription",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1671,
            "end": 1696,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 1671,
              "end": 1684,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1678,
                  "end": 1683,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1671,
                "end": 1677,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1685,
              "end": 1696,
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1709,
      "end": 1762,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1715,
          "end": 1761,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1715,
            "end": 1736,
            "decorators": [],
            "name": "testPromiseAllSettled",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1739,
            "end": 1761,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1758,
                "end": 1760,
                "elements": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1739,
              "end": 1757,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1739,
                "end": 1746,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1747,
                "end": 1757,
                "decorators": [],
                "name": "allSettled",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1763,
      "end": 1804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1769,
          "end": 1803,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1769,
            "end": 1787,
            "decorators": [],
            "name": "testStringMatchAll",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1790,
            "end": 1803,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1790,
              "end": 1801,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 1790,
                "end": 1792,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1793,
                "end": 1801,
                "decorators": [],
                "name": "matchAll",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1805,
      "end": 1873,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1811,
          "end": 1872,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1811,
            "end": 1829,
            "decorators": [],
            "name": "testRegExpMatchAll",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1832,
            "end": 1872,
            "arguments": [
              {
                "type": "Literal",
                "start": 1861,
                "end": 1871,
                "raw": "\"matchAll\"",
                "value": "matchAll"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1832,
              "end": 1860,
              "computed": true,
              "object": {
                "type": "Literal",
                "start": 1832,
                "end": 1843,
                "raw": "/matchAll/g",
                "regex": {
                  "flags": "g",
                  "pattern": "matchAll"
                },
                "value": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 1844,
                "end": 1859,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1844,
                  "end": 1850,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1851,
                  "end": 1859,
                  "decorators": [],
                  "name": "matchAll",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1874,
      "end": 1905,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1880,
          "end": 1904,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1880,
            "end": 1890,
            "decorators": [],
            "name": "testBigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1893,
            "end": 1904,
            "arguments": [
              {
                "type": "Literal",
                "start": 1900,
                "end": 1903,
                "raw": "123",
                "value": 123
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1893,
              "end": 1899,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1917,
      "end": 1956,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1923,
          "end": 1955,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1923,
            "end": 1937,
            "decorators": [],
            "name": "testPromiseAny",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1940,
            "end": 1955,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1952,
                "end": 1954,
                "elements": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1940,
              "end": 1951,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1940,
                "end": 1947,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1948,
                "end": 1951,
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1957,
      "end": 2002,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1963,
          "end": 2001,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1963,
            "end": 1983,
            "decorators": [],
            "name": "testStringReplaceAll",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1986,
            "end": 2001,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1986,
              "end": 1999,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 1986,
                "end": 1988,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1989,
                "end": 1999,
                "decorators": [],
                "name": "replaceAll",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
