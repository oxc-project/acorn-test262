__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    778
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        177
      ],
      "attributes": [],
      "declaration": {
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
                    "name": "nodeType",
                    "optional": false,
                    "range": [
                      100,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "range": [
                          134,
                          138
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 4
                          },
                          "start": {
                            "column": 42,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodeType",
                        "optional": false,
                        "range": [
                          139,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 4
                          },
                          "start": {
                            "column": 47,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        134,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        127,
                        131
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
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "range": [
                          111,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 19,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          120,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 28,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        111,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      111,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    100,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                96,
                148
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nodeType",
                  "optional": false,
                  "range": [
                    160,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    173,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "range": [
                  160,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                153,
                175
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            90,
            177
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 68,
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
          "name": "assertIsElement",
          "optional": false,
          "range": [
            38,
            53
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 3
                },
                "start": {
                  "column": 36,
                  "line": 3
                }
              },
              "range": [
                58,
                71
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "range": [
                        60,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 38,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      60,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 38,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      67,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 3
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  60,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              54,
              71
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 3
              },
              "start": {
                "column": 32,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 67,
              "line": 3
            },
            "start": {
              "column": 50,
              "line": 3
            }
          },
          "range": [
            72,
            89
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "range": [
                74,
                78
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 3
                },
                "start": {
                  "column": 60,
                  "line": 3
                }
              },
              "range": [
                82,
                89
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "range": [
                    82,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 3
                    },
                    "start": {
                      "column": 60,
                      "line": 3
                    }
                  }
                },
                "range": [
                  82,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 3
                  },
                  "start": {
                    "column": 60,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              74,
              89
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 3
              },
              "start": {
                "column": 52,
                "line": 3
              }
            }
          }
        },
        "range": [
          29,
          177
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        181,
        490
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
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
                          "name": "nodeTagName",
                          "optional": false,
                          "range": [
                            382,
                            393
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 12
                            },
                            "start": {
                              "column": 14,
                              "line": 12
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "node",
                                "optional": false,
                                "range": [
                                  396,
                                  400
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 12
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "tagName",
                                "optional": false,
                                "range": [
                                  401,
                                  408
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                396,
                                408
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 12
                                },
                                "start": {
                                  "column": 28,
                                  "line": 12
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "range": [
                                409,
                                420
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 12
                                },
                                "start": {
                                  "column": 41,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              396,
                              420
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 12
                              },
                              "start": {
                                "column": 28,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            396,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 12
                            },
                            "start": {
                              "column": 28,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          382,
                          422
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 12
                          },
                          "start": {
                            "column": 14,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      376,
                      423
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodeTagName",
                        "optional": false,
                        "range": [
                          440,
                          451
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tagName",
                        "optional": false,
                        "range": [
                          456,
                          463
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 32,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        440,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      433,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  366,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "range": [
                      359,
                      363
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assertIsElement",
                  "optional": false,
                  "range": [
                    343,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "range": [
                  343,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "range": [
                339,
                470
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  482,
                  487
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
                475,
                488
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            }
          ],
          "range": [
            333,
            490
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 78,
              "line": 10
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertNodeTagName",
          "optional": false,
          "range": [
            197,
            214
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 10
                },
                "start": {
                  "column": 40,
                  "line": 10
                }
              },
              "range": [
                295,
                308
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "range": [
                        297,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 10
                        },
                        "start": {
                          "column": 42,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      297,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 10
                      },
                      "start": {
                        "column": 42,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      304,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 10
                      },
                      "start": {
                        "column": 49,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  297,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 10
                  },
                  "start": {
                    "column": 42,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              291,
              308
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 10
              },
              "start": {
                "column": 36,
                "line": 10
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tagName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 10
                },
                "start": {
                  "column": 62,
                  "line": 10
                }
              },
              "range": [
                317,
                320
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    319,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 10
                    },
                    "start": {
                      "column": 64,
                      "line": 10
                    }
                  }
                },
                "range": [
                  319,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 10
                  },
                  "start": {
                    "column": 64,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              310,
              320
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 10
              },
              "start": {
                "column": 55,
                "line": 10
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 77,
              "line": 10
            },
            "start": {
              "column": 66,
              "line": 10
            }
          },
          "range": [
            321,
            332
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "range": [
                323,
                327
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 10
                },
                "start": {
                  "column": 68,
                  "line": 10
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 77,
                  "line": 10
                },
                "start": {
                  "column": 76,
                  "line": 10
                }
              },
              "range": [
                331,
                332
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    331,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 10
                    },
                    "start": {
                      "column": 76,
                      "line": 10
                    }
                  }
                },
                "range": [
                  331,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 10
                  },
                  "start": {
                    "column": 76,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              323,
              332
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 10
              },
              "start": {
                "column": 68,
                "line": 10
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 35,
              "line": 10
            },
            "start": {
              "column": 33,
              "line": 8
            }
          },
          "range": [
            214,
            290
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "range": [
                      236,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    236,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                },
                "range": [
                  230,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
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
                  220,
                  221
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
              "out": false,
              "range": [
                220,
                253
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
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      287,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 32,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    287,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 32,
                      "line": 10
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "range": [
                      269,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    269,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
                    }
                  }
                },
                "range": [
                  269,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  259,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "out": false,
              "range": [
                259,
                289
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            }
          ]
        },
        "range": [
          188,
          490
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        494,
        777
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
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
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "range": [
                          758,
                          762
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          763,
                          767
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 23
                          },
                          "start": {
                            "column": 13,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        758,
                        768
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      758,
                      769
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                  748,
                  775
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 42,
                    "line": 22
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "range": [
                      732,
                      736
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 22
                      },
                      "start": {
                        "column": 26,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tagName",
                    "optional": false,
                    "range": [
                      738,
                      745
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 22
                      },
                      "start": {
                        "column": 32,
                        "line": 22
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assertNodeTagName",
                  "optional": false,
                  "range": [
                    714,
                    731
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
                },
                "optional": false,
                "range": [
                  714,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "range": [
                710,
                775
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            }
          ],
          "range": [
            704,
            777
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 93,
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
          "name": "assertNodeProperty",
          "optional": false,
          "range": [
            510,
            528
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 18
            },
            "start": {
              "column": 16,
              "line": 18
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 60,
                  "line": 21
                },
                "start": {
                  "column": 47,
                  "line": 21
                }
              },
              "range": [
                658,
                671
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "range": [
                        660,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 21
                        },
                        "start": {
                          "column": 49,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      660,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 21
                      },
                      "start": {
                        "column": 49,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      667,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 21
                      },
                      "start": {
                        "column": 56,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  660,
                  671
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 21
                  },
                  "start": {
                    "column": 49,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              654,
              671
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 21
              },
              "start": {
                "column": 43,
                "line": 21
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tagName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 72,
                  "line": 21
                },
                "start": {
                  "column": 69,
                  "line": 21
                }
              },
              "range": [
                680,
                683
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    682,
                    683
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 21
                    },
                    "start": {
                      "column": 71,
                      "line": 21
                    }
                  }
                },
                "range": [
                  682,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 21
                  },
                  "start": {
                    "column": 71,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              673,
              683
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 21
              },
              "start": {
                "column": 62,
                "line": 21
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 81,
                  "line": 21
                },
                "start": {
                  "column": 78,
                  "line": 21
                }
              },
              "range": [
                689,
                692
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    691,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 21
                    },
                    "start": {
                      "column": 80,
                      "line": 21
                    }
                  }
                },
                "range": [
                  691,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 21
                  },
                  "start": {
                    "column": 80,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              685,
              692
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 21
              },
              "start": {
                "column": 74,
                "line": 21
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 91,
                  "line": 21
                },
                "start": {
                  "column": 88,
                  "line": 21
                }
              },
              "range": [
                699,
                702
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    701,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 21
                    },
                    "start": {
                      "column": 90,
                      "line": 21
                    }
                  }
                },
                "range": [
                  701,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 21
                  },
                  "start": {
                    "column": 90,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              694,
              702
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 21
              },
              "start": {
                "column": 83,
                "line": 21
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 42,
              "line": 21
            },
            "start": {
              "column": 34,
              "line": 18
            }
          },
          "range": [
            528,
            653
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "range": [
                      550,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 19
                      },
                      "start": {
                        "column": 20,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    550,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                "range": [
                  544,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 19
                  },
                  "start": {
                    "column": 14,
                    "line": 19
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
                  534,
                  535
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
              "out": false,
              "range": [
                534,
                567
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        607,
                        608
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 20
                        },
                        "start": {
                          "column": 38,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      607,
                      608
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 20
                      },
                      "start": {
                        "column": 38,
                        "line": 20
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementTagNameMap",
                      "optional": false,
                      "range": [
                        589,
                        606
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 20
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      589,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 20
                      },
                      "start": {
                        "column": 20,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    589,
                    609
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  }
                },
                "range": [
                  583,
                  609
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  573,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "out": false,
              "range": [
                573,
                609
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      650,
                      651
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 21
                      },
                      "start": {
                        "column": 39,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    650,
                    651
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 21
                    },
                    "start": {
                      "column": 39,
                      "line": 21
                    }
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        647,
                        648
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 21
                        },
                        "start": {
                          "column": 36,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      647,
                      648
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 21
                      },
                      "start": {
                        "column": 36,
                        "line": 21
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLElementTagNameMap",
                      "optional": false,
                      "range": [
                        625,
                        646
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      625,
                      646
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 21
                      },
                      "start": {
                        "column": 14,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    625,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 21
                    },
                    "start": {
                      "column": 14,
                      "line": 21
                    }
                  }
                },
                "range": [
                  625,
                  652
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  615,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "out": false,
              "range": [
                615,
                652
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            }
          ]
        },
        "range": [
          501,
          777
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
