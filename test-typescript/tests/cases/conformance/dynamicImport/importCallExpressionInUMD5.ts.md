__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    57
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        17,
        56
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  48,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 31,
                    "line": 2
                  }
                }
              },
              "range": [
                41,
                54
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            39,
            56
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 22,
              "line": 2
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
            33,
            36
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [],
        "range": [
          24,
          56
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 39,
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
      "line": 2
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
    56,
    180
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
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
                  "name": "packageName",
                  "optional": false,
                  "range": [
                    90,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "'.'",
                  "value": ".",
                  "range": [
                    104,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                },
                "range": [
                  90,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              84,
              108
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 4,
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
                  "name": "packageJson",
                  "optional": false,
                  "range": [
                    119,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "ImportExpression",
                    "options": null,
                    "source": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "packageName",
                        "optional": false,
                        "range": [
                          146,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 4
                          },
                          "start": {
                            "column": 37,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "'/package.json'",
                        "value": "/package.json",
                        "range": [
                          160,
                          175
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 4
                          },
                          "start": {
                            "column": 51,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        146,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 4
                        },
                        "start": {
                          "column": 37,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      139,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 4
                      },
                      "start": {
                        "column": 30,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    133,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 4
                    },
                    "start": {
                      "column": 24,
                      "line": 4
                    }
                  }
                },
                "range": [
                  119,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              113,
              177
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          78,
          179
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 2
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
          71,
          75
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "params": [],
      "range": [
        56,
        179
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
