__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    117
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "range": [
                    35,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "init": null,
                "range": [
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              23,
              37
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "async": false,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "params": [],
            "range": [
              42,
              63
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "range": [
                86,
                89
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "declare": true,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                84,
                85
              ],
              "decorators": [],
              "name": "N",
              "optional": false,
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "kind": "module",
            "range": [
              69,
              89
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                111,
                114
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                109,
                110
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              95,
              114
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          17,
          116
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          15,
          16
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
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
      "kind": "module",
      "range": [
        0,
        116
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    53,
    154
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
            "range": [
              57,
              58
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  65,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  67,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "range": [
                65,
                68
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              61,
              70
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            57,
            70
          ],
          "loc": {
            "end": {
              "column": 17,
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
        53,
        71
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
