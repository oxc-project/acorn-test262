__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    27
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          14
        ],
        "body": [],
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
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
        "name": "I",
        "optional": false,
        "range": [
          24,
          25
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        15,
        26
      ],
      "loc": {
        "end": {
          "column": 11,
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
    27
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          7,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./a\"",
          "value": "./a",
          "range": [
            19,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        "range": [
          11,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
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
    67
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          14
        ],
        "body": [],
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              33,
              52
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      46,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      50,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    46,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                40,
                52
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          27,
          54
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          25,
          26
        ],
        "decorators": [],
        "name": "I",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "kind": "namespace",
      "range": [
        15,
        54
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          64,
          65
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "range": [
        55,
        66
      ],
      "loc": {
        "end": {
          "column": 11,
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
    71
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          7,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./c\"",
          "value": "./c",
          "range": [
            19,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        "range": [
          11,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "range": [
          39,
          40
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./c\"",
          "value": "./c",
          "range": [
            51,
            56
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "range": [
          43,
          57
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        27,
        58
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "range": [
          68,
          69
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        59,
        70
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
    27
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          14
        ],
        "body": [],
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
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
        "name": "I",
        "optional": false,
        "range": [
          24,
          25
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        15,
        26
      ],
      "loc": {
        "end": {
          "column": 11,
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          12,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./e\"",
          "value": "./e",
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
          16,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "range": [
              38,
              39
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              42,
              44
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            38,
            44
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        32,
        45
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          55,
          56
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        46,
        57
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
    63,
    63
  ],
  "body": [],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 63,
      "line": 1
    },
    "start": {
      "column": 63,
      "line": 1
    }
  },
  "hashbang": null
}
```
