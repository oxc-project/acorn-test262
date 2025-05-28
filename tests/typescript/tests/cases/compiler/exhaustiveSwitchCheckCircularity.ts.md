__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 687,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 46,
        "decorators": [],
        "name": "isNever",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 55,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 55,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 50,
              "end": 55
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 56,
        "end": 65,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 58,
          "end": 65
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 347,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 118,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 117,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 109,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 96,
                      "end": 109,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 96,
                          "end": 101,
                          "literal": {
                            "type": "Literal",
                            "start": 96,
                            "end": 101,
                            "value": "aaa",
                            "raw": "\"aaa\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 104,
                          "end": 109,
                          "literal": {
                            "type": "Literal",
                            "start": 104,
                            "end": 109,
                            "value": "bbb",
                            "raw": "\"bbb\""
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 112,
                  "end": 117,
                  "value": "aaa",
                  "raw": "\"aaa\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 123,
            "end": 345,
            "test": {
              "type": "Literal",
              "start": 130,
              "end": 134,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 136,
              "end": 345,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 146,
                  "end": 194,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 157,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 173,
                      "end": 184,
                      "test": {
                        "type": "Literal",
                        "start": 178,
                        "end": 183,
                        "value": "aaa",
                        "raw": "\"aaa\""
                      },
                      "consequent": []
                    }
                  ]
                },
                {
                  "type": "IfStatement",
                  "start": 203,
                  "end": 339,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 207,
                    "end": 220,
                    "left": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 210,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 215,
                      "end": 220,
                      "value": "aaa",
                      "raw": "\"aaa\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 222,
                    "end": 258,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 236,
                        "end": 248,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 236,
                          "end": 247,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 239,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 242,
                            "end": 247,
                            "value": "bbb",
                            "raw": "\"bbb\""
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 272,
                    "end": 339,
                    "test": {
                      "type": "CallExpression",
                      "start": 276,
                      "end": 288,
                      "callee": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 283,
                        "decorators": [],
                        "name": "isNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 284,
                          "end": 287,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 290,
                      "end": 339,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 323,
                          "end": 329,
                          "label": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 371,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 397,
        "decorators": [],
        "name": "functionB",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 398,
          "end": 409,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 401,
            "end": 409,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 403,
              "end": 409
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 410,
        "end": 418,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 412,
          "end": 418
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 687,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 439,
        "decorators": [],
        "name": "functionC",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 441,
        "end": 447,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 443,
          "end": 447
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 448,
        "end": 687,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 454,
            "end": 484,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 458,
                "end": 483,
                "id": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 477,
                  "decorators": [],
                  "name": "unionVal",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 466,
                    "end": 477,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 468,
                      "end": 477,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 468,
                          "end": 471,
                          "literal": {
                            "type": "Literal",
                            "start": 468,
                            "end": 471,
                            "value": "A",
                            "raw": "\"A\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 474,
                          "end": 477,
                          "literal": {
                            "type": "Literal",
                            "start": 474,
                            "end": 477,
                            "value": "B",
                            "raw": "\"B\""
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 480,
                  "end": 483,
                  "value": "A",
                  "raw": "\"A\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 489,
            "end": 685,
            "test": {
              "type": "Literal",
              "start": 496,
              "end": 500,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 502,
              "end": 685,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 512,
                  "end": 528,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 516,
                      "end": 527,
                      "id": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 527,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 519,
                          "end": 527,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 521,
                            "end": 527
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "SwitchStatement",
                  "start": 537,
                  "end": 655,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 553,
                    "decorators": [],
                    "name": "unionVal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 569,
                      "end": 645,
                      "test": {
                        "type": "Literal",
                        "start": 574,
                        "end": 577,
                        "value": "A",
                        "raw": "\"A\""
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "start": 579,
                          "end": 645,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 597,
                              "end": 608,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 597,
                                "end": 607,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 597,
                                  "end": 600,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 603,
                                  "end": 607,
                                  "value": "AA",
                                  "raw": "\"AA\""
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "BreakStatement",
                              "start": 625,
                              "end": 631,
                              "label": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ExpressionStatement",
                  "start": 664,
                  "end": 679,
                  "expression": {
                    "type": "CallExpression",
                    "start": 664,
                    "end": 678,
                    "callee": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 673,
                      "decorators": [],
                      "name": "functionB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 674,
                        "end": 677,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
