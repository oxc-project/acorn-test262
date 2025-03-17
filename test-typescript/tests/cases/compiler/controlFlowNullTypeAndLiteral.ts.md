__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 608,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 41,
            "name": "myNull",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 37,
                "end": 41
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 44,
            "end": 48,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 99,
            "name": "objWithValMaybeNull",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 77,
                "end": 99,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 79,
                    "end": 97,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 82,
                      "name": "val",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 84,
                        "end": 97,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 84,
                            "end": 90
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 93,
                            "end": 97
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 102,
            "end": 112,
            "properties": [
              {
                "type": "Property",
                "start": 104,
                "end": 110,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 107,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
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
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 126,
            "name": "addOne",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 129,
            "end": 175,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 150,
                "name": "num",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 142,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 144,
                    "end": 150
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 152,
              "end": 175,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 158,
                  "end": 173,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 165,
                    "end": 172,
                    "left": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 168,
                      "name": "num",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 171,
                      "end": 172,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 177,
      "end": 251,
      "test": {
        "type": "BinaryExpression",
        "start": 181,
        "end": 213,
        "left": {
          "type": "MemberExpression",
          "start": 181,
          "end": 204,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 200,
            "name": "objWithValMaybeNull",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 204,
            "name": "val",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 209,
          "end": 213,
          "value": null,
          "raw": "null"
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 219,
        "end": 251,
        "expression": {
          "type": "CallExpression",
          "start": 219,
          "end": 250,
          "callee": {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "name": "addOne",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 226,
              "end": 249,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 245,
                "name": "objWithValMaybeNull",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 246,
                "end": 249,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 252,
      "end": 328,
      "test": {
        "type": "BinaryExpression",
        "start": 256,
        "end": 290,
        "left": {
          "type": "MemberExpression",
          "start": 256,
          "end": 279,
          "object": {
            "type": "Identifier",
            "start": 256,
            "end": 275,
            "name": "objWithValMaybeNull",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 276,
            "end": 279,
            "name": "val",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 284,
          "end": 290,
          "name": "myNull",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 296,
        "end": 328,
        "expression": {
          "type": "CallExpression",
          "start": 296,
          "end": 327,
          "callee": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "name": "addOne",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 303,
              "end": 326,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 322,
                "name": "objWithValMaybeNull",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 323,
                "end": 326,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 330,
      "end": 404,
      "test": {
        "type": "BinaryExpression",
        "start": 334,
        "end": 366,
        "left": {
          "type": "MemberExpression",
          "start": 334,
          "end": 357,
          "object": {
            "type": "Identifier",
            "start": 334,
            "end": 353,
            "name": "objWithValMaybeNull",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 354,
            "end": 357,
            "name": "val",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 362,
          "end": 366,
          "value": null,
          "raw": "null"
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 372,
        "end": 404,
        "expression": {
          "type": "CallExpression",
          "start": 372,
          "end": 403,
          "callee": {
            "type": "Identifier",
            "start": 372,
            "end": 378,
            "name": "addOne",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 379,
              "end": 402,
              "object": {
                "type": "Identifier",
                "start": 379,
                "end": 398,
                "name": "objWithValMaybeNull",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 402,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 417,
      "end": 493,
      "test": {
        "type": "BinaryExpression",
        "start": 421,
        "end": 455,
        "left": {
          "type": "MemberExpression",
          "start": 421,
          "end": 444,
          "object": {
            "type": "Identifier",
            "start": 421,
            "end": 440,
            "name": "objWithValMaybeNull",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 441,
            "end": 444,
            "name": "val",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 449,
          "end": 455,
          "name": "myNull",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 461,
        "end": 493,
        "expression": {
          "type": "CallExpression",
          "start": 461,
          "end": 492,
          "callee": {
            "type": "Identifier",
            "start": 461,
            "end": 467,
            "name": "addOne",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 468,
              "end": 491,
              "object": {
                "type": "Identifier",
                "start": 468,
                "end": 487,
                "name": "objWithValMaybeNull",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 488,
                "end": 491,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 507,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 517,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 518,
          "end": 534,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 519,
            "end": 534,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 521,
              "end": 534,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 521,
                  "end": 527
                },
                {
                  "type": "TSNullKeyword",
                  "start": 530,
                  "end": 534
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 536,
        "end": 607,
        "body": [
          {
            "type": "IfStatement",
            "start": 542,
            "end": 605,
            "test": {
              "type": "BinaryExpression",
              "start": 545,
              "end": 557,
              "left": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 551,
                "end": 557,
                "name": "myNull",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 559,
              "end": 605,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 569,
                  "end": 589,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 575,
                      "end": 588,
                      "id": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 584,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 576,
                          "end": 584,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 578,
                            "end": 584
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 588,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
