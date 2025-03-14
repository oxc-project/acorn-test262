__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    160
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          25,
          42
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "blub",
              "optional": false,
              "range": [
                31,
                35
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "6",
              "value": 6,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              31,
              40
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 8,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          23,
          24
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        17,
        42
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          63,
          160
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "blub",
              "optional": false,
              "range": [
                70,
                74
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "12",
              "value": 12,
              "range": [
                77,
                79
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              70,
              80
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                86,
                97
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                97,
                158
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject",
                      "range": [
                        110,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      110,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          145,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        145,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      145,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  100,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              86,
              158
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 18,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          51,
          52
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          61,
          62
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 7
          }
        }
      },
      "range": [
        45,
        160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
