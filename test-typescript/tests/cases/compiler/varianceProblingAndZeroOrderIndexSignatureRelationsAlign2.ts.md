__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2025
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Either",
        "optional": false,
        "range": [
          5,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                24,
                30
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "range": [
                      25,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    25,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      28,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    28,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Left",
              "optional": false,
              "range": [
                20,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "range": [
              20,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                38,
                44
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "range": [
                      39,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 1
                      },
                      "start": {
                        "column": 39,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    39,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 1
                    },
                    "start": {
                      "column": 39,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      42,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 1
                      },
                      "start": {
                        "column": 42,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    42,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 1
                    },
                    "start": {
                      "column": 42,
                      "line": 1
                    }
                  }
                }
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
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Right",
              "optional": false,
              "range": [
                33,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "range": [
              33,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          }
        ],
        "range": [
          20,
          44
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          17
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        45
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 1
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
          64,
          402
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "range": [
                79,
                83
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              },
              "range": [
                83,
                91
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'Left'",
                  "value": "Left",
                  "range": [
                    85,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                },
                "range": [
                  85,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "'Left'",
              "value": "Left",
              "range": [
                94,
                100
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 4
                }
              }
            },
            "range": [
              70,
              100
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "range": [
                114,
                116
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              },
              "range": [
                117,
                120
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    119,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                },
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              }
            },
            "value": null,
            "range": [
              105,
              120
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_L",
              "optional": false,
              "range": [
                134,
                136
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              },
              "range": [
                137,
                140
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "range": [
                    139,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                },
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              125,
              140
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                145,
                156
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                156,
                178
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  176,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 35,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 7
                        },
                        "start": {
                          "column": 30,
                          "line": 7
                        }
                      },
                      "range": [
                        171,
                        174
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "range": [
                            173,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 7
                            },
                            "start": {
                              "column": 32,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          173,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 7
                          },
                          "start": {
                            "column": 32,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      166,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 25,
                        "line": 7
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    157,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "range": [
              145,
              178
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              "name": "map",
              "optional": false,
              "range": [
                245,
                248
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                248,
                314
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ThisExpression",
                        "range": [
                          297,
                          301
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 10
                          },
                          "start": {
                            "column": 13,
                            "line": 10
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          305,
                          308
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 21,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        297,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 13,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      290,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 6,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  282,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 41,
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    },
                    "range": [
                      253,
                      266
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 9
                              },
                              "start": {
                                "column": 16,
                                "line": 9
                              }
                            },
                            "range": [
                              257,
                              260
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  259,
                                  260
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                259,
                                260
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
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
                            256,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 15,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 9
                          },
                          "start": {
                            "column": 21,
                            "line": 9
                          }
                        },
                        "range": [
                          262,
                          266
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              265,
                              266
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
                          "range": [
                            265,
                            266
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
                        }
                      },
                      "range": [
                        255,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 9
                        },
                        "start": {
                          "column": 14,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    252,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                },
                "range": [
                  267,
                  281
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      275,
                      281
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "range": [
                            276,
                            277
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
                        "range": [
                          276,
                          277
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
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            279,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 9
                            },
                            "start": {
                              "column": 38,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          279,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 9
                          },
                          "start": {
                            "column": 38,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 9
                      },
                      "start": {
                        "column": 34,
                        "line": 9
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "range": [
                      269,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 28,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    269,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 9
                    },
                    "start": {
                      "column": 28,
                      "line": 9
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                },
                "range": [
                  248,
                  251
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        249,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      249,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              }
            },
            "range": [
              245,
              314
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
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
              "name": "ap",
              "optional": false,
              "range": [
                319,
                321
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 12
                },
                "start": {
                  "column": 4,
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
                321,
                400
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          383,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          391,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 13
                          },
                          "start": {
                            "column": 21,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        383,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      376,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 6,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  368,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 53,
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
                  "name": "fab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    },
                    "range": [
                      328,
                      352
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          336,
                          352
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L",
                              "optional": false,
                              "range": [
                                337,
                                338
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 12
                                },
                                "start": {
                                  "column": 22,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              337,
                              338
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 12
                              },
                              "start": {
                                "column": 22,
                                "line": 12
                              }
                            }
                          },
                          {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 12
                                    }
                                  },
                                  "range": [
                                    342,
                                    345
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        344,
                                        345
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "range": [
                                      344,
                                      345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 12
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  341,
                                  345
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 26,
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
                                  "column": 32,
                                  "line": 12
                                }
                              },
                              "range": [
                                347,
                                351
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    350,
                                    351
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 12
                                    }
                                  }
                                },
                                "range": [
                                  350,
                                  351
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              340,
                              351
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 12
                              },
                              "start": {
                                "column": 25,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 12
                          },
                          "start": {
                            "column": 21,
                            "line": 12
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Either",
                        "optional": false,
                        "range": [
                          330,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        330,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    325,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 12
                  },
                  "start": {
                    "column": 38,
                    "line": 12
                  }
                },
                "range": [
                  353,
                  367
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      361,
                      367
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "range": [
                            362,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 12
                            },
                            "start": {
                              "column": 47,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          362,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 12
                          },
                          "start": {
                            "column": 47,
                            "line": 12
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            365,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 12
                            },
                            "start": {
                              "column": 50,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          365,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 12
                          },
                          "start": {
                            "column": 50,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 12
                      },
                      "start": {
                        "column": 46,
                        "line": 12
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "range": [
                      355,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 12
                      },
                      "start": {
                        "column": 40,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    355,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 12
                    },
                    "start": {
                      "column": 40,
                      "line": 12
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 12
                  },
                  "start": {
                    "column": 6,
                    "line": 12
                  }
                },
                "range": [
                  321,
                  324
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        322,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 12
                        },
                        "start": {
                          "column": 7,
                          "line": 12
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      322,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 12
                      },
                      "start": {
                        "column": 7,
                        "line": 12
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            "range": [
              319,
              400
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
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
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Left",
        "optional": false,
        "range": [
          53,
          57
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          57,
          63
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "range": [
                58,
                59
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              58,
              59
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              61,
              62
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        47,
        402
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          422,
          714
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "range": [
                437,
                441
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              },
              "range": [
                441,
                450
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'Right'",
                  "value": "Right",
                  "range": [
                    443,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 18
                    },
                    "start": {
                      "column": 19,
                      "line": 18
                    }
                  }
                },
                "range": [
                  443,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
                    "line": 18
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "'Right'",
              "value": "Right",
              "range": [
                453,
                460
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 18
                },
                "start": {
                  "column": 29,
                  "line": 18
                }
              }
            },
            "range": [
              428,
              460
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "range": [
                474,
                476
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 19
                }
              },
              "range": [
                477,
                480
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    479,
                    480
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
                  479,
                  480
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
              }
            },
            "value": null,
            "range": [
              465,
              480
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_L",
              "optional": false,
              "range": [
                494,
                496
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              },
              "range": [
                497,
                500
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "range": [
                    499,
                    500
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 20
                    },
                    "start": {
                      "column": 18,
                      "line": 20
                    }
                  }
                },
                "range": [
                  499,
                  500
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
                    "line": 20
                  }
                }
              }
            },
            "value": null,
            "range": [
              485,
              500
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                505,
                516
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                516,
                538
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  536,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 21
                  },
                  "start": {
                    "column": 35,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 21
                        },
                        "start": {
                          "column": 30,
                          "line": 21
                        }
                      },
                      "range": [
                        531,
                        534
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            533,
                            534
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
                        "range": [
                          533,
                          534
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
                      }
                    },
                    "range": [
                      526,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 21
                      },
                      "start": {
                        "column": 25,
                        "line": 21
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    517,
                    534
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 21
                }
              }
            },
            "range": [
              505,
              538
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
              "name": "map",
              "optional": false,
              "range": [
                543,
                546
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                546,
                625
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  607,
                                  611
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 23
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "range": [
                                  612,
                                  617
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                607,
                                617
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 23
                                },
                                "start": {
                                  "column": 25,
                                  "line": 23
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "range": [
                              605,
                              606
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 23
                              },
                              "start": {
                                "column": 23,
                                "line": 23
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            605,
                            618
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 23
                            },
                            "start": {
                              "column": 23,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Right",
                        "optional": false,
                        "range": [
                          599,
                          604
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        595,
                        619
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 23
                        },
                        "start": {
                          "column": 13,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      588,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 23
                      },
                      "start": {
                        "column": 6,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  580,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 41,
                    "line": 22
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    },
                    "range": [
                      551,
                      564
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 22
                              },
                              "start": {
                                "column": 16,
                                "line": 22
                              }
                            },
                            "range": [
                              555,
                              558
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  557,
                                  558
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                557,
                                558
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
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
                            554,
                            558
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 22
                            },
                            "start": {
                              "column": 15,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 22
                          },
                          "start": {
                            "column": 21,
                            "line": 22
                          }
                        },
                        "range": [
                          560,
                          564
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              563,
                              564
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 22
                              },
                              "start": {
                                "column": 24,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            563,
                            564
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
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
                        553,
                        564
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    550,
                    564
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 22
                  },
                  "start": {
                    "column": 26,
                    "line": 22
                  }
                },
                "range": [
                  565,
                  579
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      573,
                      579
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "range": [
                            574,
                            575
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 22
                            },
                            "start": {
                              "column": 35,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          574,
                          575
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 22
                          },
                          "start": {
                            "column": 35,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            577,
                            578
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 22
                            },
                            "start": {
                              "column": 38,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          577,
                          578
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 22
                          },
                          "start": {
                            "column": 38,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 22
                      },
                      "start": {
                        "column": 34,
                        "line": 22
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "range": [
                      567,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 22
                      },
                      "start": {
                        "column": 28,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    567,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 22
                    },
                    "start": {
                      "column": 28,
                      "line": 22
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                },
                "range": [
                  546,
                  549
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        547,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      547,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 7,
                  "line": 22
                }
              }
            },
            "range": [
              543,
              625
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 22
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
              "name": "ap",
              "optional": false,
              "range": [
                630,
                632
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
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
                632,
                712
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          694,
                          698
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 26
                          },
                          "start": {
                            "column": 13,
                            "line": 26
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          702,
                          705
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 26
                          },
                          "start": {
                            "column": 21,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        694,
                        705
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      687,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 26
                      },
                      "start": {
                        "column": 6,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  679,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 53,
                    "line": 25
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
                  "name": "fab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    },
                    "range": [
                      639,
                      663
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          647,
                          663
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L",
                              "optional": false,
                              "range": [
                                648,
                                649
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 25
                                },
                                "start": {
                                  "column": 22,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              648,
                              649
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 25
                              },
                              "start": {
                                "column": 22,
                                "line": 25
                              }
                            }
                          },
                          {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 25
                                    }
                                  },
                                  "range": [
                                    653,
                                    656
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        655,
                                        656
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "range": [
                                      655,
                                      656
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 25
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  652,
                                  656
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 25
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 25
                                },
                                "start": {
                                  "column": 32,
                                  "line": 25
                                }
                              },
                              "range": [
                                658,
                                662
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    661,
                                    662
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 25
                                    }
                                  }
                                },
                                "range": [
                                  661,
                                  662
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 25
                                  }
                                }
                              }
                            },
                            "range": [
                              651,
                              662
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 25
                              },
                              "start": {
                                "column": 25,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 25
                          },
                          "start": {
                            "column": 21,
                            "line": 25
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Either",
                        "optional": false,
                        "range": [
                          641,
                          647
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
                      "range": [
                        641,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    636,
                    663
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 25
                  },
                  "start": {
                    "column": 38,
                    "line": 25
                  }
                },
                "range": [
                  664,
                  678
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      672,
                      678
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "range": [
                            673,
                            674
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 25
                            },
                            "start": {
                              "column": 47,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          673,
                          674
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 25
                          },
                          "start": {
                            "column": 47,
                            "line": 25
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            676,
                            677
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 25
                            },
                            "start": {
                              "column": 50,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          676,
                          677
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 25
                          },
                          "start": {
                            "column": 50,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 25
                      },
                      "start": {
                        "column": 46,
                        "line": 25
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "range": [
                      666,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 25
                      },
                      "start": {
                        "column": 40,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    666,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 25
                    },
                    "start": {
                      "column": 40,
                      "line": 25
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 25
                  },
                  "start": {
                    "column": 6,
                    "line": 25
                  }
                },
                "range": [
                  632,
                  635
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        633,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 25
                        },
                        "start": {
                          "column": 7,
                          "line": 25
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      633,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 25
                      },
                      "start": {
                        "column": 7,
                        "line": 25
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 6,
                  "line": 25
                }
              }
            },
            "range": [
              630,
              712
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 18,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Right",
        "optional": false,
        "range": [
          410,
          415
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        },
        "range": [
          415,
          421
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "range": [
                416,
                417
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              416,
              417
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                419,
                420
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              419,
              420
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        404,
        714
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          750,
          1321
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "range": [
                763,
                765
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 31
                },
                "start": {
                  "column": 14,
                  "line": 31
                }
              },
              "range": [
                766,
                769
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    768,
                    769
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
                    }
                  }
                },
                "range": [
                  768,
                  769
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 31
                  },
                  "start": {
                    "column": 16,
                    "line": 31
                  }
                }
              }
            },
            "value": null,
            "range": [
              754,
              770
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_O",
              "optional": false,
              "range": [
                782,
                784
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 32
                }
              },
              "range": [
                785,
                788
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    787,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 16,
                      "line": 32
                    }
                  }
                },
                "range": [
                  787,
                  788
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 32
                  },
                  "start": {
                    "column": 16,
                    "line": 32
                  }
                }
              }
            },
            "value": null,
            "range": [
              773,
              789
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_I",
              "optional": false,
              "range": [
                801,
                803
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 33
                },
                "start": {
                  "column": 14,
                  "line": 33
                }
              },
              "range": [
                804,
                807
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    806,
                    807
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 33
                    },
                    "start": {
                      "column": 16,
                      "line": 33
                    }
                  }
                },
                "range": [
                  806,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 33
                  },
                  "start": {
                    "column": 16,
                    "line": 33
                  }
                }
              }
            },
            "value": null,
            "range": [
              792,
              808
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                811,
                822
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 34
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                822,
                1207
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1205,
                  1207
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 36
                        },
                        "start": {
                          "column": 17,
                          "line": 36
                        }
                      },
                      "range": [
                        881,
                        889
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          883,
                          889
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 36
                          },
                          "start": {
                            "column": 19,
                            "line": 36
                          }
                        }
                      }
                    },
                    "range": [
                      877,
                      889
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 36
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    868,
                    889
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "is",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
                        }
                      },
                      "range": [
                        937,
                        961
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 38
                                },
                                "start": {
                                  "column": 19,
                                  "line": 38
                                }
                              },
                              "range": [
                                941,
                                950
                              ],
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "range": [
                                  943,
                                  950
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 38
                                  }
                                }
                              }
                            },
                            "range": [
                              940,
                              950
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 38
                              },
                              "start": {
                                "column": 18,
                                "line": 38
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 38
                            },
                            "start": {
                              "column": 30,
                              "line": 38
                            }
                          },
                          "range": [
                            952,
                            961
                          ],
                          "typeAnnotation": {
                            "type": "TSTypePredicate",
                            "asserts": false,
                            "parameterName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "range": [
                                955,
                                956
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 38
                                },
                                "start": {
                                  "column": 33,
                                  "line": 38
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 38
                                },
                                "start": {
                                  "column": 38,
                                  "line": 38
                                }
                              },
                              "range": [
                                960,
                                961
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    960,
                                    961
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 38
                                    }
                                  }
                                },
                                "range": [
                                  960,
                                  961
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 38
                                  }
                                }
                              }
                            },
                            "range": [
                              955,
                              961
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 38
                              },
                              "start": {
                                "column": 33,
                                "line": 38
                              }
                            }
                          }
                        },
                        "range": [
                          939,
                          961
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 38
                          },
                          "start": {
                            "column": 17,
                            "line": 38
                          }
                        }
                      }
                    },
                    "range": [
                      935,
                      961
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    926,
                    961
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validate",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 40
                        },
                        "start": {
                          "column": 21,
                          "line": 40
                        }
                      },
                      "range": [
                        1061,
                        1107
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "input",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 40
                                },
                                "start": {
                                  "column": 29,
                                  "line": 40
                                }
                              },
                              "range": [
                                1069,
                                1072
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I",
                                  "optional": false,
                                  "range": [
                                    1071,
                                    1072
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 40
                                    }
                                  }
                                },
                                "range": [
                                  1071,
                                  1072
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 40
                                  }
                                }
                              }
                            },
                            "range": [
                              1064,
                              1072
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 40
                              },
                              "start": {
                                "column": 24,
                                "line": 40
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 40
                                },
                                "start": {
                                  "column": 41,
                                  "line": 40
                                }
                              },
                              "range": [
                                1081,
                                1087
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "range": [
                                    1083,
                                    1085
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 40
                                    }
                                  }
                                },
                                "range": [
                                  1083,
                                  1087
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 40
                                  }
                                }
                              }
                            },
                            "range": [
                              1074,
                              1087
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 40
                              },
                              "start": {
                                "column": 34,
                                "line": 40
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 40
                            },
                            "start": {
                              "column": 49,
                              "line": 40
                            }
                          },
                          "range": [
                            1089,
                            1107
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                1098,
                                1107
                              ],
                              "params": [
                                {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeLiteral",
                                    "members": [],
                                    "range": [
                                      1099,
                                      1101
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 40
                                      },
                                      "start": {
                                        "column": 59,
                                        "line": 40
                                      }
                                    }
                                  },
                                  "range": [
                                    1099,
                                    1103
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 59,
                                      "line": 40
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "range": [
                                      1105,
                                      1106
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 40
                                      },
                                      "start": {
                                        "column": 65,
                                        "line": 40
                                      }
                                    }
                                  },
                                  "range": [
                                    1105,
                                    1106
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 65,
                                      "line": 40
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 40
                                },
                                "start": {
                                  "column": 58,
                                  "line": 40
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Either",
                              "optional": false,
                              "range": [
                                1092,
                                1098
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 40
                                },
                                "start": {
                                  "column": 52,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              1092,
                              1107
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 40
                              },
                              "start": {
                                "column": 52,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          1063,
                          1107
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 40
                          },
                          "start": {
                            "column": 23,
                            "line": 40
                          }
                        }
                      }
                    },
                    "range": [
                      1053,
                      1107
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 40
                      },
                      "start": {
                        "column": 13,
                        "line": 40
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    1044,
                    1107
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 40
                    },
                    "start": {
                      "column": 4,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "encode",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 42
                        },
                        "start": {
                          "column": 19,
                          "line": 42
                        }
                      },
                      "range": [
                        1187,
                        1200
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 42
                                },
                                "start": {
                                  "column": 23,
                                  "line": 42
                                }
                              },
                              "range": [
                                1191,
                                1194
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    1193,
                                    1194
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 42
                                    }
                                  }
                                },
                                "range": [
                                  1193,
                                  1194
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 42
                                  }
                                }
                              }
                            },
                            "range": [
                              1190,
                              1194
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 42
                              },
                              "start": {
                                "column": 22,
                                "line": 42
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 42
                            },
                            "start": {
                              "column": 28,
                              "line": 42
                            }
                          },
                          "range": [
                            1196,
                            1200
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "range": [
                                1199,
                                1200
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 42
                                },
                                "start": {
                                  "column": 31,
                                  "line": 42
                                }
                              }
                            },
                            "range": [
                              1199,
                              1200
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 42
                              },
                              "start": {
                                "column": 31,
                                "line": 42
                              }
                            }
                          }
                        },
                        "range": [
                          1189,
                          1200
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 42
                          },
                          "start": {
                            "column": 21,
                            "line": 42
                          }
                        }
                      }
                    },
                    "range": [
                      1181,
                      1200
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 13,
                        "line": 42
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    1172,
                    1200
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 43
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "range": [
              811,
              1207
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 34
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
              "name": "decode",
              "optional": false,
              "range": [
                1266,
                1272
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 45
                },
                "start": {
                  "column": 2,
                  "line": 45
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
                1272,
                1319
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          1305,
                          1309
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 45
                          },
                          "start": {
                            "column": 41,
                            "line": 45
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1313,
                          1316
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 45
                          },
                          "start": {
                            "column": 49,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1305,
                        1316
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 45
                        },
                        "start": {
                          "column": 41,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1298,
                      1317
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 45
                      },
                      "start": {
                        "column": 34,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  1296,
                  1319
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 45
                  },
                  "start": {
                    "column": 32,
                    "line": 45
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 45
                      },
                      "start": {
                        "column": 10,
                        "line": 45
                      }
                    },
                    "range": [
                      1274,
                      1277
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          1276,
                          1277
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1276,
                        1277
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    1273,
                    1277
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 45
                    },
                    "start": {
                      "column": 9,
                      "line": 45
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 45
                  },
                  "start": {
                    "column": 14,
                    "line": 45
                  }
                },
                "range": [
                  1278,
                  1295
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1286,
                      1295
                    ],
                    "params": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "range": [
                            1287,
                            1289
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 45
                            },
                            "start": {
                              "column": 23,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1287,
                          1291
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 45
                          },
                          "start": {
                            "column": 23,
                            "line": 45
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1293,
                            1294
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 45
                            },
                            "start": {
                              "column": 29,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1293,
                          1294
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 45
                          },
                          "start": {
                            "column": 29,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 45
                      },
                      "start": {
                        "column": 22,
                        "line": 45
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "range": [
                      1280,
                      1286
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 45
                      },
                      "start": {
                        "column": 16,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1280,
                    1295
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 45
                    },
                    "start": {
                      "column": 16,
                      "line": 45
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 55,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 45
                }
              }
            },
            "range": [
              1266,
              1319
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 45
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 34,
            "line": 30
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "range": [
          722,
          726
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 30
          },
          "start": {
            "column": 6,
            "line": 30
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 30
          },
          "start": {
            "column": 10,
            "line": 30
          }
        },
        "range": [
          726,
          749
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                727,
                728
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              727,
              728
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 30
              },
              "start": {
                "column": 11,
                "line": 30
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  734,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
                  }
                }
              },
              "range": [
                734,
                735
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 30
                },
                "start": {
                  "column": 18,
                  "line": 30
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                730,
                731
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 14,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              730,
              735
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 30
              },
              "start": {
                "column": 14,
                "line": 30
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                741,
                748
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 30
                },
                "start": {
                  "column": 25,
                  "line": 30
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                737,
                738
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 21,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              737,
              748
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 30
              },
              "start": {
                "column": 21,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        716,
        1321
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1365,
          1367
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 44,
            "line": 48
          },
          "start": {
            "column": 42,
            "line": 48
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "range": [
              1345,
              1349
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 48
              },
              "start": {
                "column": 22,
                "line": 48
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1349,
              1364
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  1350,
                  1353
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 48
                  },
                  "start": {
                    "column": 27,
                    "line": 48
                  }
                }
              },
              {
                "type": "TSAnyKeyword",
                "range": [
                  1355,
                  1358
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 48
                  },
                  "start": {
                    "column": 32,
                    "line": 48
                  }
                }
              },
              {
                "type": "TSAnyKeyword",
                "range": [
                  1360,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 48
                  },
                  "start": {
                    "column": 37,
                    "line": 48
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 48
              },
              "start": {
                "column": 26,
                "line": 48
              }
            }
          },
          "range": [
            1345,
            1364
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 48
            },
            "start": {
              "column": 22,
              "line": 48
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Any",
        "optional": false,
        "range": [
          1333,
          1336
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 48
          },
          "start": {
            "column": 10,
            "line": 48
          }
        }
      },
      "range": [
        1323,
        1367
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeOf",
        "optional": false,
        "range": [
          1374,
          1380
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"_A\"",
            "value": "_A",
            "range": [
              1400,
              1404
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 50
              },
              "start": {
                "column": 31,
                "line": 50
              }
            }
          },
          "range": [
            1400,
            1404
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 50
            },
            "start": {
              "column": 31,
              "line": 50
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              1398,
              1399
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 50
              },
              "start": {
                "column": 29,
                "line": 50
              }
            }
          },
          "range": [
            1398,
            1399
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 50
            },
            "start": {
              "column": 29,
              "line": 50
            }
          }
        },
        "range": [
          1398,
          1405
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 50
          },
          "start": {
            "column": 29,
            "line": 50
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 50
          },
          "start": {
            "column": 11,
            "line": 50
          }
        },
        "range": [
          1380,
          1395
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
                "name": "Any",
                "optional": false,
                "range": [
                  1391,
                  1394
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 50
                  },
                  "start": {
                    "column": 22,
                    "line": 50
                  }
                }
              },
              "range": [
                1391,
                1394
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 50
                },
                "start": {
                  "column": 22,
                  "line": 50
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                1381,
                1382
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
            "out": false,
            "range": [
              1381,
              1394
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 50
              },
              "start": {
                "column": 12,
                "line": 50
              }
            }
          }
        ]
      },
      "range": [
        1369,
        1406
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToB",
        "optional": false,
        "range": [
          1413,
          1416
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                1483,
                1484
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 52
                },
                "start": {
                  "column": 75,
                  "line": 52
                }
              }
            },
            "range": [
              1483,
              1484
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 52
              },
              "start": {
                "column": 75,
                "line": 52
              }
            }
          },
          "range": [
            1477,
            1484
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 52
            },
            "start": {
              "column": 69,
              "line": 52
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            1472,
            1473
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 52
            },
            "start": {
              "column": 64,
              "line": 52
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1493,
              1499
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      1496,
                      1497
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 52
                      },
                      "start": {
                        "column": 88,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1496,
                    1497
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 52
                    },
                    "start": {
                      "column": 88,
                      "line": 52
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      1494,
                      1495
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 52
                      },
                      "start": {
                        "column": 86,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1494,
                    1495
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 52
                    },
                    "start": {
                      "column": 86,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1494,
                  1498
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 52
                  },
                  "start": {
                    "column": 86,
                    "line": 52
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 52
              },
              "start": {
                "column": 85,
                "line": 52
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeOf",
            "optional": false,
            "range": [
              1487,
              1493
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 52
              },
              "start": {
                "column": 79,
                "line": 52
              }
            }
          },
          "range": [
            1487,
            1499
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 52
            },
            "start": {
              "column": 79,
              "line": 52
            }
          }
        },
        "range": [
          1469,
          1501
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 52
          },
          "start": {
            "column": 61,
            "line": 52
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 52
          },
          "start": {
            "column": 8,
            "line": 52
          }
        },
        "range": [
          1416,
          1466
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1434,
                      1440
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 52
                      },
                      "start": {
                        "column": 26,
                        "line": 52
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1443,
                      1449
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 52
                      },
                      "start": {
                        "column": 35,
                        "line": 52
                      }
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      1452,
                      1458
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 52
                      },
                      "start": {
                        "column": 44,
                        "line": 52
                      }
                    }
                  }
                ],
                "range": [
                  1434,
                  1458
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 52
                  },
                  "start": {
                    "column": 26,
                    "line": 52
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "range": [
                  1429,
                  1430
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 52
                  },
                  "start": {
                    "column": 21,
                    "line": 52
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Any",
                  "optional": false,
                  "range": [
                    1461,
                    1464
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 52
                    },
                    "start": {
                      "column": 53,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1461,
                  1464
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 52
                  },
                  "start": {
                    "column": 53,
                    "line": 52
                  }
                }
              },
              "range": [
                1427,
                1465
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 52
                },
                "start": {
                  "column": 19,
                  "line": 52
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                1417,
                1418
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 52
                },
                "start": {
                  "column": 9,
                  "line": 52
                }
              }
            },
            "out": false,
            "range": [
              1417,
              1465
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 52
              },
              "start": {
                "column": 9,
                "line": 52
              }
            }
          }
        ]
      },
      "range": [
        1408,
        1502
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToA",
        "optional": false,
        "range": [
          1508,
          1511
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 53
          },
          "start": {
            "column": 5,
            "line": 53
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                1531,
                1532
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 53
                },
                "start": {
                  "column": 28,
                  "line": 53
                }
              }
            },
            "range": [
              1531,
              1532
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 53
              },
              "start": {
                "column": 28,
                "line": 53
              }
            }
          },
          "range": [
            1525,
            1532
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 53
            },
            "start": {
              "column": 22,
              "line": 53
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            1520,
            1521
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 53
            },
            "start": {
              "column": 17,
              "line": 53
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1539,
              1545
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      1542,
                      1543
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 53
                      },
                      "start": {
                        "column": 39,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1542,
                    1543
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 53
                    },
                    "start": {
                      "column": 39,
                      "line": 53
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      1540,
                      1541
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 53
                      },
                      "start": {
                        "column": 37,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1540,
                    1541
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 53
                    },
                    "start": {
                      "column": 37,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1540,
                  1544
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 53
                  },
                  "start": {
                    "column": 37,
                    "line": 53
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 53
              },
              "start": {
                "column": 36,
                "line": 53
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "range": [
              1535,
              1539
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 53
              },
              "start": {
                "column": 32,
                "line": 53
              }
            }
          },
          "range": [
            1535,
            1545
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 53
            },
            "start": {
              "column": 32,
              "line": 53
            }
          }
        },
        "range": [
          1517,
          1547
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 53
          },
          "start": {
            "column": 14,
            "line": 53
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 53
          },
          "start": {
            "column": 8,
            "line": 53
          }
        },
        "range": [
          1511,
          1514
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                1512,
                1513
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 53
                },
                "start": {
                  "column": 9,
                  "line": 53
                }
              }
            },
            "out": false,
            "range": [
              1512,
              1513
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 53
              },
              "start": {
                "column": 9,
                "line": 53
              }
            }
          }
        ]
      },
      "range": [
        1503,
        1548
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NeededInfo",
        "optional": false,
        "range": [
          1555,
          1565
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 55
          },
          "start": {
            "column": 5,
            "line": 55
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
              "name": "ASchema",
              "optional": false,
              "range": [
                1596,
                1603
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 56
                },
                "start": {
                  "column": 2,
                  "line": 56
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
                  "line": 56
                },
                "start": {
                  "column": 9,
                  "line": 56
                }
              },
              "range": [
                1603,
                1627
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1608,
                    1627
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyNamespaceSchema",
                        "optional": false,
                        "range": [
                          1609,
                          1626
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 56
                          },
                          "start": {
                            "column": 15,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1609,
                        1626
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 56
                        },
                        "start": {
                          "column": 15,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 56
                    },
                    "start": {
                      "column": 14,
                      "line": 56
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToA",
                  "optional": false,
                  "range": [
                    1605,
                    1608
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 56
                    },
                    "start": {
                      "column": 11,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1605,
                  1627
                ],
                "loc": {
                  "end": {
                    "column": 33,
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
              1596,
              1628
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 56
              },
              "start": {
                "column": 2,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1592,
          1630
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 42,
            "line": 55
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 55
          },
          "start": {
            "column": 15,
            "line": 55
          }
        },
        "range": [
          1565,
          1589
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                1586,
                1588
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 55
                },
                "start": {
                  "column": 36,
                  "line": 55
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyNamespaceSchema",
              "optional": false,
              "range": [
                1566,
                1583
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 55
                },
                "start": {
                  "column": 16,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              1566,
              1588
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 55
              },
              "start": {
                "column": 16,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        1550,
        1631
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1633,
        1691
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyInfo",
          "optional": false,
          "range": [
            1645,
            1651
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 59
            },
            "start": {
              "column": 12,
              "line": 59
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1664,
              1690
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1668,
                    1689
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "initialize",
                            "optional": false,
                            "range": [
                              1671,
                              1681
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 59
                              },
                              "start": {
                                "column": 38,
                                "line": 59
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
                                "column": 53,
                                "line": 59
                              },
                              "start": {
                                "column": 48,
                                "line": 59
                              }
                            },
                            "range": [
                              1681,
                              1686
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                1683,
                                1686
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 59
                                },
                                "start": {
                                  "column": 50,
                                  "line": 59
                                }
                              }
                            }
                          },
                          "range": [
                            1671,
                            1686
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 59
                            },
                            "start": {
                              "column": 38,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "range": [
                        1669,
                        1688
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 59
                        },
                        "start": {
                          "column": 36,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 59
                    },
                    "start": {
                      "column": 35,
                      "line": 59
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToB",
                  "optional": false,
                  "range": [
                    1665,
                    1668
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 59
                    },
                    "start": {
                      "column": 32,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1665,
                  1689
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 59
                  },
                  "start": {
                    "column": 32,
                    "line": 59
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 59
              },
              "start": {
                "column": 31,
                "line": 59
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NeededInfo",
            "optional": false,
            "range": [
              1654,
              1664
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 59
              },
              "start": {
                "column": 21,
                "line": 59
              }
            }
          },
          "range": [
            1654,
            1690
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 59
            },
            "start": {
              "column": 21,
              "line": 59
            }
          }
        },
        "range": [
          1640,
          1691
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 59
          },
          "start": {
            "column": 7,
            "line": 59
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 58,
          "line": 59
        },
        "start": {
          "column": 0,
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
            "name": "tmp1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 61
                },
                "start": {
                  "column": 10,
                  "line": 61
                }
              },
              "range": [
                1703,
                1711
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyInfo",
                  "optional": false,
                  "range": [
                    1705,
                    1711
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 61
                    },
                    "start": {
                      "column": 12,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1705,
                  1711
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 61
                  },
                  "start": {
                    "column": 12,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1699,
              1711
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 61
              },
              "start": {
                "column": 6,
                "line": 61
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1714,
                1718
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 61
                },
                "start": {
                  "column": 21,
                  "line": 61
                }
              }
            },
            "range": [
              1714,
              1719
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 61
              },
              "start": {
                "column": 21,
                "line": 61
              }
            }
          },
          "range": [
            1699,
            1719
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 61
            },
            "start": {
              "column": 6,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1693,
        1720
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1763,
          1765
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 62
          },
          "start": {
            "column": 42,
            "line": 62
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tmp2",
        "optional": false,
        "range": [
          1730,
          1734
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 62
              },
              "start": {
                "column": 37,
                "line": 62
              }
            },
            "range": [
              1758,
              1761
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "range": [
                  1760,
                  1761
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 62
                  },
                  "start": {
                    "column": 39,
                    "line": 62
                  }
                }
              },
              "range": [
                1760,
                1761
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 62
                },
                "start": {
                  "column": 39,
                  "line": 62
                }
              }
            }
          },
          "range": [
            1757,
            1761
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 62
            },
            "start": {
              "column": 36,
              "line": 62
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 62
          },
          "start": {
            "column": 13,
            "line": 62
          }
        },
        "range": [
          1734,
          1756
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
                "name": "NeededInfo",
                "optional": false,
                "range": [
                  1745,
                  1755
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 62
                  },
                  "start": {
                    "column": 24,
                    "line": 62
                  }
                }
              },
              "range": [
                1745,
                1755
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 62
                },
                "start": {
                  "column": 24,
                  "line": 62
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                1735,
                1736
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 62
                },
                "start": {
                  "column": 14,
                  "line": 62
                }
              }
            },
            "out": false,
            "range": [
              1735,
              1755
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 62
              },
              "start": {
                "column": 14,
                "line": 62
              }
            }
          }
        ]
      },
      "range": [
        1721,
        1765
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1939,
          1941
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 37,
            "line": 65
          },
          "start": {
            "column": 35,
            "line": 65
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Server",
        "optional": false,
        "range": [
          1910,
          1916
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 65
          },
          "start": {
            "column": 6,
            "line": 65
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 65
          },
          "start": {
            "column": 12,
            "line": 65
          }
        },
        "range": [
          1916,
          1938
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
                "name": "NeededInfo",
                "optional": false,
                "range": [
                  1927,
                  1937
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 65
                  },
                  "start": {
                    "column": 23,
                    "line": 65
                  }
                }
              },
              "range": [
                1927,
                1937
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 65
                },
                "start": {
                  "column": 23,
                  "line": 65
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                1917,
                1918
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 65
                },
                "start": {
                  "column": 13,
                  "line": 65
                }
              }
            },
            "out": false,
            "range": [
              1917,
              1937
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 65
              },
              "start": {
                "column": 13,
                "line": 65
              }
            }
          }
        ]
      },
      "range": [
        1904,
        1941
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1942,
        1989
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            1987,
            1989
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 47,
              "line": 66
            },
            "start": {
              "column": 45,
              "line": 66
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyServer",
          "optional": false,
          "range": [
            1955,
            1963
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 66
            },
            "start": {
              "column": 13,
              "line": 66
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Server",
          "optional": false,
          "range": [
            1972,
            1978
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 66
            },
            "start": {
              "column": 30,
              "line": 66
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1978,
            1986
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyInfo",
                "optional": false,
                "range": [
                  1979,
                  1985
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 66
                  },
                  "start": {
                    "column": 37,
                    "line": 66
                  }
                }
              },
              "range": [
                1979,
                1985
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 66
                },
                "start": {
                  "column": 37,
                  "line": 66
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 66
            },
            "start": {
              "column": 36,
              "line": 66
            }
          }
        },
        "range": [
          1949,
          1989
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 66
          },
          "start": {
            "column": 7,
            "line": 66
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 47,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 83,
      "line": 66
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
