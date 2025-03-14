__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1197
  ],
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"Sync result\"",
                    "value": "Sync result",
                    "range": [
                      31,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    24,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                18,
                47
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              12,
              47
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 1
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
              0,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 0,
                "line": 1
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              8,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
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
        "optional": false,
        "range": [
          0,
          48
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        49
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"Async result\"",
                    "value": "Async result",
                    "range": [
                      88,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    81,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                75,
                105
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              63,
              105
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 12,
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
            "name": "Promise",
            "optional": false,
            "range": [
              51,
              58
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              59,
              62
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            51,
            62
          ],
          "loc": {
            "end": {
              "column": 11,
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
          51,
          106
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        51,
        107
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "a",
            "optional": false,
            "range": [
              115,
              116
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
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
                  "type": "Literal",
                  "raw": "\"Sync result\"",
                  "value": "Sync result",
                  "range": [
                    137,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 9
                    },
                    "start": {
                      "column": 28,
                      "line": 9
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  131,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 9
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
                  119,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "range": [
                  127,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "range": [
                119,
                130
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              119,
              151
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            115,
            151
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        109,
        152
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "b",
            "optional": false,
            "range": [
              159,
              160
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": true,
                "body": {
                  "type": "Literal",
                  "raw": "\"Async result\"",
                  "value": "Async result",
                  "range": [
                    187,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 10
                    },
                    "start": {
                      "column": 34,
                      "line": 10
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  175,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
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
                  163,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "range": [
                  171,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              },
              "range": [
                163,
                174
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              163,
              202
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          },
          "range": [
            159,
            202
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        153,
        203
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                254,
                268
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 13
                },
                "start": {
                  "column": 29,
                  "line": 13
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  },
                  "range": [
                    241,
                    249
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      243,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  238,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              237,
              268
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              270,
              275
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 13
              },
              "start": {
                "column": 45,
                "line": 13
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
              225,
              232
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              233,
              236
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            225,
            236
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          225,
          276
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        225,
        277
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                299,
                313
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
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
                "name": "foo",
                "optional": false,
                "range": [
                  291,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              290,
              313
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              315,
              320
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 14
              },
              "start": {
                "column": 37,
                "line": 14
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
              278,
              285
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 14
              },
              "start": {
                "column": 0,
                "line": 14
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              286,
              289
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            278,
            289
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          278,
          321
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        278,
        322
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                383,
                397
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
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
                "name": "foo",
                "optional": false,
                "range": [
                  375,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 13,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              374,
              397
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
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
              362,
              369
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 16
              },
              "start": {
                "column": 0,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              370,
              373
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "range": [
            362,
            373
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          362,
          398
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        362,
        399
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                441,
                455
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 17
                },
                "start": {
                  "column": 41,
                  "line": 17
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 17
                    },
                    "start": {
                      "column": 16,
                      "line": 17
                    }
                  },
                  "range": [
                    416,
                    436
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          418,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 17
                          },
                          "start": {
                            "column": 18,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          427,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 17
                          },
                          "start": {
                            "column": 27,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      418,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  413,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              412,
              455
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              457,
              466
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 17
              },
              "start": {
                "column": 57,
                "line": 17
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
              400,
              407
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              408,
              411
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
            400,
            411
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          400,
          467
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        400,
        468
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                510,
                524
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 18
                },
                "start": {
                  "column": 41,
                  "line": 18
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  },
                  "range": [
                    485,
                    505
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          487,
                          493
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 18
                          },
                          "start": {
                            "column": 18,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          496,
                          505
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 18
                          },
                          "start": {
                            "column": 27,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      487,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 18
                      },
                      "start": {
                        "column": 18,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  482,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              481,
              524
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              526,
              531
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 18
              },
              "start": {
                "column": 57,
                "line": 18
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
              469,
              476
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 18
              },
              "start": {
                "column": 0,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              477,
              480
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "range": [
            469,
            480
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          469,
          532
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        469,
        533
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                555,
                569
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
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
                "name": "foo",
                "optional": false,
                "range": [
                  547,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 19
                  },
                  "start": {
                    "column": 13,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              546,
              569
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              571,
              580
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 37,
                "line": 19
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
              534,
              541
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              542,
              545
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            534,
            545
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          534,
          581
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        534,
        582
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                641,
                655
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 21
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              635,
              655
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 21
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              657,
              662
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 21
              },
              "start": {
                "column": 34,
                "line": 21
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
              623,
              630
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              631,
              634
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            623,
            634
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          623,
          663
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        623,
        664
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                731,
                745
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 24
                },
                "start": {
                  "column": 42,
                  "line": 24
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 16,
                      "line": 24
                    }
                  },
                  "range": [
                    705,
                    713
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      707,
                      713
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  702,
                  713
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
                    "line": 24
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 24
                    },
                    "start": {
                      "column": 29,
                      "line": 24
                    }
                  },
                  "range": [
                    718,
                    726
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      720,
                      726
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 24
                      },
                      "start": {
                        "column": 31,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  715,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 24
                  },
                  "start": {
                    "column": 26,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              701,
              745
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 24
              },
              "start": {
                "column": 12,
                "line": 24
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              747,
              752
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 24
              },
              "start": {
                "column": 58,
                "line": 24
              }
            }
          },
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              754,
              756
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 24
              },
              "start": {
                "column": 65,
                "line": 24
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
              689,
              696
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 24
              },
              "start": {
                "column": 0,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              697,
              700
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            689,
            700
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          689,
          757
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        689,
        758
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                841,
                855
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 26
                },
                "start": {
                  "column": 42,
                  "line": 26
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 26
                    },
                    "start": {
                      "column": 16,
                      "line": 26
                    }
                  },
                  "range": [
                    815,
                    823
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      817,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 26
                      },
                      "start": {
                        "column": 18,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  812,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 26
                    },
                    "start": {
                      "column": 29,
                      "line": 26
                    }
                  },
                  "range": [
                    828,
                    836
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      830,
                      836
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 26
                      },
                      "start": {
                        "column": 31,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  825,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 26
                  },
                  "start": {
                    "column": 26,
                    "line": 26
                  }
                }
              }
            ],
            "range": [
              811,
              855
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              857,
              862
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 26
              },
              "start": {
                "column": 58,
                "line": 26
              }
            }
          },
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              864,
              866
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 26
              },
              "start": {
                "column": 65,
                "line": 26
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"baz\"",
            "value": "baz",
            "range": [
              868,
              873
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 26
              },
              "start": {
                "column": 69,
                "line": 26
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
              799,
              806
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              807,
              810
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            799,
            810
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          799,
          874
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        799,
        875
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                957,
                971
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 28
                },
                "start": {
                  "column": 42,
                  "line": 28
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 28
                    },
                    "start": {
                      "column": 16,
                      "line": 28
                    }
                  },
                  "range": [
                    931,
                    939
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      933,
                      939
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  928,
                  939
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 13,
                    "line": 28
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 28
                    },
                    "start": {
                      "column": 29,
                      "line": 28
                    }
                  },
                  "range": [
                    944,
                    952
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      946,
                      952
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 28
                      },
                      "start": {
                        "column": 31,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  941,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 28
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              927,
              971
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 28
              },
              "start": {
                "column": 12,
                "line": 28
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              973,
              978
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 28
              },
              "start": {
                "column": 58,
                "line": 28
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
              915,
              922
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 0,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              923,
              926
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "range": [
            915,
            926
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          915,
          979
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        915,
        980
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                1024,
                1038
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 29
                },
                "start": {
                  "column": 43,
                  "line": 29
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 29
                    },
                    "start": {
                      "column": 16,
                      "line": 29
                    }
                  },
                  "range": [
                    997,
                    1005
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      999,
                      1005
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 29
                      },
                      "start": {
                        "column": 18,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  994,
                  1005
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 29
                    },
                    "start": {
                      "column": 30,
                      "line": 29
                    }
                  },
                  "range": [
                    1011,
                    1019
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1013,
                      1019
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 29
                      },
                      "start": {
                        "column": 32,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  1007,
                  1019
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 26,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              993,
              1038
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 29
              },
              "start": {
                "column": 12,
                "line": 29
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              1040,
              1045
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 29
              },
              "start": {
                "column": 59,
                "line": 29
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
              981,
              988
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 29
              },
              "start": {
                "column": 0,
                "line": 29
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              989,
              992
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          },
          "range": [
            981,
            992
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          981,
          1046
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        981,
        1047
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                1091,
                1105
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 30
                },
                "start": {
                  "column": 43,
                  "line": 30
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 30
                    },
                    "start": {
                      "column": 16,
                      "line": 30
                    }
                  },
                  "range": [
                    1064,
                    1072
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1066,
                      1072
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 30
                      },
                      "start": {
                        "column": 18,
                        "line": 30
                      }
                    }
                  }
                },
                "range": [
                  1061,
                  1072
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 30
                  },
                  "start": {
                    "column": 13,
                    "line": 30
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 30
                    },
                    "start": {
                      "column": 30,
                      "line": 30
                    }
                  },
                  "range": [
                    1078,
                    1086
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1080,
                      1086
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 30
                      },
                      "start": {
                        "column": 32,
                        "line": 30
                      }
                    }
                  }
                },
                "range": [
                  1074,
                  1086
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 30
                  },
                  "start": {
                    "column": 26,
                    "line": 30
                  }
                }
              }
            ],
            "range": [
              1060,
              1105
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 30
              },
              "start": {
                "column": 12,
                "line": 30
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              1107,
              1112
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 30
              },
              "start": {
                "column": 59,
                "line": 30
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              1114,
              1123
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 30
              },
              "start": {
                "column": 66,
                "line": 30
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
              1048,
              1055
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 30
              },
              "start": {
                "column": 0,
                "line": 30
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              1056,
              1059
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 30
              }
            }
          },
          "range": [
            1048,
            1059
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          1048,
          1124
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        1048,
        1125
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
              "type": "Literal",
              "raw": "\"Async result\"",
              "value": "Async result",
              "range": [
                1169,
                1183
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 31
                },
                "start": {
                  "column": 43,
                  "line": 31
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
                    }
                  },
                  "range": [
                    1142,
                    1150
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1144,
                      1150
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 31
                      },
                      "start": {
                        "column": 18,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  1139,
                  1150
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 31
                  },
                  "start": {
                    "column": 13,
                    "line": 31
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 31
                    },
                    "start": {
                      "column": 30,
                      "line": 31
                    }
                  },
                  "range": [
                    1156,
                    1164
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1158,
                      1164
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 31
                      },
                      "start": {
                        "column": 32,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  1152,
                  1164
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 31
                  },
                  "start": {
                    "column": 26,
                    "line": 31
                  }
                }
              }
            ],
            "range": [
              1138,
              1183
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 31
              },
              "start": {
                "column": 12,
                "line": 31
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              1185,
              1190
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 31
              },
              "start": {
                "column": 59,
                "line": 31
              }
            }
          },
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              1192,
              1194
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 31
              },
              "start": {
                "column": 66,
                "line": 31
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
              1126,
              1133
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 31
              },
              "start": {
                "column": 0,
                "line": 31
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              1134,
              1137
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 31
              },
              "start": {
                "column": 8,
                "line": 31
              }
            }
          },
          "range": [
            1126,
            1137
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          1126,
          1195
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        1126,
        1196
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
