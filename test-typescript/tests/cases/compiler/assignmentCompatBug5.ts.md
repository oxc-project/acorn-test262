__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    200
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          33,
          36
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 1
          },
          "start": {
            "column": 33,
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
        "name": "foo1",
        "optional": false,
        "range": [
          9,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 9,
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
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            },
            "range": [
              15,
              31
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      19,
                      20
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 1
                      },
                      "start": {
                        "column": 19,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    },
                    "range": [
                      20,
                      28
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        22,
                        28
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
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
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
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
                17,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            }
          },
          "range": [
            14,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 1
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    44,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    47,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "range": [
                  44,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              42,
              50
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 5,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            37,
            41
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          37,
          51
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        37,
        52
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          81,
          84
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 4
          },
          "start": {
            "column": 27,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          63,
          67
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
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
                "line": 4
              },
              "start": {
                "column": 15,
                "line": 4
              }
            },
            "range": [
              69,
              79
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  71,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "range": [
                71,
                79
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            }
          },
          "range": [
            68,
            79
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "range": [
        54,
        84
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"s\"",
                "value": "s",
                "range": [
                  91,
                  94
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
              {
                "type": "Literal",
                "raw": "\"t\"",
                "value": "t",
                "range": [
                  96,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              90,
              100
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 5,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            85,
            89
          ],
          "loc": {
            "end": {
              "column": 4,
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
          85,
          101
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        85,
        102
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          143,
          146
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 7
          },
          "start": {
            "column": 39,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          113,
          117
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
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
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            },
            "range": [
              119,
              141
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    },
                    "range": [
                      123,
                      131
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        125,
                        131
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 21,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    122,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                },
                "range": [
                  133,
                  141
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    135,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 31,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                121,
                141
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            }
          },
          "range": [
            118,
            141
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        }
      ],
      "range": [
        104,
        146
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        146,
        147
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 42,
          "line": 7
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
              "type": "BlockStatement",
              "body": [],
              "range": [
                167,
                170
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
                      "line": 8
                    }
                  },
                  "range": [
                    155,
                    162
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      156,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  154,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              153,
              170
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 5,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            148,
            152
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          148,
          171
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        148,
        172
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    187,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                185,
                196
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  179,
                  180
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
              }
            ],
            "range": [
              178,
              196
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 5,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            173,
            177
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          173,
          197
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        173,
        198
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
