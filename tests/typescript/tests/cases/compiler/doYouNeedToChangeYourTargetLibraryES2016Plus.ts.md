__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testIncludes",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 28
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 32,
                    "end": 39
                  }
                ],
                "start": 31,
                "end": 40
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "includes",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 49
              },
              "optional": false,
              "computed": false,
              "start": 31,
              "end": 49
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 50,
                "end": 57
              }
            ],
            "optional": false,
            "start": 31,
            "end": 58
          },
          "definite": false,
          "start": 16,
          "end": 58
        }
      ],
      "declare": false,
      "start": 10,
      "end": 59
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringPadStart",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 95
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 98,
                "end": 100
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "padStart",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 109
              },
              "optional": false,
              "computed": false,
              "start": 98,
              "end": 109
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 110,
                "end": 111
              }
            ],
            "optional": false,
            "start": 98,
            "end": 112
          },
          "definite": false,
          "start": 77,
          "end": 112
        }
      ],
      "declare": false,
      "start": 71,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringPadEnd",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 136
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 139,
                "end": 141
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "padEnd",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 148
              },
              "optional": false,
              "computed": false,
              "start": 139,
              "end": 148
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 149,
                "end": 150
              }
            ],
            "optional": false,
            "start": 139,
            "end": 151
          },
          "definite": false,
          "start": 120,
          "end": 151
        }
      ],
      "declare": false,
      "start": 114,
      "end": 152
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 186
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 195
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 202
              },
              "optional": false,
              "computed": false,
              "start": 189,
              "end": 202
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 203,
                "end": 205
              }
            ],
            "optional": false,
            "start": 189,
            "end": 206
          },
          "definite": false,
          "start": 159,
          "end": 206
        }
      ],
      "declare": false,
      "start": 153,
      "end": 207
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 242
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "optional": false,
              "computed": false,
              "start": 245,
              "end": 259
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 260,
                "end": 262
              }
            ],
            "optional": false,
            "start": 245,
            "end": 263
          },
          "definite": false,
          "start": 214,
          "end": 263
        }
      ],
      "declare": false,
      "start": 208,
      "end": 264
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorGetOwnPropertyDescriptors",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 317
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 326
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertyDescriptors",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 352
              },
              "optional": false,
              "computed": false,
              "start": 320,
              "end": 352
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 353,
                "end": 355
              }
            ],
            "optional": false,
            "start": 320,
            "end": 356
          },
          "definite": false,
          "start": 271,
          "end": 356
        }
      ],
      "declare": false,
      "start": 265,
      "end": 357
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testIntlFormatToParts",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 385
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 396
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 411
                  },
                  "optional": false,
                  "computed": false,
                  "start": 392,
                  "end": 411
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-US",
                    "raw": "\"en-US\"",
                    "start": 412,
                    "end": 419
                  }
                ],
                "start": 388,
                "end": 420
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 434
              },
              "optional": false,
              "computed": false,
              "start": 388,
              "end": 434
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 388,
            "end": 436
          },
          "definite": false,
          "start": 364,
          "end": 436
        }
      ],
      "declare": false,
      "start": 358,
      "end": 437
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testAtomics",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 455
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 469
              },
              "optional": false,
              "computed": false,
              "start": 458,
              "end": 469
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uint8Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 484
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 485,
                    "end": 486
                  }
                ],
                "start": 470,
                "end": 487
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 489,
                "end": 490
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 492,
                "end": 493
              }
            ],
            "optional": false,
            "start": 458,
            "end": 494
          },
          "definite": false,
          "start": 444,
          "end": 494
        }
      ],
      "declare": false,
      "start": 438,
      "end": 495
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testSharedArrayBuffer",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 523
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 547
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 548,
                "end": 549
              }
            ],
            "start": 526,
            "end": 550
          },
          "definite": false,
          "start": 502,
          "end": 550
        }
      ],
      "declare": false,
      "start": 496,
      "end": 551
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testPromiseFinally",
            "optional": false,
            "typeAnnotation": null,
            "start": 569,
            "end": 587
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 601
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 608,
                      "end": 610
                    },
                    "id": null,
                    "generator": false,
                    "start": 602,
                    "end": 610
                  }
                ],
                "start": 590,
                "end": 611
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "finally",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 619
              },
              "optional": false,
              "computed": false,
              "start": 590,
              "end": 619
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 590,
            "end": 621
          },
          "definite": false,
          "start": 569,
          "end": 621
        }
      ],
      "declare": false,
      "start": 563,
      "end": 622
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testRegExpMatchArrayGroups",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 655
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": "2019-04-30",
                  "raw": "\"2019-04-30\"",
                  "start": 658,
                  "end": 670
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 676
                },
                "optional": false,
                "computed": false,
                "start": 658,
                "end": 676
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})",
                    "flags": "g"
                  },
                  "start": 677,
                  "end": 733
                }
              ],
              "optional": false,
              "start": 658,
              "end": 734
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "groups",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 741
            },
            "optional": false,
            "computed": false,
            "start": 658,
            "end": 741
          },
          "definite": false,
          "start": 629,
          "end": 741
        }
      ],
      "declare": false,
      "start": 623,
      "end": 742
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testRegExpExecArrayGroups",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 774
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})",
                    "flags": "g"
                  },
                  "start": 777,
                  "end": 833
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 838
                },
                "optional": false,
                "computed": false,
                "start": 777,
                "end": 838
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "2019-04-30",
                  "raw": "\"2019-04-30\"",
                  "start": 839,
                  "end": 851
                }
              ],
              "optional": false,
              "start": 777,
              "end": 852
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "groups",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 859
            },
            "optional": false,
            "computed": false,
            "start": 777,
            "end": 859
          },
          "definite": false,
          "start": 749,
          "end": 859
        }
      ],
      "declare": false,
      "start": 743,
      "end": 860
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testRegExpDotAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 883
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/foo/g",
              "regex": {
                "pattern": "foo",
                "flags": "g"
              },
              "start": 886,
              "end": 892
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "dotAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 893,
              "end": 899
            },
            "optional": false,
            "computed": false,
            "start": 886,
            "end": 899
          },
          "definite": false,
          "start": 867,
          "end": 899
        }
      ],
      "declare": false,
      "start": 861,
      "end": 900
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testIntlPluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 926
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 933,
                    "end": 937
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PluralRules",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 938,
                    "end": 949
                  },
                  "optional": false,
                  "computed": false,
                  "start": 933,
                  "end": 949
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "ar-EG",
                    "raw": "\"ar-EG\"",
                    "start": 950,
                    "end": 957
                  }
                ],
                "start": 929,
                "end": 958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "select",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 965
              },
              "optional": false,
              "computed": false,
              "start": 929,
              "end": 965
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 966,
                "end": 967
              }
            ],
            "optional": false,
            "start": 929,
            "end": 968
          },
          "definite": false,
          "start": 907,
          "end": 968
        }
      ],
      "declare": false,
      "start": 901,
      "end": 969
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testAsyncGenerator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1010
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1011,
                      "end": 1014
                    }
                  ],
                  "start": 1010,
                  "end": 1015
                },
                "start": 996,
                "end": 1015
              },
              "start": 994,
              "end": 1015
            },
            "start": 976,
            "end": 1015
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1018,
              "end": 1022
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1026,
              "end": 1029
            },
            "start": 1018,
            "end": 1029
          },
          "definite": false,
          "start": 976,
          "end": 1029
        }
      ],
      "declare": false,
      "start": 970,
      "end": 1030
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testAsyncGeneratorFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGeneratorFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1087
                },
                "typeArguments": null,
                "start": 1065,
                "end": 1087
              },
              "start": 1063,
              "end": 1087
            },
            "start": 1037,
            "end": 1087
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1090,
              "end": 1094
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1098,
              "end": 1101
            },
            "start": 1090,
            "end": 1101
          },
          "definite": false,
          "start": 1037,
          "end": 1101
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1102
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testAsyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1141
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1142,
                      "end": 1145
                    }
                  ],
                  "start": 1141,
                  "end": 1146
                },
                "start": 1128,
                "end": 1146
              },
              "start": 1126,
              "end": 1146
            },
            "start": 1109,
            "end": 1146
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1149,
              "end": 1153
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1157,
              "end": 1160
            },
            "start": 1149,
            "end": 1160
          },
          "definite": false,
          "start": 1109,
          "end": 1160
        }
      ],
      "declare": false,
      "start": 1103,
      "end": 1161
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testAsyncIterableIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1195,
                  "end": 1216
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1217,
                      "end": 1220
                    }
                  ],
                  "start": 1216,
                  "end": 1221
                },
                "start": 1195,
                "end": 1221
              },
              "start": 1193,
              "end": 1221
            },
            "start": 1168,
            "end": 1221
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1224,
              "end": 1228
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1232,
              "end": 1235
            },
            "start": 1224,
            "end": 1235
          },
          "definite": false,
          "start": 1168,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1162,
      "end": 1236
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testNumberFormatFormatToParts",
            "optional": false,
            "typeAnnotation": null,
            "start": 1243,
            "end": 1272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1279,
                    "end": 1283
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1296
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1279,
                  "end": 1296
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-US",
                    "raw": "\"en-US\"",
                    "start": 1297,
                    "end": 1304
                  }
                ],
                "start": 1275,
                "end": 1305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 1306,
                "end": 1319
              },
              "optional": false,
              "computed": false,
              "start": 1275,
              "end": 1319
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1275,
            "end": 1321
          },
          "definite": false,
          "start": 1243,
          "end": 1321
        }
      ],
      "declare": false,
      "start": 1237,
      "end": 1322
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayFlat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1340,
            "end": 1353
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1356,
                "end": 1358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1359,
                "end": 1363
              },
              "optional": false,
              "computed": false,
              "start": 1356,
              "end": 1363
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1356,
            "end": 1365
          },
          "definite": false,
          "start": 1340,
          "end": 1365
        }
      ],
      "declare": false,
      "start": 1334,
      "end": 1366
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayFlatMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1373,
            "end": 1389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1392,
                "end": 1394
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1402
              },
              "optional": false,
              "computed": false,
              "start": 1392,
              "end": 1402
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1392,
            "end": 1404
          },
          "definite": false,
          "start": 1373,
          "end": 1404
        }
      ],
      "declare": false,
      "start": 1367,
      "end": 1405
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorFromEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1444
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1465
              },
              "optional": false,
              "computed": false,
              "start": 1447,
              "end": 1465
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1466,
                "end": 1468
              }
            ],
            "optional": false,
            "start": 1447,
            "end": 1469
          },
          "definite": false,
          "start": 1412,
          "end": 1469
        }
      ],
      "declare": false,
      "start": 1406,
      "end": 1470
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringTrimStart",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1496
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1499,
                "end": 1501
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimStart",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1511
              },
              "optional": false,
              "computed": false,
              "start": 1499,
              "end": 1511
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1499,
            "end": 1513
          },
          "definite": false,
          "start": 1477,
          "end": 1513
        }
      ],
      "declare": false,
      "start": 1471,
      "end": 1514
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringTrimEnd",
            "optional": false,
            "typeAnnotation": null,
            "start": 1521,
            "end": 1538
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1541,
                "end": 1543
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimEnd",
                "optional": false,
                "typeAnnotation": null,
                "start": 1544,
                "end": 1551
              },
              "optional": false,
              "computed": false,
              "start": 1541,
              "end": 1551
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1541,
            "end": 1553
          },
          "definite": false,
          "start": 1521,
          "end": 1553
        }
      ],
      "declare": false,
      "start": 1515,
      "end": 1554
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringTrimLeft",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1582,
                "end": 1584
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimLeft",
                "optional": false,
                "typeAnnotation": null,
                "start": 1585,
                "end": 1593
              },
              "optional": false,
              "computed": false,
              "start": 1582,
              "end": 1593
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1582,
            "end": 1595
          },
          "definite": false,
          "start": 1561,
          "end": 1595
        }
      ],
      "declare": false,
      "start": 1555,
      "end": 1596
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringTrimRight",
            "optional": false,
            "typeAnnotation": null,
            "start": 1603,
            "end": 1622
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1625,
                "end": 1627
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimRight",
                "optional": false,
                "typeAnnotation": null,
                "start": 1628,
                "end": 1637
              },
              "optional": false,
              "computed": false,
              "start": 1625,
              "end": 1637
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1625,
            "end": 1639
          },
          "definite": false,
          "start": 1603,
          "end": 1639
        }
      ],
      "declare": false,
      "start": 1597,
      "end": 1640
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testSymbolDescription",
            "optional": false,
            "typeAnnotation": null,
            "start": 1647,
            "end": 1668
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1671,
                "end": 1677
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1678,
                  "end": 1683
                }
              ],
              "optional": false,
              "start": 1671,
              "end": 1684
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null,
              "start": 1685,
              "end": 1696
            },
            "optional": false,
            "computed": false,
            "start": 1671,
            "end": 1696
          },
          "definite": false,
          "start": 1647,
          "end": 1696
        }
      ],
      "declare": false,
      "start": 1641,
      "end": 1697
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testPromiseAllSettled",
            "optional": false,
            "typeAnnotation": null,
            "start": 1715,
            "end": 1736
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1739,
                "end": 1746
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "allSettled",
                "optional": false,
                "typeAnnotation": null,
                "start": 1747,
                "end": 1757
              },
              "optional": false,
              "computed": false,
              "start": 1739,
              "end": 1757
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1758,
                "end": 1760
              }
            ],
            "optional": false,
            "start": 1739,
            "end": 1761
          },
          "definite": false,
          "start": 1715,
          "end": 1761
        }
      ],
      "declare": false,
      "start": 1709,
      "end": 1762
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringMatchAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 1769,
            "end": 1787
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1790,
                "end": 1792
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1793,
                "end": 1801
              },
              "optional": false,
              "computed": false,
              "start": 1790,
              "end": 1801
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1790,
            "end": 1803
          },
          "definite": false,
          "start": 1769,
          "end": 1803
        }
      ],
      "declare": false,
      "start": 1763,
      "end": 1804
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testRegExpMatchAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 1811,
            "end": 1829
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": null,
                "raw": "/matchAll/g",
                "regex": {
                  "pattern": "matchAll",
                  "flags": "g"
                },
                "start": 1832,
                "end": 1843
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1850
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matchAll",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1851,
                  "end": 1859
                },
                "optional": false,
                "computed": false,
                "start": 1844,
                "end": 1859
              },
              "optional": false,
              "computed": true,
              "start": 1832,
              "end": 1860
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "matchAll",
                "raw": "\"matchAll\"",
                "start": 1861,
                "end": 1871
              }
            ],
            "optional": false,
            "start": 1832,
            "end": 1872
          },
          "definite": false,
          "start": 1811,
          "end": 1872
        }
      ],
      "declare": false,
      "start": 1805,
      "end": 1873
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testBigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 1880,
            "end": 1890
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1893,
              "end": 1899
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1900,
                "end": 1903
              }
            ],
            "optional": false,
            "start": 1893,
            "end": 1904
          },
          "definite": false,
          "start": 1880,
          "end": 1904
        }
      ],
      "declare": false,
      "start": 1874,
      "end": 1905
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testPromiseAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 1923,
            "end": 1937
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1940,
                "end": 1947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 1948,
                "end": 1951
              },
              "optional": false,
              "computed": false,
              "start": 1940,
              "end": 1951
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1952,
                "end": 1954
              }
            ],
            "optional": false,
            "start": 1940,
            "end": 1955
          },
          "definite": false,
          "start": 1923,
          "end": 1955
        }
      ],
      "declare": false,
      "start": 1917,
      "end": 1956
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringReplaceAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 1963,
            "end": 1983
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1986,
                "end": 1988
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1989,
                "end": 1999
              },
              "optional": false,
              "computed": false,
              "start": 1986,
              "end": 1999
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1986,
            "end": 2001
          },
          "definite": false,
          "start": 1963,
          "end": 2001
        }
      ],
      "declare": false,
      "start": 1957,
      "end": 2002
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 2013
}
```
