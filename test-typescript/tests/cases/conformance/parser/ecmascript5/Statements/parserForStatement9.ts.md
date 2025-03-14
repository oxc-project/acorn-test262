__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    184
  ],
  "body": [
    {
      "type": "ForStatement",
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
                123,
                124
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 3
                },
                "start": {
                  "column": 55,
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
                111,
                118
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 43,
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
                119,
                122
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 3
                },
                "start": {
                  "column": 51,
                  "line": 3
                }
              }
            },
            "range": [
              111,
              122
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 3
              },
              "start": {
                "column": 43,
                "line": 3
              }
            }
          },
          "optional": false,
          "range": [
            111,
            125
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 3
            },
            "start": {
              "column": 43,
              "line": 3
            }
          }
        },
        "range": [
          111,
          125
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 3
          },
          "start": {
            "column": 43,
            "line": 3
          }
        }
      },
      "init": {
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
            "init": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                95,
                97
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "range": [
              77,
              97
            ],
            "loc": {
              "end": {
                "column": 29,
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
          97
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            100,
            101
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 32,
              "line": 3
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          99,
          101
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 3
          },
          "start": {
            "column": 31,
            "line": 3
          }
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            103,
            104
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 35,
              "line": 3
            }
          }
        },
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              108,
              109
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 40,
                "line": 3
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            107,
            109
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 3
            },
            "start": {
              "column": 39,
              "line": 3
            }
          }
        },
        "range": [
          103,
          109
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 3
          },
          "start": {
            "column": 35,
            "line": 3
          }
        }
      },
      "range": [
        68,
        125
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ForStatement",
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
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 4
                },
                "start": {
                  "column": 55,
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
                169,
                176
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 4
                },
                "start": {
                  "column": 43,
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
                177,
                180
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 51,
                  "line": 4
                }
              }
            },
            "range": [
              169,
              180
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 4
              },
              "start": {
                "column": 43,
                "line": 4
              }
            }
          },
          "optional": false,
          "range": [
            169,
            183
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 4
            },
            "start": {
              "column": 43,
              "line": 4
            }
          }
        },
        "range": [
          169,
          183
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 4
          },
          "start": {
            "column": 43,
            "line": 4
          }
        }
      },
      "init": {
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
                      136,
                      137
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
                      136,
                      149
                    ],
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        136,
                        137
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
                          140,
                          143
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
                          147,
                          149
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
                        140,
                        149
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
                    136,
                    149
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
                135,
                150
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
            "init": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                153,
                155
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            },
            "range": [
              135,
              155
            ],
            "loc": {
              "end": {
                "column": 29,
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
          131,
          155
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            158,
            159
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 32,
              "line": 4
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          157,
          159
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 4
          }
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            161,
            162
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 4
            },
            "start": {
              "column": 35,
              "line": 4
            }
          }
        },
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              166,
              167
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 40,
                "line": 4
              }
            }
          },
          "operator": "!",
          "prefix": true,
          "range": [
            165,
            167
          ],
          "loc": {
            "end": {
              "column": 41,
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
          167
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 4
          },
          "start": {
            "column": 35,
            "line": 4
          }
        }
      },
      "range": [
        126,
        183
      ],
      "loc": {
        "end": {
          "column": 57,
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
