__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    122
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        24
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            22,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            16,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              25,
              28
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              29,
              32
            ],
            "loc": {
              "end": {
                "column": 7,
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
            32
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "12",
          "value": 12,
          "range": [
            35,
            37
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
          25,
          37
        ],
        "loc": {
          "end": {
            "column": 12,
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_private",
            "optional": false,
            "range": [
              45,
              53
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                56,
                62
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              56,
              64
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          "range": [
            45,
            64
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        39,
        65
      ],
      "loc": {
        "end": {
          "column": 26,
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
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              66,
              69
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "_private",
            "optional": false,
            "range": [
              70,
              78
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "range": [
            66,
            79
          ],
          "loc": {
            "end": {
              "column": 13,
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
          "raw": "\"ok\"",
          "value": "ok",
          "range": [
            82,
            86
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "range": [
          66,
          86
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        66,
        87
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              },
              "range": [
                96,
                104
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  98,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              95,
              104
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                107,
                110
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "_private",
              "optional": false,
              "range": [
                111,
                119
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
            "range": [
              107,
              120
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 6
              },
              "start": {
                "column": 18,
                "line": 6
              }
            }
          },
          "range": [
            95,
            120
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        89,
        121
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
