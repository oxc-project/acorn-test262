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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 93,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 76,
              "end": 92,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 76,
                "end": 85,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 76,
                  "end": 80
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 85,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
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
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 63,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 180,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 121,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 96,
            "end": 112,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 103,
              "end": 112,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 121,
            "decorators": [],
            "name": "describe",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 124,
          "end": 180,
          "async": false,
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
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 149,
                    "end": 165,
                    "raw": "\"Person called \"",
                    "value": "Person called "
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 168,
                    "end": 177,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 168,
                      "end": 172
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 177,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 262,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 261,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 204,
            "end": 220,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 210,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 220,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 222,
            "end": 229,
            "raw": "\"thing\"",
            "value": "thing"
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 244,
                "end": 258,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 254,
                  "end": 258,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 182,
          "end": 203,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 188,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 203,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 356,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 263,
        "end": 355,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 285,
            "end": 301,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 285,
              "end": 291,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 292,
              "end": 301,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 303,
            "end": 317,
            "raw": "\"readonlyProp\"",
            "value": "readonlyProp"
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 326,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 328,
                  "end": 335,
                  "raw": "\"Smith\"",
                  "value": "Smith"
                }
              },
              {
                "type": "Property",
                "start": 337,
                "end": 352,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 345,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 347,
                  "end": 352,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 263,
          "end": 284,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 263,
            "end": 269,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 284,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 463,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 357,
        "end": 462,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 379,
            "end": 395,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 379,
              "end": 385,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 386,
              "end": 395,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 397,
            "end": 410,
            "raw": "\"rwAccessors\"",
            "value": "rwAccessors"
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 417,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 417,
                  "end": 436,
                  "async": false,
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
                          "raw": "98122",
                          "value": 98122
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 438,
                "end": 459,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 441,
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 441,
                  "end": 459,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 445,
                    "end": 459,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 357,
          "end": 378,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 357,
            "end": 363,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 378,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 552,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 464,
        "end": 551,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 486,
            "end": 502,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 486,
              "end": 492,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 493,
              "end": 502,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 504,
            "end": 522,
            "raw": "\"readonlyAccessor\"",
            "value": "readonlyAccessor"
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 529,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 529,
                  "end": 548,
                  "async": false,
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
                          "raw": "21.75",
                          "value": 21.75
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 464,
          "end": 485,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 464,
            "end": 470,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 471,
            "end": 485,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 708,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 553,
        "end": 707,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 575,
            "end": 591,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 575,
              "end": 581,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 582,
              "end": 591,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 593,
            "end": 610,
            "raw": "\"setonlyAccessor\"",
            "value": "setonlyAccessor"
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 652,
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 652,
                  "end": 704,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 658,
                    "end": 704,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 668,
                        "end": 698,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 668,
                          "end": 698,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 668,
                            "end": 684,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 668,
                              "end": 672
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 673,
                              "end": 684,
                              "decorators": [],
                              "name": "rwAccessors",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 687,
                            "end": 698,
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
                            "callee": {
                              "type": "Identifier",
                              "start": 687,
                              "end": 693,
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 553,
          "end": 574,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 553,
            "end": 559,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 560,
            "end": 574,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 733,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 709,
        "end": 732,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 709,
          "end": 723,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 709,
            "end": 715,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 716,
            "end": 723,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "raw": "\"./\"",
        "value": "./"
      },
      "specifiers": []
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 30,
        "end": 47,
        "expression": {
          "type": "Literal",
          "start": 38,
          "end": 46,
          "raw": "\"./mod1\"",
          "value": "./mod1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 79,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 72,
                "end": 78,
                "raw": "\"Name\"",
                "value": "Name"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "Person",
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
      "start": 81,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 81,
        "end": 89,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 81,
          "end": 83,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 89,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 107,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 106,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 94,
          "end": 106,
          "decorators": [],
          "name": "readonlyProp",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 123,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 108,
        "end": 122,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 111,
          "end": 122,
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 124,
        "end": 143,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 124,
          "end": 126,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 127,
          "end": 143,
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 164,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 145,
        "end": 163,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 148,
          "end": 163,
          "decorators": [],
          "name": "setonlyAccessor",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 203,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 202,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 189,
          "end": 197,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 197,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 200,
          "end": 202,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 224,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 204,
        "end": 223,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 204,
          "end": 218,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 204,
            "end": 206,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 218,
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 223,
          "raw": "11",
          "value": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 252,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 243,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 227,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 228,
            "end": 243,
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 246,
          "end": 251,
          "raw": "\"yes\"",
          "value": "yes"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 305,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 304,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 280,
          "end": 295,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 283,
            "end": 295,
            "decorators": [],
            "name": "readonlyProp",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 298,
          "end": 304,
          "raw": "\"name\"",
          "value": "name"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 331,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 306,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 306,
          "end": 325,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 325,
            "decorators": [],
            "name": "readonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 328,
          "end": 330,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 348,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 332,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 332,
          "end": 340,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 340,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 343,
          "end": 347,
          "raw": "\"no\"",
          "value": "no"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 371,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 370,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 349,
          "end": 363,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 366,
          "end": 370,
          "raw": "\"no\"",
          "value": "no"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 395,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 372,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 372,
          "end": 390,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 375,
            "end": 390,
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 393,
          "end": 394,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
