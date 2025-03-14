__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    809
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          21,
          25
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 21,
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
        "name": "Foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          20
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            16,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        25
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                31,
                39
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  33,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              30,
              39
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  43,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "inVariableInit",
                "optional": false,
                "range": [
                  47,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "range": [
                43,
                61
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                64,
                65
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 38,
                  "line": 4
                }
              }
            },
            "range": [
              43,
              65
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "range": [
            30,
            66
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        26,
        67
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
          115,
          119
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 45,
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
        "name": "bar",
        "optional": false,
        "range": [
          79,
          82
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "range": [
              83,
              84
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          },
          "optional": false,
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  88,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "inNestedFunction",
                "optional": false,
                "range": [
                  92,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "range": [
                88,
                108
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 41,
                  "line": 7
                }
              }
            },
            "range": [
              88,
              112
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          "range": [
            83,
            113
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        }
      ],
      "range": [
        70,
        119
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  122,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 11
                  },
                  "start": {
                    "column": 1,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bla",
                "optional": false,
                "range": [
                  126,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 11
                  }
                }
              },
              "range": [
                122,
                129
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 1,
                  "line": 11
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      134,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      139,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 18,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    134,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                132,
                141
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              122,
              141
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 1,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              143,
              146
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          },
          "range": [
            121,
            146
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  150,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "range": [
                  154,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 33,
                    "line": 11
                  }
                }
              },
              "range": [
                150,
                157
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 29,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                160,
                161
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 39,
                  "line": 11
                }
              }
            },
            "range": [
              150,
              161
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 11
              },
              "start": {
                "column": 29,
                "line": 11
              }
            }
          },
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  166,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 11
                  },
                  "start": {
                    "column": 45,
                    "line": 11
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
                  170,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 11
                  },
                  "start": {
                    "column": 49,
                    "line": 11
                  }
                }
              },
              "range": [
                166,
                173
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 11
                },
                "start": {
                  "column": 45,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                177,
                178
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 11
                },
                "start": {
                  "column": 56,
                  "line": 11
                }
              }
            },
            "range": [
              166,
              178
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 11
              },
              "start": {
                "column": 45,
                "line": 11
              }
            }
          },
          "range": [
            149,
            179
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 11
            },
            "start": {
              "column": 28,
              "line": 11
            }
          }
        },
        "range": [
          121,
          179
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        121,
        180
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    207,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "range": [
                    211,
                    215
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
                "range": [
                  207,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  218,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              },
              "range": [
                207,
                219
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              207,
              220
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          201,
          222
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 19,
            "line": 13
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              185,
              188
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 3,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromIf",
            "optional": false,
            "range": [
              189,
              195
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 7,
                "line": 13
              }
            }
          },
          "range": [
            185,
            195
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 13
            },
            "start": {
              "column": 3,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            198,
            199
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 13
            },
            "start": {
              "column": 16,
              "line": 13
            }
          }
        },
        "range": [
          185,
          199
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 3,
            "line": 13
          }
        }
      },
      "range": [
        182,
        222
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    264,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "range": [
                    268,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "range": [
                  264,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  284,
                  285
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 18
                  }
                }
              },
              "range": [
                264,
                285
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              264,
              286
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        301,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromWhileBodyNested",
                      "optional": false,
                      "range": [
                        305,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 20
                        },
                        "start": {
                          "column": 12,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      301,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      327,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 20
                      },
                      "start": {
                        "column": 34,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    301,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "range": [
                  301,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              291,
              335
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          258,
          337
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 34,
            "line": 17
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              230,
              233
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromWhileCondition",
            "optional": false,
            "range": [
              234,
              252
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          },
          "range": [
            230,
            252
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            255,
            256
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 17
            },
            "start": {
              "column": 31,
              "line": 17
            }
          }
        },
        "range": [
          230,
          256
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "range": [
        224,
        337
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    348,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false,
                  "range": [
                    352,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "range": [
                  348,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  365,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 25
                  },
                  "start": {
                    "column": 21,
                    "line": 25
                  }
                }
              },
              "range": [
                348,
                366
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              348,
              367
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        382,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoBodyNested",
                      "optional": false,
                      "range": [
                        386,
                        402
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      382,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      405,
                      406
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 27
                      },
                      "start": {
                        "column": 31,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    382,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "range": [
                  382,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              372,
              413
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          342,
          415
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 3,
            "line": 24
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              422,
              425
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromDoCondition",
            "optional": false,
            "range": [
              426,
              441
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 29
              },
              "start": {
                "column": 12,
                "line": 29
              }
            }
          },
          "range": [
            422,
            441
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 29
            },
            "start": {
              "column": 8,
              "line": 29
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            444,
            445
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 29
            },
            "start": {
              "column": 30,
              "line": 29
            }
          }
        },
        "range": [
          422,
          445
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 29
          },
          "start": {
            "column": 8,
            "line": 29
          }
        }
      },
      "range": [
        339,
        447
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    515,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 32
                    },
                    "start": {
                      "column": 4,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "range": [
                    519,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "range": [
                  515,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  533,
                  534
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 32
                  },
                  "start": {
                    "column": 22,
                    "line": 32
                  }
                }
              },
              "range": [
                515,
                534
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              515,
              535
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        550,
                        553
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForBodyNested",
                      "optional": false,
                      "range": [
                        554,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 34
                        },
                        "start": {
                          "column": 12,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      550,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      574,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 34
                      },
                      "start": {
                        "column": 32,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    550,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "range": [
                  550,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "range": [
              540,
              582
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          509,
          584
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 60,
            "line": 31
          }
        }
      },
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              453,
              456
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forInit",
            "optional": false,
            "range": [
              457,
              464
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 31
              },
              "start": {
                "column": 8,
                "line": 31
              }
            }
          },
          "range": [
            453,
            464
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            467,
            468
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 31
            },
            "start": {
              "column": 18,
              "line": 31
            }
          }
        },
        "range": [
          453,
          468
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 31
          },
          "start": {
            "column": 4,
            "line": 31
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": ">",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                471,
                474
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 31
                },
                "start": {
                  "column": 22,
                  "line": 31
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "forCond",
              "optional": false,
              "range": [
                475,
                482
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 31
                },
                "start": {
                  "column": 26,
                  "line": 31
                }
              }
            },
            "range": [
              471,
              482
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 31
              },
              "start": {
                "column": 22,
                "line": 31
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              485,
              486
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 31
              },
              "start": {
                "column": 36,
                "line": 31
              }
            }
          },
          "range": [
            471,
            486
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 31
            },
            "start": {
              "column": 22,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            490,
            491
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 31
            },
            "start": {
              "column": 41,
              "line": 31
            }
          }
        },
        "range": [
          470,
          491
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 31
          },
          "start": {
            "column": 21,
            "line": 31
          }
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              493,
              496
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 31
              },
              "start": {
                "column": 44,
                "line": 31
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIncr",
            "optional": false,
            "range": [
              497,
              504
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 31
              },
              "start": {
                "column": 48,
                "line": 31
              }
            }
          },
          "range": [
            493,
            504
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 31
            },
            "start": {
              "column": 44,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            507,
            508
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 31
            },
            "start": {
              "column": 58,
              "line": 31
            }
          }
        },
        "range": [
          493,
          508
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 31
          },
          "start": {
            "column": 44,
            "line": 31
          }
        }
      },
      "range": [
        449,
        584
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 31
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    623,
                    626
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "range": [
                    627,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "range": [
                  623,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  643,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 39
                  },
                  "start": {
                    "column": 24,
                    "line": 39
                  }
                }
              },
              "range": [
                623,
                644
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              623,
              645
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        660,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForOfBodyNested",
                      "optional": false,
                      "range": [
                        664,
                        683
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 41
                        },
                        "start": {
                          "column": 12,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      660,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      686,
                      687
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 41
                      },
                      "start": {
                        "column": 34,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    660,
                    687
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                "range": [
                  660,
                  688
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              650,
              694
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          617,
          696
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 31,
            "line": 38
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
              "name": "f",
              "optional": false,
              "range": [
                594,
                595
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              }
            },
            "init": null,
            "range": [
              594,
              595
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 38
              },
              "start": {
                "column": 8,
                "line": 38
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          590,
          595
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 38
          },
          "start": {
            "column": 4,
            "line": 38
          }
        }
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              600,
              603
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 38
              },
              "start": {
                "column": 14,
                "line": 38
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forOf",
            "optional": false,
            "range": [
              604,
              609
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 38
              },
              "start": {
                "column": 18,
                "line": 38
              }
            }
          },
          "range": [
            600,
            609
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 38
            },
            "start": {
              "column": 14,
              "line": 38
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "range": [
            612,
            614
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 38
            },
            "start": {
              "column": 26,
              "line": 38
            }
          }
        },
        "range": [
          600,
          614
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 38
          },
          "start": {
            "column": 14,
            "line": 38
          }
        }
      },
      "range": [
        586,
        696
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    736,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "range": [
                    740,
                    753
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "range": [
                  736,
                  753
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  756,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 47
                  },
                  "start": {
                    "column": 24,
                    "line": 47
                  }
                }
              },
              "range": [
                736,
                757
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              736,
              758
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        773,
                        776
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 49
                        },
                        "start": {
                          "column": 8,
                          "line": 49
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForInBodyNested",
                      "optional": false,
                      "range": [
                        777,
                        796
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 49
                        },
                        "start": {
                          "column": 12,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      773,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      799,
                      800
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 49
                      },
                      "start": {
                        "column": 34,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    773,
                    800
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                "range": [
                  773,
                  801
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              }
            ],
            "range": [
              763,
              807
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "range": [
          730,
          809
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 31,
            "line": 46
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
              "name": "f",
              "optional": false,
              "range": [
                707,
                708
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 46
                },
                "start": {
                  "column": 8,
                  "line": 46
                }
              }
            },
            "init": null,
            "range": [
              707,
              708
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 46
              },
              "start": {
                "column": 8,
                "line": 46
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          703,
          708
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 46
          },
          "start": {
            "column": 4,
            "line": 46
          }
        }
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              713,
              716
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 46
              },
              "start": {
                "column": 14,
                "line": 46
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIn",
            "optional": false,
            "range": [
              717,
              722
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 46
              },
              "start": {
                "column": 18,
                "line": 46
              }
            }
          },
          "range": [
            713,
            722
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 46
            },
            "start": {
              "column": 14,
              "line": 46
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "range": [
            725,
            727
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 46
            },
            "start": {
              "column": 26,
              "line": 46
            }
          }
        },
        "range": [
          713,
          727
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 46
          },
          "start": {
            "column": 14,
            "line": 46
          }
        }
      },
      "range": [
        699,
        809
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 51
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
