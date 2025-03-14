__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    131
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        130
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
              "name": "basePrototype",
              "optional": false,
              "range": [
                11,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryPath",
                    "optional": false,
                    "range": [
                      35,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 2
                      },
                      "start": {
                        "column": 6,
                        "line": 2
                      }
                    }
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      46,
                      124
                    ],
                    "async": false,
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
                                "name": "_this",
                                "optional": false,
                                "range": [
                                  59,
                                  64
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 3
                                  }
                                }
                              },
                              "init": {
                                "type": "ThisExpression",
                                "range": [
                                  67,
                                  71
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                59,
                                71
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
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
                          "kind": "var",
                          "range": [
                            55,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false,
                                  "range": [
                                    84,
                                    89
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 4
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "collection",
                                  "optional": false,
                                  "range": [
                                    90,
                                    100
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  84,
                                  100
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "schema",
                                "optional": false,
                                "range": [
                                  101,
                                  107
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                84,
                                107
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 4
                                },
                                "start": {
                                  "column": 11,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryPath",
                              "optional": false,
                              "range": [
                                108,
                                119
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 4
                                },
                                "start": {
                                  "column": 35,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              84,
                              119
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 4
                              },
                              "start": {
                                "column": 11,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            77,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
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
                        49,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 2
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    31,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 5
                    },
                    "start": {
                      "column": 2,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                27,
                129
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              129
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
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
          130
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 6
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
          "column": 2,
          "line": 6
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
