__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    25
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        24
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            22,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 22,
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
          "name": "foo",
          "optional": false,
          "range": [
            16,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
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
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "column": 24,
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
    780
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"/foo\"",
        "value": "/foo",
        "range": [
          28,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              9,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "foo1",
            "optional": false,
            "range": [
              16,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            9,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
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
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"/bar\"",
        "value": "/bar",
        "range": [
          64,
          70
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 2
          },
          "start": {
            "column": 28,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              45,
              48
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "range": [
              52,
              56
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            45,
            56
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        36,
        71
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"c:/foo\"",
        "value": "c:/foo",
        "range": [
          100,
          108
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 28,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              81,
              84
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "range": [
              88,
              92
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            81,
            92
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 9,
              "line": 3
            }
          }
        }
      ],
      "range": [
        72,
        109
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"c:/bar\"",
        "value": "c:/bar",
        "range": [
          138,
          146
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 4
          },
          "start": {
            "column": 28,
            "line": 4
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              119,
              122
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "range": [
              126,
              130
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          "range": [
            119,
            130
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
        110,
        147
      ],
      "loc": {
        "end": {
          "column": 37,
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
        "raw": "\"c:\\\\foo\"",
        "value": "c:\\foo",
        "range": [
          176,
          185
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 5
          },
          "start": {
            "column": 28,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              157,
              160
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "foo3",
            "optional": false,
            "range": [
              164,
              168
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            157,
            168
          ],
          "loc": {
            "end": {
              "column": 20,
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
        148,
        186
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"c:\\\\bar\"",
        "value": "c:\\bar",
        "range": [
          215,
          224
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 6
          },
          "start": {
            "column": 28,
            "line": 6
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              196,
              199
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar3",
            "optional": false,
            "range": [
              203,
              207
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            196,
            207
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 6
            },
            "start": {
              "column": 9,
              "line": 6
            }
          }
        }
      ],
      "range": [
        187,
        225
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"//server/foo\"",
        "value": "//server/foo",
        "range": [
          254,
          268
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 7
          },
          "start": {
            "column": 28,
            "line": 7
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              235,
              238
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "range": [
              242,
              246
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            235,
            246
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 7
            },
            "start": {
              "column": 9,
              "line": 7
            }
          }
        }
      ],
      "range": [
        226,
        269
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"//server/bar\"",
        "value": "//server/bar",
        "range": [
          298,
          312
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 8
          },
          "start": {
            "column": 28,
            "line": 8
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              279,
              282
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 8
              },
              "start": {
                "column": 9,
                "line": 8
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar4",
            "optional": false,
            "range": [
              286,
              290
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            279,
            290
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 8
            },
            "start": {
              "column": 9,
              "line": 8
            }
          }
        }
      ],
      "range": [
        270,
        313
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"\\\\\\\\server\\\\foo\"",
        "value": "\\\\server\\foo",
        "range": [
          342,
          359
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 9
          },
          "start": {
            "column": 28,
            "line": 9
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              323,
              326
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo5",
            "optional": false,
            "range": [
              330,
              334
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          },
          "range": [
            323,
            334
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 9
            },
            "start": {
              "column": 9,
              "line": 9
            }
          }
        }
      ],
      "range": [
        314,
        360
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"\\\\\\\\server\\\\bar\"",
        "value": "\\\\server\\bar",
        "range": [
          389,
          406
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 10
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              370,
              373
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar5",
            "optional": false,
            "range": [
              377,
              381
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          },
          "range": [
            370,
            381
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 10
            },
            "start": {
              "column": 9,
              "line": 10
            }
          }
        }
      ],
      "range": [
        361,
        407
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file:///foo\"",
        "value": "file:///foo",
        "range": [
          436,
          449
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 11
          },
          "start": {
            "column": 28,
            "line": 11
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              417,
              420
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo6",
            "optional": false,
            "range": [
              424,
              428
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          },
          "range": [
            417,
            428
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 9,
              "line": 11
            }
          }
        }
      ],
      "range": [
        408,
        450
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file:///bar\"",
        "value": "file:///bar",
        "range": [
          479,
          492
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 12
          },
          "start": {
            "column": 28,
            "line": 12
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              460,
              463
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar6",
            "optional": false,
            "range": [
              467,
              471
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 16,
                "line": 12
              }
            }
          },
          "range": [
            460,
            471
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 12
            },
            "start": {
              "column": 9,
              "line": 12
            }
          }
        }
      ],
      "range": [
        451,
        493
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file://c:/foo\"",
        "value": "file://c:/foo",
        "range": [
          522,
          537
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 13
          },
          "start": {
            "column": 28,
            "line": 13
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              503,
              506
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo7",
            "optional": false,
            "range": [
              510,
              514
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 16,
                "line": 13
              }
            }
          },
          "range": [
            503,
            514
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 9,
              "line": 13
            }
          }
        }
      ],
      "range": [
        494,
        538
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file://c:/bar\"",
        "value": "file://c:/bar",
        "range": [
          567,
          582
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 14
          },
          "start": {
            "column": 28,
            "line": 14
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              548,
              551
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar7",
            "optional": false,
            "range": [
              555,
              559
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 16,
                "line": 14
              }
            }
          },
          "range": [
            548,
            559
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 14
            },
            "start": {
              "column": 9,
              "line": 14
            }
          }
        }
      ],
      "range": [
        539,
        583
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file://server/foo\"",
        "value": "file://server/foo",
        "range": [
          612,
          631
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 15
          },
          "start": {
            "column": 28,
            "line": 15
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              593,
              596
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo8",
            "optional": false,
            "range": [
              600,
              604
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          },
          "range": [
            593,
            604
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 15
            },
            "start": {
              "column": 9,
              "line": 15
            }
          }
        }
      ],
      "range": [
        584,
        632
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"file://server/bar\"",
        "value": "file://server/bar",
        "range": [
          661,
          680
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 16
          },
          "start": {
            "column": 28,
            "line": 16
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              642,
              645
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar8",
            "optional": false,
            "range": [
              649,
              653
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 16,
                "line": 16
              }
            }
          },
          "range": [
            642,
            653
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 16
            },
            "start": {
              "column": 9,
              "line": 16
            }
          }
        }
      ],
      "range": [
        633,
        681
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"http://server/foo\"",
        "value": "http://server/foo",
        "range": [
          710,
          729
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 17
          },
          "start": {
            "column": 28,
            "line": 17
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              691,
              694
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo9",
            "optional": false,
            "range": [
              698,
              702
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            }
          },
          "range": [
            691,
            702
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 17
            },
            "start": {
              "column": 9,
              "line": 17
            }
          }
        }
      ],
      "range": [
        682,
        730
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"http://server/bar\"",
        "value": "http://server/bar",
        "range": [
          759,
          778
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 18
          },
          "start": {
            "column": 28,
            "line": 18
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              740,
              743
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar9",
            "optional": false,
            "range": [
              747,
              751
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          },
          "range": [
            740,
            751
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 18
            },
            "start": {
              "column": 9,
              "line": 18
            }
          }
        }
      ],
      "range": [
        731,
        779
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
