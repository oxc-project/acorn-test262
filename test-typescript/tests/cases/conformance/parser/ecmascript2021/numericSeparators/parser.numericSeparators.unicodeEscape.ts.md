__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    15
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\u{10_ffff}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{10_ffff}"
        },
        "value": null,
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
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    11
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\uff_ff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\uff_ff"
        },
        "value": null,
        "range": [
          0,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    9
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\xf_f/u",
        "regex": {
          "flags": "u",
          "pattern": "\\xf_f"
        },
        "value": null,
        "range": [
          0,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        8
      ],
      "loc": {
        "end": {
          "column": 8,
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
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    15
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\u{_10ffff}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{_10ffff}"
        },
        "value": null,
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
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    11
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\u_ffff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u_ffff"
        },
        "value": null,
        "range": [
          0,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    9
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\x_ff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\x_ff"
        },
        "value": null,
        "range": [
          0,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        8
      ],
      "loc": {
        "end": {
          "column": 8,
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
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    15
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\u{10ffff_}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{10ffff_}"
        },
        "value": null,
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
    10
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "\\uffff_",
      "expression": {
        "type": "Literal",
        "raw": "\"\\uffff_\"",
        "value": "￿_",
        "range": [
          0,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
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
    10
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "\\uffff_",
      "expression": {
        "type": "Literal",
        "raw": "'\\uffff_'",
        "value": "￿_",
        "range": [
          0,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
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
    10
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "￿_",
              "raw": "\\uffff_"
            },
            "range": [
              0,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 0,
                "line": 1
              }
            }
          }
        ],
        "range": [
          0,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
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
    11
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\uffff_/u",
        "regex": {
          "flags": "u",
          "pattern": "\\uffff_"
        },
        "value": null,
        "range": [
          0,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
    8
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "\\xff_",
      "expression": {
        "type": "Literal",
        "raw": "\"\\xff_\"",
        "value": "ÿ_",
        "range": [
          0,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        7
      ],
      "loc": {
        "end": {
          "column": 7,
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
    8
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "\\xff_",
      "expression": {
        "type": "Literal",
        "raw": "'\\xff_'",
        "value": "ÿ_",
        "range": [
          0,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        7
      ],
      "loc": {
        "end": {
          "column": 7,
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
    8
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "ÿ_",
              "raw": "\\xff_"
            },
            "range": [
              0,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 0,
                "line": 1
              }
            }
          }
        ],
        "range": [
          0,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        7
      ],
      "loc": {
        "end": {
          "column": 7,
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
    9
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\xff_/u",
        "regex": {
          "flags": "u",
          "pattern": "\\xff_"
        },
        "value": null,
        "range": [
          0,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        8
      ],
      "loc": {
        "end": {
          "column": 8,
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
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    16
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\u{10__ffff}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{10__ffff}"
        },
        "value": null,
        "range": [
          0,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        15
      ],
      "loc": {
        "end": {
          "column": 15,
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
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    12
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\uff__ff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\uff__ff"
        },
        "value": null,
        "range": [
          0,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
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
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    10
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "/\\xf__f/u",
        "regex": {
          "flags": "u",
          "pattern": "\\xf__f"
        },
        "value": null,
        "range": [
          0,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
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
