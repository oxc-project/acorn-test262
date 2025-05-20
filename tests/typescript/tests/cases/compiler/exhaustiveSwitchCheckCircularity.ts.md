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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 46,
        "decorators": [],
        "name": "isNever",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 347,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 347,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 118,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 117,
                "definite": false,
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
                            "raw": "\"aaa\"",
                            "value": "aaa"
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
                            "raw": "\"bbb\"",
                            "value": "bbb"
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
                  "raw": "\"aaa\"",
                  "value": "aaa"
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 123,
            "end": 345,
            "body": {
              "type": "BlockStatement",
              "start": 136,
              "end": 345,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 146,
                  "end": 194,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 173,
                      "end": 184,
                      "consequent": [],
                      "test": {
                        "type": "Literal",
                        "start": 178,
                        "end": 183,
                        "raw": "\"aaa\"",
                        "value": "aaa"
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 157,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 203,
                  "end": 339,
                  "alternate": {
                    "type": "IfStatement",
                    "start": 272,
                    "end": 339,
                    "alternate": null,
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
                    "test": {
                      "type": "CallExpression",
                      "start": 276,
                      "end": 288,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 283,
                        "decorators": [],
                        "name": "isNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
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
                        "directive": null,
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
                            "raw": "\"bbb\"",
                            "value": "bbb"
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 207,
                    "end": 220,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 210,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 215,
                      "end": 220,
                      "raw": "\"aaa\"",
                      "value": "aaa"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 130,
              "end": 134,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 371,
      "end": 419,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 397,
        "decorators": [],
        "name": "functionB",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 687,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 448,
        "end": 687,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 454,
            "end": 484,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 458,
                "end": 483,
                "definite": false,
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
                            "raw": "\"A\"",
                            "value": "A"
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
                            "raw": "\"B\"",
                            "value": "B"
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
                  "raw": "\"A\"",
                  "value": "A"
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 489,
            "end": 685,
            "body": {
              "type": "BlockStatement",
              "start": 502,
              "end": 685,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 512,
                  "end": 528,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 516,
                      "end": 527,
                      "definite": false,
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
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "SwitchStatement",
                  "start": 537,
                  "end": 655,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 569,
                      "end": 645,
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
                              "directive": null,
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
                                  "raw": "\"AA\"",
                                  "value": "AA"
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "start": 625,
                              "end": 631,
                              "label": null
                            }
                          ]
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 574,
                        "end": 577,
                        "raw": "\"A\"",
                        "value": "A"
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 553,
                    "decorators": [],
                    "name": "unionVal",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 664,
                  "end": 679,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 664,
                    "end": 678,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 673,
                      "decorators": [],
                      "name": "functionB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 496,
              "end": 500,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 439,
        "decorators": [],
        "name": "functionC",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
