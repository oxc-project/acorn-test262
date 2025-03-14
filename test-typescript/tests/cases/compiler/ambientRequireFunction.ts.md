__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    129
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
        "name": "require",
        "optional": false,
        "range": [
          17,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "name": "moduleName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            },
            "range": [
              35,
              43
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                37,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            }
          },
          "range": [
            25,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 1
          },
          "start": {
            "column": 44,
            "line": 1
          }
        },
        "range": [
          44,
          49
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            46,
            49
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 1
            },
            "start": {
              "column": 46,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              78,
              126
            ],
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "range": [
                  94,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
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
                        "column": 42,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
                        "line": 4
                      }
                    },
                    "range": [
                      108,
                      116
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        110,
                        116
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 36,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    107,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 4
                  },
                  "start": {
                    "column": 43,
                    "line": 4
                  }
                },
                "range": [
                  117,
                  125
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    119,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 4
                    },
                    "start": {
                      "column": 45,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                85,
                126
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 52,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          72,
          128
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 3
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"fs\"",
        "value": "fs",
        "range": [
          67,
          71
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        52,
        128
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
