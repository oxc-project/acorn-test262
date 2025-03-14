__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    147,
    318
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
            "name": "empty",
            "optional": false,
            "range": [
              153,
              158
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"empty\"",
            "value": "empty",
            "range": [
              161,
              168
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            153,
            168
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        147,
        169
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
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
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              188,
              190
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "empty",
            "optional": false,
            "range": [
              179,
              184
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            179,
            190
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 9,
              "line": 4
            }
          }
        }
      ],
      "range": [
        170,
        193
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_exportEmpty\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_exportEmpty",
        "range": [
          220,
          271
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 5
          },
          "start": {
            "column": 26,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              203,
              205
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              209,
              212
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "range": [
            203,
            212
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 5
            },
            "start": {
              "column": 9,
              "line": 5
            }
          }
        }
      ],
      "range": [
        194,
        272
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                282,
                310
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"type error expected here\"",
                  "value": "type error expected here",
                  "range": [
                    284,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  284,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              279,
              310
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              313,
              316
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 6
              },
              "start": {
                "column": 40,
                "line": 6
              }
            }
          },
          "range": [
            279,
            316
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        273,
        317
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
