__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    50
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
            "name": "_exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              },
              "range": [
                22,
                29
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"cjs\"",
                  "value": "cjs",
                  "range": [
                    24,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                "range": [
                  24,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "name": "_exports",
        "optional": false,
        "range": [
          40,
          48
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        31,
        49
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
    166
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "range": [
              41,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          },
          "value": {
            "type": "Literal",
            "raw": "\"require\"",
            "value": "require",
            "range": [
              60,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 60,
                "line": 1
              }
            }
          },
          "range": [
            41,
            69
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 1
            },
            "start": {
              "column": 41,
              "line": 1
            }
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"pkg\"",
        "value": "pkg",
        "range": [
          28,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 28,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            12,
            22
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pkgRequire",
            "optional": false,
            "range": [
              12,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 22,
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
        72
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode",
            "range": [
              113,
              130
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 2
              },
              "start": {
                "column": 40,
                "line": 2
              }
            }
          },
          "value": {
            "type": "Literal",
            "raw": "\"import\"",
            "value": "import",
            "range": [
              132,
              140
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 2
              },
              "start": {
                "column": 59,
                "line": 2
              }
            }
          },
          "range": [
            113,
            140
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 2
            },
            "start": {
              "column": 40,
              "line": 2
            }
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"pkg\"",
        "value": "pkg",
        "range": [
          100,
          105
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 27,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            85,
            94
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pkgImport",
            "optional": false,
            "range": [
              85,
              94
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 21,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        }
      ],
      "range": [
        73,
        143
      ],
      "loc": {
        "end": {
          "column": 70,
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
        "name": "pkgRequire",
        "optional": false,
        "range": [
          144,
          154
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        144,
        155
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "pkgImport",
        "optional": false,
        "range": [
          156,
          165
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        156,
        166
      ],
      "loc": {
        "end": {
          "column": 10,
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
      "column": 10,
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
