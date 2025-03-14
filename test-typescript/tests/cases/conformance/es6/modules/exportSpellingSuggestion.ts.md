__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    97
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        96
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "raw": "\"Unexpected \"",
                      "value": "Unexpected ",
                      "range": [
                        73,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 20,
                          "line": 2
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "msg",
                      "optional": false,
                      "range": [
                        89,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 36,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      73,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "range": [
                    67,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                "range": [
                  63,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              },
              "range": [
                57,
                94
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            51,
            96
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 51,
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
          "name": "assertNever",
          "optional": false,
          "range": [
            16,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              },
              "range": [
                29,
                36
              ],
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "range": [
                  31,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 31,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              28,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "msg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 41,
                  "line": 1
                }
              },
              "range": [
                41,
                49
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  43,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              38,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            }
          }
        ],
        "range": [
          7,
          96
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
          "column": 1,
          "line": 3
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
      "line": 4
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
    35
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "assertNevar",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "assertNevar",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 9,
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
