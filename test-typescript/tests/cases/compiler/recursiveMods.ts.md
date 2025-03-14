__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    251
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        40
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
                21,
                38
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    36,
                    38
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    34,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  28,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 1,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            18,
            40
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            17
          ],
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          40
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        42,
        250
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar",
                              "optional": false,
                              "range": [
                                106,
                                109
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 8
                                },
                                "start": {
                                  "column": 21,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              106,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 8
                              },
                              "start": {
                                "column": 21,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            99,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 8
                            },
                            "start": {
                              "column": 14,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        97,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    },
                    "test": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        91,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 8
                        },
                        "start": {
                          "column": 6,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      87,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 8
                      },
                      "start": {
                        "column": 2,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          127,
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 13,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        123,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 9,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      116,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 2,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  83,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 10
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
                "name": "Bar",
                "optional": false,
                "range": [
                  73,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                },
                "range": [
                  79,
                  82
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      81,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 18,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    81,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                64,
                134
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 10
                },
                "start": {
                  "column": 1,
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            164,
                            165
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 13
                            },
                            "start": {
                              "column": 6,
                              "line": 13
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "range": [
                              168,
                              171
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 13
                              },
                              "start": {
                                "column": 10,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            168,
                            173
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 13
                            },
                            "start": {
                              "column": 10,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          164,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 13
                          },
                          "start": {
                            "column": 6,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      160,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 13
                      },
                      "start": {
                        "column": 2,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "range": [
                          184,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 14
                          },
                          "start": {
                            "column": 9,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        184,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      177,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  156,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "range": [
                  146,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                },
                "range": [
                  152,
                  155
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      154,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 18,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    154,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                137,
                193
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 15
                },
                "start": {
                  "column": 1,
                  "line": 12
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 18
                              },
                              "start": {
                                "column": 8,
                                "line": 18
                              }
                            },
                            "range": [
                              221,
                              224
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "range": [
                                  223,
                                  224
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                223,
                                224
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 18
                                },
                                "start": {
                                  "column": 10,
                                  "line": 18
                                }
                              }
                            }
                          },
                          "range": [
                            219,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 18
                            },
                            "start": {
                              "column": 6,
                              "line": 18
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "range": [
                              227,
                              230
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 18
                              },
                              "start": {
                                "column": 14,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            227,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 18
                            },
                            "start": {
                              "column": 14,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          219,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 18
                          },
                          "start": {
                            "column": 6,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      215,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 18
                      },
                      "start": {
                        "column": 2,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      236,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  211,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
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
                "name": "Gar",
                "optional": false,
                "range": [
                  205,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              },
              "params": [],
              "range": [
                196,
                246
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 20
                },
                "start": {
                  "column": 1,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            60,
            250
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 18,
              "line": 5
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            56,
            59
          ],
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        },
        "kind": "module",
        "range": [
          49,
          250
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
