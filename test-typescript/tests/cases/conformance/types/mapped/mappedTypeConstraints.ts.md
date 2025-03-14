__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    812
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  91,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
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
                  95,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "range": [
                91,
                96
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              91,
              97
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          85,
          99
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 85,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 83,
                "line": 1
              },
              "start": {
                "column": 51,
                "line": 1
              }
            },
            "range": [
              51,
              83
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  57,
                  83
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
                        58,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 1
                        },
                        "start": {
                          "column": 58,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      58,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 1
                      },
                      "start": {
                        "column": 58,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        68,
                        82
                      ],
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                75,
                                76
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 1
                                },
                                "start": {
                                  "column": 75,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              75,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 1
                              },
                              "start": {
                                "column": 75,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            69,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 1
                            },
                            "start": {
                              "column": 69,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'b'",
                            "value": "b",
                            "range": [
                              78,
                              81
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 1
                              },
                              "start": {
                                "column": 78,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            78,
                            81
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 1
                            },
                            "start": {
                              "column": 78,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 1
                        },
                        "start": {
                          "column": 68,
                          "line": 1
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "range": [
                        61,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 1
                        },
                        "start": {
                          "column": 61,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      61,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 1
                      },
                      "start": {
                        "column": 61,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 1
                  },
                  "start": {
                    "column": 57,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  53,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 1
                  },
                  "start": {
                    "column": 53,
                    "line": 1
                  }
                }
              },
              "range": [
                53,
                83
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 1
                },
                "start": {
                  "column": 53,
                  "line": 1
                }
              }
            }
          },
          "range": [
            48,
            83
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 1
            },
            "start": {
              "column": 48,
              "line": 1
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      24,
                      25
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 1
                      },
                      "start": {
                        "column": 24,
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
                        "column": 33,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    },
                    "range": [
                      25,
                      33
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        27,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 1
                        },
                        "start": {
                          "column": 27,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    24,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
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
                22,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 22,
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
              46
            ],
            "loc": {
              "end": {
                "column": 46,
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
        99
      ],
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  192,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
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
                  196,
                  197
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
              "range": [
                192,
                197
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              192,
              198
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          186,
          200
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 85,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          110,
          112
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 83,
                "line": 5
              },
              "start": {
                "column": 51,
                "line": 5
              }
            },
            "range": [
              152,
              184
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  158,
                  184
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
                        159,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 5
                        },
                        "start": {
                          "column": 58,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      159,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 58,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        169,
                        183
                      ],
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                176,
                                177
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 5
                                },
                                "start": {
                                  "column": 75,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              176,
                              177
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 5
                              },
                              "start": {
                                "column": 75,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            170,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 5
                            },
                            "start": {
                              "column": 69,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              179,
                              182
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 5
                              },
                              "start": {
                                "column": 78,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            179,
                            182
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 5
                            },
                            "start": {
                              "column": 78,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 5
                        },
                        "start": {
                          "column": 68,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "range": [
                        162,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 5
                        },
                        "start": {
                          "column": 61,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      162,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 5
                      },
                      "start": {
                        "column": 61,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 5
                  },
                  "start": {
                    "column": 57,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  154,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 5
                  },
                  "start": {
                    "column": 53,
                    "line": 5
                  }
                }
              },
              "range": [
                154,
                184
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 5
                },
                "start": {
                  "column": 53,
                  "line": 5
                }
              }
            }
          },
          "range": [
            149,
            184
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 5
            },
            "start": {
              "column": 48,
              "line": 5
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        },
        "range": [
          112,
          148
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      125,
                      126
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    },
                    "range": [
                      126,
                      134
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        128,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 5
                        },
                        "start": {
                          "column": 27,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    125,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 35,
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
                        "column": 44,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
                      }
                    },
                    "range": [
                      137,
                      145
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        139,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 5
                        },
                        "start": {
                          "column": 38,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    136,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                123,
                147
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
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
                113,
                114
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
            "out": false,
            "range": [
              113,
              147
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        101,
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  325,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
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
                  329,
                  330
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
              "range": [
                325,
                330
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              325,
              331
            ],
            "loc": {
              "end": {
                "column": 10,
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
          319,
          333
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 117,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          211,
          213
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 115,
                "line": 9
              },
              "start": {
                "column": 87,
                "line": 9
              }
            },
            "range": [
              289,
              317
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  295,
                  317
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
                            296,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 9
                            },
                            "start": {
                              "column": 94,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          296,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 9
                          },
                          "start": {
                            "column": 94,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            300,
                            301
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 9
                            },
                            "start": {
                              "column": 98,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          300,
                          301
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 9
                          },
                          "start": {
                            "column": 98,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      296,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 9
                      },
                      "start": {
                        "column": 94,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
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
                              310,
                              311
                            ],
                            "loc": {
                              "end": {
                                "column": 109,
                                "line": 9
                              },
                              "start": {
                                "column": 108,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            310,
                            311
                          ],
                          "loc": {
                            "end": {
                              "column": 109,
                              "line": 9
                            },
                            "start": {
                              "column": 108,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              314,
                              315
                            ],
                            "loc": {
                              "end": {
                                "column": 113,
                                "line": 9
                              },
                              "start": {
                                "column": 112,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            314,
                            315
                          ],
                          "loc": {
                            "end": {
                              "column": 113,
                              "line": 9
                            },
                            "start": {
                              "column": 112,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        310,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 113,
                          "line": 9
                        },
                        "start": {
                          "column": 108,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      303,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 9
                      },
                      "start": {
                        "column": 101,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 115,
                    "line": 9
                  },
                  "start": {
                    "column": 93,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  291,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 9
                  },
                  "start": {
                    "column": 89,
                    "line": 9
                  }
                }
              },
              "range": [
                291,
                317
              ],
              "loc": {
                "end": {
                  "column": 115,
                  "line": 9
                },
                "start": {
                  "column": 89,
                  "line": 9
                }
              }
            }
          },
          "range": [
            286,
            317
          ],
          "loc": {
            "end": {
              "column": 115,
              "line": 9
            },
            "start": {
              "column": 84,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 83,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        },
        "range": [
          213,
          285
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      226,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 24,
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
                        "column": 33,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    },
                    "range": [
                      227,
                      235
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        229,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 9
                        },
                        "start": {
                          "column": 27,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    226,
                    236
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
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      237,
                      238
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
                      238,
                      246
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        240,
                        246
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
                    237,
                    246
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
                224,
                248
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 22,
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
                214,
                215
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              214,
              248
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      262,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 9
                      },
                      "start": {
                        "column": 60,
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
                        "column": 69,
                        "line": 9
                      },
                      "start": {
                        "column": 61,
                        "line": 9
                      }
                    },
                    "range": [
                      263,
                      271
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        265,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 9
                        },
                        "start": {
                          "column": 63,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    262,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 9
                    },
                    "start": {
                      "column": 60,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      273,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 9
                      },
                      "start": {
                        "column": 71,
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
                        "column": 80,
                        "line": 9
                      },
                      "start": {
                        "column": 72,
                        "line": 9
                      }
                    },
                    "range": [
                      274,
                      282
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        276,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 9
                        },
                        "start": {
                          "column": 74,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    273,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 9
                    },
                    "start": {
                      "column": 71,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                260,
                284
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 9
                },
                "start": {
                  "column": 58,
                  "line": 9
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
                250,
                251
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 9
                },
                "start": {
                  "column": 48,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              250,
              284
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 9
              },
              "start": {
                "column": 48,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        202,
        333
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  458,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  462,
                  463
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
              "range": [
                458,
                463
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              458,
              464
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                "name": "obj",
                "optional": false,
                "range": [
                  469,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
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
                  473,
                  474
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
              "range": [
                469,
                474
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              469,
              475
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                "name": "obj",
                "optional": false,
                "range": [
                  480,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
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
                  484,
                  485
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
              "range": [
                480,
                485
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              480,
              486
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          452,
          488
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 117,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          344,
          346
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 115,
                "line": 13
              },
              "start": {
                "column": 87,
                "line": 13
              }
            },
            "range": [
              422,
              450
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  428,
                  450
                ],
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            429,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 13
                            },
                            "start": {
                              "column": 94,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          429,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 13
                          },
                          "start": {
                            "column": 94,
                            "line": 13
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            433,
                            434
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 13
                            },
                            "start": {
                              "column": 98,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          433,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 13
                          },
                          "start": {
                            "column": 98,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      429,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 13
                      },
                      "start": {
                        "column": 94,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              443,
                              444
                            ],
                            "loc": {
                              "end": {
                                "column": 109,
                                "line": 13
                              },
                              "start": {
                                "column": 108,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            443,
                            444
                          ],
                          "loc": {
                            "end": {
                              "column": 109,
                              "line": 13
                            },
                            "start": {
                              "column": 108,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              447,
                              448
                            ],
                            "loc": {
                              "end": {
                                "column": 113,
                                "line": 13
                              },
                              "start": {
                                "column": 112,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            447,
                            448
                          ],
                          "loc": {
                            "end": {
                              "column": 113,
                              "line": 13
                            },
                            "start": {
                              "column": 112,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        443,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 113,
                          "line": 13
                        },
                        "start": {
                          "column": 108,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      436,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 13
                      },
                      "start": {
                        "column": 101,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 115,
                    "line": 13
                  },
                  "start": {
                    "column": 93,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  424,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 13
                  },
                  "start": {
                    "column": 89,
                    "line": 13
                  }
                }
              },
              "range": [
                424,
                450
              ],
              "loc": {
                "end": {
                  "column": 115,
                  "line": 13
                },
                "start": {
                  "column": 89,
                  "line": 13
                }
              }
            }
          },
          "range": [
            419,
            450
          ],
          "loc": {
            "end": {
              "column": 115,
              "line": 13
            },
            "start": {
              "column": 84,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 83,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 13
          }
        },
        "range": [
          346,
          418
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      359,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 24,
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
                        "column": 33,
                        "line": 13
                      },
                      "start": {
                        "column": 25,
                        "line": 13
                      }
                    },
                    "range": [
                      360,
                      368
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        362,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 13
                        },
                        "start": {
                          "column": 27,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    359,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 13
                    },
                    "start": {
                      "column": 24,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      370,
                      371
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 13
                      },
                      "start": {
                        "column": 35,
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
                        "column": 44,
                        "line": 13
                      },
                      "start": {
                        "column": 36,
                        "line": 13
                      }
                    },
                    "range": [
                      371,
                      379
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        373,
                        379
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 13
                        },
                        "start": {
                          "column": 38,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    370,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 13
                    },
                    "start": {
                      "column": 35,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                357,
                381
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
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
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              347,
              381
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      395,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 13
                      },
                      "start": {
                        "column": 60,
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
                        "column": 69,
                        "line": 13
                      },
                      "start": {
                        "column": 61,
                        "line": 13
                      }
                    },
                    "range": [
                      396,
                      404
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        398,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 13
                        },
                        "start": {
                          "column": 63,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    395,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 13
                    },
                    "start": {
                      "column": 60,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      406,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 13
                      },
                      "start": {
                        "column": 71,
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
                        "column": 80,
                        "line": 13
                      },
                      "start": {
                        "column": 72,
                        "line": 13
                      }
                    },
                    "range": [
                      407,
                      415
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        409,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 13
                        },
                        "start": {
                          "column": 74,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    406,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 13
                    },
                    "start": {
                      "column": 71,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                393,
                417
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 13
                },
                "start": {
                  "column": 58,
                  "line": 13
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
                383,
                384
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 13
                },
                "start": {
                  "column": 48,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              383,
              417
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 13
              },
              "start": {
                "column": 48,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        335,
        488
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 13
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  594,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  598,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "range": [
                594,
                599
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              594,
              600
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                "name": "obj",
                "optional": false,
                "range": [
                  605,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
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
                  609,
                  610
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              "range": [
                605,
                610
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              605,
              611
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          588,
          613
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 98,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          499,
          501
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 96,
                "line": 19
              },
              "start": {
                "column": 51,
                "line": 19
              }
            },
            "range": [
              541,
              586
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  549,
                  586
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            557,
                            571
                          ],
                          "params": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    564,
                                    565
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 74,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  564,
                                  565
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 74,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                558,
                                565
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 19
                                },
                                "start": {
                                  "column": 68,
                                  "line": 19
                                }
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "'b'",
                                "value": "b",
                                "range": [
                                  567,
                                  570
                                ],
                                "loc": {
                                  "end": {
                                    "column": 80,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 77,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                567,
                                570
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 19
                                },
                                "start": {
                                  "column": 77,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 19
                            },
                            "start": {
                              "column": 67,
                              "line": 19
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "range": [
                            550,
                            557
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 19
                            },
                            "start": {
                              "column": 60,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          550,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 19
                          },
                          "start": {
                            "column": 60,
                            "line": 19
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "'c'",
                          "value": "c",
                          "range": [
                            574,
                            577
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 19
                            },
                            "start": {
                              "column": 84,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          574,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 19
                          },
                          "start": {
                            "column": 84,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      550,
                      577
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 19
                      },
                      "start": {
                        "column": 60,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      579,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 19
                      },
                      "start": {
                        "column": 89,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 19
                  },
                  "start": {
                    "column": 59,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  543,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 19
                  },
                  "start": {
                    "column": 53,
                    "line": 19
                  }
                }
              },
              "range": [
                543,
                586
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 19
                },
                "start": {
                  "column": 53,
                  "line": 19
                }
              }
            }
          },
          "range": [
            538,
            586
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 19
            },
            "start": {
              "column": 48,
              "line": 19
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 19
          },
          "start": {
            "column": 11,
            "line": 19
          }
        },
        "range": [
          501,
          537
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      514,
                      515
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 19
                      },
                      "start": {
                        "column": 25,
                        "line": 19
                      }
                    },
                    "range": [
                      515,
                      523
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        517,
                        523
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    514,
                    524
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 24,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      525,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 19
                      },
                      "start": {
                        "column": 35,
                        "line": 19
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
                        "line": 19
                      },
                      "start": {
                        "column": 36,
                        "line": 19
                      }
                    },
                    "range": [
                      526,
                      534
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        528,
                        534
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 19
                        },
                        "start": {
                          "column": 38,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    525,
                    534
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 19
                    },
                    "start": {
                      "column": 35,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                512,
                536
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 19
                },
                "start": {
                  "column": 22,
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
                502,
                503
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              502,
              536
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        490,
        613
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TargetProps",
        "optional": false,
        "range": [
          642,
          653
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                662,
                665
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
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
                  "column": 15,
                  "line": 27
                },
                "start": {
                  "column": 7,
                  "line": 27
                }
              },
              "range": [
                665,
                673
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  667,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 27
                  },
                  "start": {
                    "column": 9,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              662,
              674
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                679,
                682
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 7,
                  "line": 28
                }
              },
              "range": [
                682,
                690
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  684,
                  690
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 28
                  },
                  "start": {
                    "column": 9,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              679,
              690
            ],
            "loc": {
              "end": {
                "column": 15,
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
          656,
          692
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 19,
            "line": 26
          }
        }
      },
      "range": [
        637,
        693
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "modifier",
            "optional": false,
            "range": [
              701,
              709
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
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
                        "type": "ObjectPattern",
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "range": [
                                766,
                                769
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 32
                                },
                                "start": {
                                  "column": 9,
                                  "line": 32
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "range": [
                                766,
                                769
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 32
                                },
                                "start": {
                                  "column": 9,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              766,
                              769
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 32
                              },
                              "start": {
                                "column": 9,
                                "line": 32
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rest",
                              "optional": false,
                              "range": [
                                774,
                                778
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 32
                                },
                                "start": {
                                  "column": 17,
                                  "line": 32
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "range": [
                              771,
                              778
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 32
                              },
                              "start": {
                                "column": 14,
                                "line": 32
                              }
                            }
                          }
                        ],
                        "range": [
                          765,
                          779
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "targetProps",
                        "optional": false,
                        "range": [
                          782,
                          793
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 32
                          },
                          "start": {
                            "column": 25,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        765,
                        793
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
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
                    761,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "range": [
                        799,
                        803
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 33
                        },
                        "start": {
                          "column": 4,
                          "line": 33
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
                        804,
                        807
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 33
                        },
                        "start": {
                          "column": 9,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      799,
                      807
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    799,
                    808
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                755,
                810
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 34
                },
                "start": {
                  "column": 60,
                  "line": 31
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "targetProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 31
                    },
                    "start": {
                      "column": 52,
                      "line": 31
                    }
                  },
                  "range": [
                    747,
                    750
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        749,
                        750
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 31
                        },
                        "start": {
                          "column": 54,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      749,
                      750
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 31
                      },
                      "start": {
                        "column": 54,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  736,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 31
                  },
                  "start": {
                    "column": 41,
                    "line": 31
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 31
                },
                "start": {
                  "column": 17,
                  "line": 31
                }
              },
              "range": [
                712,
                735
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
                      "name": "TargetProps",
                      "optional": false,
                      "range": [
                        723,
                        734
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 31
                        },
                        "start": {
                          "column": 28,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      723,
                      734
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 31
                      },
                      "start": {
                        "column": 28,
                        "line": 31
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
                      713,
                      714
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 31
                      },
                      "start": {
                        "column": 18,
                        "line": 31
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    713,
                    734
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 31
                    },
                    "start": {
                      "column": 18,
                      "line": 31
                    }
                  }
                }
              ]
            },
            "range": [
              712,
              810
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 34
              },
              "start": {
                "column": 17,
                "line": 31
              }
            }
          },
          "range": [
            701,
            810
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        695,
        811
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
