__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    606
  ],
  "body": [
    {
      "type": "ForStatement",
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    50,
                    51
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
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          60,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 2
                          },
                          "start": {
                            "column": 18,
                            "line": 2
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        60,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          66,
                          67
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
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        66,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      60,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    54,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  50,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
              46,
              70
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        129,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        133,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      129,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    129,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                119,
                141
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    97,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                87,
                109
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  79,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              },
              "range": [
                79,
                85
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              75,
              141
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          40,
          143
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 40,
            "line": 1
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "range": [
              9,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "range": [
              16,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          5,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            23,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            27,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "range": [
          23,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "operator": "++",
            "prefix": true,
            "range": [
              30,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          },
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              35,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            }
          }
        ],
        "range": [
          30,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 30,
            "line": 1
          }
        }
      },
      "range": [
        0,
        143
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForStatement",
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    195,
                    196
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
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          205,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 12
                          },
                          "start": {
                            "column": 18,
                            "line": 12
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        205,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          211,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 24,
                            "line": 12
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        211,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 24,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      205,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 18,
                        "line": 12
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    199,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  195,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              191,
              215
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        277,
                        278
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
                    "right": {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        281,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 17
                        },
                        "start": {
                          "column": 12,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      277,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    277,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                267,
                289
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "range": [
                    242,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                232,
                257
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  224,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                }
              },
              "range": [
                224,
                230
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              220,
              289
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          185,
          291
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 40,
            "line": 11
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                154,
                155
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                158,
                159
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "range": [
              154,
              159
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                161,
                162
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "range": [
              161,
              166
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          150,
          166
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            168,
            169
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 11
            },
            "start": {
              "column": 23,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            172,
            173
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 27,
              "line": 11
            }
          }
        },
        "range": [
          168,
          173
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 11
          },
          "start": {
            "column": 23,
            "line": 11
          }
        }
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                177,
                178
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 11
                },
                "start": {
                  "column": 32,
                  "line": 11
                }
              }
            },
            "operator": "++",
            "prefix": true,
            "range": [
              175,
              178
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 30,
                "line": 11
              }
            }
          },
          {
            "type": "UpdateExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                182,
                183
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
                }
              }
            },
            "operator": "--",
            "prefix": true,
            "range": [
              180,
              183
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 35,
                "line": 11
              }
            }
          }
        ],
        "range": [
          175,
          183
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 11
          },
          "start": {
            "column": 30,
            "line": 11
          }
        }
      },
      "range": [
        145,
        291
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ForStatement",
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      349,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            359,
                            360
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 23
                            },
                            "start": {
                              "column": 18,
                              "line": 23
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          359,
                          362
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 23
                          },
                          "start": {
                            "column": 18,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            365,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 23
                            },
                            "start": {
                              "column": 24,
                              "line": 23
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          365,
                          368
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 23
                          },
                          "start": {
                            "column": 24,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        359,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 23
                        },
                        "start": {
                          "column": 18,
                          "line": 23
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      353,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    349,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                345,
                369
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": {
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          433,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          437,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        433,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      433,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  423,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 9,
                    "line": 27
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop",
                      "optional": false,
                      "range": [
                        402,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 25
                        },
                        "start": {
                          "column": 14,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      396,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  386,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 16,
                    "line": 24
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    378,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    383,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                },
                "range": [
                  378,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "range": [
                374,
                445
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            }
          ],
          "range": [
            339,
            447
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 40,
              "line": 22
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  308,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  312,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
                  }
                }
              },
              "range": [
                308,
                313
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            {
              "type": "VariableDeclarator",
              "definite": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  315,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 22
                  },
                  "start": {
                    "column": 16,
                    "line": 22
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  319,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 20,
                    "line": 22
                  }
                }
              },
              "range": [
                315,
                320
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 22
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            304,
            320
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 22
            },
            "start": {
              "column": 5,
              "line": 22
            }
          }
        },
        "test": {
          "type": "BinaryExpression",
          "operator": "<",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              322,
              323
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              326,
              327
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 22
              },
              "start": {
                "column": 27,
                "line": 22
              }
            }
          },
          "range": [
            322,
            327
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 22
            },
            "start": {
              "column": 23,
              "line": 22
            }
          }
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  331,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 22
                  },
                  "start": {
                    "column": 32,
                    "line": 22
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                329,
                332
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 22
                },
                "start": {
                  "column": 30,
                  "line": 22
                }
              }
            },
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  336,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 22
                  },
                  "start": {
                    "column": 37,
                    "line": 22
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                334,
                337
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 22
                },
                "start": {
                  "column": 35,
                  "line": 22
                }
              }
            }
          ],
          "range": [
            329,
            337
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 22
            },
            "start": {
              "column": 30,
              "line": 22
            }
          }
        },
        "range": [
          299,
          447
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop",
        "optional": false,
        "range": [
          293,
          297
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        293,
        447
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "LabeledStatement",
      "body": {
        "type": "ForStatement",
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      505,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            515,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 34
                            },
                            "start": {
                              "column": 18,
                              "line": 34
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          515,
                          518
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 34
                          },
                          "start": {
                            "column": 18,
                            "line": 34
                          }
                        }
                      },
                      "right": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            521,
                            522
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 34
                            },
                            "start": {
                              "column": 24,
                              "line": 34
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          521,
                          524
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 34
                          },
                          "start": {
                            "column": 24,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        515,
                        524
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 34
                        },
                        "start": {
                          "column": 18,
                          "line": 34
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      509,
                      524
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 34
                      },
                      "start": {
                        "column": 12,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    505,
                    524
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                501,
                525
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": {
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          592,
                          593
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          596,
                          597
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 39
                          },
                          "start": {
                            "column": 12,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        592,
                        597
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      592,
                      598
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  582,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 9,
                    "line": 38
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop",
                      "optional": false,
                      "range": [
                        561,
                        565
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 36
                        },
                        "start": {
                          "column": 17,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      552,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  542,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 16,
                    "line": 35
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    534,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    539,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 35
                    },
                    "start": {
                      "column": 13,
                      "line": 35
                    }
                  }
                },
                "range": [
                  534,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              },
              "range": [
                530,
                604
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            495,
            606
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 41
            },
            "start": {
              "column": 40,
              "line": 33
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  464,
                  465
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  468,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 33
                  },
                  "start": {
                    "column": 13,
                    "line": 33
                  }
                }
              },
              "range": [
                464,
                469
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            {
              "type": "VariableDeclarator",
              "definite": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  471,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 33
                  },
                  "start": {
                    "column": 16,
                    "line": 33
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  475,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
                  }
                }
              },
              "range": [
                471,
                476
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 33
                },
                "start": {
                  "column": 16,
                  "line": 33
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            460,
            476
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 33
            },
            "start": {
              "column": 5,
              "line": 33
            }
          }
        },
        "test": {
          "type": "BinaryExpression",
          "operator": "<",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              478,
              479
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 33
              },
              "start": {
                "column": 23,
                "line": 33
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              482,
              483
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 33
              },
              "start": {
                "column": 27,
                "line": 33
              }
            }
          },
          "range": [
            478,
            483
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 33
            },
            "start": {
              "column": 23,
              "line": 33
            }
          }
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  487,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 33
                  },
                  "start": {
                    "column": 32,
                    "line": 33
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                485,
                488
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 33
                },
                "start": {
                  "column": 30,
                  "line": 33
                }
              }
            },
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  492,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 33
                  },
                  "start": {
                    "column": 37,
                    "line": 33
                  }
                }
              },
              "operator": "--",
              "prefix": true,
              "range": [
                490,
                493
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 33
                },
                "start": {
                  "column": 35,
                  "line": 33
                }
              }
            }
          ],
          "range": [
            485,
            493
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 33
            },
            "start": {
              "column": 30,
              "line": 33
            }
          }
        },
        "range": [
          455,
          606
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop",
        "optional": false,
        "range": [
          449,
          453
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        449,
        606
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
