__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    33
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        33
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            17,
            33
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                "name": "B",
                "optional": false,
                "range": [
                  30,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "range": [
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
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
              "column": 17,
              "line": 1
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Enum",
          "optional": false,
          "range": [
            12,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
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
          33
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    103
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./enum\"",
        "value": "./enum",
        "range": [
          19,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 19,
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
            "name": "Enum",
            "optional": false,
            "range": [
              8,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Enum",
            "optional": false,
            "range": [
              8,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
            12
          ],
          "loc": {
            "end": {
              "column": 12,
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
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumA",
        "optional": false,
        "range": [
          37,
          42
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Enum",
          "optional": false,
          "range": [
            45,
            49
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            50,
            51
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 20,
              "line": 3
            }
          }
        },
        "range": [
          45,
          51
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        30,
        52
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
      "range": [
        54,
        102
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnumA",
          "optional": false,
          "range": [
            66,
            71
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    75,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 21,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                74,
                82
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    86,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    94,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 5
                    },
                    "start": {
                      "column": 40,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                85,
                101
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            74,
            101
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        },
        "range": [
          61,
          102
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 48,
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
