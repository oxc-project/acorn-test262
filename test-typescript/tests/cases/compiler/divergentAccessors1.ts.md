__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    34,
    454
  ],
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "body": {
            "type": "TSInterfaceBody",
            "range": [
              61,
              132
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
                    75,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
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
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  },
                  "range": [
                    80,
                    88
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      82,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  }
                },
                "static": false,
                "range": [
                  71,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
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
                    102,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "kind": "set",
                "optional": false,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      },
                      "range": [
                        107,
                        124
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              109,
                              115
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 6
                              },
                              "start": {
                                "column": 19,
                                "line": 6
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              118,
                              124
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 6
                              },
                              "start": {
                                "column": 28,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          109,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 19,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      106,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  }
                ],
                "readonly": false,
                "static": false,
                "range": [
                  98,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 25,
                "line": 4
              }
            }
          },
          "declare": false,
          "extends": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "IHasGetSet",
            "optional": false,
            "range": [
              50,
              60
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "range": [
            40,
            132
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 4,
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
                "name": "ihgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  },
                  "range": [
                    152,
                    164
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IHasGetSet",
                      "optional": false,
                      "range": [
                        154,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      154,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  148,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    167,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 29,
                      "line": 9
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    175,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 9
                    },
                    "start": {
                      "column": 37,
                      "line": 9
                    }
                  }
                },
                "range": [
                  167,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              },
              "range": [
                148,
                178
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            142,
            179
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
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
                "name": "ihgs",
                "optional": false,
                "range": [
                  184,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
                "name": "foo",
                "optional": false,
                "range": [
                  189,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "range": [
                184,
                192
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"32\"",
              "value": "32",
              "range": [
                195,
                199
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              184,
              199
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "range": [
            184,
            200
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
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
                "name": "r_ihgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 18,
                      "line": 11
                    }
                  },
                  "range": [
                    219,
                    227
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      221,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 11
                      },
                      "start": {
                        "column": 20,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  209,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ihgs",
                  "optional": false,
                  "range": [
                    230,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
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
                    235,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                },
                "range": [
                  230,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "range": [
                209,
                238
              ],
              "loc": {
                "end": {
                  "column": 37,
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
          "kind": "let",
          "range": [
            205,
            239
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "range": [
        34,
        241
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSTypeAliasDeclaration",
          "declare": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "T_HasGetSet",
            "optional": false,
            "range": [
              254,
              265
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
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
                    282,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
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
                      "column": 25,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  },
                  "range": [
                    287,
                    295
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      289,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  }
                },
                "static": false,
                "range": [
                  278,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
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
                    309,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "kind": "set",
                "optional": false,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      },
                      "range": [
                        314,
                        331
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              316,
                              322
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 17
                              },
                              "start": {
                                "column": 19,
                                "line": 17
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              325,
                              331
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 17
                              },
                              "start": {
                                "column": 28,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          316,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      313,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 16,
                        "line": 17
                      }
                    }
                  }
                ],
                "readonly": false,
                "static": false,
                "range": [
                  305,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              268,
              339
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 23,
                "line": 15
              }
            }
          },
          "range": [
            249,
            339
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 18
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
                "name": "t_hgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  },
                  "range": [
                    360,
                    373
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T_HasGetSet",
                      "optional": false,
                      "range": [
                        362,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 20
                        },
                        "start": {
                          "column": 17,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      362,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 17,
                        "line": 20
                      }
                    }
                  }
                },
                "range": [
                  355,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    376,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 20
                    },
                    "start": {
                      "column": 31,
                      "line": 20
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    384,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 20
                    },
                    "start": {
                      "column": 39,
                      "line": 20
                    }
                  }
                },
                "range": [
                  376,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 20
                  },
                  "start": {
                    "column": 31,
                    "line": 20
                  }
                }
              },
              "range": [
                355,
                387
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 20
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            349,
            388
          ],
          "loc": {
            "end": {
              "column": 43,
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
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t_hgs",
                "optional": false,
                "range": [
                  393,
                  398
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  399,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              },
              "range": [
                393,
                402
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"32\"",
              "value": "32",
              "range": [
                405,
                409
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "range": [
              393,
              409
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "range": [
            393,
            410
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
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
                "name": "r_t_hgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 22
                    },
                    "start": {
                      "column": 19,
                      "line": 22
                    }
                  },
                  "range": [
                    430,
                    438
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      432,
                      438
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 22
                      },
                      "start": {
                        "column": 21,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  419,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t_hgs",
                  "optional": false,
                  "range": [
                    441,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 22
                    },
                    "start": {
                      "column": 30,
                      "line": 22
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
                    447,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 22
                    },
                    "start": {
                      "column": 36,
                      "line": 22
                    }
                  }
                },
                "range": [
                  441,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 22
                  },
                  "start": {
                    "column": 30,
                    "line": 22
                  }
                }
              },
              "range": [
                419,
                450
              ],
              "loc": {
                "end": {
                  "column": 39,
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
          "kind": "let",
          "range": [
            415,
            451
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "range": [
        243,
        453
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
