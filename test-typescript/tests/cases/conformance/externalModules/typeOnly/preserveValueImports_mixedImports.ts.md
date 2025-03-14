__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    66
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        30
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            28,
            30
          ],
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
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            16,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
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
      "type": "ExportNamedDeclaration",
      "range": [
        31,
        65
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            63,
            65
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 32,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentProps",
          "optional": false,
          "range": [
            48,
            62
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          38,
          65
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 34,
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
    58
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./exports.js\"",
        "value": "./exports.js",
        "range": [
          42,
          56
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 1
          },
          "start": {
            "column": 42,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
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
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentProps",
            "optional": false,
            "range": [
              20,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentProps",
            "optional": false,
            "range": [
              20,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "range": [
            20,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        57
      ],
      "loc": {
        "end": {
          "column": 57,
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
    63
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./exports.js\"",
        "value": "./exports.js",
        "range": [
          47,
          61
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 1
          },
          "start": {
            "column": 47,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
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
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentProps",
            "optional": false,
            "range": [
              25,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentProps",
            "optional": false,
            "range": [
              25,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          "range": [
            20,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        62
      ],
      "loc": {
        "end": {
          "column": 62,
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
