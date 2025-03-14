__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    204
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                13
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  9,
                  13
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              16,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            6,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                34,
                40
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  36,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              33,
              40
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              43,
              52
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            33,
            52
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        27,
        53
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                90,
                91
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              90,
              91
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          84,
          131
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 29,
            "line": 4
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              65,
              66
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            58,
            66
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 4
            },
            "start": {
              "column": 3,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"undefined\"",
          "value": "undefined",
          "range": [
            71,
            82
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "range": [
          58,
          82
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 4
          },
          "start": {
            "column": 3,
            "line": 4
          }
        }
      },
      "range": [
        55,
        131
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                168,
                169
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          162,
          203
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 29,
            "line": 8
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              143,
              144
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            136,
            144
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 8
            },
            "start": {
              "column": 3,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"undefined\"",
          "value": "undefined",
          "range": [
            149,
            160
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "range": [
          136,
          160
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 8
          },
          "start": {
            "column": 3,
            "line": 8
          }
        }
      },
      "range": [
        133,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
