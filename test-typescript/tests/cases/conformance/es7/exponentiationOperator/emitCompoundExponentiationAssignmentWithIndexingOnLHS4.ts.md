__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    408
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
            "name": "globalCounter",
            "optional": false,
            "range": [
              22,
              35
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
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              38,
              39
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          "range": [
            22,
            39
          ],
          "loc": {
            "end": {
              "column": 21,
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
      "kind": "var",
      "range": [
        18,
        40
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalCounter",
                "optional": false,
                "range": [
                  82,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  99,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                82,
                100
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              82,
              101
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 4,
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
                  "name": "idx",
                  "optional": false,
                  "range": [
                    110,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "range": [
                              127,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 6
                              },
                              "start": {
                                "column": 25,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "range": [
                              132,
                              138
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 6
                              },
                              "start": {
                                "column": 30,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            127,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 6
                            },
                            "start": {
                              "column": 25,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          127,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 6
                          },
                          "start": {
                            "column": 25,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "range": [
                          143,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 6
                          },
                          "start": {
                            "column": 41,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        127,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 6
                        },
                        "start": {
                          "column": 25,
                          "line": 6
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
                      "name": "Math",
                      "optional": false,
                      "range": [
                        116,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 6
                        },
                        "start": {
                          "column": 14,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "range": [
                        121,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      116,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 6
                      },
                      "start": {
                        "column": 14,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    116,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                },
                "range": [
                  110,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              106,
              148
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx",
              "optional": false,
              "range": [
                160,
                163
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              153,
              164
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          76,
          166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 35,
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
        "name": "incrementIdx",
        "optional": false,
        "range": [
          50,
          62
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "name": "max",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 25,
                "line": 4
              }
            },
            "range": [
              66,
              74
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                68,
                74
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            }
          },
          "range": [
            63,
            74
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 22,
              "line": 4
            }
          }
        }
      ],
      "range": [
        41,
        166
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "array1",
            "optional": false,
            "range": [
              172,
              178
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                  182,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  185,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  188,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  191,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  194,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 10
                  },
                  "start": {
                    "column": 26,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              181,
              196
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          },
          "range": [
            172,
            196
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        168,
        197
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "range": [
              199,
              205
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "range": [
                    219,
                    225
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    226,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                },
                "range": [
                  219,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 20,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "range": [
                206,
                218
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              206,
              233
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 12
              },
              "start": {
                "column": 7,
                "line": 12
              }
            }
          },
          "range": [
            199,
            234
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            239,
            240
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 12
            },
            "start": {
              "column": 40,
              "line": 12
            }
          }
        },
        "range": [
          199,
          240
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        199,
        241
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "range": [
              243,
              249
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "range": [
                    263,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 20,
                      "line": 14
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
                    270,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 14
                    },
                    "start": {
                      "column": 27,
                      "line": 14
                    }
                  }
                },
                "range": [
                  263,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "range": [
                250,
                262
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              250,
              277
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 14
              },
              "start": {
                "column": 7,
                "line": 14
              }
            }
          },
          "range": [
            243,
            278
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array1",
              "optional": false,
              "range": [
                283,
                289
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 14
                },
                "start": {
                  "column": 40,
                  "line": 14
                }
              }
            },
            "optional": false,
            "property": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "range": [
                      303,
                      309
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 14
                      },
                      "start": {
                        "column": 60,
                        "line": 14
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
                      310,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 14
                      },
                      "start": {
                        "column": 67,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    303,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 14
                    },
                    "start": {
                      "column": 60,
                      "line": 14
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "range": [
                  290,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 14
                  },
                  "start": {
                    "column": 47,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                290,
                317
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 14
                },
                "start": {
                  "column": 47,
                  "line": 14
                }
              }
            },
            "range": [
              283,
              318
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 14
              },
              "start": {
                "column": 40,
                "line": 14
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              323,
              324
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 14
              },
              "start": {
                "column": 80,
                "line": 14
              }
            }
          },
          "range": [
            283,
            324
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 14
            },
            "start": {
              "column": 40,
              "line": 14
            }
          }
        },
        "range": [
          243,
          324
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        243,
        325
      ],
      "loc": {
        "end": {
          "column": 82,
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
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "range": [
              327,
              333
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "range": [
                    347,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
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
                    354,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 27,
                      "line": 16
                    }
                  }
                },
                "range": [
                  347,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 20,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "range": [
                334,
                346
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              334,
              361
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 7,
                "line": 16
              }
            }
          },
          "range": [
            327,
            362
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array1",
              "optional": false,
              "range": [
                367,
                373
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 16
                },
                "start": {
                  "column": 40,
                  "line": 16
                }
              }
            },
            "optional": false,
            "property": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "range": [
                      387,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 16
                      },
                      "start": {
                        "column": 60,
                        "line": 16
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
                      394,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 16
                      },
                      "start": {
                        "column": 67,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    387,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 16
                    },
                    "start": {
                      "column": 60,
                      "line": 16
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "range": [
                  374,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 16
                  },
                  "start": {
                    "column": 47,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                374,
                401
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 16
                },
                "start": {
                  "column": 47,
                  "line": 16
                }
              }
            },
            "range": [
              367,
              402
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 16
              },
              "start": {
                "column": 40,
                "line": 16
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              406,
              407
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 16
              },
              "start": {
                "column": 79,
                "line": 16
              }
            }
          },
          "range": [
            367,
            407
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 16
            },
            "start": {
              "column": 40,
              "line": 16
            }
          }
        },
        "range": [
          327,
          407
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        327,
        408
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 81,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
