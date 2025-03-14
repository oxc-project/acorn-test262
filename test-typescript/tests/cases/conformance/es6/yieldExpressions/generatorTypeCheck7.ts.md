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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          53,
          75
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hello",
              "optional": false,
              "range": [
                59,
                64
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                64,
                72
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  66,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              59,
              73
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 53,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "range": [
              28,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              44,
              52
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  45,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 45,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 1
              },
              "start": {
                "column": 44,
                "line": 1
              }
            }
          },
          "range": [
            28,
            52
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeirdIter",
        "optional": false,
        "range": [
          10,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
        75
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
        "body": [],
        "range": [
          102,
          105
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 4
          },
          "start": {
            "column": 26,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "range": [
          86,
          88
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 4
          }
        },
        "range": [
          90,
          101
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "WeirdIter",
            "optional": false,
            "range": [
              92,
              101
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          "range": [
            92,
            101
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        }
      },
      "range": [
        76,
        105
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 29,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
