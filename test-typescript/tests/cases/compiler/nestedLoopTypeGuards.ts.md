__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 771,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 474,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 43,
            "end": 76,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 47,
                "end": 75,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 75,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 50,
                      "end": 75,
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 50,
                          "end": 57
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 60,
                          "end": 66
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 69,
                          "end": 75
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 81,
            "end": 472,
            "test": {
              "type": "BinaryExpression",
              "start": 85,
              "end": 107,
              "left": {
                "type": "UnaryExpression",
                "start": 85,
                "end": 93,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 98,
                "end": 107,
                "value": "boolean",
                "raw": "'boolean'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 109,
              "end": 472,
              "body": [
                {
                  "type": "ForStatement",
                  "start": 165,
                  "end": 466,
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 170,
                    "end": 179,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 174,
                        "end": 179,
                        "id": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 175,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 178,
                          "end": 179,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 181,
                    "end": 186,
                    "left": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "start": 185,
                      "end": 186,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 188,
                    "end": 191,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 193,
                    "end": 466,
                    "body": [
                      {
                        "type": "ForStatement",
                        "start": 207,
                        "end": 237,
                        "init": {
                          "type": "VariableDeclaration",
                          "start": 212,
                          "end": 221,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 216,
                              "end": 221,
                              "id": {
                                "type": "Identifier",
                                "start": 216,
                                "end": 217,
                                "name": "j",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 220,
                                "end": 221,
                                "value": 0,
                                "raw": "0"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 223,
                          "end": 228,
                          "left": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 224,
                            "name": "j",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "<",
                          "right": {
                            "type": "Literal",
                            "start": 227,
                            "end": 228,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "start": 230,
                          "end": 233,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "name": "j",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 235,
                          "end": 237,
                          "body": []
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 250,
                        "end": 456,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 254,
                          "end": 275,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 254,
                            "end": 262,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 261,
                              "end": 262,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 267,
                            "end": 275,
                            "value": "string",
                            "raw": "'string'"
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 277,
                          "end": 456,
                          "body": [
                            {
                              "type": "ForStatement",
                              "start": 340,
                              "end": 442,
                              "init": {
                                "type": "VariableDeclaration",
                                "start": 345,
                                "end": 354,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 349,
                                    "end": 354,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 349,
                                      "end": 350,
                                      "name": "j",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 353,
                                      "end": 354,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 356,
                                "end": 361,
                                "left": {
                                  "type": "Identifier",
                                  "start": 356,
                                  "end": 357,
                                  "name": "j",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": "<",
                                "right": {
                                  "type": "Literal",
                                  "start": 360,
                                  "end": 361,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "start": 363,
                                "end": 366,
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 363,
                                  "end": 364,
                                  "name": "j",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 368,
                                "end": 442,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 390,
                                    "end": 399,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 390,
                                      "end": 398,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 390,
                                        "end": 391,
                                        "name": "a",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 392,
                                        "end": 398,
                                        "name": "length",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  }
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 476,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 487,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 490,
        "end": 771,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 519,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 518,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 518,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 518,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 503,
                      "end": 518,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 503,
                          "end": 509
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 512,
                          "end": 518
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 524,
            "end": 769,
            "test": {
              "type": "BinaryExpression",
              "start": 528,
              "end": 549,
              "left": {
                "type": "UnaryExpression",
                "start": 528,
                "end": 536,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 541,
                "end": 549,
                "value": "string",
                "raw": "'string'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 551,
              "end": 769,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 561,
                  "end": 763,
                  "test": {
                    "type": "Literal",
                    "start": 568,
                    "end": 569,
                    "value": 1,
                    "raw": "1"
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 571,
                    "end": 763,
                    "body": [
                      {
                        "type": "WhileStatement",
                        "start": 585,
                        "end": 597,
                        "test": {
                          "type": "Literal",
                          "start": 592,
                          "end": 593,
                          "value": 1,
                          "raw": "1"
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 595,
                          "end": 597,
                          "body": []
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 610,
                        "end": 753,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 614,
                          "end": 635,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 614,
                            "end": 622,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 622,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 627,
                            "end": 635,
                            "value": "string",
                            "raw": "'string'"
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 637,
                          "end": 753,
                          "body": [
                            {
                              "type": "WhileStatement",
                              "start": 655,
                              "end": 739,
                              "test": {
                                "type": "Literal",
                                "start": 662,
                                "end": 663,
                                "value": 1,
                                "raw": "1"
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 665,
                                "end": 739,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 687,
                                    "end": 696,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 687,
                                      "end": 695,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 687,
                                        "end": 688,
                                        "name": "a",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 689,
                                        "end": 695,
                                        "name": "length",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  }
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
