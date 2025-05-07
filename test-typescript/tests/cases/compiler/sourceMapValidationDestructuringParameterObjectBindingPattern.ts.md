__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 584,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 109,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 109,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 84,
                    "end": 107,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 87,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 88,
                        "end": 99,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 119,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 122,
            "end": 129,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 148,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 148,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 185,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 166,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 166,
                  "raw": "\"mower\"",
                  "value": "mower",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 168,
                "end": 183,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 173,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 175,
                  "end": 183,
                  "raw": "\"mowing\"",
                  "value": "mowing",
                  "regex": null,
                  "bigint": null
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
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 253,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 226,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 232,
            "end": 251,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 232,
              "end": 250,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 244,
                  "end": 249,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 232,
                "end": 243,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 239,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 201,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 202,
          "end": 224,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 204,
              "end": 215,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 204,
                "end": 208,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 210,
                "end": 215,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 217,
            "end": 224,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 219,
              "end": 224,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 219,
                "end": 224,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 334,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 307,
        "end": 334,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 313,
            "end": 332,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 313,
              "end": 331,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 325,
                  "end": 330,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 313,
                "end": 324,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 320,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 324,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 267,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 268,
          "end": 305,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 270,
              "end": 281,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 270,
                "end": 274,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 276,
                "end": 281,
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 283,
              "end": 296,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 283,
                "end": 288,
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 290,
                "end": 296,
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 305,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 300,
              "end": 305,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 300,
                "end": 305,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 335,
      "end": 392,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 366,
        "end": 392,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 390,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 372,
              "end": 389,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 384,
                  "end": 388,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 372,
                "end": 383,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 379,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 383,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 348,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 349,
          "end": 364,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 351,
              "end": 355,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 351,
                "end": 355,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 351,
                "end": 355,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 364,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 359,
              "end": 364,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 359,
                "end": 364,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 407,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 394,
        "end": 406,
        "arguments": [
          {
            "type": "Identifier",
            "start": 399,
            "end": 405,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 394,
          "end": 398,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 408,
      "end": 456,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 408,
        "end": 455,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 413,
            "end": 454,
            "properties": [
              {
                "type": "Property",
                "start": 415,
                "end": 428,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 419,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 421,
                  "end": 428,
                  "raw": "\"Edger\"",
                  "value": "Edger",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 430,
                "end": 452,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 435,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 437,
                  "end": 452,
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 408,
          "end": 412,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 471,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 458,
        "end": 470,
        "arguments": [
          {
            "type": "Identifier",
            "start": 463,
            "end": 469,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 458,
          "end": 462,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 520,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 472,
        "end": 519,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 477,
            "end": 518,
            "properties": [
              {
                "type": "Property",
                "start": 479,
                "end": 492,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 483,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 485,
                  "end": 492,
                  "raw": "\"Edger\"",
                  "value": "Edger",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 494,
                "end": 516,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 499,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 501,
                  "end": 516,
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 472,
          "end": 476,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 522,
      "end": 535,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 522,
        "end": 534,
        "arguments": [
          {
            "type": "Identifier",
            "start": 527,
            "end": 533,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 522,
          "end": 526,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 536,
      "end": 584,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 536,
        "end": 583,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 541,
            "end": 582,
            "properties": [
              {
                "type": "Property",
                "start": 543,
                "end": 556,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 547,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 549,
                  "end": 556,
                  "raw": "\"Edger\"",
                  "value": "Edger",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 558,
                "end": 580,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 563,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 565,
                  "end": 580,
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 536,
          "end": 540,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
