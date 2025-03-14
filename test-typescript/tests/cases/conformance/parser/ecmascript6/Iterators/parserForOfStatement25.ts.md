__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    166
  ],
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
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
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 46,
                  "line": 3
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
              "name": "console",
              "optional": false,
              "range": [
                102,
                109
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "range": [
                110,
                113
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
                }
              }
            },
            "range": [
              102,
              113
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 34,
                "line": 3
              }
            }
          },
          "optional": false,
          "range": [
            102,
            116
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        },
        "range": [
          102,
          116
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 34,
            "line": 3
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      78,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        82,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        89,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 3
                        },
                        "start": {
                          "column": 21,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      82,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    78,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                77,
                92
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "init": null,
            "range": [
              77,
              92
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          73,
          92
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              97,
              99
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            }
          }
        ],
        "range": [
          96,
          100
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 28,
            "line": 3
          }
        }
      },
      "range": [
        68,
        116
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
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
                163,
                164
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 4
                },
                "start": {
                  "column": 46,
                  "line": 4
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
              "name": "console",
              "optional": false,
              "range": [
                151,
                158
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 4
                },
                "start": {
                  "column": 34,
                  "line": 4
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "range": [
                159,
                162
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 42,
                  "line": 4
                }
              }
            },
            "range": [
              151,
              162
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 34,
                "line": 4
              }
            }
          },
          "optional": false,
          "range": [
            151,
            165
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 4
            },
            "start": {
              "column": 34,
              "line": 4
            }
          }
        },
        "range": [
          151,
          165
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 4
          },
          "start": {
            "column": 34,
            "line": 4
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      127,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "AssignmentPattern",
                    "range": [
                      127,
                      140
                    ],
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        127,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 4
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          131,
                          134
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
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "range": [
                          138,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        131,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 14,
                          "line": 4
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    127,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                126,
                141
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "init": null,
            "range": [
              126,
              141
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          122,
          141
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              146,
              148
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          }
        ],
        "range": [
          145,
          149
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 4
          },
          "start": {
            "column": 28,
            "line": 4
          }
        }
      },
      "range": [
        117,
        165
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
