__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    69
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              27,
              52
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Types",
                "optional": false,
                "range": [
                  41,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "Db",
                "optional": false,
                "range": [
                  49,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 26,
                    "line": 2
                  }
                }
              },
              "range": [
                34,
                52
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 29,
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
          54
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
        "name": "Db",
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
        54
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
        "name": "Db",
        "optional": false,
        "range": [
          65,
          67
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
        56,
        68
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    77
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./db\"",
        "value": "./db",
        "range": [
          20,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 20,
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
            "name": "Db",
            "optional": false,
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
            7,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        28,
        77
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "range": [
                    67,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "range": [
                  63,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "range": [
                56,
                75
              ],
              "loc": {
                "end": {
                  "column": 23,
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
            50,
            77
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 22,
              "line": 3
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
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
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
        "params": [],
        "range": [
          35,
          77
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "column": 1,
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
