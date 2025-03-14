__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    101
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          22
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                16,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "range": [
              16,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
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
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                28,
                42
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      30,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 2
                      },
                      "start": {
                        "column": 7,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        39,
                        42
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
                    },
                    "range": [
                      39,
                      42
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
                ],
                "range": [
                  30,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              27,
              42
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            27,
            42
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        23,
        43
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          45,
          46
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        45,
        47
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                97,
                98
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
              97,
              99
            ],
            "loc": {
              "end": {
                "column": 6,
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
          91,
          101
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
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
                81,
                82
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              81,
              83
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          75,
          85
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 27,
            "line": 5
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
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            52,
            60
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"object\"",
          "value": "object",
          "range": [
            65,
            73
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        },
        "range": [
          52,
          73
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 5
          }
        }
      },
      "range": [
        48,
        101
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
