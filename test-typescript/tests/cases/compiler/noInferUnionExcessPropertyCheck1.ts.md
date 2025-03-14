__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    612
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          17,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
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
                "column": 6,
                "line": 2
              },
              "start": {
                "column": 3,
                "line": 2
              }
            },
            "range": [
              52,
              55
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  54,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              },
              "range": [
                54,
                55
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              }
            }
          },
          "range": [
            51,
            55
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 2
            },
            "start": {
              "column": 2,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 3,
                "line": 3
              }
            },
            "range": [
              60,
              93
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      69,
                      72
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            70,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 3
                            },
                            "start": {
                              "column": 13,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          70,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 3
                          },
                          "start": {
                            "column": 13,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "range": [
                      62,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 5,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    62,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 3
                    },
                    "start": {
                      "column": 5,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    },
                    "range": [
                      79,
                      92
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          89,
                          92
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                90,
                                91
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 3
                                },
                                "start": {
                                  "column": 33,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              90,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 3
                              },
                              "start": {
                                "column": 33,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 32,
                            "line": 3
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "range": [
                          82,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        82,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 25,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    76,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
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
                62,
                93
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            }
          },
          "range": [
            59,
            93
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 2,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 1,
            "line": 4
          }
        },
        "range": [
          96,
          102
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            98,
            102
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 3,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          47
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      35,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 35,
                        "line": 1
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
                        "column": 44,
                        "line": 1
                      },
                      "start": {
                        "column": 36,
                        "line": 1
                      }
                    },
                    "range": [
                      36,
                      44
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        38,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 1
                        },
                        "start": {
                          "column": 38,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    35,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                33,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              23,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        103
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    113,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
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
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    116,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  113,
                  121
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
              }
            ],
            "range": [
              111,
              123
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
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
                    127,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    130,
                    135
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
                "range": [
                  127,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 6
                  },
                  "start": {
                    "column": 22,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              125,
              137
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "range": [
            105,
            110
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          105,
          138
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        105,
        139
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 6
        },
        "start": {
          "column": 0,
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
                    160,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    163,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                "range": [
                  160,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              158,
              170
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
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
                    174,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 7
                    },
                    "start": {
                      "column": 22,
                      "line": 7
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    177,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 25,
                      "line": 7
                    }
                  }
                },
                "range": [
                  174,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    184,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 32,
                      "line": 7
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    187,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                "range": [
                  184,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              172,
              191
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "range": [
            152,
            157
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          152,
          192
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        152,
        193
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "test2",
        "optional": false,
        "range": [
          225,
          230
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
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
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            },
            "range": [
              260,
              263
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  262,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              },
              "range": [
                262,
                263
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              }
            }
          },
          "range": [
            259,
            263
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 10
            },
            "start": {
              "column": 2,
              "line": 10
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            },
            "range": [
              268,
              299
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      277,
                      280
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            278,
                            279
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 11
                            },
                            "start": {
                              "column": 13,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          278,
                          279
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 11
                          },
                          "start": {
                            "column": 13,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "range": [
                      270,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 11
                      },
                      "start": {
                        "column": 5,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    270,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      290,
                      299
                    ],
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 11
                            },
                            "start": {
                              "column": 29,
                              "line": 11
                            }
                          },
                          "range": [
                            294,
                            298
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                297,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 11
                                },
                                "start": {
                                  "column": 32,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              297,
                              298
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 11
                              },
                              "start": {
                                "column": 32,
                                "line": 11
                              }
                            }
                          }
                        },
                        "range": [
                          291,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 11
                          },
                          "start": {
                            "column": 26,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 11
                      },
                      "start": {
                        "column": 25,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "range": [
                      283,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 18,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    283,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 18,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                270,
                299
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              }
            }
          },
          "range": [
            267,
            299
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 11
            },
            "start": {
              "column": 2,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 1,
            "line": 12
          }
        },
        "range": [
          302,
          308
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            304,
            308
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 12
            },
            "start": {
              "column": 3,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 9
          },
          "start": {
            "column": 22,
            "line": 9
          }
        },
        "range": [
          230,
          255
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      243,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 35,
                        "line": 9
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
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 36,
                        "line": 9
                      }
                    },
                    "range": [
                      244,
                      252
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        246,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 38,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    243,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 35,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                241,
                254
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 33,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                231,
                232
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 23,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              231,
              254
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 23,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        208,
        309
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    319,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    322,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  319,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              317,
              329
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
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
                    333,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 22,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    336,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  }
                },
                "range": [
                  333,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 14
                  },
                  "start": {
                    "column": 22,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              331,
              343
            ],
            "loc": {
              "end": {
                "column": 32,
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
          "name": "test2",
          "optional": false,
          "range": [
            311,
            316
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          311,
          344
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        311,
        345
      ],
      "loc": {
        "end": {
          "column": 34,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    366,
                    367
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    369,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "range": [
                  366,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              364,
              376
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
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
                    380,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 22,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    383,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 15
                    },
                    "start": {
                      "column": 25,
                      "line": 15
                    }
                  }
                },
                "range": [
                  380,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 22,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    390,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 15
                    },
                    "start": {
                      "column": 32,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    393,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 35,
                      "line": 15
                    }
                  }
                },
                "range": [
                  390,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 15
                  },
                  "start": {
                    "column": 32,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              378,
              397
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "range": [
            358,
            363
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          358,
          398
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        358,
        399
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
        "name": "test3",
        "optional": false,
        "range": [
          431,
          436
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
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
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 3,
                "line": 18
              }
            },
            "range": [
              466,
              469
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  468,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 18
                  },
                  "start": {
                    "column": 5,
                    "line": 18
                  }
                }
              },
              "range": [
                468,
                469
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              }
            }
          },
          "range": [
            465,
            469
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 18
            },
            "start": {
              "column": 2,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 19
              },
              "start": {
                "column": 3,
                "line": 19
              }
            },
            "range": [
              474,
              498
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  483,
                  498
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            484,
                            485
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 19
                            },
                            "start": {
                              "column": 13,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          484,
                          485
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 19
                          },
                          "start": {
                            "column": 13,
                            "line": 19
                          }
                        }
                      },
                      {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 19
                            },
                            "start": {
                              "column": 21,
                              "line": 19
                            }
                          },
                          "range": [
                            492,
                            496
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                495,
                                496
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 19
                                },
                                "start": {
                                  "column": 24,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              495,
                              496
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 19
                              },
                              "start": {
                                "column": 24,
                                "line": 19
                              }
                            }
                          }
                        },
                        "range": [
                          489,
                          496
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 18,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      484,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 13,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 19
                  },
                  "start": {
                    "column": 12,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "range": [
                  476,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 19
                  }
                }
              },
              "range": [
                476,
                498
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 19
                },
                "start": {
                  "column": 5,
                  "line": 19
                }
              }
            }
          },
          "range": [
            473,
            498
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 19
            },
            "start": {
              "column": 2,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 1,
            "line": 20
          }
        },
        "range": [
          501,
          507
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            503,
            507
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 20
            },
            "start": {
              "column": 3,
              "line": 20
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 17
          },
          "start": {
            "column": 22,
            "line": 17
          }
        },
        "range": [
          436,
          461
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      449,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 17
                      },
                      "start": {
                        "column": 35,
                        "line": 17
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
                        "column": 44,
                        "line": 17
                      },
                      "start": {
                        "column": 36,
                        "line": 17
                      }
                    },
                    "range": [
                      450,
                      458
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        452,
                        458
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 17
                        },
                        "start": {
                          "column": 38,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    449,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 17
                    },
                    "start": {
                      "column": 35,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                447,
                460
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 17
                },
                "start": {
                  "column": 33,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                437,
                438
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 23,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              437,
              460
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 17
              },
              "start": {
                "column": 23,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        414,
        508
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 20
        },
        "start": {
          "column": 0,
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
                    518,
                    519
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    521,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                },
                "range": [
                  518,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              516,
              528
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
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
                    532,
                    533
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
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    535,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 22
                    },
                    "start": {
                      "column": 25,
                      "line": 22
                    }
                  }
                },
                "range": [
                  532,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              530,
              542
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 20,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test3",
          "optional": false,
          "range": [
            510,
            515
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          510,
          543
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        510,
        544
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 22
        },
        "start": {
          "column": 0,
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
                    565,
                    566
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    568,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 23
                    },
                    "start": {
                      "column": 11,
                      "line": 23
                    }
                  }
                },
                "range": [
                  565,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              563,
              575
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
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
                    579,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 23
                    },
                    "start": {
                      "column": 22,
                      "line": 23
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"bar\"",
                  "value": "bar",
                  "range": [
                    582,
                    587
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 23
                    },
                    "start": {
                      "column": 25,
                      "line": 23
                    }
                  }
                },
                "range": [
                  579,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 23
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    589,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 23
                    },
                    "start": {
                      "column": 32,
                      "line": 23
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    592,
                    594
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 23
                    },
                    "start": {
                      "column": 35,
                      "line": 23
                    }
                  }
                },
                "range": [
                  589,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 23
                  },
                  "start": {
                    "column": 32,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              577,
              596
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 20,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test3",
          "optional": false,
          "range": [
            557,
            562
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          557,
          597
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        557,
        598
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
