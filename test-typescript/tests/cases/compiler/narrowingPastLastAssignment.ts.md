__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3460
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          29,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 29,
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
        "name": "action",
        "optional": false,
        "range": [
          9,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
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
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            },
            "range": [
              17,
              27
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  19,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              },
              "range": [
                19,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
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
            16,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
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
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  141,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  145,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                141,
                150
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              141,
              151
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            171,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 7
                            },
                            "start": {
                              "column": 19,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          171,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 7
                          },
                          "start": {
                            "column": 19,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      169,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    163,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  156,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                156,
                197
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              156,
              198
            ],
            "loc": {
              "end": {
                "column": 46,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  203,
                  204
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
              "right": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  207,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              },
              "range": [
                203,
                209
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              203,
              210
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            230,
                            231
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 9
                            },
                            "start": {
                              "column": 19,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          230,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 9
                          },
                          "start": {
                            "column": 19,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      228,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 9
                      },
                      "start": {
                        "column": 17,
                        "line": 9
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    222,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  215,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                215,
                247
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              215,
              248
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          135,
          250
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
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
        "name": "f1",
        "optional": false,
        "range": [
          112,
          114
        ],
        "loc": {
          "end": {
            "column": 11,
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
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            },
            "range": [
              116,
              133
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    118,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    127,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                118,
                133
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            }
          },
          "range": [
            115,
            133
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "range": [
        103,
        250
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
                        "column": 26,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    },
                    "range": [
                      369,
                      386
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            371,
                            377
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 15
                            },
                            "start": {
                              "column": 11,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            380,
                            386
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 15
                            },
                            "start": {
                              "column": 20,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        371,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    368,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": null,
                "range": [
                  368,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
              364,
              387
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  392,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  396,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "range": [
                392,
                398
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              392,
              399
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                    408,
                    409
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
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            420,
                            421
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 17
                            },
                            "start": {
                              "column": 20,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          420,
                          421
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
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
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    412,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  408,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              404,
              437
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    446,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            463,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 18
                            },
                            "start": {
                              "column": 25,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          463,
                          464
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 18
                          },
                          "start": {
                            "column": 25,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      461,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 18
                      },
                      "start": {
                        "column": 23,
                        "line": 18
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    450,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  446,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              442,
              480
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                  "name": "C",
                  "optional": false,
                  "range": [
                    489,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "ClassExpression",
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "range": [
                      499,
                      539
                    ],
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            509,
                            512
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
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "range": [
                            512,
                            533
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    517,
                                    518
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  517,
                                  518
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 20
                                  }
                                }
                              }
                            ],
                            "range": [
                              515,
                              533
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 20
                              },
                              "start": {
                                "column": 14,
                                "line": 20
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
                              "column": 32,
                              "line": 20
                            },
                            "start": {
                              "column": 11,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          509,
                          533
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 21
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    }
                  },
                  "declare": false,
                  "decorators": [],
                  "id": null,
                  "implements": [],
                  "superClass": null,
                  "range": [
                    493,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                },
                "range": [
                  489,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              485,
              540
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "name": "o",
                  "optional": false,
                  "range": [
                    549,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          563,
                          566
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          566,
                          587
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  571,
                                  572
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                571,
                                572
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 23
                                },
                                "start": {
                                  "column": 16,
                                  "line": 23
                                }
                              }
                            }
                          ],
                          "range": [
                            569,
                            587
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 23
                            },
                            "start": {
                              "column": 14,
                              "line": 23
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
                            "column": 32,
                            "line": 23
                          },
                          "start": {
                            "column": 11,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        563,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    553,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  549,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
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
              545,
              594
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 22
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      614,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 25
                      },
                      "start": {
                        "column": 19,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    614,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 25
                    },
                    "start": {
                      "column": 19,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                612,
                639
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                608,
                609
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "params": [],
            "range": [
              599,
              639
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                652,
                701
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      662,
                      665
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
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      665,
                      695
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              670,
                              671
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 27
                              },
                              "start": {
                                "column": 16,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            670,
                            671
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 27
                            },
                            "start": {
                              "column": 16,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "range": [
                        668,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 27
                        },
                        "start": {
                          "column": 14,
                          "line": 27
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
                        "column": 41,
                        "line": 27
                      },
                      "start": {
                        "column": 11,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    662,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                650,
                651
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 10,
                  "line": 26
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              644,
              701
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
          358,
          703
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 14,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          353,
          355
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [],
      "range": [
        344,
        703
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "CallExpression",
              "arguments": [
                {
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              833,
                              834
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 34
                              },
                              "start": {
                                "column": 19,
                                "line": 34
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"abc\"",
                            "value": "abc",
                            "range": [
                              837,
                              842
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 34
                              },
                              "start": {
                                "column": 23,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            833,
                            842
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 34
                            },
                            "start": {
                              "column": 19,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          833,
                          842
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 34
                          },
                          "start": {
                            "column": 19,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "range": [
                      831,
                      844
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 34
                      },
                      "start": {
                        "column": 17,
                        "line": 34
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    825,
                    844
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 34
                    },
                    "start": {
                      "column": 11,
                      "line": 34
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  818,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                818,
                845
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              818,
              846
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
                  851,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  855,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              },
              "range": [
                851,
                857
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "range": [
              851,
              858
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            878,
                            879
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 36
                            },
                            "start": {
                              "column": 19,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          878,
                          879
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 36
                          },
                          "start": {
                            "column": 19,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "range": [
                      876,
                      903
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 36
                      },
                      "start": {
                        "column": 17,
                        "line": 36
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    870,
                    903
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 36
                    },
                    "start": {
                      "column": 11,
                      "line": 36
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  863,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                863,
                904
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              863,
              905
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          812,
          907
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 32,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          789,
          791
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 33
              },
              "start": {
                "column": 13,
                "line": 33
              }
            },
            "range": [
              793,
              810
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    795,
                    801
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 33
                    },
                    "start": {
                      "column": 15,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    804,
                    810
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 33
                    },
                    "start": {
                      "column": 24,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                795,
                810
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 33
                },
                "start": {
                  "column": 15,
                  "line": 33
                }
              }
            }
          },
          "range": [
            792,
            810
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 33
            },
            "start": {
              "column": 12,
              "line": 33
            }
          }
        }
      ],
      "range": [
        780,
        907
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
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
                        "column": 26,
                        "line": 42
                      },
                      "start": {
                        "column": 9,
                        "line": 42
                      }
                    },
                    "range": [
                      1029,
                      1046
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1031,
                            1037
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 42
                            },
                            "start": {
                              "column": 11,
                              "line": 42
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1040,
                            1046
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 42
                            },
                            "start": {
                              "column": 20,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        1031,
                        1046
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 42
                        },
                        "start": {
                          "column": 11,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    1028,
                    1046
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1049,
                    1050
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 42
                    },
                    "start": {
                      "column": 29,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1028,
                  1050
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1024,
              1051
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1081,
                        1082
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 44
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"abc\"",
                      "value": "abc",
                      "range": [
                        1085,
                        1090
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 44
                        },
                        "start": {
                          "column": 12,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1081,
                      1090
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1081,
                    1091
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1115,
                                  1116
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 45
                                  }
                                }
                              },
                              "range": [
                                1115,
                                1116
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 45
                                },
                                "start": {
                                  "column": 23,
                                  "line": 45
                                }
                              }
                            }
                          ],
                          "range": [
                            1113,
                            1140
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 45
                            },
                            "start": {
                              "column": 21,
                              "line": 45
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1107,
                          1140
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 45
                          },
                          "start": {
                            "column": 15,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        1100,
                        1106
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1100,
                      1141
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1100,
                    1142
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
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
                        1151,
                        1152
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
                    "right": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        1155,
                        1157
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1151,
                      1157
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1151,
                    1158
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1182,
                                  1183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 47
                                  }
                                }
                              },
                              "range": [
                                1182,
                                1183
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 47
                                },
                                "start": {
                                  "column": 23,
                                  "line": 47
                                }
                              }
                            }
                          ],
                          "range": [
                            1180,
                            1207
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 47
                            },
                            "start": {
                              "column": 21,
                              "line": 47
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1174,
                          1207
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 47
                          },
                          "start": {
                            "column": 15,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        1167,
                        1173
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
                    "range": [
                      1167,
                      1208
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1167,
                    1209
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1071,
                1215
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 19,
                  "line": 43
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1063,
                  1067
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 43
                  },
                  "start": {
                    "column": 11,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "range": [
                1063,
                1069
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 43
                },
                "start": {
                  "column": 11,
                  "line": 43
                }
              }
            },
            "range": [
              1056,
              1215
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 43
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1235,
                            1236
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 49
                            },
                            "start": {
                              "column": 19,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1235,
                          1236
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 49
                          },
                          "start": {
                            "column": 19,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "range": [
                      1233,
                      1251
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 49
                      },
                      "start": {
                        "column": 17,
                        "line": 49
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1227,
                    1251
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 49
                    },
                    "start": {
                      "column": 11,
                      "line": 49
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  1220,
                  1226
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1220,
                1252
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              1220,
              1253
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          1018,
          1255
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 33,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          994,
          996
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 41
              },
              "start": {
                "column": 16,
                "line": 41
              }
            },
            "range": [
              1001,
              1016
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 41
                  },
                  "start": {
                    "column": 21,
                    "line": 41
                  }
                },
                "range": [
                  1006,
                  1016
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1009,
                    1016
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 41
                    },
                    "start": {
                      "column": 24,
                      "line": 41
                    }
                  }
                }
              },
              "range": [
                1003,
                1016
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 41
                },
                "start": {
                  "column": 18,
                  "line": 41
                }
              }
            }
          },
          "range": [
            997,
            1016
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
        }
      ],
      "range": [
        985,
        1255
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 41
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1421,
                        1422
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1425,
                        1426
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1421,
                      1426
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1421,
                    1427
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1451,
                                  1452
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 59
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 59
                                  }
                                }
                              },
                              "range": [
                                1451,
                                1452
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 59
                                },
                                "start": {
                                  "column": 23,
                                  "line": 59
                                }
                              }
                            }
                          ],
                          "range": [
                            1449,
                            1476
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 59
                            },
                            "start": {
                              "column": 21,
                              "line": 59
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1443,
                          1476
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 59
                          },
                          "start": {
                            "column": 15,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        1436,
                        1442
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1436,
                      1477
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1436,
                    1478
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                1411,
                1484
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 9,
                  "line": 57
                }
              }
            },
            "consequent": {
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
                        1338,
                        1339
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1342,
                        1343
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 54
                        },
                        "start": {
                          "column": 12,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1338,
                      1343
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1338,
                    1344
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1368,
                                  1369
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 55
                                  }
                                }
                              },
                              "range": [
                                1368,
                                1369
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 55
                                },
                                "start": {
                                  "column": 23,
                                  "line": 55
                                }
                              }
                            }
                          ],
                          "range": [
                            1366,
                            1393
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 55
                            },
                            "start": {
                              "column": 21,
                              "line": 55
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1360,
                          1393
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 55
                          },
                          "start": {
                            "column": 15,
                            "line": 55
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        1353,
                        1359
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 55
                        },
                        "start": {
                          "column": 8,
                          "line": 55
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1353,
                      1394
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1353,
                    1395
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                1328,
                1401
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 16,
                  "line": 53
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  1320,
                  1324
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 53
                  },
                  "start": {
                    "column": 8,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "range": [
                1320,
                1326
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 53
                },
                "start": {
                  "column": 8,
                  "line": 53
                }
              }
            },
            "range": [
              1316,
              1484
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 53
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1504,
                            1505
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 61
                            },
                            "start": {
                              "column": 19,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          1504,
                          1505
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 61
                          },
                          "start": {
                            "column": 19,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "range": [
                      1502,
                      1520
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 61
                      },
                      "start": {
                        "column": 17,
                        "line": 61
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1496,
                    1520
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 61
                    },
                    "start": {
                      "column": 11,
                      "line": 61
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  1489,
                  1495
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "range": [
                1489,
                1521
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1489,
              1522
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1310,
          1524
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 53,
            "line": 52
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          1266,
          1268
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 52
          },
          "start": {
            "column": 9,
            "line": 52
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
                "column": 30,
                "line": 52
              },
              "start": {
                "column": 13,
                "line": 52
              }
            },
            "range": [
              1270,
              1287
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1272,
                    1278
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 52
                    },
                    "start": {
                      "column": 15,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1281,
                    1287
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 52
                    },
                    "start": {
                      "column": 24,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                1272,
                1287
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 52
                },
                "start": {
                  "column": 15,
                  "line": 52
                }
              }
            }
          },
          "range": [
            1269,
            1287
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 52
            },
            "start": {
              "column": 12,
              "line": 52
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 52
              },
              "start": {
                "column": 36,
                "line": 52
              }
            },
            "range": [
              1293,
              1308
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 52
                  },
                  "start": {
                    "column": 41,
                    "line": 52
                  }
                },
                "range": [
                  1298,
                  1308
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1301,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 52
                    },
                    "start": {
                      "column": 44,
                      "line": 52
                    }
                  }
                }
              },
              "range": [
                1295,
                1308
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 52
                },
                "start": {
                  "column": 38,
                  "line": 52
                }
              }
            }
          },
          "range": [
            1289,
            1308
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 52
            },
            "start": {
              "column": 32,
              "line": 52
            }
          }
        }
      ],
      "range": [
        1257,
        1524
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 52
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
            "type": "IfStatement",
            "alternate": {
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
                              "column": 33,
                              "line": 71
                            },
                            "start": {
                              "column": 13,
                              "line": 71
                            }
                          },
                          "range": [
                            1694,
                            1714
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1696,
                                  1702
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 71
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 71
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  1705,
                                  1714
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 71
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 71
                                  }
                                }
                              }
                            ],
                            "range": [
                              1696,
                              1714
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 71
                              },
                              "start": {
                                "column": 15,
                                "line": 71
                              }
                            }
                          }
                        },
                        "range": [
                          1693,
                          1714
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 71
                          },
                          "start": {
                            "column": 12,
                            "line": 71
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1693,
                        1714
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 71
                        },
                        "start": {
                          "column": 12,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1689,
                    1715
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
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
                        1724,
                        1725
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 72
                        },
                        "start": {
                          "column": 8,
                          "line": 72
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1728,
                        1729
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 72
                        },
                        "start": {
                          "column": 12,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1724,
                      1729
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1724,
                    1730
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1754,
                                  1755
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 73
                                  }
                                }
                              },
                              "range": [
                                1754,
                                1755
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 73
                                },
                                "start": {
                                  "column": 23,
                                  "line": 73
                                }
                              }
                            }
                          ],
                          "range": [
                            1752,
                            1770
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 73
                            },
                            "start": {
                              "column": 21,
                              "line": 73
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1746,
                          1770
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 73
                          },
                          "start": {
                            "column": 15,
                            "line": 73
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        1739,
                        1745
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 73
                        },
                        "start": {
                          "column": 8,
                          "line": 73
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1739,
                      1771
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 73
                      },
                      "start": {
                        "column": 8,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    1739,
                    1772
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                }
              ],
              "range": [
                1679,
                1778
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 9,
                  "line": 70
                }
              }
            },
            "consequent": {
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
                              "column": 33,
                              "line": 66
                            },
                            "start": {
                              "column": 13,
                              "line": 66
                            }
                          },
                          "range": [
                            1585,
                            1605
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1587,
                                  1593
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 66
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  1596,
                                  1605
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 66
                                  }
                                }
                              }
                            ],
                            "range": [
                              1587,
                              1605
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 66
                              },
                              "start": {
                                "column": 15,
                                "line": 66
                              }
                            }
                          }
                        },
                        "range": [
                          1584,
                          1605
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 66
                          },
                          "start": {
                            "column": 12,
                            "line": 66
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1584,
                        1605
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 66
                        },
                        "start": {
                          "column": 12,
                          "line": 66
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1580,
                    1606
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1615,
                        1616
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1619,
                        1620
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 67
                        },
                        "start": {
                          "column": 12,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1615,
                      1620
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1615,
                    1621
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1645,
                                  1646
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 68
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 68
                                  }
                                }
                              },
                              "range": [
                                1645,
                                1646
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 68
                                },
                                "start": {
                                  "column": 23,
                                  "line": 68
                                }
                              }
                            }
                          ],
                          "range": [
                            1643,
                            1661
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 68
                            },
                            "start": {
                              "column": 21,
                              "line": 68
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1637,
                          1661
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 68
                          },
                          "start": {
                            "column": 15,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        1630,
                        1636
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 68
                        },
                        "start": {
                          "column": 8,
                          "line": 68
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1630,
                      1662
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1630,
                    1663
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                }
              ],
              "range": [
                1570,
                1669
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 14,
                  "line": 65
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1564,
                1568
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 65
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              }
            },
            "range": [
              1560,
              1778
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1554,
          1780
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 28,
            "line": 64
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5a",
        "optional": false,
        "range": [
          1535,
          1538
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 64
          },
          "start": {
            "column": 9,
            "line": 64
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 64
              },
              "start": {
                "column": 17,
                "line": 64
              }
            },
            "range": [
              1543,
              1552
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                1545,
                1552
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 64
                },
                "start": {
                  "column": 19,
                  "line": 64
                }
              }
            }
          },
          "range": [
            1539,
            1552
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 64
            },
            "start": {
              "column": 13,
              "line": 64
            }
          }
        }
      ],
      "range": [
        1526,
        1780
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 64
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
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
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
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        1895,
                                        1896
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 80
                                        }
                                      }
                                    },
                                    "range": [
                                      1895,
                                      1896
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 80
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1893,
                                  1910
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 80
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 80
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                1887,
                                1910
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 80
                                },
                                "start": {
                                  "column": 19,
                                  "line": 80
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "range": [
                              1880,
                              1886
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 80
                              },
                              "start": {
                                "column": 12,
                                "line": 80
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1880,
                            1911
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 80
                            },
                            "start": {
                              "column": 12,
                              "line": 80
                            }
                          }
                        },
                        "range": [
                          1880,
                          1911
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 80
                          },
                          "start": {
                            "column": 12,
                            "line": 80
                          }
                        }
                      }
                    ],
                    "range": [
                      1866,
                      1921
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 81
                      },
                      "start": {
                        "column": 32,
                        "line": 79
                      }
                    }
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1846,
                          1847
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 79
                          },
                          "start": {
                            "column": 12,
                            "line": 79
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1852,
                          1853
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 79
                          },
                          "start": {
                            "column": 18,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1846,
                        1853
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 79
                        },
                        "start": {
                          "column": 12,
                          "line": 79
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1857,
                          1858
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 79
                          },
                          "start": {
                            "column": 23,
                            "line": 79
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          1863,
                          1864
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 79
                          },
                          "start": {
                            "column": 29,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1857,
                        1864
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 79
                        },
                        "start": {
                          "column": 23,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1846,
                      1864
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 79
                      },
                      "start": {
                        "column": 12,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1842,
                    1921
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                1832,
                1927
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 82
                },
                "start": {
                  "column": 33,
                  "line": 78
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
                      1812,
                      1813
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 78
                      },
                      "start": {
                        "column": 13,
                        "line": 78
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1816,
                      1817
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 78
                      },
                      "start": {
                        "column": 17,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    1812,
                    1817
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 78
                    },
                    "start": {
                      "column": 13,
                      "line": 78
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1808,
                1817
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 78
                },
                "start": {
                  "column": 9,
                  "line": 78
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
                  1819,
                  1820
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 78
                  },
                  "start": {
                    "column": 20,
                    "line": 78
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  1823,
                  1825
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 78
                  },
                  "start": {
                    "column": 24,
                    "line": 78
                  }
                }
              },
              "range": [
                1819,
                1825
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 78
                },
                "start": {
                  "column": 20,
                  "line": 78
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1827,
                  1828
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 78
                  },
                  "start": {
                    "column": 28,
                    "line": 78
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                1827,
                1830
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 78
                },
                "start": {
                  "column": 28,
                  "line": 78
                }
              }
            },
            "range": [
              1803,
              1927
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          }
        ],
        "range": [
          1797,
          1929
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 15,
            "line": 77
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5b",
        "optional": false,
        "range": [
          1791,
          1794
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 77
          }
        }
      },
      "params": [],
      "range": [
        1782,
        1929
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 77
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
                  "range": [
                    2026,
                    2027
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                },
                "init": null,
                "range": [
                  2026,
                  2027
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2022,
              2028
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
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
                  2033,
                  2034
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 89
                  },
                  "start": {
                    "column": 4,
                    "line": 89
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  2037,
                  2042
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 89
                  },
                  "start": {
                    "column": 8,
                    "line": 89
                  }
                }
              },
              "range": [
                2033,
                2042
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 89
                }
              }
            },
            "range": [
              2033,
              2043
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2063,
                            2064
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 90
                            },
                            "start": {
                              "column": 19,
                              "line": 90
                            }
                          }
                        },
                        "range": [
                          2063,
                          2064
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 90
                          },
                          "start": {
                            "column": 19,
                            "line": 90
                          }
                        }
                      }
                    ],
                    "range": [
                      2061,
                      2066
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 90
                      },
                      "start": {
                        "column": 17,
                        "line": 90
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    2055,
                    2066
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 90
                    },
                    "start": {
                      "column": 11,
                      "line": 90
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  2048,
                  2054
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 90
                  },
                  "start": {
                    "column": 4,
                    "line": 90
                  }
                }
              },
              "optional": false,
              "range": [
                2048,
                2067
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
                }
              }
            },
            "range": [
              2048,
              2068
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
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
                  2083,
                  2084
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  2087,
                  2089
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
                  }
                }
              },
              "range": [
                2083,
                2089
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "range": [
              2083,
              2090
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2110,
                            2111
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 92
                            },
                            "start": {
                              "column": 19,
                              "line": 92
                            }
                          }
                        },
                        "range": [
                          2110,
                          2111
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 92
                          },
                          "start": {
                            "column": 19,
                            "line": 92
                          }
                        }
                      }
                    ],
                    "range": [
                      2108,
                      2126
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 92
                      },
                      "start": {
                        "column": 17,
                        "line": 92
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    2102,
                    2126
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 92
                    },
                    "start": {
                      "column": 11,
                      "line": 92
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  2095,
                  2101
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 92
                  },
                  "start": {
                    "column": 4,
                    "line": 92
                  }
                }
              },
              "optional": false,
              "range": [
                2095,
                2127
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 92
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            "range": [
              2095,
              2128
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          }
        ],
        "range": [
          2016,
          2130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 14,
            "line": 87
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          2011,
          2013
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 87
          },
          "start": {
            "column": 9,
            "line": 87
          }
        }
      },
      "params": [],
      "range": [
        2002,
        2130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 87
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                2225,
                2232
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 99
                },
                "start": {
                  "column": 8,
                  "line": 98
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
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
                                "name": "f",
                                "optional": false,
                                "range": [
                                  2299,
                                  2300
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 102
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 102
                                  }
                                }
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "range": [
                                          2311,
                                          2312
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 102
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 102
                                          }
                                        }
                                      },
                                      "range": [
                                        2311,
                                        2312
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 102
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 102
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    2309,
                                    2326
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 102
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 102
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  2303,
                                  2326
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 102
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 102
                                  }
                                }
                              },
                              "range": [
                                2299,
                                2326
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 102
                                },
                                "start": {
                                  "column": 16,
                                  "line": 102
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            2295,
                            2326
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 102
                            },
                            "start": {
                              "column": 12,
                              "line": 102
                            }
                          }
                        }
                      ],
                      "range": [
                        2281,
                        2336
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 103
                        },
                        "start": {
                          "column": 32,
                          "line": 101
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "range": [
                          2261,
                          2262
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 101
                          },
                          "start": {
                            "column": 12,
                            "line": 101
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          2274,
                          2279
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 101
                          },
                          "start": {
                            "column": 25,
                            "line": 101
                          }
                        }
                      },
                      "range": [
                        2261,
                        2279
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 101
                        },
                        "start": {
                          "column": 12,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      2257,
                      2336
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 101
                      }
                    }
                  }
                ],
                "range": [
                  2247,
                  2342
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 104
                  },
                  "start": {
                    "column": 14,
                    "line": 100
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  2244,
                  2245
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 100
                  },
                  "start": {
                    "column": 11,
                    "line": 100
                  }
                }
              },
              "range": [
                2237,
                2342
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            },
            "range": [
              2221,
              2342
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          }
        ],
        "range": [
          2215,
          2344
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 14,
            "line": 97
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          2210,
          2212
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 97
          },
          "start": {
            "column": 9,
            "line": 97
          }
        }
      },
      "params": [],
      "range": [
        2201,
        2344
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 97
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 109
                },
                "start": {
                  "column": 5,
                  "line": 109
                }
              },
              "range": [
                2405,
                2422
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2407,
                      2413
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 109
                      },
                      "start": {
                        "column": 7,
                        "line": 109
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      2416,
                      2422
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 109
                      },
                      "start": {
                        "column": 16,
                        "line": 109
                      }
                    }
                  }
                ],
                "range": [
                  2407,
                  2422
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 109
                  },
                  "start": {
                    "column": 7,
                    "line": 109
                  }
                }
              }
            },
            "range": [
              2404,
              2422
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          "init": null,
          "range": [
            2404,
            2422
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 109
            },
            "start": {
              "column": 4,
              "line": 109
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2400,
        2423
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
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
          "name": "g",
          "optional": false,
          "range": [
            2424,
            2425
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 110
            },
            "start": {
              "column": 0,
              "line": 110
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"abc\"",
          "value": "abc",
          "range": [
            2428,
            2433
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 110
            },
            "start": {
              "column": 4,
              "line": 110
            }
          }
        },
        "range": [
          2424,
          2433
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 110
          },
          "start": {
            "column": 0,
            "line": 110
          }
        }
      },
      "range": [
        2424,
        2434
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      2450,
                      2451
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 111
                      },
                      "start": {
                        "column": 15,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    2450,
                    2451
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 111
                    },
                    "start": {
                      "column": 15,
                      "line": 111
                    }
                  }
                }
              ],
              "range": [
                2448,
                2475
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 111
                },
                "start": {
                  "column": 13,
                  "line": 111
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              2442,
              2475
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 111
              },
              "start": {
                "column": 7,
                "line": 111
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "range": [
            2435,
            2441
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 111
            },
            "start": {
              "column": 0,
              "line": 111
            }
          }
        },
        "optional": false,
        "range": [
          2435,
          2476
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 111
          },
          "start": {
            "column": 0,
            "line": 111
          }
        }
      },
      "range": [
        2435,
        2477
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              2563,
              2593
            ],
            "attributes": [],
            "declaration": {
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
                          "column": 33,
                          "line": 116
                        },
                        "start": {
                          "column": 16,
                          "line": 116
                        }
                      },
                      "range": [
                        2575,
                        2592
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              2577,
                              2583
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 116
                              },
                              "start": {
                                "column": 18,
                                "line": 116
                              }
                            }
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              2586,
                              2592
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 116
                              },
                              "start": {
                                "column": 27,
                                "line": 116
                              }
                            }
                          }
                        ],
                        "range": [
                          2577,
                          2592
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 116
                          },
                          "start": {
                            "column": 18,
                            "line": 116
                          }
                        }
                      }
                    },
                    "range": [
                      2574,
                      2592
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 116
                      },
                      "start": {
                        "column": 15,
                        "line": 116
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2574,
                    2592
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 116
                    },
                    "start": {
                      "column": 15,
                      "line": 116
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2570,
                2593
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 116
                },
                "start": {
                  "column": 11,
                  "line": 116
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 34,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
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
                  2598,
                  2599
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 117
                  },
                  "start": {
                    "column": 4,
                    "line": 117
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  2602,
                  2607
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 117
                  },
                  "start": {
                    "column": 8,
                    "line": 117
                  }
                }
              },
              "range": [
                2598,
                2607
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 117
                },
                "start": {
                  "column": 4,
                  "line": 117
                }
              }
            },
            "range": [
              2598,
              2608
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2628,
                            2629
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 118
                            },
                            "start": {
                              "column": 19,
                              "line": 118
                            }
                          }
                        },
                        "range": [
                          2628,
                          2629
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 118
                          },
                          "start": {
                            "column": 19,
                            "line": 118
                          }
                        }
                      }
                    ],
                    "range": [
                      2626,
                      2653
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 118
                      },
                      "start": {
                        "column": 17,
                        "line": 118
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    2620,
                    2653
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 118
                    },
                    "start": {
                      "column": 11,
                      "line": 118
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  2613,
                  2619
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 118
                  },
                  "start": {
                    "column": 4,
                    "line": 118
                  }
                }
              },
              "optional": false,
              "range": [
                2613,
                2654
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 118
                },
                "start": {
                  "column": 4,
                  "line": 118
                }
              }
            },
            "range": [
              2613,
              2655
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 119
                      },
                      "start": {
                        "column": 9,
                        "line": 119
                      }
                    },
                    "range": [
                      2665,
                      2682
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2667,
                            2673
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 119
                            },
                            "start": {
                              "column": 11,
                              "line": 119
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2676,
                            2682
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 119
                            },
                            "start": {
                              "column": 20,
                              "line": 119
                            }
                          }
                        }
                      ],
                      "range": [
                        2667,
                        2682
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 119
                        },
                        "start": {
                          "column": 11,
                          "line": 119
                        }
                      }
                    }
                  },
                  "range": [
                    2664,
                    2682
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 119
                    },
                    "start": {
                      "column": 8,
                      "line": 119
                    }
                  }
                },
                "init": null,
                "range": [
                  2664,
                  2682
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 119
                  },
                  "start": {
                    "column": 8,
                    "line": 119
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2660,
              2683
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
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
                "name": "y",
                "optional": false,
                "range": [
                  2688,
                  2689
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 120
                  },
                  "start": {
                    "column": 4,
                    "line": 120
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  2692,
                  2697
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 120
                  },
                  "start": {
                    "column": 8,
                    "line": 120
                  }
                }
              },
              "range": [
                2688,
                2697
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 120
                },
                "start": {
                  "column": 4,
                  "line": 120
                }
              }
            },
            "range": [
              2688,
              2698
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            2718,
                            2719
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 121
                            },
                            "start": {
                              "column": 19,
                              "line": 121
                            }
                          }
                        },
                        "range": [
                          2718,
                          2719
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 121
                          },
                          "start": {
                            "column": 19,
                            "line": 121
                          }
                        }
                      }
                    ],
                    "range": [
                      2716,
                      2734
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 121
                      },
                      "start": {
                        "column": 17,
                        "line": 121
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    2710,
                    2734
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 121
                    },
                    "start": {
                      "column": 11,
                      "line": 121
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "range": [
                  2703,
                  2709
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 121
                  },
                  "start": {
                    "column": 4,
                    "line": 121
                  }
                }
              },
              "optional": false,
              "range": [
                2703,
                2735
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 121
                },
                "start": {
                  "column": 4,
                  "line": 121
                }
              }
            },
            "range": [
              2703,
              2736
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 121
              }
            }
          }
        ],
        "range": [
          2557,
          2738
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 122
          },
          "start": {
            "column": 14,
            "line": 115
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          2553,
          2556
        ],
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "loc": {
          "end": {
            "column": 13,
            "line": 115
          },
          "start": {
            "column": 10,
            "line": 115
          }
        }
      },
      "kind": "namespace",
      "range": [
        2543,
        2738
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 115
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 127
                      },
                      "start": {
                        "column": 9,
                        "line": 127
                      }
                    },
                    "range": [
                      2789,
                      2809
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2791,
                            2797
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 127
                            },
                            "start": {
                              "column": 11,
                              "line": 127
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            2800,
                            2809
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 127
                            },
                            "start": {
                              "column": 20,
                              "line": 127
                            }
                          }
                        }
                      ],
                      "range": [
                        2791,
                        2809
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 127
                        },
                        "start": {
                          "column": 11,
                          "line": 127
                        }
                      }
                    }
                  },
                  "range": [
                    2788,
                    2809
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 127
                    },
                    "start": {
                      "column": 8,
                      "line": 127
                    }
                  }
                },
                "init": null,
                "range": [
                  2788,
                  2809
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 127
                  },
                  "start": {
                    "column": 8,
                    "line": 127
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2784,
              2810
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 127
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
                "name": "i",
                "optional": false,
                "range": [
                  2815,
                  2816
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 128
                  },
                  "start": {
                    "column": 4,
                    "line": 128
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2819,
                  2820
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 128
                  },
                  "start": {
                    "column": 8,
                    "line": 128
                  }
                }
              },
              "range": [
                2815,
                2820
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 128
                },
                "start": {
                  "column": 4,
                  "line": 128
                }
              }
            },
            "range": [
              2815,
              2821
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 128
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "range": [
                    2848,
                    2849
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 129
                    },
                    "start": {
                      "column": 26,
                      "line": 129
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      2854,
                      2855
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 129
                      },
                      "start": {
                        "column": 32,
                        "line": 129
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2858,
                      2859
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 129
                      },
                      "start": {
                        "column": 36,
                        "line": 129
                      }
                    }
                  },
                  "range": [
                    2854,
                    2859
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 129
                    },
                    "start": {
                      "column": 32,
                      "line": 129
                    }
                  }
                },
                "range": [
                  2848,
                  2859
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 129
                  },
                  "start": {
                    "column": 26,
                    "line": 129
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
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 129
                      },
                      "start": {
                        "column": 13,
                        "line": 129
                      }
                    },
                    "range": [
                      2835,
                      2843
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2837,
                        2843
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 129
                        },
                        "start": {
                          "column": 15,
                          "line": 129
                        }
                      }
                    }
                  },
                  "range": [
                    2834,
                    2843
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 129
                    },
                    "start": {
                      "column": 12,
                      "line": 129
                    }
                  }
                }
              ],
              "range": [
                2833,
                2859
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 129
                },
                "start": {
                  "column": 11,
                  "line": 129
                }
              }
            },
            "range": [
              2826,
              2860
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          }
        ],
        "range": [
          2778,
          2862
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 15,
            "line": 126
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          2772,
          2775
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 126
          },
          "start": {
            "column": 9,
            "line": 126
          }
        }
      },
      "params": [],
      "range": [
        2763,
        2862
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 126
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
                "name": "n",
                "optional": false,
                "range": [
                  2901,
                  2902
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 133
                  },
                  "start": {
                    "column": 4,
                    "line": 133
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2907,
                  2908
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 133
                  },
                  "start": {
                    "column": 10,
                    "line": 133
                  }
                }
              },
              "range": [
                2901,
                2908
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 133
                },
                "start": {
                  "column": 4,
                  "line": 133
                }
              }
            },
            "range": [
              2901,
              2909
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 133
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "range": [
                    2936,
                    2937
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 134
                    },
                    "start": {
                      "column": 26,
                      "line": 134
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "range": [
                    2940,
                    2941
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 134
                    },
                    "start": {
                      "column": 30,
                      "line": 134
                    }
                  }
                },
                "range": [
                  2936,
                  2941
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 134
                  },
                  "start": {
                    "column": 26,
                    "line": 134
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 134
                      },
                      "start": {
                        "column": 13,
                        "line": 134
                      }
                    },
                    "range": [
                      2923,
                      2931
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2925,
                        2931
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 134
                        },
                        "start": {
                          "column": 15,
                          "line": 134
                        }
                      }
                    }
                  },
                  "range": [
                    2922,
                    2931
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 134
                    },
                    "start": {
                      "column": 12,
                      "line": 134
                    }
                  }
                }
              ],
              "range": [
                2921,
                2941
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 134
                },
                "start": {
                  "column": 11,
                  "line": 134
                }
              }
            },
            "range": [
              2914,
              2942
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 134
              },
              "start": {
                "column": 4,
                "line": 134
              }
            }
          }
        ],
        "range": [
          2895,
          2944
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 135
          },
          "start": {
            "column": 31,
            "line": 132
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeAdder",
        "optional": false,
        "range": [
          2873,
          2882
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 132
          },
          "start": {
            "column": 9,
            "line": 132
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 132
              },
              "start": {
                "column": 21,
                "line": 132
              }
            },
            "range": [
              2885,
              2893
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2887,
                2893
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 132
                },
                "start": {
                  "column": 23,
                  "line": 132
                }
              }
            }
          },
          "range": [
            2883,
            2893
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 132
            },
            "start": {
              "column": 19,
              "line": 132
            }
          }
        }
      ],
      "range": [
        2864,
        2944
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 132
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    2971,
                    2972
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 138
                    },
                    "start": {
                      "column": 8,
                      "line": 138
                    }
                  }
                },
                "init": null,
                "range": [
                  2971,
                  2972
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 138
                  },
                  "start": {
                    "column": 8,
                    "line": 138
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2967,
              2973
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 138
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
                "name": "r",
                "optional": false,
                "range": [
                  2978,
                  2979
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 139
                  },
                  "start": {
                    "column": 4,
                    "line": 139
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"b\"",
                "value": "b",
                "range": [
                  2982,
                  2985
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 139
                  },
                  "start": {
                    "column": 8,
                    "line": 139
                  }
                }
              },
              "range": [
                2978,
                2985
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 139
                },
                "start": {
                  "column": 4,
                  "line": 139
                }
              }
            },
            "range": [
              2978,
              2986
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 139
              },
              "start": {
                "column": 4,
                "line": 139
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "range": [
                  2997,
                  2998
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 140
                  },
                  "start": {
                    "column": 10,
                    "line": 140
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                2991,
                2998
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 140
                },
                "start": {
                  "column": 4,
                  "line": 140
                }
              }
            },
            "range": [
              2991,
              2999
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 140
              },
              "start": {
                "column": 4,
                "line": 140
              }
            }
          }
        ],
        "range": [
          2961,
          3001
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 141
          },
          "start": {
            "column": 15,
            "line": 137
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          2955,
          2958
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 137
          },
          "start": {
            "column": 9,
            "line": 137
          }
        }
      },
      "params": [],
      "range": [
        2946,
        3001
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 141
        },
        "start": {
          "column": 0,
          "line": 137
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
                  "name": "fooMap",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 146
                      },
                      "start": {
                        "column": 16,
                        "line": 146
                      }
                    },
                    "range": [
                      3058,
                      3085
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3063,
                          3085
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              3064,
                              3070
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 146
                              },
                              "start": {
                                "column": 22,
                                "line": 146
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3076,
                                3084
                              ],
                              "params": [
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3077,
                                    3083
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 146
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 146
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 146
                                },
                                "start": {
                                  "column": 34,
                                  "line": 146
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "range": [
                                3071,
                                3076
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 146
                                },
                                "start": {
                                  "column": 29,
                                  "line": 146
                                }
                              }
                            },
                            "range": [
                              3071,
                              3084
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 146
                              },
                              "start": {
                                "column": 29,
                                "line": 146
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 146
                          },
                          "start": {
                            "column": 21,
                            "line": 146
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "range": [
                          3060,
                          3063
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 146
                          },
                          "start": {
                            "column": 18,
                            "line": 146
                          }
                        }
                      },
                      "range": [
                        3060,
                        3085
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 146
                        },
                        "start": {
                          "column": 18,
                          "line": 146
                        }
                      }
                    }
                  },
                  "range": [
                    3052,
                    3085
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 146
                    },
                    "start": {
                      "column": 10,
                      "line": 146
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "range": [
                      3092,
                      3095
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 146
                      },
                      "start": {
                        "column": 50,
                        "line": 146
                      }
                    }
                  },
                  "range": [
                    3088,
                    3097
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 146
                    },
                    "start": {
                      "column": 46,
                      "line": 146
                    }
                  }
                },
                "range": [
                  3052,
                  3097
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 146
                  },
                  "start": {
                    "column": 10,
                    "line": 146
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3046,
              3097
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 146
              },
              "start": {
                "column": 4,
                "line": 146
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
                  "name": "values",
                  "optional": false,
                  "range": [
                    3108,
                    3114
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 147
                    },
                    "start": {
                      "column": 10,
                      "line": 147
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3118,
                        3119
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 147
                        },
                        "start": {
                          "column": 20,
                          "line": 147
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        3121,
                        3122
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 147
                        },
                        "start": {
                          "column": 23,
                          "line": 147
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        3124,
                        3125
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 147
                        },
                        "start": {
                          "column": 26,
                          "line": 147
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        3127,
                        3128
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 147
                        },
                        "start": {
                          "column": 29,
                          "line": 147
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        3130,
                        3131
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 147
                        },
                        "start": {
                          "column": 32,
                          "line": 147
                        }
                      }
                    }
                  ],
                  "range": [
                    3117,
                    3132
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 147
                    },
                    "start": {
                      "column": 19,
                      "line": 147
                    }
                  }
                },
                "range": [
                  3108,
                  3132
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 147
                  },
                  "start": {
                    "column": 10,
                    "line": 147
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3102,
              3133
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 147
              },
              "start": {
                "column": 4,
                "line": 147
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
                  "range": [
                    3142,
                    3145
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 148
                    },
                    "start": {
                      "column": 8,
                      "line": 148
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        3159,
                        3162
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 148
                        },
                        "start": {
                          "column": 25,
                          "line": 148
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
                      "name": "fooMap",
                      "optional": false,
                      "range": [
                        3148,
                        3154
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 148
                        },
                        "start": {
                          "column": 14,
                          "line": 148
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "range": [
                        3155,
                        3158
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 148
                        },
                        "start": {
                          "column": 21,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3148,
                      3158
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 148
                      },
                      "start": {
                        "column": 14,
                        "line": 148
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3148,
                    3163
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 148
                    },
                    "start": {
                      "column": 14,
                      "line": 148
                    }
                  }
                },
                "range": [
                  3142,
                  3163
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 148
                  },
                  "start": {
                    "column": 8,
                    "line": 148
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3138,
              3164
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 148
              },
              "start": {
                "column": 4,
                "line": 148
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3196,
                        3199
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 150
                        },
                        "start": {
                          "column": 8,
                          "line": 150
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        3202,
                        3204
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 150
                        },
                        "start": {
                          "column": 14,
                          "line": 150
                        }
                      }
                    },
                    "range": [
                      3196,
                      3204
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 150
                      },
                      "start": {
                        "column": 8,
                        "line": 150
                      }
                    }
                  },
                  "range": [
                    3196,
                    3205
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 150
                    },
                    "start": {
                      "column": 8,
                      "line": 150
                    }
                  }
                }
              ],
              "range": [
                3186,
                3211
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 151
                },
                "start": {
                  "column": 21,
                  "line": 149
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  3173,
                  3176
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 149
                  },
                  "start": {
                    "column": 8,
                    "line": 149
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  3180,
                  3184
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 149
                  },
                  "start": {
                    "column": 15,
                    "line": 149
                  }
                }
              },
              "range": [
                3173,
                3184
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 149
                },
                "start": {
                  "column": 8,
                  "line": 149
                }
              }
            },
            "range": [
              3169,
              3211
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 149
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3245,
                          3246
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 152
                          },
                          "start": {
                            "column": 33,
                            "line": 152
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          3236,
                          3239
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 152
                          },
                          "start": {
                            "column": 24,
                            "line": 152
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
                          3240,
                          3244
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 152
                          },
                          "start": {
                            "column": 28,
                            "line": 152
                          }
                        }
                      },
                      "range": [
                        3236,
                        3244
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 152
                        },
                        "start": {
                          "column": 24,
                          "line": 152
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3236,
                      3247
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 152
                      },
                      "start": {
                        "column": 24,
                        "line": 152
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
                      "name": "v",
                      "optional": false,
                      "range": [
                        3231,
                        3232
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 152
                        },
                        "start": {
                          "column": 19,
                          "line": 152
                        }
                      }
                    }
                  ],
                  "range": [
                    3231,
                    3247
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 152
                    },
                    "start": {
                      "column": 19,
                      "line": 152
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
                  "name": "values",
                  "optional": false,
                  "range": [
                    3216,
                    3222
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 152
                    },
                    "start": {
                      "column": 4,
                      "line": 152
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "range": [
                    3223,
                    3230
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 152
                    },
                    "start": {
                      "column": 11,
                      "line": 152
                    }
                  }
                },
                "range": [
                  3216,
                  3230
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 152
                  },
                  "start": {
                    "column": 4,
                    "line": 152
                  }
                }
              },
              "optional": false,
              "range": [
                3216,
                3248
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 152
                },
                "start": {
                  "column": 4,
                  "line": 152
                }
              }
            },
            "range": [
              3216,
              3249
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 152
              },
              "start": {
                "column": 4,
                "line": 152
              }
            }
          }
        ],
        "range": [
          3040,
          3251
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 153
          },
          "start": {
            "column": 15,
            "line": 145
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "range": [
          3034,
          3037
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 145
          },
          "start": {
            "column": 9,
            "line": 145
          }
        }
      },
      "params": [],
      "range": [
        3025,
        3251
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 153
        },
        "start": {
          "column": 0,
          "line": 145
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 157
                      },
                      "start": {
                        "column": 11,
                        "line": 157
                      }
                    },
                    "range": [
                      3364,
                      3384
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            3366,
                            3372
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 157
                            },
                            "start": {
                              "column": 13,
                              "line": 157
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            3375,
                            3384
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 157
                            },
                            "start": {
                              "column": 22,
                              "line": 157
                            }
                          }
                        }
                      ],
                      "range": [
                        3366,
                        3384
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 157
                        },
                        "start": {
                          "column": 13,
                          "line": 157
                        }
                      }
                    }
                  },
                  "range": [
                    3361,
                    3384
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 157
                    },
                    "start": {
                      "column": 8,
                      "line": 157
                    }
                  }
                },
                "init": null,
                "range": [
                  3361,
                  3384
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 157
                  },
                  "start": {
                    "column": 8,
                    "line": 157
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              3357,
              3385
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
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
                "name": "foo",
                "optional": false,
                "range": [
                  3390,
                  3393
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 158
                  },
                  "start": {
                    "column": 4,
                    "line": 158
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  3396,
                  3398
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 158
                  },
                  "start": {
                    "column": 10,
                    "line": 158
                  }
                }
              },
              "range": [
                3390,
                3398
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 158
                },
                "start": {
                  "column": 4,
                  "line": 158
                }
              }
            },
            "range": [
              3390,
              3399
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 158
              },
              "start": {
                "column": 4,
                "line": 158
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            3428,
                            3431
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 161
                            },
                            "start": {
                              "column": 8,
                              "line": 161
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toLocaleLowerCase",
                          "optional": false,
                          "range": [
                            3432,
                            3449
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 161
                            },
                            "start": {
                              "column": 12,
                              "line": 161
                            }
                          }
                        },
                        "range": [
                          3428,
                          3449
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 161
                          },
                          "start": {
                            "column": 8,
                            "line": 161
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3428,
                        3451
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 161
                        },
                        "start": {
                          "column": 8,
                          "line": 161
                        }
                      }
                    },
                    "range": [
                      3428,
                      3452
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 161
                      },
                      "start": {
                        "column": 8,
                        "line": 161
                      }
                    }
                  }
                ],
                "range": [
                  3418,
                  3458
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 162
                  },
                  "start": {
                    "column": 17,
                    "line": 160
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                3412,
                3458
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 162
                },
                "start": {
                  "column": 11,
                  "line": 160
                }
              }
            },
            "range": [
              3405,
              3458
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 160
              }
            }
          }
        ],
        "range": [
          3268,
          3460
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 163
          },
          "start": {
            "column": 15,
            "line": 155
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "range": [
          3262,
          3265
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 155
          },
          "start": {
            "column": 9,
            "line": 155
          }
        }
      },
      "params": [],
      "range": [
        3253,
        3460
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 163
        },
        "start": {
          "column": 0,
          "line": 155
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 163
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
