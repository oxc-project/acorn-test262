__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    199
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
        "name": "decorator",
        "optional": false,
        "range": [
          17,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            },
            "range": [
              28,
              36
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                30,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            }
          },
          "range": [
            27,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 37,
            "line": 1
          }
        },
        "range": [
          37,
          42
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            39,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 39,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          104,
          107
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  82,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "range": [
                72,
                81
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 1,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              72,
              90
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 6
              }
            }
          },
          "range": [
            71,
            90
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Remote",
        "optional": false,
        "range": [
          97,
          103
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        71,
        107
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          175,
          199
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                181,
                192
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                192,
                197
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  195,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 15
                  },
                  "start": {
                    "column": 18,
                    "line": 15
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
                  "column": 20,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "range": [
              181,
              197
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 20,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"hi\"",
                "value": "hi",
                "range": [
                  149,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "range": [
                139,
                148
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 1,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              139,
              154
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 1,
                "line": 13
              }
            }
          },
          "range": [
            138,
            154
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherRomote",
        "optional": false,
        "range": [
          161,
          174
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        138,
        199
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
