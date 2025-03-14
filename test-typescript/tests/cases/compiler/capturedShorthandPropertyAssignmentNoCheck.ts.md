__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    140
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
            "name": "fns",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              12,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        15
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            71,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 3
                            },
                            "start": {
                              "column": 22,
                              "line": 3
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            71,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 3
                            },
                            "start": {
                              "column": 22,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          71,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      69,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    62,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
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
                  "name": "fns",
                  "optional": false,
                  "range": [
                    53,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    57,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "range": [
                  53,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                53,
                80
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              53,
              81
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          47,
          83
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 2
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
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                27,
                32
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "init": null,
            "range": [
              27,
              32
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          21,
          32
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              43,
              44
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 27,
                "line": 2
              }
            }
          }
        ],
        "range": [
          36,
          45
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 2
          },
          "start": {
            "column": 20,
            "line": 2
          }
        }
      },
      "range": [
        16,
        83
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
            "name": "result",
            "optional": false,
            "range": [
              90,
              96
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "range": [
                      113,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 29,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    113,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
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
                    "name": "fn",
                    "optional": false,
                    "range": [
                      107,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  107,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
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
                "name": "fns",
                "optional": false,
                "range": [
                  99,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  103,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 5
                  }
                }
              },
              "range": [
                99,
                106
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              99,
              118
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "range": [
            90,
            118
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        84,
        119
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "range": [
              132,
              138
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
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
              120,
              127
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
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
              128,
              131
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
            120,
            131
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          120,
          139
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        120,
        139
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
