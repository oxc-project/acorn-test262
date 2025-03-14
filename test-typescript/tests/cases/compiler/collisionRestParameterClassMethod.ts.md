__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1083
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          9,
          576
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
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
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
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
                25,
                111
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
                          "name": "_i",
                          "optional": false,
                          "range": [
                            85,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            90,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 3
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          85,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      81,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  57,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 46,
                    "line": 2
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    },
                    "range": [
                      28,
                      36
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        30,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    26,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "range": [
                      41,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 2
                      },
                      "start": {
                        "column": 30,
                        "line": 2
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    38,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              15,
              111
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "range": [
                123,
                133
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
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
                133,
                198
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
                          "name": "_i",
                          "optional": false,
                          "range": [
                            172,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            177,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          172,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      168,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  146,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 34,
                    "line": 5
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    },
                    "range": [
                      136,
                      144
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        138,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    134,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
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
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              116,
              198
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                210,
                212
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 11,
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
                212,
                234
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    },
                    "range": [
                      215,
                      223
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        217,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 18,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    213,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
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
                      228,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 8
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    225,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              203,
              234
            ],
            "loc": {
              "end": {
                "column": 35,
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
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                269,
                271
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
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
                271,
                293
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
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
                          "column": 24,
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
                    272,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
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
                      287,
                      291
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
                  "decorators": [],
                  "optional": false,
                  "range": [
                    284,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "range": [
              262,
              293
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                328,
                330
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
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
                330,
                398
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
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 11
                              },
                              "start": {
                                "column": 14,
                                "line": 11
                              }
                            },
                            "range": [
                              374,
                              379
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                376,
                                379
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 11
                                },
                                "start": {
                                  "column": 16,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            372,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          372,
                          379
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      368,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  349,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 32,
                    "line": 10
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 16,
                        "line": 10
                      }
                    },
                    "range": [
                      333,
                      338
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        335,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 18,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    331,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
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
                      343,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 10
                      },
                      "start": {
                        "column": 26,
                        "line": 10
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    340,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "range": [
              321,
              398
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "range": [
                411,
                420
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
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
                420,
                433
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
                      }
                    },
                    "range": [
                      423,
                      431
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        425,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 14
                        },
                        "start": {
                          "column": 25,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    421,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 14
                }
              }
            },
            "range": [
              404,
              433
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "range": [
                457,
                466
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 15
                },
                "start": {
                  "column": 11,
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
                466,
                479
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    },
                    "range": [
                      469,
                      477
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        471,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 25,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    467,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 21,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            },
            "range": [
              450,
              479
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "range": [
                503,
                512
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
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
                512,
                574
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
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 17
                              },
                              "start": {
                                "column": 14,
                                "line": 17
                              }
                            },
                            "range": [
                              550,
                              555
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                552,
                                555
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 17
                                },
                                "start": {
                                  "column": 16,
                                  "line": 17
                                }
                              }
                            }
                          },
                          "range": [
                            548,
                            555
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          548,
                          555
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      544,
                      556
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  522,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 30,
                    "line": 16
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 16
                      },
                      "start": {
                        "column": 23,
                        "line": 16
                      }
                    },
                    "range": [
                      515,
                      520
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        517,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 16
                        },
                        "start": {
                          "column": 25,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    513,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 16
                    },
                    "start": {
                      "column": 21,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "range": [
              496,
              574
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
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
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "range": [
          6,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
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
        576
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          595,
          929
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                608,
                611
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
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
                611,
                643
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 17,
                        "line": 22
                      }
                    },
                    "range": [
                      614,
                      622
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        616,
                        622
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 22
                        },
                        "start": {
                          "column": 19,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    612,
                    622
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 15,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "range": [
                      627,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 22
                      },
                      "start": {
                        "column": 30,
                        "line": 22
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    624,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 22
                    },
                    "start": {
                      "column": 27,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 22
                },
                "start": {
                  "column": 14,
                  "line": 22
                }
              }
            },
            "range": [
              601,
              643
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "range": [
                681,
                691
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 23
                },
                "start": {
                  "column": 11,
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
                691,
                704
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    },
                    "range": [
                      694,
                      702
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        696,
                        702
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 23
                        },
                        "start": {
                          "column": 26,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    692,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 23
                    },
                    "start": {
                      "column": 22,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 23
                },
                "start": {
                  "column": 21,
                  "line": 23
                }
              }
            },
            "range": [
              674,
              704
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                729,
                731
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
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
                731,
                753
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    },
                    "range": [
                      734,
                      742
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        736,
                        742
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 25
                        },
                        "start": {
                          "column": 18,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    732,
                    742
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 25
                    },
                    "start": {
                      "column": 14,
                      "line": 25
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
                      747,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 25
                      },
                      "start": {
                        "column": 29,
                        "line": 25
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    744,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 25
                    },
                    "start": {
                      "column": 26,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "range": [
              722,
              753
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                788,
                790
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
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
                790,
                812
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 26
                      },
                      "start": {
                        "column": 16,
                        "line": 26
                      }
                    },
                    "range": [
                      793,
                      801
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        795,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 26
                        },
                        "start": {
                          "column": 18,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    791,
                    801
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 26
                    },
                    "start": {
                      "column": 14,
                      "line": 26
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
                      806,
                      810
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 26
                      },
                      "start": {
                        "column": 29,
                        "line": 26
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    803,
                    810
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 26
                    },
                    "start": {
                      "column": 26,
                      "line": 26
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            },
            "range": [
              781,
              812
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "range": [
                847,
                856
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
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
                856,
                869
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 27
                      },
                      "start": {
                        "column": 23,
                        "line": 27
                      }
                    },
                    "range": [
                      859,
                      867
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        861,
                        867
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 27
                        },
                        "start": {
                          "column": 25,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    857,
                    867
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 27
                    },
                    "start": {
                      "column": 21,
                      "line": 27
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 27
                },
                "start": {
                  "column": 20,
                  "line": 27
                }
              }
            },
            "range": [
              840,
              869
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "range": [
                893,
                902
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
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
                902,
                915
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
                      }
                    },
                    "range": [
                      905,
                      913
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        907,
                        913
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 28
                        },
                        "start": {
                          "column": 25,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    903,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 28
                    },
                    "start": {
                      "column": 21,
                      "line": 28
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "range": [
              886,
              915
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "range": [
          592,
          594
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 21
          },
          "start": {
            "column": 14,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        578,
        929
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          940,
          1083
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                953,
                956
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
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
                956,
                1016
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
                          "name": "_i",
                          "optional": false,
                          "range": [
                            990,
                            992
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            995,
                            997
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 33
                            },
                            "start": {
                              "column": 17,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          990,
                          997
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      986,
                      998
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  976,
                  1016
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 34,
                    "line": 32
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "range": [
                      960,
                      974
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 32
                      },
                      "start": {
                        "column": 18,
                        "line": 32
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    957,
                    974
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 32
                    },
                    "start": {
                      "column": 15,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 14,
                  "line": 32
                }
              }
            },
            "range": [
              946,
              1016
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "range": [
                1028,
                1038
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
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
                1038,
                1081
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
                          "name": "_i",
                          "optional": false,
                          "range": [
                            1055,
                            1057
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            1060,
                            1062
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 36
                            },
                            "start": {
                              "column": 17,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1055,
                          1062
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 36
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1051,
                      1063
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  1041,
                  1081
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 24,
                    "line": 35
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 21,
                  "line": 35
                }
              }
            },
            "range": [
              1021,
              1081
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "range": [
          937,
          939
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 31
          },
          "start": {
            "column": 6,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        931,
        1083
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
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
      "column": 1,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
