__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    21
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        20
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
              "name": "foo",
              "optional": false,
              "range": [
                11,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
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
              "raw": "42",
              "value": 42,
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
              11,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "column": 20,
          "line": 1
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
      "line": 2
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
    58
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          7,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'./foo_0.js'",
          "value": "./foo_0.js",
          "range": [
            21,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "range": [
          13,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
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
              40,
              41
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
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  44,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  48,
                  51
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
                44,
                51
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                54,
                56
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              44,
              56
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            40,
            56
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
      "declare": false,
      "kind": "var",
      "range": [
        36,
        57
      ],
      "loc": {
        "end": {
          "column": 21,
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
      "line": 1
    }
  },
  "hashbang": null
}
```
