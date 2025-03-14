__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    491
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  46,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  53,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "range": [
                46,
                60
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              46,
              60
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    67,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 3
                    },
                    "start": {
                      "column": 6,
                      "line": 3
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  65,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                65,
                70
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              65,
              70
            ],
            "loc": {
              "end": {
                "column": 9,
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
          40,
          72
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 40,
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
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            },
            "range": [
              17,
              38
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 21,
                        "line": 1
                      }
                    },
                    "range": [
                      21,
                      29
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        23,
                        29
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 1
                        },
                        "start": {
                          "column": 23,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    20,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 31,
                    "line": 1
                  }
                },
                "range": [
                  31,
                  38
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    34,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 34,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                19,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            }
          },
          "range": [
            15,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        72
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  120,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    132,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      127,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  127,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                120,
                134
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              120,
              134
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 4,
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
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    141,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                139,
                144
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              139,
              144
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          114,
          146
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 40,
            "line": 6
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
          83,
          87
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            },
            "range": [
              91,
              112
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    },
                    "range": [
                      95,
                      103
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        97,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    94,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 31,
                    "line": 6
                  }
                },
                "range": [
                  105,
                  112
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    108,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 34,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                93,
                112
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            }
          },
          "range": [
            89,
            112
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 15,
              "line": 6
            }
          }
        }
      ],
      "range": [
        74,
        146
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  194,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    206,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      201,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  201,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                194,
                208
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              194,
              208
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    215,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  213,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                213,
                218
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              213,
              218
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          188,
          220
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 40,
            "line": 11
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
          157,
          161
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 17,
                "line": 11
              }
            },
            "range": [
              165,
              186
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 11
                      }
                    },
                    "range": [
                      169,
                      177
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        171,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    168,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                },
                "range": [
                  179,
                  186
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    182,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                167,
                186
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            }
          },
          "range": [
            163,
            186
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 11
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        }
      ],
      "range": [
        148,
        220
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  268,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "range": [
                          275,
                          276
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 17
                          },
                          "start": {
                            "column": 11,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          277,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 13,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        275,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 11,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      275,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 11,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        295,
                        296
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
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          290,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 17
                          },
                          "start": {
                            "column": 26,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      290,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 26,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  275,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "range": [
                268,
                298
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              268,
              298
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 4,
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
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    305,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 18
                    },
                    "start": {
                      "column": 6,
                      "line": 18
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  303,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                303,
                308
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              303,
              308
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          262,
          310
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 40,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "range": [
          231,
          235
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 17,
                "line": 16
              }
            },
            "range": [
              239,
              260
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    },
                    "range": [
                      243,
                      251
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        245,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 23,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    242,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 31,
                    "line": 16
                  }
                },
                "range": [
                  253,
                  260
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    256,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 16
                    },
                    "start": {
                      "column": 34,
                      "line": 16
                    }
                  }
                }
              },
              "range": [
                241,
                260
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              }
            }
          },
          "range": [
            237,
            260
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 15,
              "line": 16
            }
          }
        }
      ],
      "range": [
        222,
        310
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  358,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "range": [
                          365,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 22
                          },
                          "start": {
                            "column": 11,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          367,
                          375
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 22
                          },
                          "start": {
                            "column": 13,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        365,
                        375
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 22
                        },
                        "start": {
                          "column": 11,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      365,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 22
                      },
                      "start": {
                        "column": 11,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        385,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 22
                        },
                        "start": {
                          "column": 31,
                          "line": 22
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          380,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 22
                          },
                          "start": {
                            "column": 26,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "range": [
                      380,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 26,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  365,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 22
                  },
                  "start": {
                    "column": 11,
                    "line": 22
                  }
                }
              },
              "range": [
                358,
                388
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              358,
              388
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    395,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 23
                    },
                    "start": {
                      "column": 6,
                      "line": 23
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  393,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "range": [
                393,
                398
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              393,
              398
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          352,
          400
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 40,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "range": [
          321,
          325
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 21
              },
              "start": {
                "column": 17,
                "line": 21
              }
            },
            "range": [
              329,
              350
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 21
                      }
                    },
                    "range": [
                      333,
                      341
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        335,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 21
                        },
                        "start": {
                          "column": 23,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    332,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 31,
                    "line": 21
                  }
                },
                "range": [
                  343,
                  350
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    346,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 21
                    },
                    "start": {
                      "column": 34,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                331,
                350
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 19,
                  "line": 21
                }
              }
            }
          },
          "range": [
            327,
            350
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 21
            },
            "start": {
              "column": 15,
              "line": 21
            }
          }
        }
      ],
      "range": [
        312,
        400
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  448,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "range": [
                          455,
                          456
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 27
                          },
                          "start": {
                            "column": 11,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          457,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 27
                          },
                          "start": {
                            "column": 13,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        455,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 27
                        },
                        "start": {
                          "column": 11,
                          "line": 27
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      455,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 27
                      },
                      "start": {
                        "column": 11,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        475,
                        476
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
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          470,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 27
                          },
                          "start": {
                            "column": 26,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "range": [
                      470,
                      476
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 27
                      },
                      "start": {
                        "column": 26,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  455,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              },
              "range": [
                448,
                478
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              448,
              478
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    485,
                    487
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 28
                    },
                    "start": {
                      "column": 6,
                      "line": 28
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  483,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                483,
                488
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              483,
              488
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          442,
          490
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 40,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar3",
        "optional": false,
        "range": [
          411,
          415
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 26
              },
              "start": {
                "column": 17,
                "line": 26
              }
            },
            "range": [
              419,
              440
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 26
                      },
                      "start": {
                        "column": 21,
                        "line": 26
                      }
                    },
                    "range": [
                      423,
                      431
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        425,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 26
                        },
                        "start": {
                          "column": 23,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    422,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 26
                    },
                    "start": {
                      "column": 20,
                      "line": 26
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 31,
                    "line": 26
                  }
                },
                "range": [
                  433,
                  440
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    436,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 26
                    },
                    "start": {
                      "column": 34,
                      "line": 26
                    }
                  }
                }
              },
              "range": [
                421,
                440
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 26
                },
                "start": {
                  "column": 19,
                  "line": 26
                }
              }
            }
          },
          "range": [
            417,
            440
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 26
            },
            "start": {
              "column": 15,
              "line": 26
            }
          }
        }
      ],
      "range": [
        402,
        490
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
