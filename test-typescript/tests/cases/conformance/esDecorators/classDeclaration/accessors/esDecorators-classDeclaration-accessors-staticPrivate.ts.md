__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    286
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                20
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  17,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              12,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          31,
          124
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        42,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 4
                        },
                        "start": {
                          "column": 9,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      38,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 4
                      },
                      "start": {
                        "column": 5,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    38,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
                      "line": 4
                    }
                  }
                },
                "range": [
                  37,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method1",
              "range": [
                56,
                64
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 4
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                64,
                80
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        76,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 43,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      69,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  67,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
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
                  "column": 47,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              }
            },
            "range": [
              37,
              80
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
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        90,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 5
                        },
                        "start": {
                          "column": 9,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      86,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 5
                      },
                      "start": {
                        "column": 5,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    86,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                },
                "range": [
                  85,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method1",
              "range": [
                104,
                112
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                112,
                122
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  120,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 39,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    113,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "range": [
              85,
              122
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 8,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          29,
          30
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        23,
        124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          139,
          285
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method1",
              "range": [
                156,
                164
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                164,
                180
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        176,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 10
                        },
                        "start": {
                          "column": 35,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      169,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  167,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 26,
                    "line": 10
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
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              }
            },
            "range": [
              145,
              180
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method1",
              "range": [
                196,
                204
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                204,
                214
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  212,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    205,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              }
            },
            "range": [
              185,
              214
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      236,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "name": "method1",
                    "range": [
                      241,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 13
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    236,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  236,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        259,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "PrivateIdentifier",
                      "name": "method1",
                      "range": [
                        264,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      259,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      275,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    259,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "range": [
                  259,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
              219,
              283
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 8,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "range": [
              127,
              130
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 8
              },
              "start": {
                "column": 1,
                "line": 8
              }
            }
          },
          "range": [
            126,
            130
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
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          137,
          138
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
      "implements": [],
      "superClass": null,
      "range": [
        126,
        285
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
