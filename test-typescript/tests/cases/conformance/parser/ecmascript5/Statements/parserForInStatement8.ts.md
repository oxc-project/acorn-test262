__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    176
  ],
  "body": [
    {
      "type": "ForInStatement",
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
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 51,
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
                107,
                114
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 39,
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
                115,
                118
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 47,
                  "line": 3
                }
              }
            },
            "range": [
              107,
              118
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            }
          },
          "optional": false,
          "range": [
            107,
            121
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 3
            },
            "start": {
              "column": 39,
              "line": 3
            }
          }
        },
        "range": [
          107,
          121
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 3
          },
          "start": {
            "column": 39,
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
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                98,
                100
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
                }
              }
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                102,
                103
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            },
            "range": [
              98,
              103
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            }
          }
        ],
        "range": [
          96,
          105
        ],
        "loc": {
          "end": {
            "column": 37,
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
        121
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ForInStatement",
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
                173,
                174
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 4
                },
                "start": {
                  "column": 51,
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
                161,
                168
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 4
                },
                "start": {
                  "column": 39,
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
                169,
                172
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 4
                },
                "start": {
                  "column": 47,
                  "line": 4
                }
              }
            },
            "range": [
              161,
              172
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 4
              },
              "start": {
                "column": 39,
                "line": 4
              }
            }
          },
          "optional": false,
          "range": [
            161,
            175
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 4
            },
            "start": {
              "column": 39,
              "line": 4
            }
          }
        },
        "range": [
          161,
          175
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 4
          },
          "start": {
            "column": 39,
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
                      132,
                      133
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
                      132,
                      145
                    ],
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        132,
                        133
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
                          136,
                          139
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
                          143,
                          145
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
                        136,
                        145
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
                    132,
                    145
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
                131,
                146
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
              131,
              146
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
          127,
          146
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
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                152,
                154
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 30,
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
              "raw": "0",
              "value": 0,
              "range": [
                156,
                157
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 34,
                  "line": 4
                }
              }
            },
            "range": [
              152,
              157
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            }
          }
        ],
        "range": [
          150,
          159
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 28,
            "line": 4
          }
        }
      },
      "range": [
        122,
        175
      ],
      "loc": {
        "end": {
          "column": 53,
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
