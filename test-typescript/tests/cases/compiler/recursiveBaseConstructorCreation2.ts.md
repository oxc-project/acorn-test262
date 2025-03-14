__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    166
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          22
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "range": [
          14,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          54,
          70
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                59,
                62
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 6
                },
                "start": {
                  "column": 3,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                62,
                67
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xyz",
                  "optional": false,
                  "range": [
                    64,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "range": [
                  64,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              59,
              68
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 3,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "abc",
        "optional": false,
        "range": [
          37,
          40
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "range": [
          49,
          53
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 4
          },
          "start": {
            "column": 26,
            "line": 4
          }
        }
      },
      "range": [
        23,
        70
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          101,
          104
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "xyz",
        "optional": false,
        "range": [
          85,
          88
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "abc",
        "optional": false,
        "range": [
          97,
          100
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 26,
            "line": 8
          }
        }
      },
      "range": [
        71,
        104
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
              111,
              114
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 12
              },
              "start": {
                "column": 4,
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
              "name": "xyz",
              "optional": false,
              "range": [
                121,
                124
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "range": [
              117,
              126
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 12
              }
            }
          },
          "range": [
            111,
            126
          ],
          "loc": {
            "end": {
              "column": 19,
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
        107,
        127
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
