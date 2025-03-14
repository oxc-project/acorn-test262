__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            17
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
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
          "column": 17,
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
    60
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./a'",
        "value": "./a",
        "range": [
          28,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              17,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          "range": [
            12,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "name": "types",
        "optional": false,
        "range": [
          44,
          49
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        35,
        50
      ],
      "loc": {
        "end": {
          "column": 15,
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
    46
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./a'",
        "value": "./a",
        "range": [
          23,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              12,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
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
            17
          ],
          "loc": {
            "end": {
              "column": 17,
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
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "types",
        "optional": false,
        "range": [
          39,
          44
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        30,
        45
      ],
      "loc": {
        "end": {
          "column": 15,
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
    49
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./b'",
        "value": "./b",
        "range": [
          18,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            12
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              7,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
              "column": 12,
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
        24
      ],
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
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              29,
              34
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              35,
              36
            ],
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
          "range": [
            29,
            36
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          25,
          38
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
      "range": [
        25,
        39
      ],
      "loc": {
        "end": {
          "column": 14,
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
    55
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "types",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "raw": "'./b'",
          "value": "./b",
          "range": [
            23,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              35,
              40
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              41,
              42
            ],
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
          "range": [
            35,
            42
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 4,
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
      },
      "range": [
        31,
        45
      ],
      "loc": {
        "end": {
          "column": 14,
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
    54
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./b'",
        "value": "./b",
        "range": [
          23,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              12,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
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
            17
          ],
          "loc": {
            "end": {
              "column": 17,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              34,
              39
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              40,
              41
            ],
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
          "range": [
            34,
            41
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          30,
          43
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
      "range": [
        30,
        44
      ],
      "loc": {
        "end": {
          "column": 14,
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
    53
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./c'",
        "value": "./c",
        "range": [
          23,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            12,
            17
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              12,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 12,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "range": [
              33,
              38
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              39,
              40
            ],
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
          "range": [
            33,
            40
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          29,
          42
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
      "range": [
        29,
        43
      ],
      "loc": {
        "end": {
          "column": 14,
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
