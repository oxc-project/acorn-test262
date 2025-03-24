__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 607,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 41,
            "decorators": [],
            "name": "myNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 37,
                "end": 41
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 44,
            "end": 48,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 99,
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 82,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                    }
                  }
                ]
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 107,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 126,
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 129,
            "end": 175,
            "async": false,
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
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 168,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 171,
                      "end": 172,
                      "raw": "1",
                      "value": 1
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
                "start": 139,
                "end": 150,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 142,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 144,
                    "end": 150
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 177,
      "end": 251,
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "start": 219,
        "end": 251,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 219,
          "end": 250,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 226,
              "end": 249,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 245,
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 246,
                "end": 249,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 181,
        "end": 213,
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "start": 181,
          "end": 204,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 200,
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 204,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 209,
          "end": 213,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 252,
      "end": 328,
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "start": 296,
        "end": 328,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 296,
          "end": 327,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 303,
              "end": 326,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 322,
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 323,
                "end": 326,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 256,
        "end": 290,
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "start": 256,
          "end": 279,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 256,
            "end": 275,
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 276,
            "end": 279,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 284,
          "end": 290,
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 330,
      "end": 404,
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "start": 372,
        "end": 404,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 372,
          "end": 403,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 379,
              "end": 402,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 379,
                "end": 398,
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 402,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 372,
            "end": 378,
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 334,
        "end": 366,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 334,
          "end": 357,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 334,
            "end": 353,
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 354,
            "end": 357,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 362,
          "end": 366,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 417,
      "end": 493,
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "start": 461,
        "end": 493,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 461,
          "end": 492,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 468,
              "end": 491,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 468,
                "end": 487,
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 488,
                "end": 491,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 461,
            "end": 467,
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 421,
        "end": 455,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 421,
          "end": 444,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 421,
            "end": 440,
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 441,
            "end": 444,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 449,
          "end": 455,
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 507,
      "end": 607,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 536,
        "end": 607,
        "body": [
          {
            "type": "IfStatement",
            "start": 542,
            "end": 605,
            "alternate": null,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 584,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 576,
                          "end": 584,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 578,
                            "end": 584
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 588,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 545,
              "end": 557,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 551,
                "end": 557,
                "decorators": [],
                "name": "myNull",
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
        "start": 516,
        "end": 517,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 518,
          "end": 534,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
