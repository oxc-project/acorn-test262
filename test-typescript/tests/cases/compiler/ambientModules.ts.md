__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    62
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              26,
              41
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      37,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 1
                      },
                      "start": {
                        "column": 37,
                        "line": 1
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    37,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                33,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ],
        "range": [
          24,
          43
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 1
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          16,
          23
        ],
        "left": {
          "type": "Identifier",
          "range": [
            16,
            19
          ],
          "decorators": [],
          "name": "Foo",
          "optional": false,
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
        "right": {
          "type": "Identifier",
          "range": [
            20,
            23
          ],
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        1,
        43
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        43,
        44
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 1
        },
        "start": {
          "column": 43,
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                45,
                48
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
              "name": "Bar",
              "optional": false,
              "range": [
                49,
                52
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
              45,
              52
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              53,
              56
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            45,
            56
          ],
          "loc": {
            "end": {
              "column": 11,
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
          "raw": "5",
          "value": 5,
          "range": [
            59,
            60
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        },
        "range": [
          45,
          60
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
      },
      "range": [
        45,
        61
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 17,
      "line": 2
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
