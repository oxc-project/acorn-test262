__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    12,
    112
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
            "name": "fn",
            "optional": false,
            "range": [
              18,
              20
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                42,
                51
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 30,
                  "line": 2
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  },
                  "range": [
                    29,
                    37
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      31,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  24,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              23,
              51
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          },
          "range": [
            18,
            51
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        12,
        52
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "foo",
            "optional": false,
            "range": [
              60,
              63
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    67,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    72,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 18,
                      "line": 4
                    }
                  }
                },
                "range": [
                  67,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              66,
              76
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            60,
            76
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        54,
        77
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                101,
                110
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          84,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 5
                          },
                          "start": {
                            "column": 6,
                            "line": 5
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
                          88,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 10,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        84,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 5
                        },
                        "start": {
                          "column": 6,
                          "line": 5
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        94,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      83,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 5
                      },
                      "start": {
                        "column": 5,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  82,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              81,
              110
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 3,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            78,
            80
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          78,
          111
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        78,
        112
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 34,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
