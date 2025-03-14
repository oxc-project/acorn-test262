__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    598
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                43
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      18,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 1
                      },
                      "start": {
                        "column": 18,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            32,
                            33
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 1
                            },
                            "start": {
                              "column": 32,
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
                              "column": 41,
                              "line": 1
                            },
                            "start": {
                              "column": 33,
                              "line": 1
                            }
                          },
                          "range": [
                            33,
                            41
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              35,
                              41
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 1
                              },
                              "start": {
                                "column": 35,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          32,
                          41
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 1
                          },
                          "start": {
                            "column": 32,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      30,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 1
                      },
                      "start": {
                        "column": 30,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  18,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
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
            43
          ],
          "loc": {
            "end": {
              "column": 43,
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
        44
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 1
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
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "range": [
                52,
                54
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              52,
              57
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "range": [
            52,
            57
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          45,
          57
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        45,
        58
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "range": [
                67,
                69
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              67,
              72
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            67,
            72
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 3
            },
            "start": {
              "column": 8,
              "line": 3
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          59,
          73
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        59,
        74
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 3
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              },
              "range": [
                92,
                126
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      94,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            108,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
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
                              "column": 48,
                              "line": 5
                            },
                            "start": {
                              "column": 33,
                              "line": 5
                            }
                          },
                          "range": [
                            109,
                            124
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "range": [
                                    113,
                                    114
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 5
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
                                      "column": 46,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 5
                                    }
                                  },
                                  "range": [
                                    114,
                                    122
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      116,
                                      122
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 5
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  113,
                                  122
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "range": [
                              111,
                              124
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 5
                              },
                              "start": {
                                "column": 35,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          108,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 5
                          },
                          "start": {
                            "column": 32,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      106,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 5
                      },
                      "start": {
                        "column": 30,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  94,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              90,
              126
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            90,
            126
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        76,
        127
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o2",
                "optional": false,
                "range": [
                  135,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                135,
                140
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                141,
                142
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              135,
              142
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 7,
                "line": 6
              }
            }
          },
          "range": [
            135,
            142
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 7,
              "line": 6
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          128,
          142
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        128,
        143
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o2",
                "optional": false,
                "range": [
                  152,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  156,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              },
              "range": [
                152,
                157
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                158,
                159
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "range": [
              152,
              159
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            152,
            159
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 8,
              "line": 7
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          144,
          160
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        144,
        161
      ],
      "loc": {
        "end": {
          "column": 17,
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              },
              "range": [
                179,
                213
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        183,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
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
                          "column": 48,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      },
                      "range": [
                        184,
                        211
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              186,
                              195
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 9
                              },
                              "start": {
                                "column": 23,
                                "line": 9
                              }
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "range": [
                                    200,
                                    201
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 37,
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
                                      "column": 46,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 9
                                    }
                                  },
                                  "range": [
                                    201,
                                    209
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      203,
                                      209
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 9
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  200,
                                  209
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "range": [
                              198,
                              211
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
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
                          186,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 9
                          },
                          "start": {
                            "column": 23,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      183,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  181,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              177,
              213
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            177,
            213
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        163,
        214
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 9
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
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "range": [
                  222,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  225,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "range": [
                222,
                226
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 10
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                228,
                229
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "range": [
              222,
              229
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 7,
                "line": 10
              }
            }
          },
          "range": [
            222,
            229
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 7,
              "line": 10
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          215,
          229
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        215,
        230
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "range": [
                  239,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  242,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "range": [
                239,
                243
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                245,
                246
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "range": [
              239,
              246
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            239,
            246
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 8,
              "line": 11
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          231,
          247
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        231,
        248
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              },
              "range": [
                266,
                304
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        270,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 20,
                          "line": 13
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
                          "column": 52,
                          "line": 13
                        },
                        "start": {
                          "column": 22,
                          "line": 13
                        }
                      },
                      "range": [
                        272,
                        302
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                276,
                                277
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 13
                                },
                                "start": {
                                  "column": 26,
                                  "line": 13
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
                                  "column": 50,
                                  "line": 13
                                },
                                "start": {
                                  "column": 27,
                                  "line": 13
                                }
                              },
                              "range": [
                                277,
                                300
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "range": [
                                        281,
                                        282
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 13
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
                                          "column": 48,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 13
                                        }
                                      },
                                      "range": [
                                        283,
                                        298
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false,
                                              "range": [
                                                287,
                                                288
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 38,
                                                  "line": 13
                                                },
                                                "start": {
                                                  "column": 37,
                                                  "line": 13
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
                                                  "column": 46,
                                                  "line": 13
                                                },
                                                "start": {
                                                  "column": 38,
                                                  "line": 13
                                                }
                                              },
                                              "range": [
                                                288,
                                                296
                                              ],
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "range": [
                                                  290,
                                                  296
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 46,
                                                    "line": 13
                                                  },
                                                  "start": {
                                                    "column": 40,
                                                    "line": 13
                                                  }
                                                }
                                              }
                                            },
                                            "range": [
                                              287,
                                              296
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 46,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 13
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          285,
                                          298
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 13
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      281,
                                      298
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 13
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  279,
                                  300
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 13
                                  }
                                }
                              }
                            },
                            "range": [
                              276,
                              300
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 13
                              },
                              "start": {
                                "column": 26,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          274,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 13
                          },
                          "start": {
                            "column": 24,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      270,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 13
                      },
                      "start": {
                        "column": 20,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  268,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              264,
              304
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            264,
            304
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 13
            },
            "start": {
              "column": 14,
              "line": 13
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        250,
        305
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o4",
                    "optional": false,
                    "range": [
                      313,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      316,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 14
                      },
                      "start": {
                        "column": 10,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    313,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    319,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "range": [
                  313,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  321,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              },
              "range": [
                313,
                322
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                324,
                325
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              }
            },
            "range": [
              313,
              325
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 7,
                "line": 14
              }
            }
          },
          "range": [
            313,
            325
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 14
            },
            "start": {
              "column": 7,
              "line": 14
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          306,
          325
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        306,
        326
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o4",
                      "optional": false,
                      "range": [
                        335,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        338,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      335,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      341,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    335,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "range": [
                    343,
                    344
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
                "range": [
                  335,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "range": [
                335,
                344
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            },
            "range": [
              334,
              348
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 7,
                "line": 15
              }
            }
          },
          "range": [
            334,
            348
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 15
            },
            "start": {
              "column": 7,
              "line": 15
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          327,
          348
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        327,
        349
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o4",
                    "optional": false,
                    "range": [
                      358,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      361,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 16
                      },
                      "start": {
                        "column": 11,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    358,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    364,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                },
                "range": [
                  358,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  366,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 16,
                    "line": 16
                  }
                }
              },
              "range": [
                358,
                367
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                369,
                370
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              }
            },
            "range": [
              358,
              370
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "range": [
            358,
            370
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 16
            },
            "start": {
              "column": 8,
              "line": 16
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          350,
          371
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        350,
        372
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 16
        },
        "start": {
          "column": 0,
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
            "name": "o5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              },
              "range": [
                390,
                430
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        394,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 20,
                          "line": 18
                        }
                      }
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      },
                      "range": [
                        398,
                        428
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                402,
                                403
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 18
                                },
                                "start": {
                                  "column": 28,
                                  "line": 18
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
                                  "column": 52,
                                  "line": 18
                                },
                                "start": {
                                  "column": 29,
                                  "line": 18
                                }
                              },
                              "range": [
                                403,
                                426
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "range": [
                                        407,
                                        408
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 18
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
                                          "column": 50,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 18
                                        }
                                      },
                                      "range": [
                                        409,
                                        424
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false,
                                              "range": [
                                                413,
                                                414
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 40,
                                                  "line": 18
                                                },
                                                "start": {
                                                  "column": 39,
                                                  "line": 18
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
                                                  "column": 48,
                                                  "line": 18
                                                },
                                                "start": {
                                                  "column": 40,
                                                  "line": 18
                                                }
                                              },
                                              "range": [
                                                414,
                                                422
                                              ],
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "range": [
                                                  416,
                                                  422
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 48,
                                                    "line": 18
                                                  },
                                                  "start": {
                                                    "column": 42,
                                                    "line": 18
                                                  }
                                                }
                                              }
                                            },
                                            "range": [
                                              413,
                                              422
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 48,
                                                "line": 18
                                              },
                                              "start": {
                                                "column": 39,
                                                "line": 18
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          411,
                                          424
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 50,
                                            "line": 18
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 18
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      407,
                                      424
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
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
                                  405,
                                  426
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 18
                                  }
                                }
                              }
                            },
                            "range": [
                              402,
                              426
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 18
                              },
                              "start": {
                                "column": 28,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "range": [
                          400,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 18
                          },
                          "start": {
                            "column": 26,
                            "line": 18
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      394,
                      428
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  392,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              388,
              430
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            388,
            430
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        374,
        431
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o5",
                      "optional": false,
                      "range": [
                        439,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 7,
                          "line": 19
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        442,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 19
                        },
                        "start": {
                          "column": 10,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      439,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 19
                      },
                      "start": {
                        "column": 7,
                        "line": 19
                      }
                    }
                  },
                  "optional": true,
                  "range": [
                    439,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 7,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    448,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                },
                "range": [
                  439,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 19
                  },
                  "start": {
                    "column": 7,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  450,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 19
                  },
                  "start": {
                    "column": 18,
                    "line": 19
                  }
                }
              },
              "range": [
                439,
                451
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 7,
                  "line": 19
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                453,
                454
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
                }
              }
            },
            "range": [
              439,
              454
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 7,
                "line": 19
              }
            }
          },
          "range": [
            439,
            454
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 19
            },
            "start": {
              "column": 7,
              "line": 19
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          432,
          454
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        432,
        455
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o5",
                      "optional": false,
                      "range": [
                        464,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        467,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      464,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "optional": true,
                  "range": [
                    464,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    473,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
                    }
                  }
                },
                "range": [
                  464,
                  474
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  475,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 19,
                    "line": 20
                  }
                }
              },
              "range": [
                464,
                476
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                478,
                479
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            },
            "range": [
              464,
              479
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            464,
            479
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 20
            },
            "start": {
              "column": 8,
              "line": 20
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          456,
          480
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        456,
        481
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "o6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 22
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              },
              "range": [
                499,
                537
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        503,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 22
                        },
                        "start": {
                          "column": 20,
                          "line": 22
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
                          "column": 52,
                          "line": 22
                        },
                        "start": {
                          "column": 22,
                          "line": 22
                        }
                      },
                      "range": [
                        505,
                        535
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                509,
                                510
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
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 22
                                },
                                "start": {
                                  "column": 27,
                                  "line": 22
                                }
                              },
                              "range": [
                                510,
                                533
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "range": [
                                        514,
                                        515
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 22
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
                                          "column": 48,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 22
                                        }
                                      },
                                      "range": [
                                        516,
                                        531
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false,
                                              "range": [
                                                520,
                                                521
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 38,
                                                  "line": 22
                                                },
                                                "start": {
                                                  "column": 37,
                                                  "line": 22
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
                                                  "column": 46,
                                                  "line": 22
                                                },
                                                "start": {
                                                  "column": 38,
                                                  "line": 22
                                                }
                                              },
                                              "range": [
                                                521,
                                                529
                                              ],
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "range": [
                                                  523,
                                                  529
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 46,
                                                    "line": 22
                                                  },
                                                  "start": {
                                                    "column": 40,
                                                    "line": 22
                                                  }
                                                }
                                              }
                                            },
                                            "range": [
                                              520,
                                              529
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 46,
                                                "line": 22
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 22
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          518,
                                          531
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 22
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      514,
                                      531
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 22
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  512,
                                  533
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 22
                                  }
                                }
                              }
                            },
                            "range": [
                              509,
                              533
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 22
                              },
                              "start": {
                                "column": 26,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          507,
                          535
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 22
                          },
                          "start": {
                            "column": 24,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      503,
                      535
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 22
                      },
                      "start": {
                        "column": 20,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  501,
                  537
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              497,
              537
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            497,
            537
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        483,
        538
      ],
      "loc": {
        "end": {
          "column": 55,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o6",
                    "optional": false,
                    "range": [
                      546,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 7,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      549,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 23
                      },
                      "start": {
                        "column": 10,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    546,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 23
                    },
                    "start": {
                      "column": 7,
                      "line": 23
                    }
                  }
                },
                "optional": true,
                "property": {
                  "type": "Literal",
                  "raw": "'c'",
                  "value": "c",
                  "range": [
                    553,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 14,
                      "line": 23
                    }
                  }
                },
                "range": [
                  546,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  558,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 19,
                    "line": 23
                  }
                }
              },
              "range": [
                546,
                559
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "raw": "'e'",
              "value": "e",
              "range": [
                562,
                565
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 23
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              }
            },
            "range": [
              546,
              566
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 7,
                "line": 23
              }
            }
          },
          "range": [
            546,
            566
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 23
            },
            "start": {
              "column": 7,
              "line": 23
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          539,
          566
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        539,
        567
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o6",
                    "optional": false,
                    "range": [
                      576,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      579,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    576,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "optional": true,
                "property": {
                  "type": "Literal",
                  "raw": "'c'",
                  "value": "c",
                  "range": [
                    583,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                "range": [
                  576,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  588,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "range": [
                576,
                589
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "raw": "'e'",
              "value": "e",
              "range": [
                592,
                595
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "range": [
              576,
              596
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            576,
            596
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 24
            },
            "start": {
              "column": 8,
              "line": 24
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          568,
          597
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        568,
        598
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 30,
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
