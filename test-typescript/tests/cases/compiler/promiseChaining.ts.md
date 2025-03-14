__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    355
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          15,
          353
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                21,
                32
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                32,
                53
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  50,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 33,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 2
                        },
                        "start": {
                          "column": 28,
                          "line": 2
                        }
                      },
                      "range": [
                        45,
                        48
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            47,
                            48
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 2
                            },
                            "start": {
                              "column": 30,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          47,
                          48
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 2
                          },
                          "start": {
                            "column": 30,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      40,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    33,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              53
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                58,
                62
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                62,
                351
              ],
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
                          "range": [
                            107,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  119,
                                  123
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "range": [
                                  124,
                                  129
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                119,
                                129
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 4
                                },
                                "start": {
                                  "column": 24,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cb",
                            "optional": false,
                            "range": [
                              116,
                              118
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 4
                              },
                              "start": {
                                "column": 21,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            116,
                            130
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
                          107,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      103,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
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
                          "name": "z",
                          "optional": false,
                          "range": [
                            210,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    279,
                                    280
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 82,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 81,
                                      "line": 6
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
                                    281,
                                    287
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 89,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  279,
                                  287
                                ],
                                "loc": {
                                  "end": {
                                    "column": 89,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 81,
                                    "line": 6
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
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    274,
                                    275
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 77,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 76,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "range": [
                                274,
                                287
                              ],
                              "loc": {
                                "end": {
                                  "column": 89,
                                  "line": 6
                                },
                                "start": {
                                  "column": 76,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "raw": "\"abc\"",
                                    "value": "abc",
                                    "range": [
                                      252,
                                      257
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 6
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
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        247,
                                        248
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 6
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    247,
                                    257
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "async": false,
                                      "body": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "range": [
                                          229,
                                          235
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 6
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
                                          "name": "x",
                                          "optional": false,
                                          "range": [
                                            224,
                                            225
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 6
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        224,
                                        235
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 6
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        214,
                                        218
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "range": [
                                        219,
                                        223
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      214,
                                      223
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    214,
                                    236
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 6
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "range": [
                                    242,
                                    246
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  214,
                                  246
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 6
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                214,
                                258
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 6
                                },
                                "start": {
                                  "column": 16,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "range": [
                                269,
                                273
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 6
                                },
                                "start": {
                                  "column": 71,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              214,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 6
                              },
                              "start": {
                                "column": 16,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            214,
                            288
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          210,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      206,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "range": [
                            337,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 25,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Chain",
                        "optional": false,
                        "range": [
                          331,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 19,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        327,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      320,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
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
                  93,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    },
                    "range": [
                      68,
                      81
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 21,
                                "line": 3
                              },
                              "start": {
                                "column": 18,
                                "line": 3
                              }
                            },
                            "range": [
                              72,
                              75
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  74,
                                  75
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
                                74,
                                75
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
                            }
                          },
                          "range": [
                            71,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 23,
                            "line": 3
                          }
                        },
                        "range": [
                          77,
                          81
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              80,
                              81
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 3
                              },
                              "start": {
                                "column": 26,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            80,
                            81
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 3
                            },
                            "start": {
                              "column": 26,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        70,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
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
                    66,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                },
                "range": [
                  82,
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
                          "name": "S",
                          "optional": false,
                          "range": [
                            90,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 3
                            },
                            "start": {
                              "column": 36,
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
                            "column": 37,
                            "line": 3
                          },
                          "start": {
                            "column": 36,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain",
                    "optional": false,
                    "range": [
                      84,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 30,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    84,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 30,
                      "line": 3
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                },
                "range": [
                  62,
                  65
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        63,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 3
                        },
                        "start": {
                          "column": 9,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      63,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              58,
              351
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain",
        "optional": false,
        "range": [
          6,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          14
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        353
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
