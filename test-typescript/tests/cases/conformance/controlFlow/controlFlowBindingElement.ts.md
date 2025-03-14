__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1826
  ],
  "body": [
    {
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
                "name": "data",
                "optional": false,
                "range": [
                  12,
                  16
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        22,
                        27
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 20,
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
                      "raw": "'value'",
                      "value": "value",
                      "range": [
                        29,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      22,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  20,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                12,
                38
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            6,
            39
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 2
            },
            "start": {
              "column": 4,
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
                      "name": "param",
                      "optional": false,
                      "range": [
                        61,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
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
                        61,
                        122
                      ],
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "range": [
                          61,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ThrowStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "raw": "'param is not defined'",
                                      "value": "param is not defined",
                                      "range": [
                                        94,
                                        116
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 5
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Error",
                                    "optional": false,
                                    "range": [
                                      88,
                                      93
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    84,
                                    117
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  78,
                                  117
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "range": [
                              76,
                              119
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 5
                              },
                              "start": {
                                "column": 23,
                                "line": 5
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            70,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 5
                            },
                            "start": {
                              "column": 17,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          69,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      61,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  51,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  132,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                51,
                136
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            45,
            137
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 6
            },
            "start": {
              "column": 4,
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
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "range": [
                  159,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
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
                  147,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                  155,
                  158
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
                147,
                158
              ],
              "loc": {
                "end": {
                  "column": 15,
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
              147,
              165
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "range": [
            147,
            166
          ],
          "loc": {
            "end": {
              "column": 23,
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
        0,
        223
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
                "name": "data",
                "optional": false,
                "range": [
                  238,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        248,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 13
                        },
                        "start": {
                          "column": 20,
                          "line": 13
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'value'",
                      "value": "value",
                      "range": [
                        255,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 13
                        },
                        "start": {
                          "column": 27,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      248,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 20,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  246,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              },
              "range": [
                238,
                264
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            232,
            265
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  },
                  "range": [
                    278,
                    298
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          280,
                          286
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          289,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 15
                          },
                          "start": {
                            "column": 22,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      280,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  275,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  301,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 15
                  },
                  "start": {
                    "column": 34,
                    "line": 15
                  }
                }
              },
              "range": [
                275,
                303
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            271,
            304
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
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
                      "name": "param",
                      "optional": false,
                      "range": [
                        325,
                        330
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "range": [
                        325,
                        386
                      ],
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "range": [
                          325,
                          330
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
                      "optional": false,
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ThrowStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "raw": "'param is not defined'",
                                      "value": "param is not defined",
                                      "range": [
                                        358,
                                        380
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 17
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Error",
                                    "optional": false,
                                    "range": [
                                      352,
                                      357
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    348,
                                    381
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  342,
                                  381
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 17
                                  }
                                }
                              }
                            ],
                            "range": [
                              340,
                              383
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 17
                              },
                              "start": {
                                "column": 23,
                                "line": 17
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            334,
                            383
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 17
                            },
                            "start": {
                              "column": 17,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          333,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 17
                          },
                          "start": {
                            "column": 16,
                            "line": 17
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      325,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
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
                  315,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  396,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "range": [
                315,
                400
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            309,
            401
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              411,
              414
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "range": [
            411,
            415
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "range": [
        226,
        440
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
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
                "name": "data",
                "optional": false,
                "range": [
                  454,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        464,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 20,
                          "line": 24
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'value'",
                      "value": "value",
                      "range": [
                        471,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 24
                        },
                        "start": {
                          "column": 27,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      464,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  462,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 18,
                    "line": 24
                  }
                }
              },
              "range": [
                454,
                480
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            448,
            481
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 26
                    },
                    "start": {
                      "column": 11,
                      "line": 26
                    }
                  },
                  "range": [
                    494,
                    514
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          496,
                          502
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 26
                          },
                          "start": {
                            "column": 13,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          505,
                          514
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 26
                          },
                          "start": {
                            "column": 22,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "range": [
                      496,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  491,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  517,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 26
                  },
                  "start": {
                    "column": 34,
                    "line": 26
                  }
                }
              },
              "range": [
                491,
                519
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            487,
            520
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
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
                      "name": "param",
                      "optional": false,
                      "range": [
                        541,
                        546
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "range": [
                        541,
                        578
                      ],
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "range": [
                          541,
                          546
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
                      "optional": false,
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
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
                                    "name": "foo",
                                    "optional": false,
                                    "range": [
                                      558,
                                      561
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 28
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "range": [
                                      564,
                                      573
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 28
                                      }
                                    }
                                  },
                                  "range": [
                                    558,
                                    573
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 28
                                    }
                                  }
                                },
                                "range": [
                                  558,
                                  573
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 28
                                  }
                                }
                              }
                            ],
                            "range": [
                              556,
                              575
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 28
                              },
                              "start": {
                                "column": 23,
                                "line": 28
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            550,
                            575
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 28
                            },
                            "start": {
                              "column": 17,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          549,
                          578
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 28
                          },
                          "start": {
                            "column": 16,
                            "line": 28
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      541,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
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
                  531,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  588,
                  592
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              },
              "range": [
                531,
                592
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 29
                },
                "start": {
                  "column": 10,
                  "line": 27
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            525,
            593
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 29
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
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              603,
              606
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
          "range": [
            603,
            607
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "range": [
        442,
        642
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
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
                "name": "data",
                "optional": false,
                "range": [
                  656,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 35
                  },
                  "start": {
                    "column": 10,
                    "line": 35
                  }
                }
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        666,
                        671
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 35
                        },
                        "start": {
                          "column": 20,
                          "line": 35
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'value'",
                      "value": "value",
                      "range": [
                        673,
                        680
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 35
                        },
                        "start": {
                          "column": 27,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      666,
                      680
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 35
                      },
                      "start": {
                        "column": 20,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  664,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 35
                  },
                  "start": {
                    "column": 18,
                    "line": 35
                  }
                }
              },
              "range": [
                656,
                682
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 35
                },
                "start": {
                  "column": 10,
                  "line": 35
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            650,
            683
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 37
                    },
                    "start": {
                      "column": 11,
                      "line": 37
                    }
                  },
                  "range": [
                    696,
                    716
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          698,
                          704
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 37
                          },
                          "start": {
                            "column": 13,
                            "line": 37
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          707,
                          716
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 37
                          },
                          "start": {
                            "column": 22,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "range": [
                      698,
                      716
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 37
                      },
                      "start": {
                        "column": 13,
                        "line": 37
                      }
                    }
                  }
                },
                "range": [
                  693,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              },
              "init": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  719,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 37
                  },
                  "start": {
                    "column": 34,
                    "line": 37
                  }
                }
              },
              "range": [
                693,
                721
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            689,
            722
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
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
                      "name": "param",
                      "optional": false,
                      "range": [
                        743,
                        748
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "range": [
                        743,
                        778
                      ],
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "range": [
                          743,
                          748
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
                      "optional": false,
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "raw": "\"\"",
                                    "value": "",
                                    "range": [
                                      767,
                                      769
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 39
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      772,
                                      773
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 39
                                      }
                                    }
                                  },
                                  "range": [
                                    767,
                                    773
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 39
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 39
                                    }
                                  }
                                },
                                "range": [
                                  760,
                                  773
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 39
                                  }
                                }
                              }
                            ],
                            "range": [
                              758,
                              775
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 39
                              },
                              "start": {
                                "column": 23,
                                "line": 39
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            752,
                            775
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 39
                            },
                            "start": {
                              "column": 17,
                              "line": 39
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          751,
                          778
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 39
                          },
                          "start": {
                            "column": 16,
                            "line": 39
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      743,
                      778
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
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
                  733,
                  785
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  788,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              },
              "range": [
                733,
                792
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 38
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            727,
            793
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              803,
              806
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "range": [
            803,
            807
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "range": [
        644,
        830
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "body": {
            "type": "TSInterfaceBody",
            "range": [
              855,
              886
            ],
            "body": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "range": [
                    865,
                    871
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
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
                      "column": 22,
                      "line": 47
                    },
                    "start": {
                      "column": 14,
                      "line": 47
                    }
                  },
                  "range": [
                    871,
                    879
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "range": [
                        873,
                        879
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 47
                        },
                        "start": {
                          "column": 16,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      873,
                      879
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 47
                      },
                      "start": {
                        "column": 16,
                        "line": 47
                      }
                    }
                  }
                },
                "range": [
                  865,
                  880
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 21,
                "line": 46
              }
            }
          },
          "declare": false,
          "extends": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "range": [
              848,
              854
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 46
              },
              "start": {
                "column": 14,
                "line": 46
              }
            }
          },
          "range": [
            838,
            886
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 46
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 50
                    },
                    "start": {
                      "column": 11,
                      "line": 50
                    }
                  },
                  "range": [
                    899,
                    919
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          901,
                          907
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 50
                          },
                          "start": {
                            "column": 13,
                            "line": 50
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          910,
                          919
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 50
                          },
                          "start": {
                            "column": 22,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "range": [
                      901,
                      919
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 50
                      },
                      "start": {
                        "column": 13,
                        "line": 50
                      }
                    }
                  }
                },
                "range": [
                  896,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              },
              "init": null,
              "range": [
                896,
                919
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            892,
            920
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
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
                "name": "window",
                "optional": false,
                "range": [
                  929,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    938,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 51
                    },
                    "start": {
                      "column": 17,
                      "line": 51
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "range": [
                      944,
                      950
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 51
                      },
                      "start": {
                        "column": 23,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    944,
                    950
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 51
                    },
                    "start": {
                      "column": 23,
                      "line": 51
                    }
                  }
                },
                "range": [
                  938,
                  950
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 51
                  },
                  "start": {
                    "column": 17,
                    "line": 51
                  }
                }
              },
              "range": [
                929,
                950
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 51
                },
                "start": {
                  "column": 8,
                  "line": 51
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            925,
            951
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 51
            },
            "start": {
              "column": 4,
              "line": 51
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
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  956,
                  962
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  963,
                  969
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 52
                  },
                  "start": {
                    "column": 11,
                    "line": 52
                  }
                }
              },
              "range": [
                956,
                969
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "range": [
                972,
                978
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 52
                },
                "start": {
                  "column": 20,
                  "line": 52
                }
              }
            },
            "range": [
              956,
              978
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          "range": [
            956,
            979
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 52
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
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
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
                                  "name": "foo",
                                  "optional": false,
                                  "range": [
                                    1003,
                                    1006
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 54
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"\"",
                                  "value": "",
                                  "range": [
                                    1009,
                                    1011
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 54
                                    }
                                  }
                                },
                                "range": [
                                  1003,
                                  1011
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 54
                                  }
                                }
                              },
                              "range": [
                                1003,
                                1012
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 54
                                },
                                "start": {
                                  "column": 22,
                                  "line": 54
                                }
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Literal",
                                  "raw": "'window'",
                                  "value": "window",
                                  "range": [
                                    1020,
                                    1028
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 54
                                    }
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "range": [
                                      1032,
                                      1037
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 54
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 54
                                      }
                                    }
                                  },
                                  "range": [
                                    1032,
                                    1037
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 54
                                    }
                                  }
                                },
                                "range": [
                                  1020,
                                  1037
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 54
                                  }
                                }
                              },
                              "range": [
                                1013,
                                1037
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 54
                                },
                                "start": {
                                  "column": 32,
                                  "line": 54
                                }
                              }
                            }
                          ],
                          "range": [
                            1001,
                            1039
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 54
                            },
                            "start": {
                              "column": 20,
                              "line": 54
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          995,
                          1039
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 54
                          },
                          "start": {
                            "column": 14,
                            "line": 54
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        994,
                        1042
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 54
                        },
                        "start": {
                          "column": 13,
                          "line": 54
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": true,
                          "key": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Literal",
                                        "raw": "'window'",
                                        "value": "window",
                                        "range": [
                                          1072,
                                          1080
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 55
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 55
                                          }
                                        }
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "range": [
                                            1084,
                                            1089
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 44,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 39,
                                              "line": 55
                                            }
                                          }
                                        },
                                        "range": [
                                          1084,
                                          1089
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 44,
                                            "line": 55
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 55
                                          }
                                        }
                                      },
                                      "range": [
                                        1072,
                                        1089
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 55
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 55
                                        }
                                      }
                                    },
                                    "range": [
                                      1065,
                                      1089
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 55
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1063,
                                  1091
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 55
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                1057,
                                1091
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 55
                                },
                                "start": {
                                  "column": 12,
                                  "line": 55
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1056,
                              1094
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 55
                              },
                              "start": {
                                "column": 11,
                                "line": 55
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              1097,
                              1100
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 55
                              },
                              "start": {
                                "column": 52,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            1055,
                            1100
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 55
                            },
                            "start": {
                              "column": 10,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        1053,
                        1102
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 55
                        },
                        "start": {
                          "column": 8,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      993,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 55
                      },
                      "start": {
                        "column": 12,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  991,
                  1104
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 55
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  1107,
                  1113
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 55
                  },
                  "start": {
                    "column": 62,
                    "line": 55
                  }
                }
              },
              "range": [
                991,
                1113
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 55
                },
                "start": {
                  "column": 10,
                  "line": 54
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            985,
            1114
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 55
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              1120,
              1123
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          "range": [
            1120,
            1124
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 57
            },
            "start": {
              "column": 4,
              "line": 57
            }
          }
        }
      ],
      "range": [
        832,
        1147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "body": {
            "type": "TSInterfaceBody",
            "range": [
              1172,
              1203
            ],
            "body": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "range": [
                    1182,
                    1188
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
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
                      "column": 22,
                      "line": 62
                    },
                    "start": {
                      "column": 14,
                      "line": 62
                    }
                  },
                  "range": [
                    1188,
                    1196
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "range": [
                        1190,
                        1196
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 62
                        },
                        "start": {
                          "column": 16,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1190,
                      1196
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 62
                      },
                      "start": {
                        "column": 16,
                        "line": 62
                      }
                    }
                  }
                },
                "range": [
                  1182,
                  1197
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 62
                  },
                  "start": {
                    "column": 8,
                    "line": 62
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 21,
                "line": 61
              }
            }
          },
          "declare": false,
          "extends": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "range": [
              1165,
              1171
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 61
              },
              "start": {
                "column": 14,
                "line": 61
              }
            }
          },
          "range": [
            1155,
            1203
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 61
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 65
                    },
                    "start": {
                      "column": 11,
                      "line": 65
                    }
                  },
                  "range": [
                    1216,
                    1236
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1218,
                          1224
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 65
                          },
                          "start": {
                            "column": 13,
                            "line": 65
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          1227,
                          1236
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 65
                          },
                          "start": {
                            "column": 22,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "range": [
                      1218,
                      1236
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 65
                      },
                      "start": {
                        "column": 13,
                        "line": 65
                      }
                    }
                  }
                },
                "range": [
                  1213,
                  1236
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 65
                  },
                  "start": {
                    "column": 8,
                    "line": 65
                  }
                }
              },
              "init": null,
              "range": [
                1213,
                1236
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 65
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1209,
            1237
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 65
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
                "name": "window",
                "optional": false,
                "range": [
                  1246,
                  1252
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    1255,
                    1257
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 66
                    },
                    "start": {
                      "column": 17,
                      "line": 66
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "range": [
                      1261,
                      1267
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 66
                      },
                      "start": {
                        "column": 23,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1261,
                    1267
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 66
                    },
                    "start": {
                      "column": 23,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1255,
                  1267
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 66
                  },
                  "start": {
                    "column": 17,
                    "line": 66
                  }
                }
              },
              "range": [
                1246,
                1267
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 66
                },
                "start": {
                  "column": 8,
                  "line": 66
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1242,
            1268
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 66
            },
            "start": {
              "column": 4,
              "line": 66
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
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  1273,
                  1279
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  1280,
                  1286
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 67
                  },
                  "start": {
                    "column": 11,
                    "line": 67
                  }
                }
              },
              "range": [
                1273,
                1286
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "range": [
                1289,
                1295
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 67
                },
                "start": {
                  "column": 20,
                  "line": 67
                }
              }
            },
            "range": [
              1273,
              1295
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          "range": [
            1273,
            1296
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 67
            },
            "start": {
              "column": 4,
              "line": 67
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
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Literal",
                                  "raw": "'window'",
                                  "value": "window",
                                  "range": [
                                    1328,
                                    1336
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 69
                                    }
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "range": [
                                      1340,
                                      1345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 69
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 69
                                      }
                                    }
                                  },
                                  "range": [
                                    1340,
                                    1345
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 69
                                    }
                                  }
                                },
                                "range": [
                                  1328,
                                  1345
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 69
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 69
                                  }
                                }
                              },
                              "range": [
                                1321,
                                1345
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 69
                                },
                                "start": {
                                  "column": 23,
                                  "line": 69
                                }
                              }
                            }
                          ],
                          "range": [
                            1318,
                            1347
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 69
                            },
                            "start": {
                              "column": 20,
                              "line": 69
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1312,
                          1347
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 69
                          },
                          "start": {
                            "column": 14,
                            "line": 69
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1311,
                        1350
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 69
                        },
                        "start": {
                          "column": 13,
                          "line": 69
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": true,
                          "key": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
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
                                        "name": "foo",
                                        "optional": false,
                                        "range": [
                                          1373,
                                          1376
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 70
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 70
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "raw": "\"\"",
                                        "value": "",
                                        "range": [
                                          1379,
                                          1381
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 70
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 70
                                          }
                                        }
                                      },
                                      "range": [
                                        1373,
                                        1381
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 70
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 70
                                        }
                                      }
                                    },
                                    "range": [
                                      1373,
                                      1382
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 70
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 70
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Literal",
                                        "raw": "'window'",
                                        "value": "window",
                                        "range": [
                                          1390,
                                          1398
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 45,
                                            "line": 70
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 70
                                          }
                                        }
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "range": [
                                            1402,
                                            1407
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 54,
                                              "line": 70
                                            },
                                            "start": {
                                              "column": 49,
                                              "line": 70
                                            }
                                          }
                                        },
                                        "range": [
                                          1402,
                                          1407
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 54,
                                            "line": 70
                                          },
                                          "start": {
                                            "column": 49,
                                            "line": 70
                                          }
                                        }
                                      },
                                      "range": [
                                        1390,
                                        1407
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 54,
                                          "line": 70
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 70
                                        }
                                      }
                                    },
                                    "range": [
                                      1383,
                                      1407
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 70
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 70
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1371,
                                  1409
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 70
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 70
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                1365,
                                1409
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 70
                                },
                                "start": {
                                  "column": 12,
                                  "line": 70
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1364,
                              1412
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 70
                              },
                              "start": {
                                "column": 11,
                                "line": 70
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              1415,
                              1418
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 70
                              },
                              "start": {
                                "column": 62,
                                "line": 70
                              }
                            }
                          },
                          "range": [
                            1363,
                            1418
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 70
                            },
                            "start": {
                              "column": 10,
                              "line": 70
                            }
                          }
                        }
                      ],
                      "range": [
                        1361,
                        1420
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 70
                        },
                        "start": {
                          "column": 8,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      1310,
                      1420
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 70
                      },
                      "start": {
                        "column": 12,
                        "line": 69
                      }
                    }
                  }
                ],
                "range": [
                  1308,
                  1422
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 70
                  },
                  "start": {
                    "column": 10,
                    "line": 69
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  1425,
                  1431
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 70
                  },
                  "start": {
                    "column": 72,
                    "line": 70
                  }
                }
              },
              "range": [
                1308,
                1431
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 70
                },
                "start": {
                  "column": 10,
                  "line": 69
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            1302,
            1432
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 70
            },
            "start": {
              "column": 4,
              "line": 69
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              1438,
              1441
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          "range": [
            1438,
            1442
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 72
            },
            "start": {
              "column": 4,
              "line": 72
            }
          }
        }
      ],
      "range": [
        1149,
        1465
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "body": {
            "type": "TSInterfaceBody",
            "range": [
              1490,
              1521
            ],
            "body": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "range": [
                    1500,
                    1506
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
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
                      "column": 22,
                      "line": 77
                    },
                    "start": {
                      "column": 14,
                      "line": 77
                    }
                  },
                  "range": [
                    1506,
                    1514
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "range": [
                        1508,
                        1514
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 77
                        },
                        "start": {
                          "column": 16,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1508,
                      1514
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 77
                      },
                      "start": {
                        "column": 16,
                        "line": 77
                      }
                    }
                  }
                },
                "range": [
                  1500,
                  1515
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 77
                  },
                  "start": {
                    "column": 8,
                    "line": 77
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 21,
                "line": 76
              }
            }
          },
          "declare": false,
          "extends": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "range": [
              1483,
              1489
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 76
              },
              "start": {
                "column": 14,
                "line": 76
              }
            }
          },
          "range": [
            1473,
            1521
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 78
            },
            "start": {
              "column": 4,
              "line": 76
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 80
                    },
                    "start": {
                      "column": 11,
                      "line": 80
                    }
                  },
                  "range": [
                    1534,
                    1554
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1536,
                          1542
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 80
                          },
                          "start": {
                            "column": 13,
                            "line": 80
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          1545,
                          1554
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 80
                          },
                          "start": {
                            "column": 22,
                            "line": 80
                          }
                        }
                      }
                    ],
                    "range": [
                      1536,
                      1554
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 80
                      },
                      "start": {
                        "column": 13,
                        "line": 80
                      }
                    }
                  }
                },
                "range": [
                  1531,
                  1554
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 80
                  },
                  "start": {
                    "column": 8,
                    "line": 80
                  }
                }
              },
              "init": null,
              "range": [
                1531,
                1554
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1527,
            1555
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 80
            },
            "start": {
              "column": 4,
              "line": 80
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
                "name": "window",
                "optional": false,
                "range": [
                  1564,
                  1570
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 81
                  },
                  "start": {
                    "column": 8,
                    "line": 81
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    1573,
                    1575
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 81
                    },
                    "start": {
                      "column": 17,
                      "line": 81
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "range": [
                      1579,
                      1585
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 81
                      },
                      "start": {
                        "column": 23,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1579,
                    1585
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 81
                    },
                    "start": {
                      "column": 23,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1573,
                  1585
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 81
                  },
                  "start": {
                    "column": 17,
                    "line": 81
                  }
                }
              },
              "range": [
                1564,
                1585
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 81
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1560,
            1586
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 81
            },
            "start": {
              "column": 4,
              "line": 81
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
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  1591,
                  1597
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  1598,
                  1604
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 82
                  },
                  "start": {
                    "column": 11,
                    "line": 82
                  }
                }
              },
              "range": [
                1591,
                1604
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "range": [
                1607,
                1613
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 82
                },
                "start": {
                  "column": 20,
                  "line": 82
                }
              }
            },
            "range": [
              1591,
              1613
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          "range": [
            1591,
            1614
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 82
            },
            "start": {
              "column": 4,
              "line": 82
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
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Literal",
                                  "raw": "'window'",
                                  "value": "window",
                                  "range": [
                                    1645,
                                    1653
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 84
                                    }
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "range": [
                                      1657,
                                      1662
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 84
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 84
                                      }
                                    }
                                  },
                                  "range": [
                                    1657,
                                    1662
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 84
                                    }
                                  }
                                },
                                "range": [
                                  1645,
                                  1662
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 84
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 84
                                  }
                                }
                              },
                              "range": [
                                1638,
                                1662
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 84
                                },
                                "start": {
                                  "column": 22,
                                  "line": 84
                                }
                              }
                            }
                          ],
                          "range": [
                            1636,
                            1664
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 84
                            },
                            "start": {
                              "column": 20,
                              "line": 84
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1630,
                          1664
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 84
                          },
                          "start": {
                            "column": 14,
                            "line": 84
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1629,
                        1667
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 84
                        },
                        "start": {
                          "column": 13,
                          "line": 84
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": true,
                          "key": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Literal",
                                        "raw": "'window'",
                                        "value": "window",
                                        "range": [
                                          1697,
                                          1705
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 85
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 85
                                          }
                                        }
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "range": [
                                            1709,
                                            1714
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 44,
                                              "line": 85
                                            },
                                            "start": {
                                              "column": 39,
                                              "line": 85
                                            }
                                          }
                                        },
                                        "range": [
                                          1709,
                                          1714
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 44,
                                            "line": 85
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 85
                                          }
                                        }
                                      },
                                      "range": [
                                        1697,
                                        1714
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 85
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 85
                                        }
                                      }
                                    },
                                    "range": [
                                      1690,
                                      1714
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 85
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 85
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1688,
                                  1716
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 85
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 85
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                1682,
                                1716
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 85
                                },
                                "start": {
                                  "column": 12,
                                  "line": 85
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1681,
                              1719
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 85
                              },
                              "start": {
                                "column": 11,
                                "line": 85
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "AssignmentPattern",
                            "range": [
                              1722,
                              1766
                            ],
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "range": [
                                1722,
                                1725
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 85
                                },
                                "start": {
                                  "column": 52,
                                  "line": 85
                                }
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
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
                                          "name": "foo",
                                          "optional": false,
                                          "range": [
                                            1737,
                                            1740
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 70,
                                              "line": 85
                                            },
                                            "start": {
                                              "column": 67,
                                              "line": 85
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "raw": "\"\"",
                                          "value": "",
                                          "range": [
                                            1743,
                                            1745
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 75,
                                              "line": 85
                                            },
                                            "start": {
                                              "column": 73,
                                              "line": 85
                                            }
                                          }
                                        },
                                        "range": [
                                          1737,
                                          1745
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 75,
                                            "line": 85
                                          },
                                          "start": {
                                            "column": 67,
                                            "line": 85
                                          }
                                        }
                                      },
                                      "range": [
                                        1737,
                                        1746
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 76,
                                          "line": 85
                                        },
                                        "start": {
                                          "column": 67,
                                          "line": 85
                                        }
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "window",
                                        "optional": false,
                                        "range": [
                                          1754,
                                          1760
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 90,
                                            "line": 85
                                          },
                                          "start": {
                                            "column": 84,
                                            "line": 85
                                          }
                                        }
                                      },
                                      "range": [
                                        1747,
                                        1761
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 91,
                                          "line": 85
                                        },
                                        "start": {
                                          "column": 77,
                                          "line": 85
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    1735,
                                    1763
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 93,
                                      "line": 85
                                    },
                                    "start": {
                                      "column": 65,
                                      "line": 85
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  1729,
                                  1763
                                ],
                                "loc": {
                                  "end": {
                                    "column": 93,
                                    "line": 85
                                  },
                                  "start": {
                                    "column": 59,
                                    "line": 85
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1728,
                                1766
                              ],
                              "loc": {
                                "end": {
                                  "column": 96,
                                  "line": 85
                                },
                                "start": {
                                  "column": 58,
                                  "line": 85
                                }
                              }
                            },
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 85
                              },
                              "start": {
                                "column": 52,
                                "line": 85
                              }
                            }
                          },
                          "range": [
                            1680,
                            1766
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 85
                            },
                            "start": {
                              "column": 10,
                              "line": 85
                            }
                          }
                        }
                      ],
                      "range": [
                        1678,
                        1768
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 85
                        },
                        "start": {
                          "column": 8,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      1628,
                      1768
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 85
                      },
                      "start": {
                        "column": 12,
                        "line": 84
                      }
                    }
                  }
                ],
                "range": [
                  1626,
                  1770
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 85
                  },
                  "start": {
                    "column": 10,
                    "line": 84
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "range": [
                  1773,
                  1779
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 85
                  },
                  "start": {
                    "column": 103,
                    "line": 85
                  }
                }
              },
              "range": [
                1626,
                1779
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 85
                },
                "start": {
                  "column": 10,
                  "line": 84
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            1620,
            1780
          ],
          "loc": {
            "end": {
              "column": 110,
              "line": 85
            },
            "start": {
              "column": 4,
              "line": 84
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              1786,
              1789
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "range": [
            1786,
            1790
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 87
            },
            "start": {
              "column": 4,
              "line": 87
            }
          }
        }
      ],
      "range": [
        1467,
        1825
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 89
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
