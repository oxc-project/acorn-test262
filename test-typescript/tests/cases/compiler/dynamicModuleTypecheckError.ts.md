__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    105
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
      ],
      "attributes": [],
      "declaration": {
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
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 17,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  56,
                  57
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
              "right": {
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    60,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1000",
                  "value": 1000,
                  "range": [
                    64,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "range": [
                  60,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "range": [
                56,
                68
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              56,
              69
            ],
            "loc": {
              "end": {
                "column": 17,
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
          48,
          104
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 28,
            "line": 3
          }
        }
      },
      "init": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                28,
                29
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              28,
              33
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          24,
          33
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
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            35,
            36
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "30",
          "value": 30,
          "range": [
            39,
            41
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        },
        "range": [
          35,
          41
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            43,
            44
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          43,
          46
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "range": [
        20,
        104
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
