__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 734,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 63,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 68,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 93,
            "expression": {
              "type": "AssignmentExpression",
              "start": 76,
              "end": 92,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 76,
                "end": 85,
                "object": {
                  "type": "ThisExpression",
                  "start": 76,
                  "end": 80
                },
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 85,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 88,
                "end": 92,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 181,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 180,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 121,
          "object": {
            "type": "MemberExpression",
            "start": 96,
            "end": 112,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 103,
              "end": 112,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 121,
            "decorators": [],
            "name": "describe",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 124,
          "end": 180,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 136,
            "end": 180,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 142,
                "end": 178,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 149,
                  "end": 177,
                  "left": {
                    "type": "Literal",
                    "start": 149,
                    "end": 165,
                    "value": "Person called ",
                    "raw": "\"Person called \""
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 168,
                    "end": 177,
                    "object": {
                      "type": "ThisExpression",
                      "start": 168,
                      "end": 172
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 177,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 262,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 261,
        "callee": {
          "type": "MemberExpression",
          "start": 182,
          "end": 203,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 188,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 203,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 204,
            "end": 220,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 210,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 220,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "Literal",
            "start": 222,
            "end": 229,
            "value": "thing",
            "raw": "\"thing\""
          },
          {
            "type": "ObjectExpression",
            "start": 231,
            "end": 260,
            "properties": [
              {
                "type": "Property",
                "start": 233,
                "end": 242,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "value": 42,
                  "raw": "42"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 244,
                "end": 258,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 254,
                  "end": 258,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 356,
      "expression": {
        "type": "CallExpression",
        "start": 263,
        "end": 355,
        "callee": {
          "type": "MemberExpression",
          "start": 263,
          "end": 284,
          "object": {
            "type": "Identifier",
            "start": 263,
            "end": 269,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 284,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 285,
            "end": 301,
            "object": {
              "type": "Identifier",
              "start": 285,
              "end": 291,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 292,
              "end": 301,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "Literal",
            "start": 303,
            "end": 317,
            "value": "readonlyProp",
            "raw": "\"readonlyProp\""
          },
          {
            "type": "ObjectExpression",
            "start": 319,
            "end": 354,
            "properties": [
              {
                "type": "Property",
                "start": 321,
                "end": 335,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 326,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 328,
                  "end": 335,
                  "value": "Smith",
                  "raw": "\"Smith\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 337,
                "end": 352,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 345,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 347,
                  "end": 352,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 463,
      "expression": {
        "type": "CallExpression",
        "start": 357,
        "end": 462,
        "callee": {
          "type": "MemberExpression",
          "start": 357,
          "end": 378,
          "object": {
            "type": "Identifier",
            "start": 357,
            "end": 363,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 378,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 379,
            "end": 395,
            "object": {
              "type": "Identifier",
              "start": 379,
              "end": 385,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 386,
              "end": 395,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "Literal",
            "start": 397,
            "end": 410,
            "value": "rwAccessors",
            "raw": "\"rwAccessors\""
          },
          {
            "type": "ObjectExpression",
            "start": 412,
            "end": 461,
            "properties": [
              {
                "type": "Property",
                "start": 414,
                "end": 436,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 417,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 417,
                  "end": 436,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 420,
                    "end": 436,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 422,
                        "end": 434,
                        "argument": {
                          "type": "Literal",
                          "start": 429,
                          "end": 434,
                          "value": 98122,
                          "raw": "98122"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 438,
                "end": 459,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 441,
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 441,
                  "end": 459,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 442,
                      "end": 443,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 445,
                    "end": 459,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 552,
      "expression": {
        "type": "CallExpression",
        "start": 464,
        "end": 551,
        "callee": {
          "type": "MemberExpression",
          "start": 464,
          "end": 485,
          "object": {
            "type": "Identifier",
            "start": 464,
            "end": 470,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 471,
            "end": 485,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 486,
            "end": 502,
            "object": {
              "type": "Identifier",
              "start": 486,
              "end": 492,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 493,
              "end": 502,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "Literal",
            "start": 504,
            "end": 522,
            "value": "readonlyAccessor",
            "raw": "\"readonlyAccessor\""
          },
          {
            "type": "ObjectExpression",
            "start": 524,
            "end": 550,
            "properties": [
              {
                "type": "Property",
                "start": 526,
                "end": 548,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 529,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 529,
                  "end": 548,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 532,
                    "end": 548,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 534,
                        "end": 546,
                        "argument": {
                          "type": "Literal",
                          "start": 541,
                          "end": 546,
                          "value": 21.75,
                          "raw": "21.75"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 708,
      "expression": {
        "type": "CallExpression",
        "start": 553,
        "end": 707,
        "callee": {
          "type": "MemberExpression",
          "start": 553,
          "end": 574,
          "object": {
            "type": "Identifier",
            "start": 553,
            "end": 559,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 560,
            "end": 574,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 575,
            "end": 591,
            "object": {
              "type": "Identifier",
              "start": 575,
              "end": 581,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 582,
              "end": 591,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "Literal",
            "start": 593,
            "end": 610,
            "value": "setonlyAccessor",
            "raw": "\"setonlyAccessor\""
          },
          {
            "type": "ObjectExpression",
            "start": 612,
            "end": 706,
            "properties": [
              {
                "type": "Property",
                "start": 649,
                "end": 704,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 652,
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 652,
                  "end": 704,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 653,
                      "end": 656,
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 658,
                    "end": 704,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 668,
                        "end": 698,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 668,
                          "end": 698,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 668,
                            "end": 684,
                            "object": {
                              "type": "ThisExpression",
                              "start": 668,
                              "end": 672
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 673,
                              "end": 684,
                              "decorators": [],
                              "name": "rwAccessors",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 687,
                            "end": 698,
                            "callee": {
                              "type": "Identifier",
                              "start": 687,
                              "end": 693,
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 694,
                                "end": 697,
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 733,
      "expression": {
        "type": "AssignmentExpression",
        "start": 709,
        "end": 732,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 709,
          "end": 723,
          "object": {
            "type": "Identifier",
            "start": 709,
            "end": 715,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 716,
            "end": 723,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 726,
          "end": 732,
          "decorators": [],
          "name": "Person",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 396,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "value": "./",
        "raw": "\"./\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 14,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 27,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 30,
        "end": 47,
        "expression": {
          "type": "Literal",
          "start": 38,
          "end": 46,
          "value": "./mod1",
          "raw": "\"./mod1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 79,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 61,
            "end": 79,
            "callee": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 72,
                "end": 78,
                "value": "Name",
                "raw": "\"Name\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 90,
      "expression": {
        "type": "MemberExpression",
        "start": 81,
        "end": 89,
        "object": {
          "type": "Identifier",
          "start": 81,
          "end": 83,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 89,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 107,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 106,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 94,
          "end": 106,
          "decorators": [],
          "name": "readonlyProp",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 123,
      "expression": {
        "type": "MemberExpression",
        "start": 108,
        "end": 122,
        "object": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 111,
          "end": 122,
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 144,
      "expression": {
        "type": "MemberExpression",
        "start": 124,
        "end": 143,
        "object": {
          "type": "Identifier",
          "start": 124,
          "end": 126,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 127,
          "end": 143,
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 164,
      "expression": {
        "type": "MemberExpression",
        "start": 145,
        "end": 163,
        "object": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 148,
          "end": 163,
          "decorators": [],
          "name": "setonlyAccessor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 203,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 202,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 189,
          "end": 197,
          "object": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 197,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 200,
          "end": 202,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 224,
      "expression": {
        "type": "AssignmentExpression",
        "start": 204,
        "end": 223,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 204,
          "end": 218,
          "object": {
            "type": "Identifier",
            "start": 204,
            "end": 206,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 218,
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 223,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 252,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 243,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 227,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 228,
            "end": 243,
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 246,
          "end": 251,
          "value": "yes",
          "raw": "\"yes\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 305,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 304,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 280,
          "end": 295,
          "object": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 283,
            "end": 295,
            "decorators": [],
            "name": "readonlyProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 298,
          "end": 304,
          "value": "name",
          "raw": "\"name\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 331,
      "expression": {
        "type": "AssignmentExpression",
        "start": 306,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 306,
          "end": 325,
          "object": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 325,
            "decorators": [],
            "name": "readonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 328,
          "end": 330,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 348,
      "expression": {
        "type": "AssignmentExpression",
        "start": 332,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 332,
          "end": 340,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 340,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 343,
          "end": 347,
          "value": "no",
          "raw": "\"no\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 371,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 370,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 349,
          "end": 363,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 366,
          "end": 370,
          "value": "no",
          "raw": "\"no\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 395,
      "expression": {
        "type": "AssignmentExpression",
        "start": 372,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 372,
          "end": 390,
          "object": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 375,
            "end": 390,
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 393,
          "end": 394,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
