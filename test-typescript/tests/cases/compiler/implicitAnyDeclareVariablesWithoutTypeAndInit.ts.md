__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    27,
    362
  ],
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
            "name": "x",
            "optional": false,
            "range": [
              31,
              32
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
          "init": null,
          "range": [
            31,
            32
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        27,
        33
      ],
      "loc": {
        "end": {
          "column": 6,
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
            "name": "y",
            "optional": false,
            "range": [
              88,
              89
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
          "init": null,
          "range": [
            88,
            89
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
      "declare": false,
      "kind": "var",
      "range": [
        84,
        90
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              147,
              150
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            147,
            150
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        135,
        151
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                197,
                198
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "range": [
              197,
              198
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
              },
              "start": {
                "column": 19,
                "line": 5
              }
            }
          }
        ],
        "range": [
          195,
          200
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "range": [
          187,
          191
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            192,
            193
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "range": [
        178,
        200
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        200,
        201
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 5
        },
        "start": {
          "column": 22,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              224,
              225
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "range": [
            219,
            223
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          219,
          226
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
      "range": [
        219,
        227
      ],
      "loc": {
        "end": {
          "column": 8,
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
            "name": "bar",
            "optional": false,
            "range": [
              263,
              266
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              269,
              270
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            263,
            270
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        259,
        271
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                292,
                297
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  294,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              288,
              297
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            288,
            297
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        284,
        298
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              },
              "range": [
                325,
                330
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  327,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              321,
              330
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            321,
            330
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        309,
        331
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                339,
                344
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  341,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              337,
              344
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            337,
            344
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        333,
        345
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "range": [
              350,
              352
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 17,
                "line": 12
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "range": [
                359,
                361
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 26,
                  "line": 12
                }
              }
            },
            "range": [
              355,
              361
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "range": [
            350,
            361
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 17,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        346,
        362
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 12
        },
        "start": {
          "column": 13,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 29,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
