nestedLoopTypeGuards.ts
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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 75,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 81,
            "end": 472,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 109,
              "end": 472,
              "body": [
                {
                  "type": "ForStatement",
                  "start": 165,
                  "end": 466,
                  "body": {
                    "type": "BlockStatement",
                    "start": 193,
                    "end": 466,
                    "body": [
                      {
                        "type": "ForStatement",
                        "start": 207,
                        "end": 237,
                        "body": {
                          "type": "BlockStatement",
                          "start": 235,
                          "end": 237,
                          "body": []
                        },
                        "init": {
                          "type": "VariableDeclaration",
                          "start": 212,
                          "end": 221,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 216,
                              "end": 221,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 216,
                                "end": 217,
                                "decorators": [],
                                "name": "j",
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 220,
                                "end": 221,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 223,
                          "end": 228,
                          "operator": "<",
                          "left": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 224,
                            "decorators": [],
                            "name": "j",
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 227,
                            "end": 228,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "start": 230,
                          "end": 233,
                          "argument": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "decorators": [],
                            "name": "j",
                            "optional": false
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 250,
                        "end": 456,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 277,
                          "end": 456,
                          "body": [
                            {
                              "type": "ForStatement",
                              "start": 340,
                              "end": 442,
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
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 390,
                                        "end": 391,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 392,
                                        "end": 398,
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false
                                      }
                                    }
                                  }
                                ]
                              },
                              "init": {
                                "type": "VariableDeclaration",
                                "start": 345,
                                "end": 354,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 349,
                                    "end": 354,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 349,
                                      "end": 350,
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 353,
                                      "end": 354,
                                      "raw": "0",
                                      "value": 0
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 356,
                                "end": 361,
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "start": 356,
                                  "end": 357,
                                  "decorators": [],
                                  "name": "j",
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 360,
                                  "end": 361,
                                  "raw": "1",
                                  "value": 1
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "start": 363,
                                "end": 366,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 363,
                                  "end": 364,
                                  "decorators": [],
                                  "name": "j",
                                  "optional": false
                                },
                                "operator": "++",
                                "prefix": false
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 254,
                          "end": 275,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 254,
                            "end": 262,
                            "argument": {
                              "type": "Identifier",
                              "start": 261,
                              "end": 262,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 267,
                            "end": 275,
                            "raw": "'string'",
                            "value": "string"
                          }
                        }
                      }
                    ]
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 170,
                    "end": 179,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 174,
                        "end": 179,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 175,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 178,
                          "end": 179,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 181,
                    "end": 186,
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 185,
                      "end": 186,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 188,
                    "end": 191,
                    "argument": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 85,
              "end": 107,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 85,
                "end": 93,
                "argument": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 98,
                "end": 107,
                "raw": "'boolean'",
                "value": "boolean"
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
        "start": 32,
        "end": 34,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 476,
      "end": 771,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 518,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 524,
            "end": 769,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 551,
              "end": 769,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 561,
                  "end": 763,
                  "body": {
                    "type": "BlockStatement",
                    "start": 571,
                    "end": 763,
                    "body": [
                      {
                        "type": "WhileStatement",
                        "start": 585,
                        "end": 597,
                        "body": {
                          "type": "BlockStatement",
                          "start": 595,
                          "end": 597,
                          "body": []
                        },
                        "test": {
                          "type": "Literal",
                          "start": 592,
                          "end": 593,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 610,
                        "end": 753,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 637,
                          "end": 753,
                          "body": [
                            {
                              "type": "WhileStatement",
                              "start": 655,
                              "end": 739,
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
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 687,
                                        "end": 688,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 689,
                                        "end": 695,
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false
                                      }
                                    }
                                  }
                                ]
                              },
                              "test": {
                                "type": "Literal",
                                "start": 662,
                                "end": 663,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 614,
                          "end": 635,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 614,
                            "end": 622,
                            "argument": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 622,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 627,
                            "end": 635,
                            "raw": "'string'",
                            "value": "string"
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Literal",
                    "start": 568,
                    "end": 569,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 528,
              "end": 549,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 528,
                "end": 536,
                "argument": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 541,
                "end": 549,
                "raw": "'string'",
                "value": "string"
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
        "start": 485,
        "end": 487,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
