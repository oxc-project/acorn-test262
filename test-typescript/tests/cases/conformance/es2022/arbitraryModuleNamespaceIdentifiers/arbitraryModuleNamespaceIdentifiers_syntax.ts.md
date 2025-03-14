__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    257
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        23
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
                13,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "123",
              "value": 123,
              "range": [
                19,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "column": 23,
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              40,
              49
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              33,
              36
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
          "range": [
            33,
            49
          ],
          "loc": {
            "end": {
              "column": 25,
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
        24,
        52
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "raw": "\"./values-valid\"",
        "value": "./values-valid",
        "range": [
          86,
          102
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 3
          },
          "start": {
            "column": 33,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              62,
              71
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "name": "bar",
            "optional": false,
            "range": [
              75,
              78
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          },
          "range": [
            62,
            78
          ],
          "loc": {
            "end": {
              "column": 25,
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
        53,
        103
      ],
      "loc": {
        "end": {
          "column": 50,
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
      "source": {
        "type": "Literal",
        "raw": "\"./values-valid\"",
        "value": "./values-valid",
        "range": [
          143,
          159
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 4
          },
          "start": {
            "column": 39,
            "line": 4
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 2\"",
            "value": "valid 2",
            "range": [
              126,
              135
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              113,
              122
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            113,
            135
          ],
          "loc": {
            "end": {
              "column": 31,
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
        104,
        160
      ],
      "loc": {
        "end": {
          "column": 56,
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
        "raw": "\"./values-valid\"",
        "value": "./values-valid",
        "range": [
          194,
          210
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 5
          },
          "start": {
            "column": 33,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 3\"",
            "value": "valid 3",
            "range": [
              177,
              186
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              170,
              173
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
          "range": [
            170,
            186
          ],
          "loc": {
            "end": {
              "column": 25,
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
        161,
        211
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": {
        "type": "Literal",
        "raw": "\"valid 4\"",
        "value": "valid 4",
        "range": [
          224,
          233
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./values-valid\"",
        "value": "./values-valid",
        "range": [
          239,
          255
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 6
          },
          "start": {
            "column": 27,
            "line": 6
          }
        }
      },
      "range": [
        212,
        256
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
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
A string literal cannot be used as a local exported binding without `from`.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    297
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        22
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            12,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "123",
            "value": 123,
            "range": [
              18,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "range": [
            18,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "range": [
          7,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 22,
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
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              44,
              53
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              37,
              40
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "range": [
            37,
            53
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        }
      ],
      "range": [
        23,
        56
      ],
      "loc": {
        "end": {
          "column": 33,
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
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid",
        "range": [
          95,
          115
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 3
          },
          "start": {
            "column": 38,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              71,
              80
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              84,
              87
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          },
          "range": [
            71,
            87
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "range": [
        57,
        116
      ],
      "loc": {
        "end": {
          "column": 59,
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
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid",
        "range": [
          161,
          181
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 4
          },
          "start": {
            "column": 44,
            "line": 4
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 2\"",
            "value": "valid 2",
            "range": [
              144,
              153
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 27,
                "line": 4
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              131,
              140
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "range": [
            131,
            153
          ],
          "loc": {
            "end": {
              "column": 36,
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
        117,
        182
      ],
      "loc": {
        "end": {
          "column": 65,
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
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid",
        "range": [
          221,
          241
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 5
          },
          "start": {
            "column": 38,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 3\"",
            "value": "valid 3",
            "range": [
              204,
              213
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              197,
              200
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "range": [
            197,
            213
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "range": [
        183,
        242
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": {
        "type": "Literal",
        "raw": "\"valid 4\"",
        "value": "valid 4",
        "range": [
          260,
          269
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"./type-decls-valid\"",
        "value": "./type-decls-valid",
        "range": [
          275,
          295
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 32,
            "line": 6
          }
        }
      },
      "range": [
        243,
        296
      ],
      "loc": {
        "end": {
          "column": 53,
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
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
A string literal cannot be used as a local exported binding without `from`.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    246
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        22
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            12,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "123",
            "value": 123,
            "range": [
              18,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "range": [
            18,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "range": [
          7,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 22,
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              44,
              53
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            }
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              37,
              40
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "range": [
            32,
            53
          ],
          "loc": {
            "end": {
              "column": 30,
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
        23,
        56
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "raw": "\"./type-clause-valid\"",
        "value": "./type-clause-valid",
        "range": [
          95,
          116
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 3
          },
          "start": {
            "column": 38,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              71,
              80
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              84,
              87
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          },
          "range": [
            66,
            87
          ],
          "loc": {
            "end": {
              "column": 30,
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
        57,
        117
      ],
      "loc": {
        "end": {
          "column": 60,
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
      "source": {
        "type": "Literal",
        "raw": "\"./type-clause-valid\"",
        "value": "./type-clause-valid",
        "range": [
          162,
          183
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 4
          },
          "start": {
            "column": 44,
            "line": 4
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 2\"",
            "value": "valid 2",
            "range": [
              145,
              154
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 27,
                "line": 4
              }
            }
          },
          "exportKind": "type",
          "local": {
            "type": "Literal",
            "raw": "\"valid 1\"",
            "value": "valid 1",
            "range": [
              132,
              141
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "range": [
            127,
            154
          ],
          "loc": {
            "end": {
              "column": 36,
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
        118,
        184
      ],
      "loc": {
        "end": {
          "column": 66,
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
        "raw": "\"./type-clause-valid\"",
        "value": "./type-clause-valid",
        "range": [
          223,
          244
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 5
          },
          "start": {
            "column": 38,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"valid 3\"",
            "value": "valid 3",
            "range": [
              206,
              215
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              199,
              202
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "range": [
            194,
            215
          ],
          "loc": {
            "end": {
              "column": 30,
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
        185,
        245
      ],
      "loc": {
        "end": {
          "column": 60,
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
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
A string literal cannot be used as a local exported binding without `from`.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
