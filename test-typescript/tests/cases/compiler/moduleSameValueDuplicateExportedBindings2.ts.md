__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    42
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./b\"",
        "value": "./b",
        "range": [
          14,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        20
      ],
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
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./c\"",
        "value": "./c",
        "range": [
          35,
          40
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 14,
            "line": 2
          }
        }
      },
      "range": [
        21,
        41
      ],
      "loc": {
        "end": {
          "column": 20,
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
    29
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./c\"",
        "value": "./c",
        "range": [
          22,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 22,
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
            "name": "Animals",
            "optional": false,
            "range": [
              8,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animals",
            "optional": false,
            "range": [
              8,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            8,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        28
      ],
      "loc": {
        "end": {
          "column": 28,
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
    35
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        34
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            20,
            34
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "range": [
                  23,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 2
                  },
                  "start": {
                    "column": 1,
                    "line": 2
                  }
                }
              },
              "range": [
                23,
                26
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 1,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "range": [
                  29,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 3
                  },
                  "start": {
                    "column": 1,
                    "line": 3
                  }
                }
              },
              "range": [
                29,
                32
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 3
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "range": [
            12,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
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
          34
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        34,
        35
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 4
        },
        "start": {
          "column": 1,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 2,
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
