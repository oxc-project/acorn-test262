__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    348
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              8,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    45,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "operator": "++",
                "prefix": false,
                "range": [
                  45,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                45,
                49
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                58,
                64
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "5",
            "value": 5,
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "range": [
            29,
            64
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
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
                          "column": 13,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": false,
                    "range": [
                      100,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    100,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    117,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                86,
                133
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              74,
              76
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          },
          "range": [
            69,
            133
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    155,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      159,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      162,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    159,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  155,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                155,
                165
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            }
          ],
          "test": null,
          "range": [
            138,
            165
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          20,
          21
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 8,
            "line": 2
          }
        }
      },
      "range": [
        12,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    201,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "operator": "++",
                "prefix": false,
                "range": [
                  201,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              "range": [
                201,
                205
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                214,
                220
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "5",
            "value": 5,
            "range": [
              190,
              191
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            185,
            220
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        256,
                        257
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": false,
                    "range": [
                      256,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 21
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    256,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    273,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                242,
                289
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              230,
              232
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            225,
            289
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        325,
                        326
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 26
                        },
                        "start": {
                          "column": 12,
                          "line": 26
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          329,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 26
                          },
                          "start": {
                            "column": 16,
                            "line": 26
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          333,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 26
                          },
                          "start": {
                            "column": 20,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        329,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 26
                        },
                        "start": {
                          "column": 16,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      325,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 26
                      },
                      "start": {
                        "column": 12,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    325,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                311,
                346
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            }
          ],
          "test": null,
          "range": [
            294,
            346
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          176,
          177
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 14
          }
        }
      },
      "range": [
        168,
        348
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
