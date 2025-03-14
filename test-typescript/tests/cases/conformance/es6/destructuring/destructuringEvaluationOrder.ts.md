__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    813
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
            "name": "trace",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                65,
                72
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    67,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  67,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              60,
              72
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              75,
              77
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          },
          "range": [
            60,
            77
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        56,
        78
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 2
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "order",
            "optional": false,
            "range": [
              83,
              88
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
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "range": [
                    119,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 40,
                      "line": 3
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
                  "name": "trace",
                  "optional": false,
                  "range": [
                    108,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
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
                    114,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 3
                    },
                    "start": {
                      "column": 35,
                      "line": 3
                    }
                  }
                },
                "range": [
                  108,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                108,
                121
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  },
                  "range": [
                    93,
                    98
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      95,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  92,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              },
              "range": [
                99,
                104
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  101,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 25,
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
              91,
              121
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            83,
            121
          ],
          "loc": {
            "end": {
              "column": 42,
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
        79,
        122
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              221,
                              222
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 6
                              },
                              "start": {
                                "column": 14,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "order",
                          "optional": false,
                          "range": [
                            215,
                            220
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
                        "optional": false,
                        "range": [
                          215,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          226,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 19,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        214,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 7,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    212,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        238,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 31,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "range": [
                      232,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
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
                    232,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 6
                    },
                    "start": {
                      "column": 25,
                      "line": 6
                    }
                  }
                },
                "range": [
                  212,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              211,
              241
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              244,
              246
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 6
              },
              "start": {
                "column": 37,
                "line": 6
              }
            }
          },
          "range": [
            211,
            246
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        207,
        247
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              332,
                              333
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 9
                              },
                              "start": {
                                "column": 14,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "order",
                          "optional": false,
                          "range": [
                            326,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          326,
                          334
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          337,
                          338
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
                        325,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 7,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    323,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 5,
                      "line": 9
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        349,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "range": [
                      343,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    343,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  }
                },
                "range": [
                  323,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              322,
              352
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  356,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 9
                  },
                  "start": {
                    "column": 38,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              355,
              359
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 9
              },
              "start": {
                "column": 37,
                "line": 9
              }
            }
          },
          "range": [
            322,
            359
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        318,
        360
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        607,
                        608
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "range": [
                      601,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
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
                    601,
                    609
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
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
                    612,
                    640
                  ],
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": true,
                        "key": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                621,
                                622
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 14
                                },
                                "start": {
                                  "column": 27,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "order",
                            "optional": false,
                            "range": [
                              615,
                              620
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 14
                              },
                              "start": {
                                "column": 21,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            615,
                            623
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 14
                            },
                            "start": {
                              "column": 21,
                              "line": 14
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
                          "name": "z",
                          "optional": false,
                          "range": [
                            626,
                            627
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 14
                            },
                            "start": {
                              "column": 32,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          614,
                          627
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
                    "range": [
                      612,
                      629
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          638,
                          639
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 14
                          },
                          "start": {
                            "column": 44,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "order",
                      "optional": false,
                      "range": [
                        632,
                        637
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 14
                        },
                        "start": {
                          "column": 38,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      632,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 14
                      },
                      "start": {
                        "column": 38,
                        "line": 14
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 14
                    }
                  }
                },
                "range": [
                  600,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 14
                  },
                  "start": {
                    "column": 6,
                    "line": 14
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "range": [
                    645,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 14
                    },
                    "start": {
                      "column": 51,
                      "line": 14
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  642,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 14
                  },
                  "start": {
                    "column": 48,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              598,
              648
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                651,
                653
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 14
                },
                "start": {
                  "column": 57,
                  "line": 14
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                657,
                660
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 14
                },
                "start": {
                  "column": 63,
                  "line": 14
                }
              }
            },
            "range": [
              651,
              660
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 14
              },
              "start": {
                "column": 57,
                "line": 14
              }
            }
          },
          "range": [
            598,
            660
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        594,
        661
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        781,
                        782
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 20
                        },
                        "start": {
                          "column": 10,
                          "line": 20
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "range": [
                      778,
                      782
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 20
                      },
                      "start": {
                        "column": 7,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  776,
                  784
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 5,
                    "line": 20
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    786,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    790,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 20
                    },
                    "start": {
                      "column": 19,
                      "line": 20
                    }
                  }
                },
                "range": [
                  786,
                  791
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 15,
                    "line": 20
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 21,
                  "line": 20
                }
              },
              "range": [
                792,
                799
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    794,
                    797
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 23,
                      "line": 20
                    }
                  }
                },
                "range": [
                  794,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 20
                  },
                  "start": {
                    "column": 23,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              775,
              799
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        805,
                        806
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        808,
                        809
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 20
                        },
                        "start": {
                          "column": 37,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      805,
                      809
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 20
                      },
                      "start": {
                        "column": 34,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  803,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              802,
              812
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 31,
                "line": 20
              }
            }
          },
          "range": [
            775,
            812
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        771,
        812
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
