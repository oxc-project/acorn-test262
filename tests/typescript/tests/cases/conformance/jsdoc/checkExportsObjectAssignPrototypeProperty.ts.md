__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 63
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 76,
                  "end": 80
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 85
                },
                "optional": false,
                "computed": false,
                "start": 76,
                "end": 85
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 92
              },
              "start": 76,
              "end": 92
            },
            "directive": null,
            "start": 76,
            "end": 93
          }
        ],
        "start": 70,
        "end": 95
      },
      "expression": false,
      "start": 48,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 102
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 112
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "describe",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 121
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 121
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "Person called ",
                    "raw": "\"Person called \"",
                    "start": 149,
                    "end": 165
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 168,
                      "end": 172
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 168,
                    "end": 177
                  },
                  "start": 149,
                  "end": 177
                },
                "start": 142,
                "end": 178
              }
            ],
            "start": 136,
            "end": 180
          },
          "expression": false,
          "start": 124,
          "end": 180
        },
        "start": 96,
        "end": 180
      },
      "directive": null,
      "start": 96,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 182,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 210
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 220
            },
            "optional": false,
            "computed": false,
            "start": 204,
            "end": 220
          },
          {
            "type": "Literal",
            "value": "thing",
            "raw": "\"thing\"",
            "start": 222,
            "end": 229
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 238
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 240,
                  "end": 242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 233,
                "end": 242
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 252
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 254,
                  "end": 258
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 244,
                "end": 258
              }
            ],
            "start": 231,
            "end": 260
          }
        ],
        "optional": false,
        "start": 182,
        "end": 261
      },
      "directive": null,
      "start": 182,
      "end": 262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 263,
          "end": 284
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 291
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 301
            },
            "optional": false,
            "computed": false,
            "start": 285,
            "end": 301
          },
          {
            "type": "Literal",
            "value": "readonlyProp",
            "raw": "\"readonlyProp\"",
            "start": 303,
            "end": 317
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 326
                },
                "value": {
                  "type": "Literal",
                  "value": "Smith",
                  "raw": "\"Smith\"",
                  "start": 328,
                  "end": 335
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 321,
                "end": 335
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 345
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 347,
                  "end": 352
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 337,
                "end": 352
              }
            ],
            "start": 319,
            "end": 354
          }
        ],
        "optional": false,
        "start": 263,
        "end": 355
      },
      "directive": null,
      "start": 263,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 378
          },
          "optional": false,
          "computed": false,
          "start": 357,
          "end": 378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 385
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 395
            },
            "optional": false,
            "computed": false,
            "start": 379,
            "end": 395
          },
          {
            "type": "Literal",
            "value": "rwAccessors",
            "raw": "\"rwAccessors\"",
            "start": 397,
            "end": 410
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
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 417
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 98122,
                          "raw": "98122",
                          "start": 429,
                          "end": 434
                        },
                        "start": 422,
                        "end": 434
                      }
                    ],
                    "start": 420,
                    "end": 436
                  },
                  "expression": false,
                  "start": 417,
                  "end": 436
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 414,
                "end": 436
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 441
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 442,
                      "end": 443
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 445,
                    "end": 459
                  },
                  "expression": false,
                  "start": 441,
                  "end": 459
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 438,
                "end": 459
              }
            ],
            "start": 412,
            "end": 461
          }
        ],
        "optional": false,
        "start": 357,
        "end": 462
      },
      "directive": null,
      "start": 357,
      "end": 463
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 470
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 485
          },
          "optional": false,
          "computed": false,
          "start": 464,
          "end": 485
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 492
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 502
            },
            "optional": false,
            "computed": false,
            "start": 486,
            "end": 502
          },
          {
            "type": "Literal",
            "value": "readonlyAccessor",
            "raw": "\"readonlyAccessor\"",
            "start": 504,
            "end": 522
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
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 529
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 21.75,
                          "raw": "21.75",
                          "start": 541,
                          "end": 546
                        },
                        "start": 534,
                        "end": 546
                      }
                    ],
                    "start": 532,
                    "end": 548
                  },
                  "expression": false,
                  "start": 529,
                  "end": 548
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 526,
                "end": 548
              }
            ],
            "start": 524,
            "end": 550
          }
        ],
        "optional": false,
        "start": 464,
        "end": 551
      },
      "directive": null,
      "start": 464,
      "end": 552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 559
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 574
          },
          "optional": false,
          "computed": false,
          "start": 553,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 581
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 591
            },
            "optional": false,
            "computed": false,
            "start": 575,
            "end": 591
          },
          {
            "type": "Literal",
            "value": "setonlyAccessor",
            "raw": "\"setonlyAccessor\"",
            "start": 593,
            "end": 610
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
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 652
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 653,
                      "end": 656
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 668,
                              "end": 672
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rwAccessors",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 684
                            },
                            "optional": false,
                            "computed": false,
                            "start": 668,
                            "end": 684
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 687,
                              "end": 693
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 694,
                                "end": 697
                              }
                            ],
                            "optional": false,
                            "start": 687,
                            "end": 698
                          },
                          "start": 668,
                          "end": 698
                        },
                        "directive": null,
                        "start": 668,
                        "end": 698
                      }
                    ],
                    "start": 658,
                    "end": 704
                  },
                  "expression": false,
                  "start": 652,
                  "end": 704
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 649,
                "end": 704
              }
            ],
            "start": 612,
            "end": 706
          }
        ],
        "optional": false,
        "start": 553,
        "end": 707
      },
      "directive": null,
      "start": 553,
      "end": 708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 709,
            "end": 715
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 723
          },
          "optional": false,
          "computed": false,
          "start": 709,
          "end": 723
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Person",
          "optional": false,
          "typeAnnotation": null,
          "start": 726,
          "end": 732
        },
        "start": 709,
        "end": 732
      },
      "directive": null,
      "start": 709,
      "end": 733
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 48,
  "end": 734
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 7,
        "end": 11
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 27
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./mod1",
          "raw": "\"./mod1\"",
          "start": 38,
          "end": 46
        },
        "start": 30,
        "end": 47
      },
      "importKind": "value",
      "start": 14,
      "end": 48
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 58
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Name",
                "raw": "\"Name\"",
                "start": 72,
                "end": 78
              }
            ],
            "start": 61,
            "end": 79
          },
          "definite": false,
          "start": 56,
          "end": 79
        }
      ],
      "declare": false,
      "start": 50,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 83
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 89
        },
        "optional": false,
        "computed": false,
        "start": 81,
        "end": 89
      },
      "directive": null,
      "start": 81,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 93
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 106
        },
        "optional": false,
        "computed": false,
        "start": 91,
        "end": 106
      },
      "directive": null,
      "start": 91,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 110
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 122
        },
        "optional": false,
        "computed": false,
        "start": 108,
        "end": 122
      },
      "directive": null,
      "start": 108,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 126
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 143
        },
        "optional": false,
        "computed": false,
        "start": 124,
        "end": 143
      },
      "directive": null,
      "start": 124,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 147
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "setonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 163
        },
        "optional": false,
        "computed": false,
        "start": 145,
        "end": 163
      },
      "directive": null,
      "start": 145,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 189,
          "end": 197
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 200,
          "end": 202
        },
        "start": 189,
        "end": 202
      },
      "directive": null,
      "start": 189,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 206
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 204,
          "end": 218
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 221,
          "end": 223
        },
        "start": 204,
        "end": 223
      },
      "directive": null,
      "start": 204,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 243
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 243
        },
        "right": {
          "type": "Literal",
          "value": "yes",
          "raw": "\"yes\"",
          "start": 246,
          "end": 251
        },
        "start": 225,
        "end": 251
      },
      "directive": null,
      "start": 225,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 295
          },
          "optional": false,
          "computed": false,
          "start": 280,
          "end": 295
        },
        "right": {
          "type": "Literal",
          "value": "name",
          "raw": "\"name\"",
          "start": 298,
          "end": 304
        },
        "start": 280,
        "end": 304
      },
      "directive": null,
      "start": 280,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 308
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 325
          },
          "optional": false,
          "computed": false,
          "start": 306,
          "end": 325
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 328,
          "end": 330
        },
        "start": 306,
        "end": 330
      },
      "directive": null,
      "start": 306,
      "end": 331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 340
          },
          "optional": false,
          "computed": false,
          "start": 332,
          "end": 340
        },
        "right": {
          "type": "Literal",
          "value": "no",
          "raw": "\"no\"",
          "start": 343,
          "end": 347
        },
        "start": 332,
        "end": 347
      },
      "directive": null,
      "start": 332,
      "end": 348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 363
          },
          "optional": false,
          "computed": false,
          "start": 349,
          "end": 363
        },
        "right": {
          "type": "Literal",
          "value": "no",
          "raw": "\"no\"",
          "start": 366,
          "end": 370
        },
        "start": 349,
        "end": 370
      },
      "directive": null,
      "start": 349,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 374
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 390
          },
          "optional": false,
          "computed": false,
          "start": 372,
          "end": 390
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 393,
          "end": 394
        },
        "start": 372,
        "end": 394
      },
      "directive": null,
      "start": 372,
      "end": 395
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 396
}
```
