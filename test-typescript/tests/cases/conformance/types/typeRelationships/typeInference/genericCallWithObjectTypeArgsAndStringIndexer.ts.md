__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    75,
    787
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                110,
                111
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              103,
              112
            ],
            "loc": {
              "end": {
                "column": 13,
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
          97,
          114
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 22,
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
        "name": "foo",
        "optional": false,
        "range": [
          84,
          87
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              92,
              95
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  94,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                94,
                95
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            91,
            95
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          87,
          90
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
                88,
                89
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
            "out": false,
            "range": [
              88,
              89
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
        ]
      },
      "range": [
        75,
        114
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                121,
                144
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          },
                          "range": [
                            127,
                            135
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              129,
                              135
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 7
                              },
                              "start": {
                                "column": 13,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          126,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      },
                      "range": [
                        136,
                        142
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "range": [
                            138,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 7
                            },
                            "start": {
                              "column": 22,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          138,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 7
                          },
                          "start": {
                            "column": 22,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      125,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  123,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              120,
              144
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            120,
            144
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        116,
        145
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
              150,
              151
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  158,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                154,
                157
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
            "optional": false,
            "range": [
              154,
              160
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            150,
            160
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        146,
        161
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    },
                    "range": [
                      200,
                      220
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  206,
                                  214
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    208,
                                    214
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                205,
                                214
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 11
                                },
                                "start": {
                                  "column": 14,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 11
                              },
                              "start": {
                                "column": 24,
                                "line": 11
                              }
                            },
                            "range": [
                              215,
                              218
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  217,
                                  218
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                217,
                                218
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 11
                                },
                                "start": {
                                  "column": 26,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            204,
                            218
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 11
                            },
                            "start": {
                              "column": 13,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        202,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 11,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    199,
                    220
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
                "init": null,
                "range": [
                  199,
                  220
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              195,
              221
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                    230,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        239,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      235,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    235,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "range": [
                  230,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              226,
              242
            ],
            "loc": {
              "end": {
                "column": 20,
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
          189,
          249
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 26,
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
        "name": "other",
        "optional": false,
        "range": [
          172,
          177
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
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
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            },
            "range": [
              184,
              187
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  186,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                }
              },
              "range": [
                186,
                187
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              }
            }
          },
          "range": [
            181,
            187
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 18,
              "line": 10
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 14,
            "line": 10
          }
        },
        "range": [
          177,
          180
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
                178,
                179
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              178,
              179
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        163,
        249
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 10
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    },
                    "range": [
                      302,
                      322
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 16
                                  }
                                },
                                "range": [
                                  308,
                                  316
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    310,
                                    316
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 16
                                    }
                                  }
                                }
                              },
                              "range": [
                                307,
                                316
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 16
                                },
                                "start": {
                                  "column": 14,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 16
                              },
                              "start": {
                                "column": 24,
                                "line": 16
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
                                    "column": 27,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                319,
                                320
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 16
                                },
                                "start": {
                                  "column": 26,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            306,
                            320
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 16
                            },
                            "start": {
                              "column": 13,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        304,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    301,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  301,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              297,
              323
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                    332,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        341,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      337,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    337,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "range": [
                  332,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              328,
              344
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    },
                    "range": [
                      354,
                      360
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          356,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 18
                          },
                          "start": {
                            "column": 11,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        356,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    353,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "range": [
                      363,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 18
                      },
                      "start": {
                        "column": 18,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "'hm'",
                    "value": "hm",
                    "range": [
                      366,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 18
                      },
                      "start": {
                        "column": 21,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    363,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 18
                    },
                    "start": {
                      "column": 18,
                      "line": 18
                    }
                  }
                },
                "range": [
                  353,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              349,
              372
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          291,
          380
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 40,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other2",
        "optional": false,
        "range": [
          260,
          266
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
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
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 35,
                "line": 15
              }
            },
            "range": [
              286,
              289
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  288,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 15
                  },
                  "start": {
                    "column": 37,
                    "line": 15
                  }
                }
              },
              "range": [
                288,
                289
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 37,
                  "line": 15
                }
              }
            }
          },
          "range": [
            283,
            289
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 15
            },
            "start": {
              "column": 32,
              "line": 15
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        },
        "range": [
          266,
          282
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  277,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 26,
                    "line": 15
                  }
                }
              },
              "range": [
                277,
                281
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
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
                267,
                268
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              267,
              281
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        251,
        380
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    },
                    "range": [
                      449,
                      469
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 22
                                  }
                                },
                                "range": [
                                  455,
                                  463
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    457,
                                    463
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 22
                                    }
                                  }
                                }
                              },
                              "range": [
                                454,
                                463
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 22
                                },
                                "start": {
                                  "column": 14,
                                  "line": 22
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 22
                              },
                              "start": {
                                "column": 24,
                                "line": 22
                              }
                            },
                            "range": [
                              464,
                              467
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  466,
                                  467
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                466,
                                467
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 22
                                },
                                "start": {
                                  "column": 26,
                                  "line": 22
                                }
                              }
                            }
                          },
                          "range": [
                            453,
                            467
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 22
                            },
                            "start": {
                              "column": 13,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        451,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 11,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    448,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": null,
                "range": [
                  448,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              444,
              470
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                    479,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        488,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 17,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      484,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    484,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  479,
                  490
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
            "declare": false,
            "kind": "var",
            "range": [
              475,
              491
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 24
                      },
                      "start": {
                        "column": 9,
                        "line": 24
                      }
                    },
                    "range": [
                      501,
                      507
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          503,
                          507
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 24
                          },
                          "start": {
                            "column": 11,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        503,
                        507
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    500,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "range": [
                      510,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "'hm'",
                    "value": "hm",
                    "range": [
                      513,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 21,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    510,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 24
                    },
                    "start": {
                      "column": 18,
                      "line": 24
                    }
                  }
                },
                "range": [
                  500,
                  518
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              496,
              519
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          438,
          578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 56,
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
        "name": "other3",
        "optional": false,
        "range": [
          391,
          397
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
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
                "column": 54,
                "line": 21
              },
              "start": {
                "column": 51,
                "line": 21
              }
            },
            "range": [
              433,
              436
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  435,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 21
                  },
                  "start": {
                    "column": 53,
                    "line": 21
                  }
                }
              },
              "range": [
                435,
                436
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 21
                },
                "start": {
                  "column": 53,
                  "line": 21
                }
              }
            }
          },
          "range": [
            430,
            436
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 21
            },
            "start": {
              "column": 48,
              "line": 21
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 21
          },
          "start": {
            "column": 15,
            "line": 21
          }
        },
        "range": [
          397,
          429
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  408,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 21
                  },
                  "start": {
                    "column": 26,
                    "line": 21
                  }
                }
              },
              "range": [
                408,
                412
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 21
                },
                "start": {
                  "column": 26,
                  "line": 21
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
                398,
                399
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              398,
              412
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 16,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  424,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 21
                  },
                  "start": {
                    "column": 42,
                    "line": 21
                  }
                }
              },
              "range": [
                424,
                428
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 21
                },
                "start": {
                  "column": 42,
                  "line": 21
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
                414,
                415
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 21
                },
                "start": {
                  "column": 32,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              414,
              428
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 21
              },
              "start": {
                "column": 32,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        382,
        578
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 3,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
