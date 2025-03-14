__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    126
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    25,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    33,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  25,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              19,
              35
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
        "range": [
          13,
          37
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          12
        ],
        "decorators": [],
        "name": "ns",
        "optional": false,
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        37
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
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          51,
          71
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "range": [
                57,
                60
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              57,
              60
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "range": [
                66,
                69
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              66,
              69
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnEnum",
        "optional": false,
        "range": [
          44,
          50
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "range": [
        39,
        71
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "range": [
              81,
              83
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "range": [
              81,
              83
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          "range": [
            81,
            83
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 10
            },
            "start": {
              "column": 8,
              "line": 10
            }
          }
        },
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "range": [
              85,
              91
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "range": [
              85,
              91
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "range": [
            85,
            91
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        },
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooBar",
            "optional": false,
            "range": [
              99,
              105
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 26,
                "line": 10
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "range": [
              93,
              95
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          },
          "range": [
            93,
            105
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 10
            },
            "start": {
              "column": 20,
              "line": 10
            }
          }
        },
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "BarEnum",
            "optional": false,
            "range": [
              117,
              124
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 44,
                "line": 10
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "range": [
              107,
              113
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 10
              },
              "start": {
                "column": 34,
                "line": 10
              }
            }
          },
          "range": [
            107,
            124
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 10
            },
            "start": {
              "column": 34,
              "line": 10
            }
          }
        }
      ],
      "range": [
        73,
        126
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 53,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
