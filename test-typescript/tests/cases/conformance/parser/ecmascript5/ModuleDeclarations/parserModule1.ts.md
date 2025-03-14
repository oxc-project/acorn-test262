__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    4,
    763
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4,
        763
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                48,
                73
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
                      "name": "debug",
                      "optional": false,
                      "range": [
                        59,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        67,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      59,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  55,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                82,
                169
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    117,
                    169
                  ],
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "range": [
                          131,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 4
                              },
                              "start": {
                                "column": 24,
                                "line": 4
                              }
                            },
                            "range": [
                              143,
                              151
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                145,
                                151
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 4
                                },
                                "start": {
                                  "column": 26,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            137,
                            151
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 4
                            },
                            "start": {
                              "column": 18,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 4
                          },
                          "start": {
                            "column": 33,
                            "line": 4
                          }
                        },
                        "range": [
                          152,
                          158
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            154,
                            158
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
                        }
                      },
                      "static": false,
                      "range": [
                        131,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 5
                    },
                    "start": {
                      "column": 43,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDiagnosticWriter",
                  "optional": false,
                  "range": [
                    99,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                },
                "range": [
                  89,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                179,
                233
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
                      "name": "diagnosticWriter",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 7
                          },
                          "start": {
                            "column": 35,
                            "line": 7
                          }
                        },
                        "range": [
                          206,
                          225
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IDiagnosticWriter",
                            "optional": false,
                            "range": [
                              208,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 7
                              },
                              "start": {
                                "column": 37,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            208,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 7
                            },
                            "start": {
                              "column": 37,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        190,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        228,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 7
                        },
                        "start": {
                          "column": 57,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      190,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  186,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                243,
                279
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
                      "name": "analysisPass",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 9
                          },
                          "start": {
                            "column": 31,
                            "line": 9
                          }
                        },
                        "range": [
                          266,
                          274
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            268,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 9
                            },
                            "start": {
                              "column": 33,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        254,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        277,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 9
                        },
                        "start": {
                          "column": 42,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      254,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  250,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                289,
                436
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
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "range": [
                                    404,
                                    410
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 13
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
                                  "name": "diagnosticWriter",
                                  "optional": false,
                                  "range": [
                                    381,
                                    397
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 13
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Alert",
                                  "optional": false,
                                  "range": [
                                    398,
                                    403
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  381,
                                  403
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 13
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                381,
                                411
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 13
                                },
                                "start": {
                                  "column": 16,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              381,
                              412
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          363,
                          426
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 14
                          },
                          "start": {
                            "column": 34,
                            "line": 12
                          }
                        }
                      },
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "diagnosticWriter",
                        "optional": false,
                        "range": [
                          345,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        341,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    327,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 46,
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
                  "name": "Alert",
                  "optional": false,
                  "range": [
                    305,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "output",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 11
                        },
                        "start": {
                          "column": 36,
                          "line": 11
                        }
                      },
                      "range": [
                        317,
                        325
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          319,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 11
                          },
                          "start": {
                            "column": 38,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      311,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 11
                      },
                      "start": {
                        "column": 30,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  296,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                446,
                560
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
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "range": [
                                    533,
                                    534
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 19
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Alert",
                                "optional": false,
                                "range": [
                                  527,
                                  532
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                527,
                                535
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 19
                                },
                                "start": {
                                  "column": 16,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              527,
                              536
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 19
                              },
                              "start": {
                                "column": 16,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          509,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 20
                          },
                          "start": {
                            "column": 23,
                            "line": 18
                          }
                        }
                      },
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "range": [
                          502,
                          507
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        498,
                        550
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 20
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    484,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 46,
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
                  "name": "debugPrint",
                  "optional": false,
                  "range": [
                    462,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 24,
                      "line": 17
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
                          "column": 44,
                          "line": 17
                        },
                        "start": {
                          "column": 36,
                          "line": 17
                        }
                      },
                      "range": [
                        474,
                        482
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          476,
                          482
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
                      473,
                      482
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
                  453,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 17
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                570,
                756
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "range": [
                                          711,
                                          712
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 26
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false,
                                      "range": [
                                        705,
                                        710
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      705,
                                      713
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    705,
                                    714
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 26
                                    }
                                  }
                                }
                              ],
                              "range": [
                                683,
                                732
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 27
                                },
                                "start": {
                                  "column": 32,
                                  "line": 25
                                }
                              }
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "condition",
                                "optional": false,
                                "range": [
                                  672,
                                  681
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 25
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                671,
                                681
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 25
                                },
                                "start": {
                                  "column": 20,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              667,
                              732
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 27
                              },
                              "start": {
                                "column": 16,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "range": [
                          649,
                          746
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 28
                          },
                          "start": {
                            "column": 23,
                            "line": 24
                          }
                        }
                      },
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "range": [
                          642,
                          647
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 24
                          },
                          "start": {
                            "column": 16,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        638,
                        746
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 28
                        },
                        "start": {
                          "column": 12,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "range": [
                    624,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 29
                    },
                    "start": {
                      "column": 62,
                      "line": 23
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "range": [
                    586,
                    592
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 23
                        },
                        "start": {
                          "column": 40,
                          "line": 23
                        }
                      },
                      "range": [
                        602,
                        611
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          604,
                          611
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 23
                          },
                          "start": {
                            "column": 42,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      593,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 23
                      },
                      "start": {
                        "column": 31,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 23
                        },
                        "start": {
                          "column": 52,
                          "line": 23
                        }
                      },
                      "range": [
                        614,
                        622
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          616,
                          622
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 23
                          },
                          "start": {
                            "column": 54,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      613,
                      622
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 23
                      },
                      "start": {
                        "column": 51,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  577,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 29
                  },
                  "start": {
                    "column": 15,
                    "line": 23
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            38,
            763
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 31
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            18,
            37
          ],
          "decorators": [],
          "name": "CompilerDiagnostics",
          "optional": false,
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          11,
          763
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 31
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 5,
          "line": 31
        },
        "start": {
          "column": 4,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 5,
      "line": 31
    },
    "start": {
      "column": 4,
      "line": 1
    }
  },
  "hashbang": null
}
```
