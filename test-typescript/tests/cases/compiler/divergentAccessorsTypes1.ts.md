__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1179
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          12,
          245
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
                22,
                25
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                25,
                49
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        45,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 31,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      38,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  36,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                },
                "range": [
                  27,
                  35
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    29,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              49
            ],
            "loc": {
              "end": {
                "column": 35,
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
              "name": "foo",
              "optional": false,
              "range": [
                58,
                61
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                61,
                147
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            96,
                            97
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              100,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              105,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 4
                              },
                              "start": {
                                "column": 21,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            100,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          96,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
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
                    "kind": "let",
                    "range": [
                      92,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            125,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              129,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 5
                              },
                              "start": {
                                "column": 16,
                                "line": 5
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              134,
                              140
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 5
                              },
                              "start": {
                                "column": 21,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            129,
                            140
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          125,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      121,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  82,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 32,
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    },
                    "range": [
                      63,
                      80
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            65,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 15,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            74,
                            80
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 24,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        65,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    62,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              54,
              147
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
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
                157,
                160
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                160,
                193
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        189,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 8
                        },
                        "start": {
                          "column": 40,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      182,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 8
                      },
                      "start": {
                        "column": 33,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  180,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                },
                "range": [
                  162,
                  179
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        164,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        173,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    164,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              153,
              193
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
                202,
                205
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                205,
                243
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  236,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 42,
                    "line": 9
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    },
                    "range": [
                      207,
                      234
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            209,
                            215
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 15,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            218,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 24,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            227,
                            234
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 9
                            },
                            "start": {
                              "column": 33,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        209,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    206,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              198,
              243
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
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
      "range": [
        0,
        245
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          263,
          398
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                273,
                276
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              },
              "range": [
                278,
                286
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  280,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              269,
              287
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                296,
                299
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "kind": "set",
            "optional": false,
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
                      "column": 30,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  },
                  "range": [
                    301,
                    318
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          303,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 15
                          },
                          "start": {
                            "column": 15,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          312,
                          318
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 15
                          },
                          "start": {
                            "column": 24,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      303,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  300,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              292,
              320
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                330,
                333
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              },
              "range": [
                335,
                352
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      337,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      346,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  337,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 17
                  },
                  "start": {
                    "column": 15,
                    "line": 17
                  }
                }
              }
            },
            "static": false,
            "range": [
              326,
              353
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                362,
                365
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "kind": "set",
            "optional": false,
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
                      "column": 40,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  },
                  "range": [
                    367,
                    394
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          369,
                          375
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 18
                          },
                          "start": {
                            "column": 15,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          378,
                          384
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 18
                          },
                          "start": {
                            "column": 24,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          387,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 18
                          },
                          "start": {
                            "column": 33,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      369,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 18
                      },
                      "start": {
                        "column": 15,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  366,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 18
                  },
                  "start": {
                    "column": 12,
                    "line": 18
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              358,
              396
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 16,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "range": [
          257,
          262
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
        247,
        398
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "range": [
          405,
          410
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                423,
                426
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 22
                }
              },
              "range": [
                428,
                436
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  430,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              }
            },
            "static": false,
            "range": [
              419,
              437
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                446,
                449
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "kind": "set",
            "optional": false,
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
                      "column": 30,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  },
                  "range": [
                    451,
                    468
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          453,
                          459
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 23
                          },
                          "start": {
                            "column": 15,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          462,
                          468
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
                      }
                    ],
                    "range": [
                      453,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  450,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 23
                  },
                  "start": {
                    "column": 12,
                    "line": 23
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              442,
              470
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                480,
                483
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              },
              "range": [
                485,
                502
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      487,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      496,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  487,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 25
                  },
                  "start": {
                    "column": 15,
                    "line": 25
                  }
                }
              }
            },
            "static": false,
            "range": [
              476,
              503
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                512,
                515
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "kind": "set",
            "optional": false,
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
                      "column": 40,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  },
                  "range": [
                    517,
                    544
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          519,
                          525
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 26
                          },
                          "start": {
                            "column": 15,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          528,
                          534
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 26
                          },
                          "start": {
                            "column": 24,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          537,
                          544
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 26
                          },
                          "start": {
                            "column": 33,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "range": [
                      519,
                      544
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  516,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              508,
              546
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          413,
          548
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 13,
            "line": 21
          }
        }
      },
      "range": [
        400,
        549
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
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
                "name": "t",
                "optional": false,
                "range": [
                  563,
                  564
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              },
              "init": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "range": [
                    571,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 30
                    },
                    "start": {
                      "column": 18,
                      "line": 30
                    }
                  }
                },
                "range": [
                  567,
                  578
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 30
                  }
                }
              },
              "range": [
                563,
                578
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            557,
            579
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  584,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
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
                  586,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 31
                  },
                  "start": {
                    "column": 6,
                    "line": 31
                  }
                }
              },
              "range": [
                584,
                589
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "32",
              "value": 32,
              "range": [
                592,
                594
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              }
            },
            "range": [
              584,
              594
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "range": [
            584,
            595
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
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
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 9,
                      "line": 32
                    }
                  },
                  "range": [
                    605,
                    613
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      607,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 32
                      },
                      "start": {
                        "column": 11,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  604,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    616,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 32
                    },
                    "start": {
                      "column": 20,
                      "line": 32
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
                    618,
                    621
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 32
                    },
                    "start": {
                      "column": 22,
                      "line": 32
                    }
                  }
                },
                "range": [
                  616,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 32
                  },
                  "start": {
                    "column": 20,
                    "line": 32
                  }
                }
              },
              "range": [
                604,
                621
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            600,
            622
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  681,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
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
                  683,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 35
                  },
                  "start": {
                    "column": 6,
                    "line": 35
                  }
                }
              },
              "range": [
                681,
                686
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                689,
                691
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 35
                },
                "start": {
                  "column": 12,
                  "line": 35
                }
              }
            },
            "range": [
              681,
              691
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "range": [
            681,
            692
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 35
            },
            "start": {
              "column": 4,
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 36
                    },
                    "start": {
                      "column": 9,
                      "line": 36
                    }
                  },
                  "range": [
                    702,
                    710
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      704,
                      710
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 36
                      },
                      "start": {
                        "column": 11,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  701,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    713,
                    714
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 36
                    },
                    "start": {
                      "column": 20,
                      "line": 36
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
                    715,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 36
                    },
                    "start": {
                      "column": 22,
                      "line": 36
                    }
                  }
                },
                "range": [
                  713,
                  718
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 36
                  },
                  "start": {
                    "column": 20,
                    "line": 36
                  }
                }
              },
              "range": [
                701,
                718
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 36
                },
                "start": {
                  "column": 8,
                  "line": 36
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            697,
            719
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  724,
                  725
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  726,
                  729
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 37
                  },
                  "start": {
                    "column": 6,
                    "line": 37
                  }
                }
              },
              "range": [
                724,
                729
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                732,
                737
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 12,
                  "line": 37
                }
              }
            },
            "range": [
              724,
              737
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          "range": [
            724,
            738
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
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
                "name": "o",
                "optional": false,
                "range": [
                  747,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    751,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 38
                    },
                    "start": {
                      "column": 12,
                      "line": 38
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
                    753,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 38
                    },
                    "start": {
                      "column": 14,
                      "line": 38
                    }
                  }
                },
                "range": [
                  751,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 38
                  },
                  "start": {
                    "column": 12,
                    "line": 38
                  }
                }
              },
              "range": [
                747,
                756
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            743,
            757
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        }
      ],
      "range": [
        551,
        759
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
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
                "name": "t",
                "optional": false,
                "range": [
                  773,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    777,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 42
                    },
                    "start": {
                      "column": 14,
                      "line": 42
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test2",
                    "optional": false,
                    "range": [
                      783,
                      788
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 42
                      },
                      "start": {
                        "column": 20,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    783,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 42
                    }
                  }
                },
                "range": [
                  777,
                  788
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 42
                  },
                  "start": {
                    "column": 14,
                    "line": 42
                  }
                }
              },
              "range": [
                773,
                788
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 42
                },
                "start": {
                  "column": 10,
                  "line": 42
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            767,
            789
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  794,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
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
                  796,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 43
                  },
                  "start": {
                    "column": 6,
                    "line": 43
                  }
                }
              },
              "range": [
                794,
                799
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "32",
              "value": 32,
              "range": [
                802,
                804
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 43
                },
                "start": {
                  "column": 12,
                  "line": 43
                }
              }
            },
            "range": [
              794,
              804
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "range": [
            794,
            805
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
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
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 44
                    },
                    "start": {
                      "column": 9,
                      "line": 44
                    }
                  },
                  "range": [
                    815,
                    823
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      817,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 44
                      },
                      "start": {
                        "column": 11,
                        "line": 44
                      }
                    }
                  }
                },
                "range": [
                  814,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    826,
                    827
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 44
                    },
                    "start": {
                      "column": 20,
                      "line": 44
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
                    828,
                    831
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 44
                    },
                    "start": {
                      "column": 22,
                      "line": 44
                    }
                  }
                },
                "range": [
                  826,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 44
                  },
                  "start": {
                    "column": 20,
                    "line": 44
                  }
                }
              },
              "range": [
                814,
                831
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 44
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            810,
            832
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 44
            },
            "start": {
              "column": 4,
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  891,
                  892
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  893,
                  896
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 47
                  },
                  "start": {
                    "column": 6,
                    "line": 47
                  }
                }
              },
              "range": [
                891,
                896
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                899,
                901
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              }
            },
            "range": [
              891,
              901
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "range": [
            891,
            902
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 48
                    },
                    "start": {
                      "column": 9,
                      "line": 48
                    }
                  },
                  "range": [
                    912,
                    920
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      914,
                      920
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 48
                      },
                      "start": {
                        "column": 11,
                        "line": 48
                      }
                    }
                  }
                },
                "range": [
                  911,
                  920
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    923,
                    924
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 48
                    },
                    "start": {
                      "column": 20,
                      "line": 48
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
                    925,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 48
                    },
                    "start": {
                      "column": 22,
                      "line": 48
                    }
                  }
                },
                "range": [
                  923,
                  928
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 48
                  },
                  "start": {
                    "column": 20,
                    "line": 48
                  }
                }
              },
              "range": [
                911,
                928
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 48
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            907,
            929
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  934,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
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
                  936,
                  939
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 49
                  },
                  "start": {
                    "column": 6,
                    "line": 49
                  }
                }
              },
              "range": [
                934,
                939
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                942,
                947
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 49
                },
                "start": {
                  "column": 12,
                  "line": 49
                }
              }
            },
            "range": [
              934,
              947
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          "range": [
            934,
            948
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
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
                "name": "o",
                "optional": false,
                "range": [
                  957,
                  958
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    961,
                    962
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 50
                    },
                    "start": {
                      "column": 12,
                      "line": 50
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
                    963,
                    966
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 50
                    },
                    "start": {
                      "column": 14,
                      "line": 50
                    }
                  }
                },
                "range": [
                  961,
                  966
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 50
                  },
                  "start": {
                    "column": 12,
                    "line": 50
                  }
                }
              },
              "range": [
                957,
                966
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            953,
            967
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        }
      ],
      "range": [
        761,
        969
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
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
                "name": "t",
                "optional": false,
                "range": [
                  983,
                  984
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    987,
                    989
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 54
                    },
                    "start": {
                      "column": 14,
                      "line": 54
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test3",
                    "optional": false,
                    "range": [
                      993,
                      998
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 54
                      },
                      "start": {
                        "column": 20,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    993,
                    998
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 54
                    },
                    "start": {
                      "column": 20,
                      "line": 54
                    }
                  }
                },
                "range": [
                  987,
                  998
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 54
                  },
                  "start": {
                    "column": 14,
                    "line": 54
                  }
                }
              },
              "range": [
                983,
                998
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 54
                },
                "start": {
                  "column": 10,
                  "line": 54
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            977,
            999
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 54
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  1004,
                  1005
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
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
                  1006,
                  1009
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 55
                  },
                  "start": {
                    "column": 6,
                    "line": 55
                  }
                }
              },
              "range": [
                1004,
                1009
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "32",
              "value": 32,
              "range": [
                1012,
                1014
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 55
                },
                "start": {
                  "column": 12,
                  "line": 55
                }
              }
            },
            "range": [
              1004,
              1014
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          "range": [
            1004,
            1015
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 55
            },
            "start": {
              "column": 4,
              "line": 55
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
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 56
                    },
                    "start": {
                      "column": 9,
                      "line": 56
                    }
                  },
                  "range": [
                    1025,
                    1033
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1027,
                      1033
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 56
                      },
                      "start": {
                        "column": 11,
                        "line": 56
                      }
                    }
                  }
                },
                "range": [
                  1024,
                  1033
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    1036,
                    1037
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 56
                    },
                    "start": {
                      "column": 20,
                      "line": 56
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
                    1038,
                    1041
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 56
                    },
                    "start": {
                      "column": 22,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1036,
                  1041
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 56
                  },
                  "start": {
                    "column": 20,
                    "line": 56
                  }
                }
              },
              "range": [
                1024,
                1041
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 56
                },
                "start": {
                  "column": 8,
                  "line": 56
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1020,
            1042
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 56
            },
            "start": {
              "column": 4,
              "line": 56
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  1101,
                  1102
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
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
                  1103,
                  1106
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 59
                  },
                  "start": {
                    "column": 6,
                    "line": 59
                  }
                }
              },
              "range": [
                1101,
                1106
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                1109,
                1111
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 59
                },
                "start": {
                  "column": 12,
                  "line": 59
                }
              }
            },
            "range": [
              1101,
              1111
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          "range": [
            1101,
            1112
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 59
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 60
                    },
                    "start": {
                      "column": 9,
                      "line": 60
                    }
                  },
                  "range": [
                    1122,
                    1130
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1124,
                      1130
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 60
                      },
                      "start": {
                        "column": 11,
                        "line": 60
                      }
                    }
                  }
                },
                "range": [
                  1121,
                  1130
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    1133,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 60
                    },
                    "start": {
                      "column": 20,
                      "line": 60
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
                    1135,
                    1138
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 60
                    },
                    "start": {
                      "column": 22,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1133,
                  1138
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 60
                  },
                  "start": {
                    "column": 20,
                    "line": 60
                  }
                }
              },
              "range": [
                1121,
                1138
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 60
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1117,
            1139
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 60
            },
            "start": {
              "column": 4,
              "line": 60
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  1144,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
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
                  1146,
                  1149
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 61
                  },
                  "start": {
                    "column": 6,
                    "line": 61
                  }
                }
              },
              "range": [
                1144,
                1149
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                1152,
                1157
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 61
                },
                "start": {
                  "column": 12,
                  "line": 61
                }
              }
            },
            "range": [
              1144,
              1157
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          "range": [
            1144,
            1158
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 61
            },
            "start": {
              "column": 4,
              "line": 61
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
                "name": "o",
                "optional": false,
                "range": [
                  1167,
                  1168
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 62
                  },
                  "start": {
                    "column": 8,
                    "line": 62
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    1171,
                    1172
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 62
                    },
                    "start": {
                      "column": 12,
                      "line": 62
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
                    1173,
                    1176
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 62
                    },
                    "start": {
                      "column": 14,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1171,
                  1176
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 62
                  },
                  "start": {
                    "column": 12,
                    "line": 62
                  }
                }
              },
              "range": [
                1167,
                1176
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 62
                },
                "start": {
                  "column": 8,
                  "line": 62
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            1163,
            1177
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 62
            },
            "start": {
              "column": 4,
              "line": 62
            }
          }
        }
      ],
      "range": [
        971,
        1179
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 63
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
