__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    864
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    29,
                    46
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            40,
                            41
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 2
                            },
                            "start": {
                              "column": 28,
                              "line": 2
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            44,
                            45
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 32,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          40,
                          45
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      36,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                27,
                48
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
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                23,
                26
              ],
              "decorators": [],
              "name": "m3d",
              "optional": false,
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
            "kind": "module",
            "range": [
              16,
              48
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                71,
                120
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      73,
                      84
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    }
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      84,
                      90
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          85,
                          88
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
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
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    73,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      91,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 42,
                        "line": 3
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      94,
                      104
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 3
                        },
                        "start": {
                          "column": 47,
                          "line": 3
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
                            "column": 53,
                            "line": 3
                          },
                          "start": {
                            "column": 49,
                            "line": 3
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 3
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    91,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 3
                    },
                    "start": {
                      "column": 42,
                      "line": 3
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
                    "name": "bar",
                    "optional": false,
                    "range": [
                      112,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 3
                      },
                      "start": {
                        "column": 63,
                        "line": 3
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      115,
                      118
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 3
                      },
                      "start": {
                        "column": 66,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    105,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 3
                    },
                    "start": {
                      "column": 56,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "range": [
                67,
                70
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              53,
              120
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 3
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "range": [
                    129,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "range": [
                      137,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    133,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  129,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
            "kind": "var",
            "range": [
              125,
              143
            ],
            "loc": {
              "end": {
                "column": 22,
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
          10,
          154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          9
        ],
        "decorators": [],
        "name": "T1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        154
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                190,
                238
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      192,
                      203
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
                      }
                    }
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      203,
                      209
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          204,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 8
                          },
                          "start": {
                            "column": 36,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 8
                      },
                      "start": {
                        "column": 35,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    192,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 8
                    },
                    "start": {
                      "column": 24,
                      "line": 8
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      210,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 8
                      },
                      "start": {
                        "column": 42,
                        "line": 8
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      213,
                      222
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 8
                        },
                        "start": {
                          "column": 47,
                          "line": 8
                        }
                      },
                      "range": [
                        215,
                        221
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          217,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 8
                          },
                          "start": {
                            "column": 49,
                            "line": 8
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    210,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 8
                    },
                    "start": {
                      "column": 42,
                      "line": 8
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
                    "name": "bar",
                    "optional": false,
                    "range": [
                      230,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 8
                      },
                      "start": {
                        "column": 62,
                        "line": 8
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      233,
                      236
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 8
                      },
                      "start": {
                        "column": 65,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    223,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 8
                    },
                    "start": {
                      "column": 55,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "range": [
                186,
                189
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              172,
              238
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                    256,
                    273
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            267,
                            268
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 9
                            },
                            "start": {
                              "column": 28,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            271,
                            272
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 9
                            },
                            "start": {
                              "column": 32,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          267,
                          272
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 9
                          },
                          "start": {
                            "column": 28,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      263,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 24,
                        "line": 9
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 17,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                254,
                275
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                250,
                253
              ],
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "kind": "module",
            "range": [
              243,
              275
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
                    284,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "range": [
                      292,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 16,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    288,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "range": [
                  284,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              280,
              298
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          166,
          309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          163,
          165
        ],
        "decorators": [],
        "name": "T2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "kind": "module",
      "range": [
        156,
        309
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    340,
                    357
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            351,
                            352
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 14
                            },
                            "start": {
                              "column": 28,
                              "line": 14
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            355,
                            356
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
                          351,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 14
                          },
                          "start": {
                            "column": 28,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      347,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                338,
                359
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                334,
                337
              ],
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "kind": "module",
            "range": [
              327,
              359
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                382,
                412
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
                      384,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      387,
                      396
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 15
                        },
                        "start": {
                          "column": 29,
                          "line": 15
                        }
                      },
                      "range": [
                        389,
                        395
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          391,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 31,
                            "line": 15
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    384,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 15
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
                    "name": "bar",
                    "optional": false,
                    "range": [
                      404,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 15
                      },
                      "start": {
                        "column": 44,
                        "line": 15
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      407,
                      410
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 15
                      },
                      "start": {
                        "column": 47,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    397,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 15
                    },
                    "start": {
                      "column": 37,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
                }
              }
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "range": [
                378,
                381
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              364,
              412
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    421,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "range": [
                      429,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 16,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    425,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  421,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              417,
              435
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    440,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    442,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 6,
                      "line": 17
                    }
                  }
                },
                "range": [
                  440,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                440,
                447
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              440,
              448
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    453,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    455,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 6,
                      "line": 18
                    }
                  }
                },
                "range": [
                  453,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                453,
                460
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              453,
              461
            ],
            "loc": {
              "end": {
                "column": 12,
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "range": [
                  475,
                  476
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  477,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              },
              "range": [
                475,
                478
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              475,
              479
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          321,
          490
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          318,
          320
        ],
        "decorators": [],
        "name": "T3",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "kind": "module",
      "range": [
        311,
        490
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                526,
                556
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
                      528,
                      531
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      531,
                      540
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 23
                        },
                        "start": {
                          "column": 29,
                          "line": 23
                        }
                      },
                      "range": [
                        533,
                        539
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          535,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 23
                          },
                          "start": {
                            "column": 31,
                            "line": 23
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 27,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    528,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
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
                    "name": "bar",
                    "optional": false,
                    "range": [
                      548,
                      551
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 23
                      },
                      "start": {
                        "column": 44,
                        "line": 23
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      551,
                      554
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 23
                      },
                      "start": {
                        "column": 47,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    541,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 23
                    },
                    "start": {
                      "column": 37,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 23
                },
                "start": {
                  "column": 22,
                  "line": 23
                }
              }
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "range": [
                522,
                525
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 23
                },
                "start": {
                  "column": 18,
                  "line": 23
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              508,
              556
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                    574,
                    591
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            585,
                            586
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 24
                            },
                            "start": {
                              "column": 28,
                              "line": 24
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            589,
                            590
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 24
                            },
                            "start": {
                              "column": 32,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          585,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 24
                          },
                          "start": {
                            "column": 28,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      581,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 17,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                572,
                593
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 24
                },
                "start": {
                  "column": 15,
                  "line": 24
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                568,
                571
              ],
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "loc": {
                "end": {
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "kind": "module",
            "range": [
              561,
              593
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    602,
                    603
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "range": [
                      610,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    606,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                },
                "range": [
                  602,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              598,
              616
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    621,
                    622
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    623,
                    626
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 6,
                      "line": 26
                    }
                  }
                },
                "range": [
                  621,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                621,
                628
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              621,
              629
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    634,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 27
                    },
                    "start": {
                      "column": 4,
                      "line": 27
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    636,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 6,
                      "line": 27
                    }
                  }
                },
                "range": [
                  634,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                634,
                641
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              634,
              642
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "range": [
                  656,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  658,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 28
                  },
                  "start": {
                    "column": 6,
                    "line": 28
                  }
                }
              },
              "range": [
                656,
                659
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              656,
              660
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          502,
          671
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 10,
            "line": 22
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          499,
          501
        ],
        "decorators": [],
        "name": "T4",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "kind": "module",
      "range": [
        492,
        671
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 22
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
              686,
              703
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      697,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 31
                      },
                      "start": {
                        "column": 24,
                        "line": 31
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      701,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 31
                      },
                      "start": {
                        "column": 28,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    697,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 24,
                      "line": 31
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                693,
                703
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 30,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          }
        ],
        "range": [
          684,
          705
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 31
          },
          "start": {
            "column": 11,
            "line": 31
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          680,
          683
        ],
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "loc": {
          "end": {
            "column": 10,
            "line": 31
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "kind": "module",
      "range": [
        673,
        705
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          724,
          772
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                726,
                737
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 31,
                  "line": 32
                },
                "start": {
                  "column": 20,
                  "line": 32
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                737,
                743
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    738,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 32
                    },
                    "start": {
                      "column": 32,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 32
                },
                "start": {
                  "column": 31,
                  "line": 32
                }
              }
            },
            "range": [
              726,
              743
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 32
              },
              "start": {
                "column": 20,
                "line": 32
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
              "name": "foo",
              "optional": false,
              "range": [
                744,
                747
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 32
                },
                "start": {
                  "column": 38,
                  "line": 32
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                747,
                756
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 32
                  },
                  "start": {
                    "column": 43,
                    "line": 32
                  }
                },
                "range": [
                  749,
                  755
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    751,
                    755
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 32
                    },
                    "start": {
                      "column": 45,
                      "line": 32
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 50,
                  "line": 32
                },
                "start": {
                  "column": 41,
                  "line": 32
                }
              }
            },
            "range": [
              744,
              756
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 32
              },
              "start": {
                "column": 38,
                "line": 32
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
              "name": "bar",
              "optional": false,
              "range": [
                764,
                767
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 32
                },
                "start": {
                  "column": 58,
                  "line": 32
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                767,
                770
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 32
                },
                "start": {
                  "column": 61,
                  "line": 32
                }
              }
            },
            "range": [
              757,
              770
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 32
              },
              "start": {
                "column": 51,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 32
          },
          "start": {
            "column": 18,
            "line": 32
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "range": [
          720,
          723
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 32
          },
          "start": {
            "column": 14,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        706,
        772
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "r",
            "optional": false,
            "range": [
              777,
              778
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "range": [
                785,
                788
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              }
            },
            "range": [
              781,
              790
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 33
              },
              "start": {
                "column": 8,
                "line": 33
              }
            }
          },
          "range": [
            777,
            790
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        773,
        791
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          832,
          835
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 33,
            "line": 35
          },
          "start": {
            "column": 30,
            "line": 35
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "range": [
          816,
          819
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 35
          },
          "start": {
            "column": 14,
            "line": 35
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "range": [
          828,
          831
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 35
          },
          "start": {
            "column": 26,
            "line": 35
          }
        }
      },
      "range": [
        802,
        835
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "r2",
            "optional": false,
            "range": [
              840,
              842
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4d",
              "optional": false,
              "range": [
                849,
                852
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "range": [
              845,
              854
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 36
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          },
          "range": [
            840,
            854
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        836,
        855
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 28,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
