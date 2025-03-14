__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    123
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "print",
        "optional": false,
        "range": [
          17,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            },
            "range": [
              24,
              32
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                26,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          },
          "range": [
            23,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 1
          },
          "start": {
            "column": 33,
            "line": 1
          }
        },
        "range": [
          33,
          39
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            35,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 35,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        40
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      87,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    84,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  79,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 4
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [],
                "test": null,
                "range": [
                  97,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 5
                  },
                  "start": {
                    "column": 2,
                    "line": 5
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              65,
              108
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "'1'",
                  "value": "1",
                  "range": [
                    116,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "range": [
                  110,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                110,
                120
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 1,
                  "line": 7
                }
              }
            },
            "range": [
              110,
              121
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 1,
                "line": 7
              }
            }
          }
        ],
        "range": [
          62,
          123
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 21,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          50,
          53
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            },
            "range": [
              55,
              60
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                57,
                60
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            }
          },
          "range": [
            54,
            60
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        }
      ],
      "range": [
        41,
        123
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
