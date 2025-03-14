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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
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
    55,
    764
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./f1'",
        "value": "./f1",
        "range": [
          78,
          84
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              67,
              72
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            62,
            72
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        55,
        85
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "n",
            "optional": false,
            "range": [
              91,
              92
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'baz'",
            "value": "baz",
            "range": [
              95,
              100
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            91,
            100
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        87,
        101
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              103,
              108
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              109,
              110
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "range": [
            103,
            110
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            113,
            114
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 6
            },
            "start": {
              "column": 10,
              "line": 6
            }
          }
        },
        "range": [
          103,
          114
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        103,
        115
      ],
      "loc": {
        "end": {
          "column": 12,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              116,
              121
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'x'",
            "value": "x",
            "range": [
              122,
              125
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "range": [
            116,
            126
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            129,
            130
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        },
        "range": [
          116,
          130
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        116,
        131
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              132,
              137
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah",
            "optional": false,
            "range": [
              138,
              142
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "range": [
            132,
            142
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "2",
          "value": 2,
          "range": [
            145,
            146
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        },
        "range": [
          132,
          146
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        132,
        147
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              148,
              153
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              154,
              155
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
            148,
            156
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
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            159,
            160
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        "range": [
          148,
          160
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        148,
        161
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              163,
              168
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              169,
              170
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "range": [
            163,
            170
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          163,
          172
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        163,
        173
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              174,
              179
            ],
            "loc": {
              "end": {
                "column": 5,
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
            "type": "Literal",
            "raw": "'x'",
            "value": "x",
            "range": [
              180,
              183
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "range": [
            174,
            184
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          174,
          186
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
      "range": [
        174,
        187
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              188,
              193
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'blah'",
            "value": "blah",
            "range": [
              194,
              200
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "range": [
            188,
            201
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          188,
          203
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        188,
        204
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              205,
              210
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 0,
                "line": 14
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              211,
              212
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "range": [
            205,
            213
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          205,
          215
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        205,
        216
      ],
      "loc": {
        "end": {
          "column": 11,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              219,
              224
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 1,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              225,
              226
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 16
              },
              "start": {
                "column": 7,
                "line": 16
              }
            }
          },
          "range": [
            219,
            226
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 16
            },
            "start": {
              "column": 1,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            230,
            231
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 16
            }
          }
        },
        "range": [
          218,
          231
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        218,
        232
      ],
      "loc": {
        "end": {
          "column": 14,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              234,
              239
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 1,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'x'",
            "value": "x",
            "range": [
              240,
              243
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 7,
                "line": 17
              }
            }
          },
          "range": [
            234,
            244
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 1,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            248,
            249
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 17
            },
            "start": {
              "column": 15,
              "line": 17
            }
          }
        },
        "range": [
          233,
          249
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        233,
        250
      ],
      "loc": {
        "end": {
          "column": 17,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              252,
              257
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 1,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah",
            "optional": false,
            "range": [
              258,
              262
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 18
              },
              "start": {
                "column": 7,
                "line": 18
              }
            }
          },
          "range": [
            252,
            262
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 18
            },
            "start": {
              "column": 1,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "2",
          "value": 2,
          "range": [
            266,
            267
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 18
            },
            "start": {
              "column": 15,
              "line": 18
            }
          }
        },
        "range": [
          251,
          267
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        251,
        268
      ],
      "loc": {
        "end": {
          "column": 17,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              270,
              275
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 1,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              276,
              277
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 19
              },
              "start": {
                "column": 7,
                "line": 19
              }
            }
          },
          "range": [
            270,
            278
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 19
            },
            "start": {
              "column": 1,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            282,
            283
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 19
            },
            "start": {
              "column": 13,
              "line": 19
            }
          }
        },
        "range": [
          269,
          283
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
        269,
        284
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
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              287,
              292
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 1,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              293,
              294
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 21
              },
              "start": {
                "column": 7,
                "line": 21
              }
            }
          },
          "range": [
            287,
            294
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 21
            },
            "start": {
              "column": 1,
              "line": 21
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          286,
          297
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        286,
        298
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              300,
              305
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 1,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'x'",
            "value": "x",
            "range": [
              306,
              309
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 22
              },
              "start": {
                "column": 7,
                "line": 22
              }
            }
          },
          "range": [
            300,
            310
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 22
            },
            "start": {
              "column": 1,
              "line": 22
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          299,
          313
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        299,
        314
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              316,
              321
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 23
              },
              "start": {
                "column": 1,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'blah'",
            "value": "blah",
            "range": [
              322,
              328
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 7,
                "line": 23
              }
            }
          },
          "range": [
            316,
            329
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 23
            },
            "start": {
              "column": 1,
              "line": 23
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          315,
          332
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        315,
        333
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "type": "UpdateExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "range": [
              335,
              340
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 1,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              341,
              342
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 24
              },
              "start": {
                "column": 7,
                "line": 24
              }
            }
          },
          "range": [
            335,
            343
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 24
            },
            "start": {
              "column": 1,
              "line": 24
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          334,
          346
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
      "range": [
        334,
        347
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          369,
          371
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 26
          },
          "start": {
            "column": 20,
            "line": 26
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            354,
            359
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 26
            },
            "start": {
              "column": 5,
              "line": 26
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            360,
            361
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 26
            },
            "start": {
              "column": 11,
              "line": 26
            }
          }
        },
        "range": [
          354,
          361
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          365,
          367
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 26
          },
          "start": {
            "column": 16,
            "line": 26
          }
        }
      },
      "range": [
        349,
        371
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          392,
          394
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 27
          },
          "start": {
            "column": 20,
            "line": 27
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            377,
            382
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 27
            },
            "start": {
              "column": 5,
              "line": 27
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            383,
            384
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 27
            },
            "start": {
              "column": 11,
              "line": 27
            }
          }
        },
        "range": [
          377,
          384
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
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          388,
          390
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 27
          },
          "start": {
            "column": 16,
            "line": 27
          }
        }
      },
      "range": [
        372,
        394
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
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          418,
          420
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 28
          },
          "start": {
            "column": 23,
            "line": 28
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            400,
            405
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 28
            },
            "start": {
              "column": 5,
              "line": 28
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "raw": "'x'",
          "value": "x",
          "range": [
            406,
            409
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 28
            },
            "start": {
              "column": 11,
              "line": 28
            }
          }
        },
        "range": [
          400,
          410
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          414,
          416
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 28
          },
          "start": {
            "column": 19,
            "line": 28
          }
        }
      },
      "range": [
        395,
        420
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          444,
          446
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 29
          },
          "start": {
            "column": 23,
            "line": 29
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            426,
            431
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 29
            },
            "start": {
              "column": 5,
              "line": 29
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "raw": "'x'",
          "value": "x",
          "range": [
            432,
            435
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 29
            },
            "start": {
              "column": 11,
              "line": 29
            }
          }
        },
        "range": [
          426,
          436
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          440,
          442
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 29
          },
          "start": {
            "column": 19,
            "line": 29
          }
        }
      },
      "range": [
        421,
        446
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          470,
          472
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 30
          },
          "start": {
            "column": 23,
            "line": 30
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            452,
            457
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 30
            },
            "start": {
              "column": 5,
              "line": 30
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "range": [
            458,
            462
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 30
            },
            "start": {
              "column": 11,
              "line": 30
            }
          }
        },
        "range": [
          452,
          462
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          466,
          468
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 30
          },
          "start": {
            "column": 19,
            "line": 30
          }
        }
      },
      "range": [
        447,
        472
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          496,
          498
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 31
          },
          "start": {
            "column": 23,
            "line": 31
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            478,
            483
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 31
            },
            "start": {
              "column": 5,
              "line": 31
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "range": [
            484,
            488
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 31
            },
            "start": {
              "column": 11,
              "line": 31
            }
          }
        },
        "range": [
          478,
          488
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          492,
          494
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 31
          },
          "start": {
            "column": 19,
            "line": 31
          }
        }
      },
      "range": [
        473,
        498
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          520,
          522
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 32
          },
          "start": {
            "column": 21,
            "line": 32
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            504,
            509
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 32
            },
            "start": {
              "column": 5,
              "line": 32
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            510,
            511
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 32
            },
            "start": {
              "column": 11,
              "line": 32
            }
          }
        },
        "range": [
          504,
          512
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          516,
          518
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 32
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
      "range": [
        499,
        522
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          544,
          546
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 33
          },
          "start": {
            "column": 21,
            "line": 33
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            528,
            533
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 33
            },
            "start": {
              "column": 5,
              "line": 33
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            534,
            535
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 33
            },
            "start": {
              "column": 11,
              "line": 33
            }
          }
        },
        "range": [
          528,
          536
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          540,
          542
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 33
          },
          "start": {
            "column": 17,
            "line": 33
          }
        }
      },
      "range": [
        523,
        546
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          570,
          572
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 35
          },
          "start": {
            "column": 22,
            "line": 35
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            554,
            559
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            560,
            561
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 35
            },
            "start": {
              "column": 12,
              "line": 35
            }
          }
        },
        "range": [
          554,
          561
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 35
          },
          "start": {
            "column": 6,
            "line": 35
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          566,
          568
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 35
          },
          "start": {
            "column": 18,
            "line": 35
          }
        }
      },
      "range": [
        548,
        572
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          595,
          597
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 36
          },
          "start": {
            "column": 22,
            "line": 36
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            579,
            584
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            585,
            586
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        },
        "range": [
          579,
          586
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 36
          },
          "start": {
            "column": 6,
            "line": 36
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          591,
          593
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 36
          },
          "start": {
            "column": 18,
            "line": 36
          }
        }
      },
      "range": [
        573,
        597
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          623,
          625
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 37
          },
          "start": {
            "column": 25,
            "line": 37
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            604,
            609
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "raw": "'x'",
          "value": "x",
          "range": [
            610,
            613
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 37
            },
            "start": {
              "column": 12,
              "line": 37
            }
          }
        },
        "range": [
          604,
          614
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 37
          },
          "start": {
            "column": 6,
            "line": 37
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          619,
          621
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 37
          },
          "start": {
            "column": 21,
            "line": 37
          }
        }
      },
      "range": [
        598,
        625
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          651,
          653
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 38
          },
          "start": {
            "column": 25,
            "line": 38
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            632,
            637
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "raw": "'x'",
          "value": "x",
          "range": [
            638,
            641
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 38
            },
            "start": {
              "column": 12,
              "line": 38
            }
          }
        },
        "range": [
          632,
          642
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 38
          },
          "start": {
            "column": 6,
            "line": 38
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          647,
          649
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 38
          },
          "start": {
            "column": 21,
            "line": 38
          }
        }
      },
      "range": [
        626,
        653
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          679,
          681
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 39
          },
          "start": {
            "column": 25,
            "line": 39
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            660,
            665
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "range": [
            666,
            670
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 39
            },
            "start": {
              "column": 12,
              "line": 39
            }
          }
        },
        "range": [
          660,
          670
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 39
          },
          "start": {
            "column": 6,
            "line": 39
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          675,
          677
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 39
          },
          "start": {
            "column": 21,
            "line": 39
          }
        }
      },
      "range": [
        654,
        681
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          707,
          709
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 40
          },
          "start": {
            "column": 25,
            "line": 40
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            688,
            693
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "range": [
            694,
            698
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        },
        "range": [
          688,
          698
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 40
          },
          "start": {
            "column": 6,
            "line": 40
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          703,
          705
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 40
          },
          "start": {
            "column": 21,
            "line": 40
          }
        }
      },
      "range": [
        682,
        709
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          733,
          735
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 41
          },
          "start": {
            "column": 23,
            "line": 41
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            716,
            721
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            722,
            723
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 41
            },
            "start": {
              "column": 12,
              "line": 41
            }
          }
        },
        "range": [
          716,
          724
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 41
          },
          "start": {
            "column": 6,
            "line": 41
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          729,
          731
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 41
          },
          "start": {
            "column": 19,
            "line": 41
          }
        }
      },
      "range": [
        710,
        735
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          759,
          761
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 42
          },
          "start": {
            "column": 23,
            "line": 42
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "range": [
            742,
            747
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            748,
            749
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 42
            },
            "start": {
              "column": 12,
              "line": 42
            }
          }
        },
        "range": [
          742,
          750
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 42
          },
          "start": {
            "column": 6,
            "line": 42
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          755,
          757
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 42
          },
          "start": {
            "column": 19,
            "line": 42
          }
        }
      },
      "range": [
        736,
        761
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
