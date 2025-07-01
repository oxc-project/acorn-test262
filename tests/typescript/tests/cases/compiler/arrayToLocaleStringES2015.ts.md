__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 30,
                "end": 31
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 33,
                "end": 34
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 36,
                "end": 37
              }
            ],
            "start": 29,
            "end": 38
          },
          "definite": false,
          "start": 23,
          "end": 38
        }
      ],
      "declare": false,
      "start": 17,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 43
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 64
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 64
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 46,
          "end": 66
        },
        "start": 40,
        "end": 66
      },
      "directive": null,
      "start": 40,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 98
            },
            "optional": false,
            "computed": false,
            "start": 80,
            "end": 98
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 99,
              "end": 106
            }
          ],
          "optional": false,
          "start": 80,
          "end": 107
        },
        "start": 74,
        "end": 107
      },
      "directive": null,
      "start": 74,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 139
            },
            "optional": false,
            "computed": false,
            "start": 121,
            "end": 139
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 140,
              "end": 147
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 156
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 158,
                    "end": 168
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 151,
                  "end": 168
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 178
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 180,
                    "end": 185
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 170,
                  "end": 185
                }
              ],
              "start": 149,
              "end": 187
            }
          ],
          "optional": false,
          "start": 121,
          "end": 188
        },
        "start": 115,
        "end": 188
      },
      "directive": null,
      "start": 115,
      "end": 189
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
            "name": "dates",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 223
                  },
                  "start": 219,
                  "end": 225
                },
                "start": 210,
                "end": 225
              },
              "start": 208,
              "end": 225
            },
            "start": 203,
            "end": 225
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 237
                },
                "typeArguments": null,
                "arguments": [],
                "start": 229,
                "end": 239
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 249
                },
                "typeArguments": null,
                "arguments": [],
                "start": 241,
                "end": 251
              }
            ],
            "start": 228,
            "end": 252
          },
          "definite": false,
          "start": 203,
          "end": 252
        }
      ],
      "declare": false,
      "start": 197,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 257
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 280
            },
            "optional": false,
            "computed": false,
            "start": 260,
            "end": 280
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 260,
          "end": 282
        },
        "start": 254,
        "end": 282
      },
      "directive": null,
      "start": 254,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 301
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 316
            },
            "optional": false,
            "computed": false,
            "start": 296,
            "end": 316
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 317,
              "end": 321
            }
          ],
          "optional": false,
          "start": 296,
          "end": 322
        },
        "start": 290,
        "end": 322
      },
      "directive": null,
      "start": 290,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 333
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 341
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 356
            },
            "optional": false,
            "computed": false,
            "start": 336,
            "end": 356
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 357,
              "end": 361
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 373
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 375,
                    "end": 380
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 365,
                  "end": 380
                }
              ],
              "start": 363,
              "end": 382
            }
          ],
          "optional": false,
          "start": 336,
          "end": 383
        },
        "start": 330,
        "end": 383
      },
      "directive": null,
      "start": 330,
      "end": 384
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
            "name": "mixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 403
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 407,
                "end": 408
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 418
                },
                "typeArguments": null,
                "arguments": [],
                "start": 410,
                "end": 420
              },
              {
                "type": "Literal",
                "value": 59782,
                "raw": "59782",
                "start": 422,
                "end": 427
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 437
                },
                "typeArguments": null,
                "arguments": [],
                "start": 429,
                "end": 439
              }
            ],
            "start": 406,
            "end": 440
          },
          "definite": false,
          "start": 398,
          "end": 440
        }
      ],
      "declare": false,
      "start": 392,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 445
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 453
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 468
            },
            "optional": false,
            "computed": false,
            "start": 448,
            "end": 468
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 448,
          "end": 470
        },
        "start": 442,
        "end": 470
      },
      "directive": null,
      "start": 442,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 481
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 489
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 504
            },
            "optional": false,
            "computed": false,
            "start": 484,
            "end": 504
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 505,
              "end": 509
            }
          ],
          "optional": false,
          "start": 484,
          "end": 510
        },
        "start": 478,
        "end": 510
      },
      "directive": null,
      "start": 478,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 518,
          "end": 521
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 529
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 544
            },
            "optional": false,
            "computed": false,
            "start": 524,
            "end": 544
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de",
              "raw": "'de'",
              "start": 545,
              "end": 549
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 558
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 560,
                    "end": 570
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 553,
                  "end": 570
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 580
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 582,
                    "end": 587
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 572,
                  "end": 587
                }
              ],
              "start": 551,
              "end": 589
            }
          ],
          "optional": false,
          "start": 524,
          "end": 590
        },
        "start": 518,
        "end": 590
      },
      "directive": null,
      "start": 518,
      "end": 591
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 598,
          "end": 601
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "mixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 610
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 627
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 628,
                          "end": 634
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 637,
                            "end": 641
                          },
                          "typeArguments": null,
                          "start": 637,
                          "end": 641
                        }
                      ],
                      "start": 628,
                      "end": 641
                    }
                  ],
                  "start": 627,
                  "end": 642
                },
                "start": 614,
                "end": 642
              },
              "start": 605,
              "end": 642
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 644,
              "end": 658
            },
            "optional": false,
            "computed": false,
            "start": 604,
            "end": 658
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de",
              "raw": "'de'",
              "start": 659,
              "end": 663
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 675
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 677,
                    "end": 682
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 667,
                  "end": 682
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 689
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 691,
                    "end": 701
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 684,
                  "end": 701
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 711
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 713,
                    "end": 718
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 703,
                  "end": 718
                }
              ],
              "start": 665,
              "end": 720
            }
          ],
          "optional": false,
          "start": 604,
          "end": 721
        },
        "start": 598,
        "end": 721
      },
      "directive": null,
      "start": 598,
      "end": 722
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
            "name": "int8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 745
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 761
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 762,
                "end": 763
              }
            ],
            "start": 748,
            "end": 764
          },
          "definite": false,
          "start": 736,
          "end": 764
        }
      ],
      "declare": false,
      "start": 730,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 769
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 781
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 796
            },
            "optional": false,
            "computed": false,
            "start": 772,
            "end": 796
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 772,
          "end": 798
        },
        "start": 766,
        "end": 798
      },
      "directive": null,
      "start": 766,
      "end": 799
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 806,
          "end": 809
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 821
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 836
            },
            "optional": false,
            "computed": false,
            "start": 812,
            "end": 836
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 837,
              "end": 844
            }
          ],
          "optional": false,
          "start": 812,
          "end": 845
        },
        "start": 806,
        "end": 845
      },
      "directive": null,
      "start": 806,
      "end": 846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 853,
          "end": 856
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 868
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 883
            },
            "optional": false,
            "computed": false,
            "start": 859,
            "end": 883
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 884,
              "end": 891
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 900
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 902,
                    "end": 912
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 895,
                  "end": 912
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 914,
                    "end": 922
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 924,
                    "end": 929
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 914,
                  "end": 929
                }
              ],
              "start": 893,
              "end": 931
            }
          ],
          "optional": false,
          "start": 859,
          "end": 932
        },
        "start": 853,
        "end": 932
      },
      "directive": null,
      "start": 853,
      "end": 933
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
            "name": "uint8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 947,
            "end": 957
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 974
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 975,
                "end": 976
              }
            ],
            "start": 960,
            "end": 977
          },
          "definite": false,
          "start": 947,
          "end": 977
        }
      ],
      "declare": false,
      "start": 941,
      "end": 978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 979,
          "end": 982
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 995
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 1010
            },
            "optional": false,
            "computed": false,
            "start": 985,
            "end": 1010
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 985,
          "end": 1012
        },
        "start": 979,
        "end": 1012
      },
      "directive": null,
      "start": 979,
      "end": 1013
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1023
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1036
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1051
            },
            "optional": false,
            "computed": false,
            "start": 1026,
            "end": 1051
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1052,
              "end": 1059
            }
          ],
          "optional": false,
          "start": 1026,
          "end": 1060
        },
        "start": 1020,
        "end": 1060
      },
      "directive": null,
      "start": 1020,
      "end": 1061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1068,
          "end": 1071
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1084
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1085,
              "end": 1099
            },
            "optional": false,
            "computed": false,
            "start": 1074,
            "end": 1099
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1100,
              "end": 1107
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1116
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1118,
                    "end": 1128
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1111,
                  "end": 1128
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1130,
                    "end": 1138
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1140,
                    "end": 1145
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1130,
                  "end": 1145
                }
              ],
              "start": 1109,
              "end": 1147
            }
          ],
          "optional": false,
          "start": 1074,
          "end": 1148
        },
        "start": 1068,
        "end": 1148
      },
      "directive": null,
      "start": 1068,
      "end": 1149
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
            "name": "uint8ClampedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1180
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1204
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1205,
                "end": 1206
              }
            ],
            "start": 1183,
            "end": 1207
          },
          "definite": false,
          "start": 1163,
          "end": 1207
        }
      ],
      "declare": false,
      "start": 1157,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1209,
          "end": 1212
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1232
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1247
            },
            "optional": false,
            "computed": false,
            "start": 1215,
            "end": 1247
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1215,
          "end": 1249
        },
        "start": 1209,
        "end": 1249
      },
      "directive": null,
      "start": 1209,
      "end": 1250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1257,
          "end": 1260
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1280
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1295
            },
            "optional": false,
            "computed": false,
            "start": 1263,
            "end": 1295
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1296,
              "end": 1303
            }
          ],
          "optional": false,
          "start": 1263,
          "end": 1304
        },
        "start": 1257,
        "end": 1304
      },
      "directive": null,
      "start": 1257,
      "end": 1305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1315
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1335
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1336,
              "end": 1350
            },
            "optional": false,
            "computed": false,
            "start": 1318,
            "end": 1350
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1351,
              "end": 1358
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1362,
                    "end": 1367
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1369,
                    "end": 1379
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1362,
                  "end": 1379
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1381,
                    "end": 1389
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1391,
                    "end": 1396
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1381,
                  "end": 1396
                }
              ],
              "start": 1360,
              "end": 1398
            }
          ],
          "optional": false,
          "start": 1318,
          "end": 1399
        },
        "start": 1312,
        "end": 1399
      },
      "directive": null,
      "start": 1312,
      "end": 1400
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
            "name": "int16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1424
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1431,
              "end": 1441
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1442,
                "end": 1443
              }
            ],
            "start": 1427,
            "end": 1444
          },
          "definite": false,
          "start": 1414,
          "end": 1444
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1449
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1452,
              "end": 1462
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1477
            },
            "optional": false,
            "computed": false,
            "start": 1452,
            "end": 1477
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1452,
          "end": 1479
        },
        "start": 1446,
        "end": 1479
      },
      "directive": null,
      "start": 1446,
      "end": 1480
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1487,
          "end": 1490
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1493,
              "end": 1503
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1504,
              "end": 1518
            },
            "optional": false,
            "computed": false,
            "start": 1493,
            "end": 1518
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1519,
              "end": 1526
            }
          ],
          "optional": false,
          "start": 1493,
          "end": 1527
        },
        "start": 1487,
        "end": 1527
      },
      "directive": null,
      "start": 1487,
      "end": 1528
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1535,
          "end": 1538
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1541,
              "end": 1551
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1552,
              "end": 1566
            },
            "optional": false,
            "computed": false,
            "start": 1541,
            "end": 1566
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1567,
              "end": 1574
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1578,
                    "end": 1583
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1585,
                    "end": 1595
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1578,
                  "end": 1595
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1597,
                    "end": 1605
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1607,
                    "end": 1612
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1597,
                  "end": 1612
                }
              ],
              "start": 1576,
              "end": 1614
            }
          ],
          "optional": false,
          "start": 1541,
          "end": 1615
        },
        "start": 1535,
        "end": 1615
      },
      "directive": null,
      "start": 1535,
      "end": 1616
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
            "name": "uint16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1630,
            "end": 1641
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1648,
              "end": 1659
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1660,
                "end": 1661
              }
            ],
            "start": 1644,
            "end": 1662
          },
          "definite": false,
          "start": 1630,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1624,
      "end": 1663
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1664,
          "end": 1667
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1670,
              "end": 1681
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1682,
              "end": 1696
            },
            "optional": false,
            "computed": false,
            "start": 1670,
            "end": 1696
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1670,
          "end": 1698
        },
        "start": 1664,
        "end": 1698
      },
      "directive": null,
      "start": 1664,
      "end": 1699
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1706,
          "end": 1709
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1723
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1724,
              "end": 1738
            },
            "optional": false,
            "computed": false,
            "start": 1712,
            "end": 1738
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1739,
              "end": 1746
            }
          ],
          "optional": false,
          "start": 1712,
          "end": 1747
        },
        "start": 1706,
        "end": 1747
      },
      "directive": null,
      "start": 1706,
      "end": 1748
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1755,
          "end": 1758
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1772
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1773,
              "end": 1787
            },
            "optional": false,
            "computed": false,
            "start": 1761,
            "end": 1787
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1788,
              "end": 1795
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1799,
                    "end": 1804
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1806,
                    "end": 1816
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1799,
                  "end": 1816
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1826
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1828,
                    "end": 1833
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1818,
                  "end": 1833
                }
              ],
              "start": 1797,
              "end": 1835
            }
          ],
          "optional": false,
          "start": 1761,
          "end": 1836
        },
        "start": 1755,
        "end": 1836
      },
      "directive": null,
      "start": 1755,
      "end": 1837
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
            "name": "int32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1851,
            "end": 1861
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1878
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1879,
                "end": 1880
              }
            ],
            "start": 1864,
            "end": 1881
          },
          "definite": false,
          "start": 1851,
          "end": 1881
        }
      ],
      "declare": false,
      "start": 1845,
      "end": 1882
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1883,
          "end": 1886
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1899
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1914
            },
            "optional": false,
            "computed": false,
            "start": 1889,
            "end": 1914
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1889,
          "end": 1916
        },
        "start": 1883,
        "end": 1916
      },
      "directive": null,
      "start": 1883,
      "end": 1917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1924,
          "end": 1927
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1930,
              "end": 1940
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1941,
              "end": 1955
            },
            "optional": false,
            "computed": false,
            "start": 1930,
            "end": 1955
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1956,
              "end": 1963
            }
          ],
          "optional": false,
          "start": 1930,
          "end": 1964
        },
        "start": 1924,
        "end": 1964
      },
      "directive": null,
      "start": 1924,
      "end": 1965
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1972,
          "end": 1975
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1978,
              "end": 1988
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1989,
              "end": 2003
            },
            "optional": false,
            "computed": false,
            "start": 1978,
            "end": 2003
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2004,
              "end": 2011
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2015,
                    "end": 2020
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2022,
                    "end": 2032
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2015,
                  "end": 2032
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2034,
                    "end": 2042
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2044,
                    "end": 2049
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2034,
                  "end": 2049
                }
              ],
              "start": 2013,
              "end": 2051
            }
          ],
          "optional": false,
          "start": 1978,
          "end": 2052
        },
        "start": 1972,
        "end": 2052
      },
      "directive": null,
      "start": 1972,
      "end": 2053
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
            "name": "uint32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2067,
            "end": 2078
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2085,
              "end": 2096
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2097,
                "end": 2098
              }
            ],
            "start": 2081,
            "end": 2099
          },
          "definite": false,
          "start": 2067,
          "end": 2099
        }
      ],
      "declare": false,
      "start": 2061,
      "end": 2100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2101,
          "end": 2104
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2107,
              "end": 2118
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2119,
              "end": 2133
            },
            "optional": false,
            "computed": false,
            "start": 2107,
            "end": 2133
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2107,
          "end": 2135
        },
        "start": 2101,
        "end": 2135
      },
      "directive": null,
      "start": 2101,
      "end": 2136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2143,
          "end": 2146
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2149,
              "end": 2160
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2161,
              "end": 2175
            },
            "optional": false,
            "computed": false,
            "start": 2149,
            "end": 2175
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2176,
              "end": 2183
            }
          ],
          "optional": false,
          "start": 2149,
          "end": 2184
        },
        "start": 2143,
        "end": 2184
      },
      "directive": null,
      "start": 2143,
      "end": 2185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2192,
          "end": 2195
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2198,
              "end": 2209
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2210,
              "end": 2224
            },
            "optional": false,
            "computed": false,
            "start": 2198,
            "end": 2224
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2225,
              "end": 2232
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2236,
                    "end": 2241
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2243,
                    "end": 2253
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2236,
                  "end": 2253
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2255,
                    "end": 2263
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2265,
                    "end": 2270
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2255,
                  "end": 2270
                }
              ],
              "start": 2234,
              "end": 2272
            }
          ],
          "optional": false,
          "start": 2198,
          "end": 2273
        },
        "start": 2192,
        "end": 2273
      },
      "directive": null,
      "start": 2192,
      "end": 2274
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
            "name": "float32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2288,
            "end": 2300
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2307,
              "end": 2319
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2320,
                "end": 2321
              }
            ],
            "start": 2303,
            "end": 2322
          },
          "definite": false,
          "start": 2288,
          "end": 2322
        }
      ],
      "declare": false,
      "start": 2282,
      "end": 2323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2324,
          "end": 2327
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2330,
              "end": 2342
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2343,
              "end": 2357
            },
            "optional": false,
            "computed": false,
            "start": 2330,
            "end": 2357
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2330,
          "end": 2359
        },
        "start": 2324,
        "end": 2359
      },
      "directive": null,
      "start": 2324,
      "end": 2360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2367,
          "end": 2370
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2373,
              "end": 2385
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2386,
              "end": 2400
            },
            "optional": false,
            "computed": false,
            "start": 2373,
            "end": 2400
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2401,
              "end": 2408
            }
          ],
          "optional": false,
          "start": 2373,
          "end": 2409
        },
        "start": 2367,
        "end": 2409
      },
      "directive": null,
      "start": 2367,
      "end": 2410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2417,
          "end": 2420
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2423,
              "end": 2435
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2436,
              "end": 2450
            },
            "optional": false,
            "computed": false,
            "start": 2423,
            "end": 2450
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2451,
              "end": 2458
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2462,
                    "end": 2467
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2469,
                    "end": 2479
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2462,
                  "end": 2479
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2481,
                    "end": 2489
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2491,
                    "end": 2496
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2481,
                  "end": 2496
                }
              ],
              "start": 2460,
              "end": 2498
            }
          ],
          "optional": false,
          "start": 2423,
          "end": 2499
        },
        "start": 2417,
        "end": 2499
      },
      "directive": null,
      "start": 2417,
      "end": 2500
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
            "name": "float64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2514,
            "end": 2526
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2533,
              "end": 2545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2546,
                "end": 2547
              }
            ],
            "start": 2529,
            "end": 2548
          },
          "definite": false,
          "start": 2514,
          "end": 2548
        }
      ],
      "declare": false,
      "start": 2508,
      "end": 2549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2550,
          "end": 2553
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2556,
              "end": 2568
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2569,
              "end": 2583
            },
            "optional": false,
            "computed": false,
            "start": 2556,
            "end": 2583
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2556,
          "end": 2585
        },
        "start": 2550,
        "end": 2585
      },
      "directive": null,
      "start": 2550,
      "end": 2586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2593,
          "end": 2596
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2599,
              "end": 2611
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2612,
              "end": 2626
            },
            "optional": false,
            "computed": false,
            "start": 2599,
            "end": 2626
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2627,
              "end": 2634
            }
          ],
          "optional": false,
          "start": 2599,
          "end": 2635
        },
        "start": 2593,
        "end": 2635
      },
      "directive": null,
      "start": 2593,
      "end": 2636
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2643,
          "end": 2646
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2649,
              "end": 2661
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2662,
              "end": 2676
            },
            "optional": false,
            "computed": false,
            "start": 2649,
            "end": 2676
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2677,
              "end": 2684
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2688,
                    "end": 2693
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2695,
                    "end": 2705
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2688,
                  "end": 2705
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2707,
                    "end": 2715
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2717,
                    "end": 2722
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2707,
                  "end": 2722
                }
              ],
              "start": 2686,
              "end": 2724
            }
          ],
          "optional": false,
          "start": 2649,
          "end": 2725
        },
        "start": 2643,
        "end": 2725
      },
      "directive": null,
      "start": 2643,
      "end": 2726
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2732
}
```
