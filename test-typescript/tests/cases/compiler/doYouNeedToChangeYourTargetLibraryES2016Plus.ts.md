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
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 28,
            "name": "testIncludes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 31,
            "end": 58,
            "callee": {
              "type": "MemberExpression",
              "start": 31,
              "end": 49,
              "object": {
                "type": "ArrayExpression",
                "start": 31,
                "end": 40,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 32,
                    "end": 39,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 41,
                "end": 49,
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
                "start": 50,
                "end": 57,
                "value": "world",
                "raw": "\"world\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 95,
            "name": "testStringPadStart",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 98,
            "end": 112,
            "callee": {
              "type": "MemberExpression",
              "start": 98,
              "end": 109,
              "object": {
                "type": "Literal",
                "start": 98,
                "end": 100,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 101,
                "end": 109,
                "name": "padStart",
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
                "start": 110,
                "end": 111,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 136,
            "name": "testStringPadEnd",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 139,
            "end": 151,
            "callee": {
              "type": "MemberExpression",
              "start": 139,
              "end": 148,
              "object": {
                "type": "Literal",
                "start": 139,
                "end": 141,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 142,
                "end": 148,
                "name": "padEnd",
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
                "start": 149,
                "end": 150,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 186,
            "name": "testObjectConstructorValues",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 206,
            "callee": {
              "type": "MemberExpression",
              "start": 189,
              "end": 202,
              "object": {
                "type": "Identifier",
                "start": 189,
                "end": 195,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 196,
                "end": 202,
                "name": "values",
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
                "start": 203,
                "end": 205,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 242,
            "name": "testObjectConstructorEntries",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 245,
            "end": 263,
            "callee": {
              "type": "MemberExpression",
              "start": 245,
              "end": 259,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 251,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "name": "entries",
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
                "start": 260,
                "end": 262,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 317,
            "name": "testObjectConstructorGetOwnPropertyDescriptors",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 320,
            "end": 356,
            "callee": {
              "type": "MemberExpression",
              "start": 320,
              "end": 352,
              "object": {
                "type": "Identifier",
                "start": 320,
                "end": 326,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 327,
                "end": 352,
                "name": "getOwnPropertyDescriptors",
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
                "start": 353,
                "end": 355,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 385,
            "name": "testIntlFormatToParts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 388,
            "end": 436,
            "callee": {
              "type": "MemberExpression",
              "start": 388,
              "end": 434,
              "object": {
                "type": "NewExpression",
                "start": 388,
                "end": 420,
                "callee": {
                  "type": "MemberExpression",
                  "start": 392,
                  "end": 411,
                  "object": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 396,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 411,
                    "name": "DateTimeFormat",
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
                    "start": 412,
                    "end": 419,
                    "value": "en-US",
                    "raw": "\"en-US\""
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 421,
                "end": 434,
                "name": "formatToParts",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 455,
            "name": "testAtomics",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 458,
            "end": 494,
            "callee": {
              "type": "MemberExpression",
              "start": 458,
              "end": 469,
              "object": {
                "type": "Identifier",
                "start": 458,
                "end": 465,
                "name": "Atomics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 466,
                "end": 469,
                "name": "add",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 470,
                "end": 487,
                "callee": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 484,
                  "name": "Uint8Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 489,
                "end": 490,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 492,
                "end": 493,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 523,
            "name": "testSharedArrayBuffer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 526,
            "end": 550,
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 547,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 548,
                "end": 549,
                "value": 5,
                "raw": "5"
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
      "type": "VariableDeclaration",
      "start": 563,
      "end": 622,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 621,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 587,
            "name": "testPromiseFinally",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 590,
            "end": 621,
            "callee": {
              "type": "MemberExpression",
              "start": 590,
              "end": 619,
              "object": {
                "type": "NewExpression",
                "start": 590,
                "end": 611,
                "callee": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 601,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 602,
                    "end": 610,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 608,
                      "end": 610,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 612,
                "end": 619,
                "name": "finally",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 655,
            "name": "testRegExpMatchArrayGroups",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 658,
            "end": 741,
            "object": {
              "type": "CallExpression",
              "start": 658,
              "end": 734,
              "callee": {
                "type": "MemberExpression",
                "start": 658,
                "end": 676,
                "object": {
                  "type": "Literal",
                  "start": 658,
                  "end": 670,
                  "value": "2019-04-30",
                  "raw": "\"2019-04-30\""
                },
                "property": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 676,
                  "name": "match",
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
                  "start": 677,
                  "end": 733,
                  "value": null,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "flags": "g",
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})"
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 735,
              "end": 741,
              "name": "groups",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 774,
            "name": "testRegExpExecArrayGroups",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 777,
            "end": 859,
            "object": {
              "type": "CallExpression",
              "start": 777,
              "end": 852,
              "callee": {
                "type": "MemberExpression",
                "start": 777,
                "end": 838,
                "object": {
                  "type": "Literal",
                  "start": 777,
                  "end": 833,
                  "value": null,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "flags": "g",
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 838,
                  "name": "exec",
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
                  "start": 839,
                  "end": 851,
                  "value": "2019-04-30",
                  "raw": "\"2019-04-30\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 853,
              "end": 859,
              "name": "groups",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 867,
            "end": 883,
            "name": "testRegExpDotAll",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 886,
            "end": 899,
            "object": {
              "type": "Literal",
              "start": 886,
              "end": 892,
              "value": null,
              "raw": "/foo/g",
              "regex": {
                "flags": "g",
                "pattern": "foo"
              }
            },
            "property": {
              "type": "Identifier",
              "start": 893,
              "end": 899,
              "name": "dotAll",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 907,
            "end": 926,
            "name": "testIntlPluralRules",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 929,
            "end": 968,
            "callee": {
              "type": "MemberExpression",
              "start": 929,
              "end": 965,
              "object": {
                "type": "NewExpression",
                "start": 929,
                "end": 958,
                "callee": {
                  "type": "MemberExpression",
                  "start": 933,
                  "end": 949,
                  "object": {
                    "type": "Identifier",
                    "start": 933,
                    "end": 937,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 938,
                    "end": 949,
                    "name": "PluralRules",
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
                    "start": 950,
                    "end": 957,
                    "value": "ar-EG",
                    "raw": "\"ar-EG\""
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 959,
                "end": 965,
                "name": "select",
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
                "start": 966,
                "end": 967,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 1015,
            "name": "testAsyncGenerator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 994,
              "end": 1015,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 996,
                "end": 1015,
                "typeName": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 1010,
                  "name": "AsyncGenerator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1018,
            "end": 1029,
            "expression": {
              "type": "Literal",
              "start": 1018,
              "end": 1022,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1026,
              "end": 1029
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1037,
            "end": 1087,
            "name": "testAsyncGeneratorFunction",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1063,
              "end": 1087,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1065,
                "end": 1087,
                "typeName": {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1087,
                  "name": "AsyncGeneratorFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1090,
            "end": 1101,
            "expression": {
              "type": "Literal",
              "start": 1090,
              "end": 1094,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1098,
              "end": 1101
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1109,
            "end": 1146,
            "name": "testAsyncIterable",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1126,
              "end": 1146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1128,
                "end": 1146,
                "typeName": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1141,
                  "name": "AsyncIterable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1149,
            "end": 1160,
            "expression": {
              "type": "Literal",
              "start": 1149,
              "end": 1153,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1157,
              "end": 1160
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1168,
            "end": 1221,
            "name": "testAsyncIterableIterator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1193,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1195,
                "end": 1221,
                "typeName": {
                  "type": "Identifier",
                  "start": 1195,
                  "end": 1216,
                  "name": "AsyncIterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1224,
            "end": 1235,
            "expression": {
              "type": "Literal",
              "start": 1224,
              "end": 1228,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1232,
              "end": 1235
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1243,
            "end": 1272,
            "name": "testNumberFormatFormatToParts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1275,
            "end": 1321,
            "callee": {
              "type": "MemberExpression",
              "start": 1275,
              "end": 1319,
              "object": {
                "type": "NewExpression",
                "start": 1275,
                "end": 1305,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1279,
                  "end": 1296,
                  "object": {
                    "type": "Identifier",
                    "start": 1279,
                    "end": 1283,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1284,
                    "end": 1296,
                    "name": "NumberFormat",
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
                    "start": 1297,
                    "end": 1304,
                    "value": "en-US",
                    "raw": "\"en-US\""
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 1306,
                "end": 1319,
                "name": "formatToParts",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1340,
            "end": 1353,
            "name": "testArrayFlat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1356,
            "end": 1365,
            "callee": {
              "type": "MemberExpression",
              "start": 1356,
              "end": 1363,
              "object": {
                "type": "ArrayExpression",
                "start": 1356,
                "end": 1358,
                "elements": []
              },
              "property": {
                "type": "Identifier",
                "start": 1359,
                "end": 1363,
                "name": "flat",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1373,
            "end": 1389,
            "name": "testArrayFlatMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1392,
            "end": 1404,
            "callee": {
              "type": "MemberExpression",
              "start": 1392,
              "end": 1402,
              "object": {
                "type": "ArrayExpression",
                "start": 1392,
                "end": 1394,
                "elements": []
              },
              "property": {
                "type": "Identifier",
                "start": 1395,
                "end": 1402,
                "name": "flatMap",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1412,
            "end": 1444,
            "name": "testObjectConstructorFromEntries",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1447,
            "end": 1469,
            "callee": {
              "type": "MemberExpression",
              "start": 1447,
              "end": 1465,
              "object": {
                "type": "Identifier",
                "start": 1447,
                "end": 1453,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1454,
                "end": 1465,
                "name": "fromEntries",
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
                "start": 1466,
                "end": 1468,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1496,
            "name": "testStringTrimStart",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1499,
            "end": 1513,
            "callee": {
              "type": "MemberExpression",
              "start": 1499,
              "end": 1511,
              "object": {
                "type": "Literal",
                "start": 1499,
                "end": 1501,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 1502,
                "end": 1511,
                "name": "trimStart",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1521,
            "end": 1538,
            "name": "testStringTrimEnd",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1541,
            "end": 1553,
            "callee": {
              "type": "MemberExpression",
              "start": 1541,
              "end": 1551,
              "object": {
                "type": "Literal",
                "start": 1541,
                "end": 1543,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 1544,
                "end": 1551,
                "name": "trimEnd",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1579,
            "name": "testStringTrimLeft",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1582,
            "end": 1595,
            "callee": {
              "type": "MemberExpression",
              "start": 1582,
              "end": 1593,
              "object": {
                "type": "Literal",
                "start": 1582,
                "end": 1584,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 1585,
                "end": 1593,
                "name": "trimLeft",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1603,
            "end": 1622,
            "name": "testStringTrimRight",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1625,
            "end": 1639,
            "callee": {
              "type": "MemberExpression",
              "start": 1625,
              "end": 1637,
              "object": {
                "type": "Literal",
                "start": 1625,
                "end": 1627,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 1628,
                "end": 1637,
                "name": "trimRight",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1647,
            "end": 1668,
            "name": "testSymbolDescription",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1671,
            "end": 1696,
            "object": {
              "type": "CallExpression",
              "start": 1671,
              "end": 1684,
              "callee": {
                "type": "Identifier",
                "start": 1671,
                "end": 1677,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1678,
                  "end": 1683,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 1685,
              "end": 1696,
              "name": "description",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1715,
            "end": 1736,
            "name": "testPromiseAllSettled",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1739,
            "end": 1761,
            "callee": {
              "type": "MemberExpression",
              "start": 1739,
              "end": 1757,
              "object": {
                "type": "Identifier",
                "start": 1739,
                "end": 1746,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1747,
                "end": 1757,
                "name": "allSettled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1758,
                "end": 1760,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1769,
            "end": 1787,
            "name": "testStringMatchAll",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1790,
            "end": 1803,
            "callee": {
              "type": "MemberExpression",
              "start": 1790,
              "end": 1801,
              "object": {
                "type": "Literal",
                "start": 1790,
                "end": 1792,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 1793,
                "end": 1801,
                "name": "matchAll",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1811,
            "end": 1829,
            "name": "testRegExpMatchAll",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1832,
            "end": 1872,
            "callee": {
              "type": "MemberExpression",
              "start": 1832,
              "end": 1860,
              "object": {
                "type": "Literal",
                "start": 1832,
                "end": 1843,
                "value": null,
                "raw": "/matchAll/g",
                "regex": {
                  "flags": "g",
                  "pattern": "matchAll"
                }
              },
              "property": {
                "type": "MemberExpression",
                "start": 1844,
                "end": 1859,
                "object": {
                  "type": "Identifier",
                  "start": 1844,
                  "end": 1850,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1851,
                  "end": 1859,
                  "name": "matchAll",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1861,
                "end": 1871,
                "value": "matchAll",
                "raw": "\"matchAll\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1880,
            "end": 1890,
            "name": "testBigInt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1893,
            "end": 1904,
            "callee": {
              "type": "Identifier",
              "start": 1893,
              "end": 1899,
              "name": "BigInt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1900,
                "end": 1903,
                "value": 123,
                "raw": "123"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1923,
            "end": 1937,
            "name": "testPromiseAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1940,
            "end": 1955,
            "callee": {
              "type": "MemberExpression",
              "start": 1940,
              "end": 1951,
              "object": {
                "type": "Identifier",
                "start": 1940,
                "end": 1947,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1948,
                "end": 1951,
                "name": "any",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1952,
                "end": 1954,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1963,
            "end": 1983,
            "name": "testStringReplaceAll",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1986,
            "end": 2001,
            "callee": {
              "type": "MemberExpression",
              "start": 1986,
              "end": 1999,
              "object": {
                "type": "Literal",
                "start": 1986,
                "end": 1988,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 1989,
                "end": 1999,
                "name": "replaceAll",
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
