__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    88
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
            "name": "cat",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              12,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
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
        15
      ],
      "loc": {
        "end": {
          "column": 15,
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
          26,
          28
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          22,
          25
        ],
        "loc": {
          "end": {
            "column": 9,
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
        16,
        28
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          38,
          41
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        29,
        42
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "range": [
                    80,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "range": [
                    80,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "range": [
                  80,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              71,
              86
            ],
            "loc": {
              "end": {
                "column": 19,
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
          65,
          88
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          61,
          64
        ],
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "kind": "namespace",
      "range": [
        43,
        88
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
