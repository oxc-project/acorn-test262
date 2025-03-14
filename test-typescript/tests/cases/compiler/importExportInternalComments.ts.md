__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    22
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"foo\"",
        "value": "foo",
        "range": [
          15,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
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
    6,
    46
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "range": [
          33,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 33,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "range": [
        6,
        45
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 1
        },
        "start": {
          "column": 6,
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
      "column": 6,
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
    6,
    374
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"foo\"",
        "value": "foo",
        "range": [
          104,
          109
        ],
        "loc": {
          "end": {
            "column": 109,
            "line": 1
          },
          "start": {
            "column": 104,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            19,
            20
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              42,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 42,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              42,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 42,
                "line": 1
              }
            }
          },
          "range": [
            42,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              57,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 57,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              74,
              75
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 1
              },
              "start": {
                "column": 74,
                "line": 1
              }
            }
          },
          "range": [
            57,
            75
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 1
            },
            "start": {
              "column": 57,
              "line": 1
            }
          }
        }
      ],
      "range": [
        6,
        110
      ],
      "loc": {
        "end": {
          "column": 110,
          "line": 1
        },
        "start": {
          "column": 6,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"foo\"",
        "value": "foo",
        "range": [
          168,
          173
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 2
          },
          "start": {
            "column": 57,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              147,
              150
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 36,
                "line": 2
              }
            }
          },
          "range": [
            130,
            150
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 19,
              "line": 2
            }
          }
        }
      ],
      "range": [
        117,
        174
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 2
        },
        "start": {
          "column": 6,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              }
            },
            "operator": "void",
            "prefix": true,
            "range": [
              176,
              182
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              184,
              185
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              187,
              188
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              190,
              193
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          }
        ],
        "range": [
          176,
          193
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        176,
        194
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"foo\"",
        "value": "foo",
        "range": [
          324,
          329
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 6
          },
          "start": {
            "column": 87,
            "line": 6
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              264,
              265
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              264,
              265
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          },
          "range": [
            264,
            265
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 6
            },
            "start": {
              "column": 27,
              "line": 6
            }
          }
        },
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              296,
              297
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 6
              },
              "start": {
                "column": 59,
                "line": 6
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              279,
              280
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 6
              },
              "start": {
                "column": 42,
                "line": 6
              }
            }
          },
          "range": [
            279,
            297
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 6
            },
            "start": {
              "column": 42,
              "line": 6
            }
          }
        }
      ],
      "range": [
        243,
        330
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 6
        },
        "start": {
          "column": 6,
          "line": 6
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"foo\"",
        "value": "foo",
        "range": [
          369,
          374
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 7
          },
          "start": {
            "column": 38,
            "line": 7
          }
        }
      },
      "range": [
        337,
        374
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 6,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 43,
      "line": 7
    },
    "start": {
      "column": 6,
      "line": 1
    }
  },
  "hashbang": null
}
```
