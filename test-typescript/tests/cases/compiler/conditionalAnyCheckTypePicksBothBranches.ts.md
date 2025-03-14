__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    151
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSAnyKeyword",
          "range": [
            9,
            12
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "range": [
            21,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          },
          "range": [
            34,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 1
            },
            "start": {
              "column": 34,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              30,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          },
          "range": [
            30,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          }
        },
        "range": [
          9,
          35
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                42,
                45
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    44,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                },
                "range": [
                  44,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              41,
              45
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            41,
            45
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        37,
        46
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            47,
            48
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            51,
            52
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
          47,
          52
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        47,
        53
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            54,
            55
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            58,
            59
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
        "range": [
          54,
          59
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        54,
        60
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "range": [
          83,
          84
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "range": [
                88,
                91
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            87,
            92
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 9,
              "line": 6
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "range": [
                102,
                108
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            101,
            109
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 23,
              "line": 6
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 6
              },
              "start": {
                "column": 38,
                "line": 6
              }
            }
          },
          "range": [
            116,
            117
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 6
            },
            "start": {
              "column": 38,
              "line": 6
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              112,
              113
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 34,
                "line": 6
              }
            }
          },
          "range": [
            112,
            113
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 6
            },
            "start": {
              "column": 34,
              "line": 6
            }
          }
        },
        "range": [
          87,
          117
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "range": [
        78,
        118
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                124,
                127
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    126,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  126,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              123,
              127
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            123,
            127
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        119,
        128
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            129,
            130
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
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            133,
            134
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "range": [
          129,
          134
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
      "range": [
        129,
        135
      ],
      "loc": {
        "end": {
          "column": 6,
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
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            136,
            137
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
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            140,
            141
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "range": [
          136,
          141
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
      "range": [
        136,
        142
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 15,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
