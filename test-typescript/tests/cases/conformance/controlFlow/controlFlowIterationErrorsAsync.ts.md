__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2333
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
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              },
              "range": [
                8,
                17
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  10,
                  17
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
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
      "kind": "let",
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 18,
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
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  63,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
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
                  65,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "range": [
                63,
                71
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              56,
              72
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          50,
          74
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 30,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "len",
        "optional": false,
        "range": [
          35,
          38
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
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
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            },
            "range": [
              40,
              48
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                42,
                48
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            }
          },
          "range": [
            39,
            48
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        }
      ],
      "range": [
        20,
        74
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      107,
                      134
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            109,
                            115
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
                          "type": "TSNumberKeyword",
                          "range": [
                            118,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            127,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 29,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        109,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
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
                    106,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
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
                  106,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
              102,
              135
            ],
            "loc": {
              "end": {
                "column": 37,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  144,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                140,
                146
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
            "range": [
              140,
              147
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                        175,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              189,
                              190
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 11
                              },
                              "start": {
                                "column": 22,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "range": [
                            185,
                            188
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          185,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        179,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      175,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    175,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    201,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                165,
                209
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 17,
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
                159,
                163
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              152,
              209
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                214,
                215
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              214,
              216
            ],
            "loc": {
              "end": {
                "column": 6,
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
          96,
          218
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 20,
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
        "name": "f1",
        "optional": false,
        "range": [
          91,
          93
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "params": [],
      "range": [
        76,
        218
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    },
                    "range": [
                      251,
                      278
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            253,
                            259
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 18
                            },
                            "start": {
                              "column": 11,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            262,
                            268
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 18
                            },
                            "start": {
                              "column": 20,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            271,
                            278
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 18
                            },
                            "start": {
                              "column": 29,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        253,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    250,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": null,
                "range": [
                  250,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
              246,
              279
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                  284,
                  285
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  288,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "range": [
                284,
                290
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              284,
              291
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      319,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    319,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
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
                        330,
                        331
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
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              344,
                              345
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 22
                              },
                              "start": {
                                "column": 22,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "range": [
                            340,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 22
                            },
                            "start": {
                              "column": 18,
                              "line": 22
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          340,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 22
                          },
                          "start": {
                            "column": 18,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        334,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      330,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    330,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                309,
                353
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                303,
                307
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              296,
              353
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              358,
              360
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          240,
          362
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 20,
            "line": 17
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
          235,
          237
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "params": [],
      "range": [
        220,
        362
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          381,
          384
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 27
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
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            },
            "range": [
              386,
              394
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                388,
                394
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 27
                },
                "start": {
                  "column": 24,
                  "line": 27
                }
              }
            }
          },
          "range": [
            385,
            394
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 27
            },
            "start": {
              "column": 21,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 27
          },
          "start": {
            "column": 31,
            "line": 27
          }
        },
        "range": [
          395,
          412
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              404,
              412
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  405,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 27
                  },
                  "start": {
                    "column": 41,
                    "line": 27
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 27
              },
              "start": {
                "column": 40,
                "line": 27
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              397,
              404
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 27
              },
              "start": {
                "column": 33,
                "line": 27
              }
            }
          },
          "range": [
            397,
            412
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 27
            },
            "start": {
              "column": 33,
              "line": 27
            }
          }
        }
      },
      "range": [
        364,
        413
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          431,
          434
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
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
                "line": 28
              },
              "start": {
                "column": 22,
                "line": 28
              }
            },
            "range": [
              436,
              444
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                438,
                444
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 28
                },
                "start": {
                  "column": 24,
                  "line": 28
                }
              }
            }
          },
          "range": [
            435,
            444
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 28
            },
            "start": {
              "column": 21,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 28
          },
          "start": {
            "column": 31,
            "line": 28
          }
        },
        "range": [
          445,
          462
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              454,
              462
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  455,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 28
                  },
                  "start": {
                    "column": 41,
                    "line": 28
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 28
              },
              "start": {
                "column": 40,
                "line": 28
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              447,
              454
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 28
              },
              "start": {
                "column": 33,
                "line": 28
              }
            }
          },
          "range": [
            447,
            462
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 28
            },
            "start": {
              "column": 33,
              "line": 28
            }
          }
        }
      },
      "range": [
        414,
        463
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 31
                      },
                      "start": {
                        "column": 9,
                        "line": 31
                      }
                    },
                    "range": [
                      496,
                      523
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            498,
                            504
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 31
                            },
                            "start": {
                              "column": 11,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            507,
                            513
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 31
                            },
                            "start": {
                              "column": 20,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            516,
                            523
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 31
                            },
                            "start": {
                              "column": 29,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        498,
                        523
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 31
                        },
                        "start": {
                          "column": 11,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    495,
                    523
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": null,
                "range": [
                  495,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              491,
              524
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
                  529,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                "raw": "\"\"",
                "value": "",
                "range": [
                  533,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              "range": [
                529,
                535
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              529,
              536
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                        564,
                        565
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
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              578,
                              579
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 34
                              },
                              "start": {
                                "column": 22,
                                "line": 34
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
                            574,
                            577
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
                        "optional": false,
                        "range": [
                          574,
                          580
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 34
                          },
                          "start": {
                            "column": 18,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        568,
                        580
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 34
                        },
                        "start": {
                          "column": 12,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      564,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    564,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      590,
                      591
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
                  "range": [
                    590,
                    592
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
                }
              ],
              "range": [
                554,
                598
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                548,
                552
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "range": [
              541,
              598
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                603,
                604
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              603,
              605
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          485,
          607
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 20,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "range": [
          480,
          482
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 30
          },
          "start": {
            "column": 15,
            "line": 30
          }
        }
      },
      "params": [],
      "range": [
        465,
        607
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 41
                      },
                      "start": {
                        "column": 9,
                        "line": 41
                      }
                    },
                    "range": [
                      640,
                      667
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            642,
                            648
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 41
                            },
                            "start": {
                              "column": 11,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            651,
                            657
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 41
                            },
                            "start": {
                              "column": 20,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            660,
                            667
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 41
                            },
                            "start": {
                              "column": 29,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "range": [
                        642,
                        667
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 41
                        },
                        "start": {
                          "column": 11,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    639,
                    667
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
                },
                "init": null,
                "range": [
                  639,
                  667
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
            "declare": false,
            "kind": "let",
            "range": [
              635,
              668
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                  673,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  677,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              },
              "range": [
                673,
                679
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "range": [
              673,
              680
            ],
            "loc": {
              "end": {
                "column": 11,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      708,
                      709
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
                  "range": [
                    708,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        719,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              733,
                              734
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 45
                              },
                              "start": {
                                "column": 22,
                                "line": 45
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
                            729,
                            732
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 45
                            },
                            "start": {
                              "column": 18,
                              "line": 45
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          729,
                          735
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 45
                          },
                          "start": {
                            "column": 18,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        723,
                        735
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      719,
                      735
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    719,
                    736
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                698,
                742
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 43
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                692,
                696
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
            "range": [
              685,
              742
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                747,
                748
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              747,
              749
            ],
            "loc": {
              "end": {
                "column": 6,
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
          629,
          751
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 20,
            "line": 40
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "range": [
          624,
          626
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 40
          },
          "start": {
            "column": 15,
            "line": 40
          }
        }
      },
      "params": [],
      "range": [
        609,
        751
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  828,
                  829
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 51
                  },
                  "start": {
                    "column": 12,
                    "line": 51
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                827,
                829
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "range": [
              820,
              830
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          814,
          832
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 61,
            "line": 50
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "range": [
          768,
          776
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 50
          },
          "start": {
            "column": 15,
            "line": 50
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
                "column": 42,
                "line": 50
              },
              "start": {
                "column": 25,
                "line": 50
              }
            },
            "range": [
              778,
              795
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    780,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 50
                    },
                    "start": {
                      "column": 27,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    789,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 50
                    },
                    "start": {
                      "column": 36,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                780,
                795
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 50
                },
                "start": {
                  "column": 27,
                  "line": 50
                }
              }
            }
          },
          "range": [
            777,
            795
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 50
            },
            "start": {
              "column": 24,
              "line": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 60,
            "line": 50
          },
          "start": {
            "column": 43,
            "line": 50
          }
        },
        "range": [
          796,
          813
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              805,
              813
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  806,
                  812
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 50
                  },
                  "start": {
                    "column": 53,
                    "line": 50
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 50
              },
              "start": {
                "column": 52,
                "line": 50
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              798,
              805
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 50
              },
              "start": {
                "column": 45,
                "line": 50
              }
            }
          },
          "range": [
            798,
            813
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 50
            },
            "start": {
              "column": 45,
              "line": 50
            }
          }
        }
      },
      "range": [
        753,
        832
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 55
                      },
                      "start": {
                        "column": 9,
                        "line": 55
                      }
                    },
                    "range": [
                      865,
                      892
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            867,
                            873
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 55
                            },
                            "start": {
                              "column": 11,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            876,
                            882
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 55
                            },
                            "start": {
                              "column": 20,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            885,
                            892
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 55
                            },
                            "start": {
                              "column": 29,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        867,
                        892
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 55
                        },
                        "start": {
                          "column": 11,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    864,
                    892
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                },
                "init": null,
                "range": [
                  864,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              860,
              893
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
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
                  898,
                  899
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  902,
                  905
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              },
              "range": [
                898,
                905
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              898,
              906
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
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
                        934,
                        935
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
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            939,
                            940
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 58
                            },
                            "start": {
                              "column": 13,
                              "line": 58
                            }
                          }
                        },
                        "operator": "+",
                        "prefix": true,
                        "range": [
                          938,
                          940
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 58
                          },
                          "start": {
                            "column": 12,
                            "line": 58
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          943,
                          944
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 58
                          },
                          "start": {
                            "column": 17,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        938,
                        944
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      934,
                      944
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    934,
                    945
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      954,
                      955
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    954,
                    956
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                924,
                962
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 17,
                  "line": 57
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                918,
                922
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 57
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            },
            "range": [
              911,
              962
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "range": [
          854,
          964
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 20,
            "line": 54
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h1",
        "optional": false,
        "range": [
          849,
          851
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 54
          },
          "start": {
            "column": 15,
            "line": 54
          }
        }
      },
      "params": [],
      "range": [
        834,
        964
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 64
                      },
                      "start": {
                        "column": 9,
                        "line": 64
                      }
                    },
                    "range": [
                      997,
                      1024
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            999,
                            1005
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 64
                            },
                            "start": {
                              "column": 11,
                              "line": 64
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1008,
                            1014
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 64
                            },
                            "start": {
                              "column": 20,
                              "line": 64
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1017,
                            1024
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 64
                            },
                            "start": {
                              "column": 29,
                              "line": 64
                            }
                          }
                        }
                      ],
                      "range": [
                        999,
                        1024
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 64
                        },
                        "start": {
                          "column": 11,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    996,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "init": null,
                "range": [
                  996,
                  1024
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              992,
              1025
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
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
                  1030,
                  1031
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  1034,
                  1037
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 65
                  },
                  "start": {
                    "column": 8,
                    "line": 65
                  }
                }
              },
              "range": [
                1030,
                1037
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1030,
              1038
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
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
                        1066,
                        1067
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
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1085,
                                1086
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 67
                                },
                                "start": {
                                  "column": 27,
                                  "line": 67
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "range": [
                              1076,
                              1084
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 67
                              },
                              "start": {
                                "column": 18,
                                "line": 67
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1076,
                            1087
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 67
                            },
                            "start": {
                              "column": 18,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1070,
                          1087
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1090,
                          1091
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 67
                          },
                          "start": {
                            "column": 32,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1070,
                        1091
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 67
                        },
                        "start": {
                          "column": 12,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1066,
                      1091
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1066,
                    1092
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1101,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1101,
                    1103
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                1056,
                1109
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 17,
                  "line": 66
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1050,
                1054
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 66
                },
                "start": {
                  "column": 11,
                  "line": 66
                }
              }
            },
            "range": [
              1043,
              1109
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          986,
          1111
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 20,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "range": [
          981,
          983
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 63
          },
          "start": {
            "column": 15,
            "line": 63
          }
        }
      },
      "params": [],
      "range": [
        966,
        1111
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 73
                      },
                      "start": {
                        "column": 9,
                        "line": 73
                      }
                    },
                    "range": [
                      1144,
                      1171
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1146,
                            1152
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 73
                            },
                            "start": {
                              "column": 11,
                              "line": 73
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1155,
                            1161
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 73
                            },
                            "start": {
                              "column": 20,
                              "line": 73
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1164,
                            1171
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 73
                            },
                            "start": {
                              "column": 29,
                              "line": 73
                            }
                          }
                        }
                      ],
                      "range": [
                        1146,
                        1171
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 73
                        },
                        "start": {
                          "column": 11,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    1143,
                    1171
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                "init": null,
                "range": [
                  1143,
                  1171
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1139,
              1172
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
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
                  1177,
                  1178
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  1181,
                  1184
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              },
              "range": [
                1177,
                1184
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              1177,
              1185
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          1217,
                          1218
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 76
                          },
                          "start": {
                            "column": 12,
                            "line": 76
                          }
                        }
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1236,
                                1237
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 76
                                },
                                "start": {
                                  "column": 31,
                                  "line": 76
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "range": [
                              1227,
                              1235
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 76
                              },
                              "start": {
                                "column": 22,
                                "line": 76
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1227,
                            1238
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 76
                            },
                            "start": {
                              "column": 22,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          1221,
                          1238
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 76
                          },
                          "start": {
                            "column": 16,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1217,
                        1238
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 76
                        },
                        "start": {
                          "column": 12,
                          "line": 76
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1213,
                    1239
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 76
                    },
                    "start": {
                      "column": 8,
                      "line": 76
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
                        1248,
                        1249
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 77
                        },
                        "start": {
                          "column": 8,
                          "line": 77
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1252,
                          1253
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
                            "line": 77
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1256,
                          1257
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 77
                          },
                          "start": {
                            "column": 16,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1252,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 77
                        },
                        "start": {
                          "column": 12,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1248,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    1248,
                    1258
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1267,
                      1268
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 78
                      },
                      "start": {
                        "column": 8,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    1267,
                    1269
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                1203,
                1275
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 17,
                  "line": 75
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1197,
                1201
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 75
                },
                "start": {
                  "column": 11,
                  "line": 75
                }
              }
            },
            "range": [
              1190,
              1275
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          1133,
          1277
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 20,
            "line": 72
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h3",
        "optional": false,
        "range": [
          1128,
          1130
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 72
          },
          "start": {
            "column": 15,
            "line": 72
          }
        }
      },
      "params": [],
      "range": [
        1113,
        1277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                        "column": 36,
                        "line": 83
                      },
                      "start": {
                        "column": 9,
                        "line": 83
                      }
                    },
                    "range": [
                      1310,
                      1337
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1312,
                            1318
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 83
                            },
                            "start": {
                              "column": 11,
                              "line": 83
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1321,
                            1327
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 83
                            },
                            "start": {
                              "column": 20,
                              "line": 83
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1330,
                            1337
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 83
                            },
                            "start": {
                              "column": 29,
                              "line": 83
                            }
                          }
                        }
                      ],
                      "range": [
                        1312,
                        1337
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 83
                        },
                        "start": {
                          "column": 11,
                          "line": 83
                        }
                      }
                    }
                  },
                  "range": [
                    1309,
                    1337
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                },
                "init": null,
                "range": [
                  1309,
                  1337
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 83
                  },
                  "start": {
                    "column": 8,
                    "line": 83
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1305,
              1338
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
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
                  1343,
                  1344
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 84
                  },
                  "start": {
                    "column": 4,
                    "line": 84
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  1347,
                  1350
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 84
                  },
                  "start": {
                    "column": 8,
                    "line": 84
                  }
                }
              },
              "range": [
                1343,
                1350
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 84
                }
              }
            },
            "range": [
              1343,
              1351
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1379,
                      1380
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 86
                      },
                      "start": {
                        "column": 8,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1379,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 86
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
                        "range": [
                          1394,
                          1395
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 87
                          },
                          "start": {
                            "column": 12,
                            "line": 87
                          }
                        }
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1413,
                                1414
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 87
                                },
                                "start": {
                                  "column": 31,
                                  "line": 87
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "range": [
                              1404,
                              1412
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 87
                              },
                              "start": {
                                "column": 22,
                                "line": 87
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1404,
                            1415
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 87
                            },
                            "start": {
                              "column": 22,
                              "line": 87
                            }
                          }
                        },
                        "range": [
                          1398,
                          1415
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 87
                          },
                          "start": {
                            "column": 16,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        1394,
                        1415
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 87
                        },
                        "start": {
                          "column": 12,
                          "line": 87
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1390,
                    1416
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
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
                        1425,
                        1426
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
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1429,
                          1430
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 88
                          },
                          "start": {
                            "column": 12,
                            "line": 88
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1433,
                          1434
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 88
                          },
                          "start": {
                            "column": 16,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        1429,
                        1434
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 88
                        },
                        "start": {
                          "column": 12,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1425,
                      1434
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1425,
                    1435
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1444,
                      1445
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 89
                      },
                      "start": {
                        "column": 8,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1444,
                    1446
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                }
              ],
              "range": [
                1369,
                1452
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 17,
                  "line": 85
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1363,
                1367
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 85
                },
                "start": {
                  "column": 11,
                  "line": 85
                }
              }
            },
            "range": [
              1356,
              1452
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1299,
          1454
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 91
          },
          "start": {
            "column": 20,
            "line": 82
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h4",
        "optional": false,
        "range": [
          1294,
          1296
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 82
          },
          "start": {
            "column": 15,
            "line": 82
          }
        }
      },
      "params": [],
      "range": [
        1279,
        1454
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1536,
                    1537
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 96
                    },
                    "start": {
                      "column": 12,
                      "line": 96
                    }
                  }
                }
              ],
              "range": [
                1535,
                1538
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 96
                },
                "start": {
                  "column": 11,
                  "line": 96
                }
              }
            },
            "range": [
              1528,
              1539
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          }
        ],
        "range": [
          1522,
          1541
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 49,
            "line": 95
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get_things",
        "optional": false,
        "range": [
          1488,
          1498
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 95
          },
          "start": {
            "column": 15,
            "line": 95
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 95
              },
              "start": {
                "column": 27,
                "line": 95
              }
            },
            "range": [
              1500,
              1520
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1502,
                    1508
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 95
                    },
                    "start": {
                      "column": 29,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1511,
                    1520
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 95
                    },
                    "start": {
                      "column": 38,
                      "line": 95
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
                  "column": 47,
                  "line": 95
                },
                "start": {
                  "column": 29,
                  "line": 95
                }
              }
            }
          },
          "range": [
            1499,
            1520
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 95
            },
            "start": {
              "column": 26,
              "line": 95
            }
          }
        }
      ],
      "range": [
        1473,
        1541
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "before",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 100
                      },
                      "start": {
                        "column": 14,
                        "line": 100
                      }
                    },
                    "range": [
                      1583,
                      1603
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1585,
                            1591
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 100
                            },
                            "start": {
                              "column": 16,
                              "line": 100
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            1594,
                            1603
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 100
                            },
                            "start": {
                              "column": 25,
                              "line": 100
                            }
                          }
                        }
                      ],
                      "range": [
                        1585,
                        1603
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 100
                        },
                        "start": {
                          "column": 16,
                          "line": 100
                        }
                      }
                    }
                  },
                  "range": [
                    1577,
                    1603
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 100
                    },
                    "start": {
                      "column": 8,
                      "line": 100
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1606,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 100
                    },
                    "start": {
                      "column": 37,
                      "line": 100
                    }
                  }
                },
                "range": [
                  1577,
                  1615
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 100
                  },
                  "start": {
                    "column": 8,
                    "line": 100
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1573,
              1616
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
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
                        "name": "results",
                        "optional": false,
                        "range": [
                          1665,
                          1672
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 102
                          },
                          "start": {
                            "column": 14,
                            "line": 102
                          }
                        }
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "before",
                              "optional": false,
                              "range": [
                                1692,
                                1698
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 102
                                },
                                "start": {
                                  "column": 41,
                                  "line": 102
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get_things",
                            "optional": false,
                            "range": [
                              1681,
                              1691
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 102
                              },
                              "start": {
                                "column": 30,
                                "line": 102
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1681,
                            1699
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 102
                            },
                            "start": {
                              "column": 30,
                              "line": 102
                            }
                          }
                        },
                        "range": [
                          1675,
                          1699
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 102
                          },
                          "start": {
                            "column": 24,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        1665,
                        1699
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 102
                        },
                        "start": {
                          "column": 14,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    1659,
                    1700
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
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
                      "name": "before",
                      "optional": false,
                      "range": [
                        1709,
                        1715
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 103
                        },
                        "start": {
                          "column": 8,
                          "line": 103
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "results",
                        "optional": false,
                        "range": [
                          1718,
                          1725
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 103
                          },
                          "start": {
                            "column": 17,
                            "line": 103
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1726,
                          1727
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 103
                          },
                          "start": {
                            "column": 25,
                            "line": 103
                          }
                        }
                      },
                      "range": [
                        1718,
                        1728
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 103
                        },
                        "start": {
                          "column": 17,
                          "line": 103
                        }
                      }
                    },
                    "range": [
                      1709,
                      1728
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    1709,
                    1729
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                1649,
                1735
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 104
                },
                "start": {
                  "column": 32,
                  "line": 101
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
                    "name": "i",
                    "optional": false,
                    "range": [
                      1630,
                      1631
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 101
                      },
                      "start": {
                        "column": 13,
                        "line": 101
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1634,
                      1635
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 101
                      },
                      "start": {
                        "column": 17,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    1630,
                    1635
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 101
                    },
                    "start": {
                      "column": 13,
                      "line": 101
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1626,
                1635
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 101
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  1637,
                  1638
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 101
                  },
                  "start": {
                    "column": 20,
                    "line": 101
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  1641,
                  1642
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 101
                  },
                  "start": {
                    "column": 24,
                    "line": 101
                  }
                }
              },
              "range": [
                1637,
                1642
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 101
                },
                "start": {
                  "column": 20,
                  "line": 101
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  1644,
                  1645
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 101
                  },
                  "start": {
                    "column": 27,
                    "line": 101
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                1644,
                1647
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 101
                },
                "start": {
                  "column": 27,
                  "line": 101
                }
              }
            },
            "range": [
              1621,
              1735
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          }
        ],
        "range": [
          1567,
          1737
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 24,
            "line": 99
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "range": [
          1558,
          1564
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 99
          },
          "start": {
            "column": 15,
            "line": 99
          }
        }
      },
      "params": [],
      "range": [
        1543,
        1737
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foox",
        "optional": false,
        "range": [
          1796,
          1800
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 109
          },
          "start": {
            "column": 17,
            "line": 109
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
                "column": 43,
                "line": 109
              },
              "start": {
                "column": 23,
                "line": 109
              }
            },
            "range": [
              1802,
              1822
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1804,
                    1810
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 109
                    },
                    "start": {
                      "column": 25,
                      "line": 109
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1813,
                    1822
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 109
                    },
                    "start": {
                      "column": 34,
                      "line": 109
                    }
                  }
                }
              ],
              "range": [
                1804,
                1822
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 109
                },
                "start": {
                  "column": 25,
                  "line": 109
                }
              }
            }
          },
          "range": [
            1801,
            1822
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 109
            },
            "start": {
              "column": 22,
              "line": 109
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 109
          },
          "start": {
            "column": 44,
            "line": 109
          }
        },
        "range": [
          1823,
          1840
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1832,
              1840
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  1833,
                  1839
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 109
                  },
                  "start": {
                    "column": 54,
                    "line": 109
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 109
              },
              "start": {
                "column": 53,
                "line": 109
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              1825,
              1832
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 109
              },
              "start": {
                "column": 46,
                "line": 109
              }
            }
          },
          "range": [
            1825,
            1840
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 109
            },
            "start": {
              "column": 46,
              "line": 109
            }
          }
        }
      },
      "range": [
        1779,
        1840
      ],
      "loc": {
        "end": {
          "column": 61,
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
        "type": "ArrowFunctionExpression",
        "async": true,
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 112
                        },
                        "start": {
                          "column": 9,
                          "line": 112
                        }
                      },
                      "range": [
                        1865,
                        1885
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              1867,
                              1873
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 112
                              },
                              "start": {
                                "column": 11,
                                "line": 112
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              1876,
                              1885
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 112
                              },
                              "start": {
                                "column": 20,
                                "line": 112
                              }
                            }
                          }
                        ],
                        "range": [
                          1867,
                          1885
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 112
                          },
                          "start": {
                            "column": 11,
                            "line": 112
                          }
                        }
                      }
                    },
                    "range": [
                      1862,
                      1885
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 112
                      },
                      "start": {
                        "column": 6,
                        "line": 112
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      1888,
                      1897
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 112
                      },
                      "start": {
                        "column": 32,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    1862,
                    1897
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 112
                    },
                    "start": {
                      "column": 6,
                      "line": 112
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1858,
                1898
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 112
                },
                "start": {
                  "column": 2,
                  "line": 112
                }
              }
            },
            {
              "type": "DoWhileStatement",
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
                          "name": "baz",
                          "optional": false,
                          "range": [
                            1916,
                            1919
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 114
                            },
                            "start": {
                              "column": 10,
                              "line": 114
                            }
                          }
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  1933,
                                  1936
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 114
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 114
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foox",
                              "optional": false,
                              "range": [
                                1928,
                                1932
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 114
                                },
                                "start": {
                                  "column": 22,
                                  "line": 114
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1928,
                              1937
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 114
                              },
                              "start": {
                                "column": 22,
                                "line": 114
                              }
                            }
                          },
                          "range": [
                            1922,
                            1937
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 114
                            },
                            "start": {
                              "column": 16,
                              "line": 114
                            }
                          }
                        },
                        "range": [
                          1916,
                          1937
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 114
                          },
                          "start": {
                            "column": 10,
                            "line": 114
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1910,
                      1938
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 114
                      },
                      "start": {
                        "column": 4,
                        "line": 114
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          1943,
                          1946
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 115
                          },
                          "start": {
                            "column": 4,
                            "line": 115
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "range": [
                          1949,
                          1952
                        ],
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
                      "range": [
                        1943,
                        1952
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 115
                        },
                        "start": {
                          "column": 4,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      1943,
                      1952
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 115
                      },
                      "start": {
                        "column": 4,
                        "line": 115
                      }
                    }
                  }
                ],
                "range": [
                  1904,
                  1956
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 116
                  },
                  "start": {
                    "column": 5,
                    "line": 113
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  1964,
                  1967
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 116
                  },
                  "start": {
                    "column": 11,
                    "line": 116
                  }
                }
              },
              "range": [
                1901,
                1968
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 116
                },
                "start": {
                  "column": 2,
                  "line": 113
                }
              }
            }
          ],
          "range": [
            1854,
            1970
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 117
            },
            "start": {
              "column": 12,
              "line": 111
            }
          }
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "range": [
          1842,
          1970
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 117
          },
          "start": {
            "column": 0,
            "line": 111
          }
        }
      },
      "range": [
        1842,
        1970
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myQuery",
        "optional": false,
        "range": [
          2029,
          2036
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 121
          },
          "start": {
            "column": 17,
            "line": 121
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 121
              },
              "start": {
                "column": 30,
                "line": 121
              }
            },
            "range": [
              2042,
              2074
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
                    "name": "lastId",
                    "optional": false,
                    "range": [
                      2046,
                      2052
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 121
                      },
                      "start": {
                        "column": 34,
                        "line": 121
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
                        "column": 60,
                        "line": 121
                      },
                      "start": {
                        "column": 40,
                        "line": 121
                      }
                    },
                    "range": [
                      2052,
                      2072
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2054,
                            2060
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 121
                            },
                            "start": {
                              "column": 42,
                              "line": 121
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            2063,
                            2072
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 121
                            },
                            "start": {
                              "column": 51,
                              "line": 121
                            }
                          }
                        }
                      ],
                      "range": [
                        2054,
                        2072
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 121
                        },
                        "start": {
                          "column": 42,
                          "line": 121
                        }
                      }
                    }
                  },
                  "range": [
                    2046,
                    2072
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 121
                    },
                    "start": {
                      "column": 34,
                      "line": 121
                    }
                  }
                }
              ],
              "range": [
                2044,
                2074
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 121
                },
                "start": {
                  "column": 32,
                  "line": 121
                }
              }
            }
          },
          "range": [
            2037,
            2074
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 121
            },
            "start": {
              "column": 25,
              "line": 121
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 96,
            "line": 121
          },
          "start": {
            "column": 63,
            "line": 121
          }
        },
        "range": [
          2075,
          2108
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2084,
              2108
            ],
            "params": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entities",
                      "optional": false,
                      "range": [
                        2087,
                        2095
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 121
                        },
                        "start": {
                          "column": 75,
                          "line": 121
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
                          "column": 93,
                          "line": 121
                        },
                        "start": {
                          "column": 83,
                          "line": 121
                        }
                      },
                      "range": [
                        2095,
                        2105
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "range": [
                            2097,
                            2103
                          ],
                          "loc": {
                            "end": {
                              "column": 91,
                              "line": 121
                            },
                            "start": {
                              "column": 85,
                              "line": 121
                            }
                          }
                        },
                        "range": [
                          2097,
                          2105
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 121
                          },
                          "start": {
                            "column": 85,
                            "line": 121
                          }
                        }
                      }
                    },
                    "range": [
                      2087,
                      2105
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 121
                      },
                      "start": {
                        "column": 75,
                        "line": 121
                      }
                    }
                  }
                ],
                "range": [
                  2085,
                  2107
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 121
                  },
                  "start": {
                    "column": 73,
                    "line": 121
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 121
              },
              "start": {
                "column": 72,
                "line": 121
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              2077,
              2084
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 121
              },
              "start": {
                "column": 65,
                "line": 121
              }
            }
          },
          "range": [
            2077,
            2108
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 121
            },
            "start": {
              "column": 65,
              "line": 121
            }
          }
        }
      },
      "range": [
        2012,
        2109
      ],
      "loc": {
        "end": {
          "column": 97,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "lastId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 124
                      },
                      "start": {
                        "column": 12,
                        "line": 124
                      }
                    },
                    "range": [
                      2164,
                      2184
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2166,
                            2172
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 124
                            },
                            "start": {
                              "column": 14,
                              "line": 124
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            2175,
                            2184
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 124
                            },
                            "start": {
                              "column": 23,
                              "line": 124
                            }
                          }
                        }
                      ],
                      "range": [
                        2166,
                        2184
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 124
                        },
                        "start": {
                          "column": 14,
                          "line": 124
                        }
                      }
                    }
                  },
                  "range": [
                    2158,
                    2184
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 124
                    },
                    "start": {
                      "column": 6,
                      "line": 124
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    2187,
                    2196
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 124
                    },
                    "start": {
                      "column": 35,
                      "line": 124
                    }
                  }
                },
                "range": [
                  2158,
                  2196
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 124
                  },
                  "start": {
                    "column": 6,
                    "line": 124
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2154,
              2197
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 124
              },
              "start": {
                "column": 2,
                "line": 124
              }
            }
          },
          {
            "type": "WhileStatement",
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
                              "name": "entities",
                              "optional": false,
                              "range": [
                                2228,
                                2236
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 127
                                },
                                "start": {
                                  "column": 12,
                                  "line": 127
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entities",
                              "optional": false,
                              "range": [
                                2228,
                                2236
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 127
                                },
                                "start": {
                                  "column": 12,
                                  "line": 127
                                }
                              }
                            },
                            "range": [
                              2228,
                              2236
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 127
                              },
                              "start": {
                                "column": 12,
                                "line": 127
                              }
                            }
                          }
                        ],
                        "range": [
                          2226,
                          2238
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 127
                          },
                          "start": {
                            "column": 10,
                            "line": 127
                          }
                        }
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
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
                                    "name": "lastId",
                                    "optional": false,
                                    "range": [
                                      2265,
                                      2271
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 128
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 128
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "lastId",
                                    "optional": false,
                                    "range": [
                                      2265,
                                      2271
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 128
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 128
                                      }
                                    }
                                  },
                                  "range": [
                                    2265,
                                    2271
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 128
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 128
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2255,
                                2278
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 129
                                },
                                "start": {
                                  "column": 39,
                                  "line": 127
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myQuery",
                            "optional": false,
                            "range": [
                              2247,
                              2254
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 127
                              },
                              "start": {
                                "column": 31,
                                "line": 127
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2247,
                            2279
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 129
                            },
                            "start": {
                              "column": 31,
                              "line": 127
                            }
                          }
                        },
                        "range": [
                          2241,
                          2279
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 129
                          },
                          "start": {
                            "column": 25,
                            "line": 127
                          }
                        }
                      },
                      "range": [
                        2226,
                        2279
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 129
                        },
                        "start": {
                          "column": 10,
                          "line": 127
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2220,
                    2280
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 129
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
                      "name": "lastId",
                      "optional": false,
                      "range": [
                        2286,
                        2292
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 131
                        },
                        "start": {
                          "column": 4,
                          "line": 131
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entities",
                        "optional": false,
                        "range": [
                          2295,
                          2303
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 131
                          },
                          "start": {
                            "column": 13,
                            "line": 131
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entities",
                            "optional": false,
                            "range": [
                              2304,
                              2312
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 131
                              },
                              "start": {
                                "column": 22,
                                "line": 131
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
                              2313,
                              2319
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 131
                              },
                              "start": {
                                "column": 31,
                                "line": 131
                              }
                            }
                          },
                          "range": [
                            2304,
                            2319
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 131
                            },
                            "start": {
                              "column": 22,
                              "line": 131
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            2322,
                            2323
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 131
                            },
                            "start": {
                              "column": 40,
                              "line": 131
                            }
                          }
                        },
                        "range": [
                          2304,
                          2323
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 131
                          },
                          "start": {
                            "column": 22,
                            "line": 131
                          }
                        }
                      },
                      "range": [
                        2295,
                        2324
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 131
                        },
                        "start": {
                          "column": 13,
                          "line": 131
                        }
                      }
                    },
                    "range": [
                      2286,
                      2324
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 131
                      },
                      "start": {
                        "column": 4,
                        "line": 131
                      }
                    }
                  },
                  "range": [
                    2286,
                    2325
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 131
                    },
                    "start": {
                      "column": 4,
                      "line": 131
                    }
                  }
                }
              ],
              "range": [
                2214,
                2329
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 132
                },
                "start": {
                  "column": 15,
                  "line": 126
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                2208,
                2212
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 126
                },
                "start": {
                  "column": 9,
                  "line": 126
                }
              }
            },
            "range": [
              2201,
              2329
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 132
              },
              "start": {
                "column": 2,
                "line": 126
              }
            }
          }
        ],
        "range": [
          2150,
          2332
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 133
          },
          "start": {
            "column": 39,
            "line": 123
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myFunc",
        "optional": false,
        "range": [
          2126,
          2132
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 123
          },
          "start": {
            "column": 15,
            "line": 123
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 123
          },
          "start": {
            "column": 23,
            "line": 123
          }
        },
        "range": [
          2134,
          2149
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2143,
              2149
            ],
            "params": [
              {
                "type": "TSVoidKeyword",
                "range": [
                  2144,
                  2148
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 123
                  },
                  "start": {
                    "column": 33,
                    "line": 123
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 123
              },
              "start": {
                "column": 32,
                "line": 123
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              2136,
              2143
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 123
              },
              "start": {
                "column": 25,
                "line": 123
              }
            }
          },
          "range": [
            2136,
            2149
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 123
            },
            "start": {
              "column": 25,
              "line": 123
            }
          }
        }
      },
      "range": [
        2111,
        2332
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 133
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 134
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
