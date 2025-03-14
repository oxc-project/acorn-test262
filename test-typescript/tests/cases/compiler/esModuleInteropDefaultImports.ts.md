__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    49
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          28
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            24,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "range": [
          45,
          48
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "range": [
        30,
        49
      ],
      "loc": {
        "end": {
          "column": 19,
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
      "column": 19,
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
    44
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "range": [
          7,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
          "raw": "\"./mod\"",
          "value": "./mod",
          "range": [
            21,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "range": [
          13,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        30
      ],
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
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "range": [
          40,
          43
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
        31,
        44
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 13,
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
    452
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            8
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
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
        }
      ],
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
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          50,
          55
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 2
          },
          "start": {
            "column": 29,
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
            "name": "default",
            "optional": false,
            "range": [
              30,
              37
            ],
            "loc": {
              "end": {
                "column": 16,
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
            "name": "b",
            "optional": false,
            "range": [
              41,
              42
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          },
          "range": [
            30,
            42
          ],
          "loc": {
            "end": {
              "column": 21,
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
        21,
        56
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
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          89,
          94
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 32,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            64,
            65
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              64,
              65
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          },
          "loc": {
            "end": {
              "column": 8,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              69,
              76
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              80,
              81
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          },
          "range": [
            69,
            81
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        }
      ],
      "range": [
        57,
        95
      ],
      "loc": {
        "end": {
          "column": 38,
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
        "raw": "\"./b\"",
        "value": "./b",
        "range": [
          118,
          123
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "range": [
              108,
              112
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            103,
            112
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 4
            },
            "start": {
              "column": 7,
              "line": 4
            }
          }
        }
      ],
      "range": [
        96,
        124
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          149,
          154
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
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
              134,
              141
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
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
              134,
              141
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          },
          "range": [
            134,
            141
          ],
          "loc": {
            "end": {
              "column": 16,
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
        125,
        155
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 5
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
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          187,
          192
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 6
          },
          "start": {
            "column": 31,
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
            "name": "def",
            "optional": false,
            "range": [
              176,
              179
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
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
              165,
              172
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          },
          "range": [
            165,
            179
          ],
          "loc": {
            "end": {
              "column": 23,
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
        156,
        193
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            195,
            196
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            201,
            202
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        },
        "range": [
          195,
          202
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        195,
        203
      ],
      "loc": {
        "end": {
          "column": 8,
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
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            204,
            205
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            210,
            211
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        },
        "range": [
          204,
          211
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        204,
        212
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            213,
            214
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            219,
            220
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        },
        "range": [
          213,
          220
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        213,
        221
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            222,
            223
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "range": [
              228,
              232
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              233,
              240
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          },
          "range": [
            228,
            240
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        },
        "range": [
          222,
          240
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        222,
        241
      ],
      "loc": {
        "end": {
          "column": 19,
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
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "range": [
              242,
              246
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              247,
              254
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 5,
                "line": 12
              }
            }
          },
          "range": [
            242,
            254
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "range": [
              259,
              263
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 17,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "range": [
              264,
              267
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "range": [
            259,
            267
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 12
            },
            "start": {
              "column": 17,
              "line": 12
            }
          }
        },
        "range": [
          242,
          267
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        242,
        268
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            289,
            290
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
        "optional": false,
        "range": [
          289,
          292
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        289,
        293
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            294,
            295
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          294,
          297
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        294,
        298
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            299,
            300
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          299,
          302
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        299,
        303
      ],
      "loc": {
        "end": {
          "column": 4,
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            304,
            305
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          304,
          307
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
      "range": [
        304,
        308
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "range": [
              309,
              313
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              314,
              321
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 19
              },
              "start": {
                "column": 5,
                "line": 19
              }
            }
          },
          "range": [
            309,
            321
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          309,
          323
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        309,
        324
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "range": [
              325,
              329
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "range": [
              330,
              333
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 20
              },
              "start": {
                "column": 5,
                "line": 20
              }
            }
          },
          "range": [
            325,
            333
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          325,
          335
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        325,
        336
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              357,
              358
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              359,
              366
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          "range": [
            357,
            366
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          357,
          368
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        357,
        369
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              370,
              371
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 0,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              372,
              379
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          "range": [
            370,
            379
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          370,
          381
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        370,
        382
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              383,
              384
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              385,
              392
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          "range": [
            383,
            392
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          383,
          394
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        383,
        395
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              396,
              397
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              398,
              405
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          },
          "range": [
            396,
            405
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          396,
          407
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        396,
        408
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "range": [
                409,
                413
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 27
                },
                "start": {
                  "column": 0,
                  "line": 27
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "range": [
                414,
                421
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 5,
                  "line": 27
                }
              }
            },
            "range": [
              409,
              421
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 0,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              422,
              429
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          },
          "range": [
            409,
            429
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          409,
          431
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        409,
        432
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "range": [
                433,
                437
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 28
                },
                "start": {
                  "column": 0,
                  "line": 28
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                438,
                441
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 28
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              }
            },
            "range": [
              433,
              441
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 0,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              442,
              449
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 28
              },
              "start": {
                "column": 9,
                "line": 28
              }
            }
          },
          "range": [
            433,
            449
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          433,
          451
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        433,
        452
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 19,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
