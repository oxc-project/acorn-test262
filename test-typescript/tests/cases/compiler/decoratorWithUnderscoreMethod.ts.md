__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    427
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              },
              "range": [
                20,
                48
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        24,
                        27
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 1
                        },
                        "start": {
                          "column": 24,
                          "line": 1
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 1
                            },
                            "start": {
                              "column": 31,
                              "line": 1
                            }
                          },
                          "range": [
                            31,
                            39
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              33,
                              39
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 1
                              },
                              "start": {
                                "column": 33,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          28,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 1
                          },
                          "start": {
                            "column": 28,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 1
                        },
                        "start": {
                          "column": 40,
                          "line": 1
                        }
                      },
                      "range": [
                        40,
                        46
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          42,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 1
                          },
                          "start": {
                            "column": 42,
                            "line": 1
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      24,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 1
                      },
                      "start": {
                        "column": 24,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  22,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            48
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        49
      ],
      "loc": {
        "end": {
          "column": 49,
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
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
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
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "range": [
                              183,
                              189
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "propKey",
                            "optional": false,
                            "range": [
                              190,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 4
                              },
                              "start": {
                                "column": 27,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            183,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            171,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            179,
                            182
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
                          171,
                          182
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        171,
                        199
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
                    "range": [
                      171,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  161,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 84,
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    },
                    "range": [
                      104,
                      109
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        106,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    98,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 3
                      },
                      "start": {
                        "column": 41,
                        "line": 3
                      }
                    },
                    "range": [
                      118,
                      126
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        120,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 3
                        },
                        "start": {
                          "column": 43,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    111,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "descr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 3
                      },
                      "start": {
                        "column": 56,
                        "line": 3
                      }
                    },
                    "range": [
                      133,
                      153
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropertyDescriptor",
                        "optional": false,
                        "range": [
                          135,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 3
                          },
                          "start": {
                            "column": 58,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        135,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 3
                        },
                        "start": {
                          "column": 58,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    128,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 3
                    },
                    "start": {
                      "column": 51,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 3
                  },
                  "start": {
                    "column": 77,
                    "line": 3
                  }
                },
                "range": [
                  154,
                  160
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    156,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 3
                    },
                    "start": {
                      "column": 79,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                88,
                322
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              81,
              323
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          75,
          325
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 25,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "range": [
          59,
          62
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 14,
            "line": 2
          }
        },
        "range": [
          64,
          74
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "range": [
              66,
              74
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            66,
            74
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        }
      },
      "range": [
        50,
        325
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
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
          335,
          427
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      342,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 11
                      },
                      "start": {
                        "column": 5,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    342,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
                      "line": 11
                    }
                  }
                },
                "range": [
                  341,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__foo",
              "optional": false,
              "range": [
                360,
                365
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
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
                365,
                425
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  385,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 37,
                    "line": 12
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 21,
                        "line": 12
                      }
                    },
                    "range": [
                      369,
                      377
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        371,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 12
                        },
                        "start": {
                          "column": 23,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    366,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                },
                "range": [
                  378,
                  384
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    380,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 12
                    },
                    "start": {
                      "column": 32,
                      "line": 12
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              }
            },
            "range": [
              341,
              425
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 8,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          333,
          334
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        327,
        427
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
