__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    30
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        0,
        30
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            28,
            30
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Schema",
          "optional": false,
          "range": [
            21,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          15,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 30,
      "line": 1
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
    35
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./schema\"",
        "value": "./schema",
        "range": [
          24,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              9,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              9,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 9,
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 35,
      "line": 1
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
    75
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./reexporter\"",
        "value": "./reexporter",
        "range": [
          17,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            11
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              7,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 11,
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
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        33,
        74
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            72,
            74
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 41,
              "line": 2
            },
            "start": {
              "column": 39,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mine",
          "optional": false,
          "range": [
            54,
            58
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "range": [
            67,
            71
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 2
            },
            "start": {
              "column": 34,
              "line": 2
            }
          }
        },
        "range": [
          48,
          74
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 41,
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
