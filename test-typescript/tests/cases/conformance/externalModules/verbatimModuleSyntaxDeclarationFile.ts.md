__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    89
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "range": [
                36,
                42
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
            },
            "range": [
              27,
              43
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          21,
          45
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          18,
          20
        ],
        "decorators": [],
        "name": "NS",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        45
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
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "range": [
          56,
          58
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "range": [
        47,
        59
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTypes",
        "optional": false,
        "range": [
          80,
          87
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 6
          }
        }
      },
      "range": [
        60,
        88
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
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
    0,
    84
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./type1'",
        "value": "./type1",
        "range": [
          25,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS",
            "optional": false,
            "range": [
              17,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          "range": [
            12,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        35
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "range": [
          46,
          48
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        37,
        49
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModuleATypes",
        "optional": false,
        "range": [
          70,
          82
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
      "range": [
        50,
        83
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
