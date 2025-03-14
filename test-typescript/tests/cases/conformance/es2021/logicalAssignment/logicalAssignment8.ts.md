__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    340
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              },
              "range": [
                17,
                51
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            21,
                            26
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 1
                            },
                            "start": {
                              "column": 21,
                              "line": 1
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 1
                            },
                            "start": {
                              "column": 27,
                              "line": 1
                            }
                          },
                          "range": [
                            27,
                            37
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "range": [
                                29,
                                35
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 1
                                },
                                "start": {
                                  "column": 29,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              29,
                              37
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 1
                              },
                              "start": {
                                "column": 29,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          21,
                          37
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 1
                          },
                          "start": {
                            "column": 21,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      19,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 1
                      },
                      "start": {
                        "column": 19,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      42,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 1
                      },
                      "start": {
                        "column": 42,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  19,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
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
              14,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            51
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        51
      ],
      "loc": {
        "end": {
          "column": 51,
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    140,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 4
                    },
                    "start": {
                      "column": 40,
                      "line": 4
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "range": [
                      105,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 4
                      },
                      "start": {
                        "column": 5,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "operator": "??",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            117,
                            120
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
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            122,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 4
                            },
                            "start": {
                              "column": 22,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          117,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 4
                          },
                          "start": {
                            "column": 17,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        117,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        131,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      117,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    105,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
                      "line": 4
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
                    135,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 35,
                      "line": 4
                    }
                  }
                },
                "range": [
                  104,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                104,
                144
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              104,
              145
            ],
            "loc": {
              "end": {
                "column": 45,
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
          98,
          147
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 45,
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
        "name": "foo1",
        "optional": false,
        "range": [
          62,
          66
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            },
            "range": [
              74,
              96
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      76,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    76,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    87,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                76,
                96
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            }
          },
          "range": [
            67,
            96
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "range": [
        53,
        147
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
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    236,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 8
                    },
                    "start": {
                      "column": 40,
                      "line": 8
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "range": [
                      201,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 8
                      },
                      "start": {
                        "column": 5,
                        "line": 8
                      }
                    }
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "operator": "??",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            213,
                            216
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            218,
                            223
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 8
                            },
                            "start": {
                              "column": 22,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          213,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        213,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        227,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 31,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      213,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    201,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
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
                    231,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 8
                    },
                    "start": {
                      "column": 35,
                      "line": 8
                    }
                  }
                },
                "range": [
                  200,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 39,
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
                200,
                240
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              200,
              241
            ],
            "loc": {
              "end": {
                "column": 45,
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
          194,
          243
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
        "name": "foo2",
        "optional": false,
        "range": [
          158,
          162
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
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            },
            "range": [
              170,
              192
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      172,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 23,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    172,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    183,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 7
                    },
                    "start": {
                      "column": 34,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                172,
                192
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            }
          },
          "range": [
            163,
            192
          ],
          "loc": {
            "end": {
              "column": 43,
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
        149,
        243
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
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    332,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 40,
                      "line": 12
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "range": [
                      297,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 5,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "operator": "??",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            309,
                            312
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 12
                            },
                            "start": {
                              "column": 17,
                              "line": 12
                            }
                          }
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            314,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 12
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          309,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 17,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        309,
                        319
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        323,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 31,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      309,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 17,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    297,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
                      "line": 12
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
                    327,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 12
                    },
                    "start": {
                      "column": 35,
                      "line": 12
                    }
                  }
                },
                "range": [
                  296,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                296,
                336
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              296,
              337
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          290,
          339
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 45,
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
          254,
          258
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
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 11
              }
            },
            "range": [
              266,
              288
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      268,
                      274
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
                  },
                  "range": [
                    268,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    279,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                268,
                288
              ],
              "loc": {
                "end": {
                  "column": 43,
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
            259,
            288
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "range": [
        245,
        339
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
