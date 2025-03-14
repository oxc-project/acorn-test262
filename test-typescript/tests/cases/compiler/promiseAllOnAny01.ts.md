__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    114
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
                  "name": "abc",
                  "optional": false,
                  "range": [
                    37,
                    40
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
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          61,
                          62
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 32,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          49,
                          56
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "range": [
                          57,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        49,
                        60
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 2
                        },
                        "start": {
                          "column": 20,
                          "line": 2
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      49,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    43,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                "range": [
                  37,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              33,
              64
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 2
              },
              "start": {
                "column": 4,
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    },
                    "range": [
                      79,
                      86
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          81,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 16,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        81,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    73,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "range": [
                    89,
                    92
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
                  73,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              69,
              93
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                105,
                111
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              98,
              112
            ],
            "loc": {
              "end": {
                "column": 18,
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
          27,
          114
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 27,
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
          15,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
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
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            },
            "range": [
              20,
              25
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                22,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            }
          },
          "range": [
            19,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        114
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
