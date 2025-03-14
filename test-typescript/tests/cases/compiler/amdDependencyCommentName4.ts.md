__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    197,
    422
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"unaliasedModule1\"",
        "value": "unaliasedModule1",
        "range": [
          204,
          222
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "specifiers": [],
      "range": [
        197,
        223
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "r1",
        "optional": false,
        "range": [
          232,
          234
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"aliasedModule1\"",
          "value": "aliasedModule1",
          "range": [
            245,
            261
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          237,
          262
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        }
      },
      "range": [
        225,
        263
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "r1",
        "optional": false,
        "range": [
          264,
          266
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        264,
        267
      ],
      "loc": {
        "end": {
          "column": 3,
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
        "raw": "\"aliasedModule2\"",
        "value": "aliasedModule2",
        "range": [
          294,
          310
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 11
          },
          "start": {
            "column": 25,
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
            "name": "p1",
            "optional": false,
            "range": [
              277,
              279
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "range": [
              277,
              279
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            277,
            279
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 11
            },
            "start": {
              "column": 8,
              "line": 11
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "range": [
              281,
              283
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "range": [
              281,
              283
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "range": [
            281,
            283
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "range": [
              285,
              287
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "range": [
              285,
              287
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          },
          "range": [
            285,
            287
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        }
      ],
      "range": [
        269,
        311
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "p1",
        "optional": false,
        "range": [
          312,
          314
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        312,
        315
      ],
      "loc": {
        "end": {
          "column": 3,
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
        "raw": "\"aliasedModule3\"",
        "value": "aliasedModule3",
        "range": [
          331,
          347
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 14
          },
          "start": {
            "column": 14,
            "line": 14
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            324,
            325
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              324,
              325
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 7,
                "line": 14
              }
            }
          },
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 7,
              "line": 14
            }
          }
        }
      ],
      "range": [
        317,
        348
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "range": [
          349,
          350
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        349,
        351
      ],
      "loc": {
        "end": {
          "column": 2,
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
        "raw": "\"aliasedModule4\"",
        "value": "aliasedModule4",
        "range": [
          373,
          389
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 17
          },
          "start": {
            "column": 20,
            "line": 17
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "range": [
              365,
              367
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          "range": [
            360,
            367
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 17
            },
            "start": {
              "column": 7,
              "line": 17
            }
          }
        }
      ],
      "range": [
        353,
        390
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "range": [
          391,
          393
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        391,
        394
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"unaliasedModule2\"",
        "value": "unaliasedModule2",
        "range": [
          403,
          421
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "specifiers": [],
      "range": [
        396,
        422
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 26,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
