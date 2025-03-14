__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    923
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              },
              "range": [
                29,
                38
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  31,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              25,
              38
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            25,
            38
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        21,
        39
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                82,
                83
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 41,
                  "line": 5
                }
              }
            },
            "range": [
              75,
              84
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          }
        ],
        "range": [
          73,
          86
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 5
          },
          "start": {
            "column": 32,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          50,
          53
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
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
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            },
            "range": [
              55,
              63
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                57,
                63
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            }
          },
          "range": [
            54,
            63
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 23,
            "line": 5
          }
        },
        "range": [
          64,
          72
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            66,
            72
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
            }
          }
        }
      },
      "range": [
        41,
        86
      ],
      "loc": {
        "end": {
          "column": 45,
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      116,
                      136
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            118,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 8
                            },
                            "start": {
                              "column": 11,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            127,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        118,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    115,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  115,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              111,
              137
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    223,
                                    224
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
                                "right": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        231,
                                        232
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
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "range": [
                                      227,
                                      230
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    227,
                                    233
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 12
                                    }
                                  }
                                },
                                "range": [
                                  223,
                                  233
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                223,
                                234
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 12
                                },
                                "start": {
                                  "column": 16,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "range": [
                            205,
                            248
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 13
                            },
                            "start": {
                              "column": 25,
                              "line": 11
                            }
                          }
                        },
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cond",
                          "optional": false,
                          "range": [
                            199,
                            203
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 11
                            },
                            "start": {
                              "column": 19,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          192,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      178,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 10
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      172,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    165,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
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
                        267,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        271,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      267,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    267,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                155,
                279
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                149,
                153
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              142,
              279
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          105,
          281
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 17,
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
        "name": "test1",
        "optional": false,
        "range": [
          97,
          102
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [],
      "range": [
        88,
        281
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    },
                    "range": [
                      332,
                      352
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            334,
                            340
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 22
                            },
                            "start": {
                              "column": 11,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            343,
                            352
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        334,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 11,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    331,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": null,
                "range": [
                  331,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              327,
              353
            ],
            "loc": {
              "end": {
                "column": 30,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  358,
                  359
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
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  362,
                  363
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
              "range": [
                358,
                363
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
              358,
              364
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              419,
                              420
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
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  427,
                                  428
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 26
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "range": [
                                423,
                                426
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 26
                                },
                                "start": {
                                  "column": 16,
                                  "line": 26
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              423,
                              429
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
                            419,
                            429
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
                          419,
                          430
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
                      405,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 27
                      },
                      "start": {
                        "column": 21,
                        "line": 25
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      399,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    392,
                    440
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
              "range": [
                382,
                446
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 17,
                  "line": 24
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                376,
                380
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              369,
              446
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          321,
          448
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 17,
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
        "name": "test2",
        "optional": false,
        "range": [
          313,
          318
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [],
      "range": [
        304,
        448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 38
                      },
                      "start": {
                        "column": 14,
                        "line": 38
                      }
                    },
                    "range": [
                      635,
                      640
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            637,
                            638
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 38
                            },
                            "start": {
                              "column": 16,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          637,
                          638
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 38
                          },
                          "start": {
                            "column": 16,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        637,
                        640
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 38
                        },
                        "start": {
                          "column": 16,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    629,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    643,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 38
                    },
                    "start": {
                      "column": 22,
                      "line": 38
                    }
                  }
                },
                "range": [
                  629,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 24,
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
              625,
              646
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          734,
                          739
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 40
                          },
                          "start": {
                            "column": 12,
                            "line": 40
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "range": [
                            742,
                            748
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 40
                            },
                            "start": {
                              "column": 20,
                              "line": 40
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "range": [
                            749,
                            754
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 40
                            },
                            "start": {
                              "column": 27,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          742,
                          755
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 40
                          },
                          "start": {
                            "column": 20,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        734,
                        755
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 40
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    730,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "range": [
                            878,
                            884
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 44
                            },
                            "start": {
                              "column": 19,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          871,
                          885
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "range": [
                      857,
                      895
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 45
                      },
                      "start": {
                        "column": 15,
                        "line": 43
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    826,
                                    831
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 42
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "index",
                                  "optional": false,
                                  "range": [
                                    833,
                                    838
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 42
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mapping",
                                "optional": false,
                                "range": [
                                  818,
                                  825
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 42
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                818,
                                839
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 42
                                },
                                "start": {
                                  "column": 24,
                                  "line": 42
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
                              "name": "result",
                              "optional": false,
                              "range": [
                                806,
                                812
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 42
                                },
                                "start": {
                                  "column": 12,
                                  "line": 42
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
                                813,
                                817
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 42
                                },
                                "start": {
                                  "column": 19,
                                  "line": 42
                                }
                              }
                            },
                            "range": [
                              806,
                              817
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 42
                              },
                              "start": {
                                "column": 12,
                                "line": 42
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            806,
                            840
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 42
                            },
                            "start": {
                              "column": 12,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          806,
                          841
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 42
                          },
                          "start": {
                            "column": 12,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "range": [
                      792,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 43
                      },
                      "start": {
                        "column": 35,
                        "line": 41
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          777,
                          782
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 41
                          },
                          "start": {
                            "column": 20,
                            "line": 41
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "range": [
                          784,
                          789
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 41
                          },
                          "start": {
                            "column": 27,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "canTake",
                      "optional": false,
                      "range": [
                        769,
                        776
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 41
                        },
                        "start": {
                          "column": 12,
                          "line": 41
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      769,
                      790
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 41
                      },
                      "start": {
                        "column": 12,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    765,
                    895
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                720,
                901
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 73,
                  "line": 39
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
                    "name": "index",
                    "optional": false,
                    "range": [
                      660,
                      665
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      668,
                      669
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 39
                      },
                      "start": {
                        "column": 21,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    660,
                    669
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      671,
                      677
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 39
                      },
                      "start": {
                        "column": 24,
                        "line": 39
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "range": [
                        680,
                        686
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 39
                        },
                        "start": {
                          "column": 33,
                          "line": 39
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        687,
                        693
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 39
                        },
                        "start": {
                          "column": 40,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      680,
                      693
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 39
                      },
                      "start": {
                        "column": 33,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    671,
                    693
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 39
                    },
                    "start": {
                      "column": 24,
                      "line": 39
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                656,
                693
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 39
                },
                "start": {
                  "column": 9,
                  "line": 39
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "range": [
                  695,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 39
                  },
                  "start": {
                    "column": 48,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  703,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 39
                  },
                  "start": {
                    "column": 56,
                    "line": 39
                  }
                }
              },
              "range": [
                695,
                709
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 39
                },
                "start": {
                  "column": 48,
                  "line": 39
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "range": [
                  711,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 39
                  },
                  "start": {
                    "column": 64,
                    "line": 39
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                711,
                718
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 39
                },
                "start": {
                  "column": 64,
                  "line": 39
                }
              }
            },
            "range": [
              651,
              901
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                913,
                919
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 47
                },
                "start": {
                  "column": 11,
                  "line": 47
                }
              }
            },
            "range": [
              906,
              920
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          619,
          922
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapUntilCant",
        "optional": false,
        "range": [
          480,
          492
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 15,
                "line": 34
              },
              "start": {
                "column": 10,
                "line": 34
              }
            },
            "range": [
              510,
              515
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    512,
                    513
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 34
                    },
                    "start": {
                      "column": 12,
                      "line": 34
                    }
                  }
                },
                "range": [
                  512,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              },
              "range": [
                512,
                515
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 12,
                  "line": 34
                }
              }
            }
          },
          "range": [
            504,
            515
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "canTake",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 35
              },
              "start": {
                "column": 11,
                "line": 35
              }
            },
            "range": [
              528,
              566
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 35
                      },
                      "start": {
                        "column": 19,
                        "line": 35
                      }
                    },
                    "range": [
                      536,
                      539
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          538,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 35
                          },
                          "start": {
                            "column": 21,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        538,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 35
                        },
                        "start": {
                          "column": 21,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    531,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 35
                    },
                    "start": {
                      "column": 14,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 35
                      },
                      "start": {
                        "column": 29,
                        "line": 35
                      }
                    },
                    "range": [
                      546,
                      554
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        548,
                        554
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 35
                        },
                        "start": {
                          "column": 31,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    541,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 35
                    },
                    "start": {
                      "column": 24,
                      "line": 35
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 35
                  },
                  "start": {
                    "column": 39,
                    "line": 35
                  }
                },
                "range": [
                  556,
                  566
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    559,
                    566
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 35
                    },
                    "start": {
                      "column": 42,
                      "line": 35
                    }
                  }
                }
              },
              "range": [
                530,
                566
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 35
                },
                "start": {
                  "column": 13,
                  "line": 35
                }
              }
            }
          },
          "range": [
            521,
            566
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mapping",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 36
              },
              "start": {
                "column": 11,
                "line": 36
              }
            },
            "range": [
              579,
              611
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 36
                      },
                      "start": {
                        "column": 19,
                        "line": 36
                      }
                    },
                    "range": [
                      587,
                      590
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          589,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 36
                          },
                          "start": {
                            "column": 21,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        589,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 36
                        },
                        "start": {
                          "column": 21,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    582,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 36
                      },
                      "start": {
                        "column": 29,
                        "line": 36
                      }
                    },
                    "range": [
                      597,
                      605
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        599,
                        605
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 36
                        },
                        "start": {
                          "column": 31,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    592,
                    605
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 36
                    },
                    "start": {
                      "column": 24,
                      "line": 36
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 36
                  },
                  "start": {
                    "column": 39,
                    "line": 36
                  }
                },
                "range": [
                  607,
                  611
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      610,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 36
                      },
                      "start": {
                        "column": 42,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    610,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 36
                    },
                    "start": {
                      "column": 42,
                      "line": 36
                    }
                  }
                }
              },
              "range": [
                581,
                611
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            }
          },
          "range": [
            572,
            611
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 6,
            "line": 37
          },
          "start": {
            "column": 1,
            "line": 37
          }
        },
        "range": [
          613,
          618
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                615,
                616
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 37
                },
                "start": {
                  "column": 3,
                  "line": 37
                }
              }
            },
            "range": [
              615,
              616
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 37
              },
              "start": {
                "column": 3,
                "line": 37
              }
            }
          },
          "range": [
            615,
            618
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 37
            },
            "start": {
              "column": 3,
              "line": 37
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 33
          },
          "start": {
            "column": 21,
            "line": 33
          }
        },
        "range": [
          492,
          498
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                493,
                494
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 22,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              493,
              494
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 33
              },
              "start": {
                "column": 22,
                "line": 33
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                496,
                497
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 33
                },
                "start": {
                  "column": 25,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              496,
              497
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 33
              },
              "start": {
                "column": 25,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        471,
        922
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 49
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
