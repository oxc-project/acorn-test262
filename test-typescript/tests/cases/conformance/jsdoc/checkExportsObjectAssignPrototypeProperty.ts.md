__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    397
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./\"",
        "value": "./",
        "range": [
          7,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "specifiers": [],
      "range": [
        0,
        12
      ],
      "loc": {
        "end": {
          "column": 12,
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
        "name": "Person",
        "optional": false,
        "range": [
          21,
          27
        ],
        "loc": {
          "end": {
            "column": 13,
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
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./mod1\"",
          "value": "./mod1",
          "range": [
            38,
            46
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "range": [
          30,
          47
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        14,
        48
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "m1",
            "optional": false,
            "range": [
              56,
              58
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"Name\"",
                "value": "Name",
                "range": [
                  72,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "range": [
                65,
                71
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              61,
              79
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          },
          "range": [
            56,
            79
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        50,
        79
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "range": [
            81,
            83
          ],
          "loc": {
            "end": {
              "column": 2,
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
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "range": [
            84,
            89
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 7
            },
            "start": {
              "column": 3,
              "line": 7
            }
          }
        },
        "range": [
          81,
          89
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        81,
        90
      ],
      "loc": {
        "end": {
          "column": 9,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "range": [
            91,
            93
          ],
          "loc": {
            "end": {
              "column": 2,
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
          "name": "readonlyProp",
          "optional": false,
          "range": [
            94,
            106
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 8
            },
            "start": {
              "column": 3,
              "line": 8
            }
          }
        },
        "range": [
          91,
          106
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
      "range": [
        91,
        107
      ],
      "loc": {
        "end": {
          "column": 16,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "range": [
            108,
            110
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
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "range": [
            111,
            122
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 3,
              "line": 9
            }
          }
        },
        "range": [
          108,
          122
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        108,
        123
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "range": [
            124,
            126
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "range": [
            127,
            143
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 3,
              "line": 10
            }
          }
        },
        "range": [
          124,
          143
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        124,
        144
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "range": [
            145,
            147
          ],
          "loc": {
            "end": {
              "column": 2,
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
          "name": "setonlyAccessor",
          "optional": false,
          "range": [
            148,
            163
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 11
            },
            "start": {
              "column": 3,
              "line": 11
            }
          }
        },
        "range": [
          145,
          163
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
        145,
        164
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "range": [
              189,
              191
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "thing",
            "optional": false,
            "range": [
              192,
              197
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 3,
                "line": 14
              }
            }
          },
          "range": [
            189,
            197
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
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            200,
            202
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 14
            },
            "start": {
              "column": 11,
              "line": 14
            }
          }
        },
        "range": [
          189,
          202
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        189,
        203
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "name": "m1",
            "optional": false,
            "range": [
              204,
              206
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "range": [
              207,
              218
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 15
              },
              "start": {
                "column": 3,
                "line": 15
              }
            }
          },
          "range": [
            204,
            218
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "11",
          "value": 11,
          "range": [
            221,
            223
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 15
            },
            "start": {
              "column": 17,
              "line": 15
            }
          }
        },
        "range": [
          204,
          223
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        204,
        224
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "range": [
              225,
              227
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 16
              },
              "start": {
                "column": 0,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "range": [
              228,
              243
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 3,
                "line": 16
              }
            }
          },
          "range": [
            225,
            243
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"yes\"",
          "value": "yes",
          "range": [
            246,
            251
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 16
            },
            "start": {
              "column": 21,
              "line": 16
            }
          }
        },
        "range": [
          225,
          251
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        225,
        252
      ],
      "loc": {
        "end": {
          "column": 27,
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "range": [
              280,
              282
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "readonlyProp",
            "optional": false,
            "range": [
              283,
              295
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 19
              },
              "start": {
                "column": 3,
                "line": 19
              }
            }
          },
          "range": [
            280,
            295
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
        "right": {
          "type": "Literal",
          "raw": "\"name\"",
          "value": "name",
          "range": [
            298,
            304
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 19
            },
            "start": {
              "column": 18,
              "line": 19
            }
          }
        },
        "range": [
          280,
          304
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        280,
        305
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "range": [
              306,
              308
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "readonlyAccessor",
            "optional": false,
            "range": [
              309,
              325
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 3,
                "line": 20
              }
            }
          },
          "range": [
            306,
            325
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "12",
          "value": 12,
          "range": [
            328,
            330
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 22,
              "line": 20
            }
          }
        },
        "range": [
          306,
          330
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        306,
        331
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "range": [
              332,
              334
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "range": [
              335,
              340
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 21
              },
              "start": {
                "column": 3,
                "line": 21
              }
            }
          },
          "range": [
            332,
            340
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"no\"",
          "value": "no",
          "range": [
            343,
            347
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 21
            },
            "start": {
              "column": 11,
              "line": 21
            }
          }
        },
        "range": [
          332,
          347
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        332,
        348
      ],
      "loc": {
        "end": {
          "column": 16,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "range": [
              349,
              351
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "range": [
              352,
              363
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
              }
            }
          },
          "range": [
            349,
            363
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
        "right": {
          "type": "Literal",
          "raw": "\"no\"",
          "value": "no",
          "range": [
            366,
            370
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 22
            },
            "start": {
              "column": 17,
              "line": 22
            }
          }
        },
        "range": [
          349,
          370
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "range": [
              372,
              374
            ],
            "loc": {
              "end": {
                "column": 2,
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
            "name": "setonlyAccessor",
            "optional": false,
            "range": [
              375,
              390
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 3,
                "line": 23
              }
            }
          },
          "range": [
            372,
            390
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
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            393,
            394
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 23
            },
            "start": {
              "column": 21,
              "line": 23
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
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        372,
        395
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
