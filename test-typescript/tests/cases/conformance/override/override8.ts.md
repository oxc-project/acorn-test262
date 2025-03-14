__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    386
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          25
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
              "name": "a",
              "optional": false,
              "range": [
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                15,
                23
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  17,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              14,
              23
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        25
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          45,
          125
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                51,
                62
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                62,
                123
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          109,
                          114
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
                      "range": [
                        109,
                        116
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
                      109,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  99,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 52,
                    "line": 6
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 24,
                          "line": 6
                        }
                      },
                      "range": [
                        71,
                        79
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          73,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 6
                          },
                          "start": {
                            "column": 26,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      70,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    63,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 6
                        },
                        "start": {
                          "column": 42,
                          "line": 6
                        }
                      },
                      "range": [
                        89,
                        97
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          91,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 6
                          },
                          "start": {
                            "column": 44,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      88,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 6
                      },
                      "start": {
                        "column": 41,
                        "line": 6
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    81,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 6
                    },
                    "start": {
                      "column": 34,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              51,
              123
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 18,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          33,
          34
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          43,
          44
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
      "range": [
        27,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          136,
          182
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                142,
                153
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                153,
                180
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  172,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 34,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 12
                        },
                        "start": {
                          "column": 24,
                          "line": 12
                        }
                      },
                      "range": [
                        162,
                        170
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          164,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 12
                          },
                          "start": {
                            "column": 26,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      161,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 12
                      },
                      "start": {
                        "column": 23,
                        "line": 12
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    154,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              142,
              180
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
            "column": 9,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "range": [
          133,
          135
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        127,
        182
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          204,
          266
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                210,
                221
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                221,
                264
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            256,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          250,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        250,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      250,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  240,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 34,
                    "line": 18
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      },
                      "range": [
                        230,
                        238
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          232,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 18
                          },
                          "start": {
                            "column": 26,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      229,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 23,
                        "line": 18
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    222,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              210,
              264
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
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
            "line": 21
          },
          "start": {
            "column": 20,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DD",
        "optional": false,
        "range": [
          190,
          192
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "range": [
          201,
          203
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "range": [
        184,
        266
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
          289,
          386
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                302,
                303
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              },
              "range": [
                303,
                311
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  305,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              }
            },
            "value": null,
            "range": [
              295,
              312
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
                318,
                329
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
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
                329,
                384
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            357,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 27
                            },
                            "start": {
                              "column": 14,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          351,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        351,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      351,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
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
                          "type": "ThisExpression",
                          "range": [
                            368,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 28
                            },
                            "start": {
                              "column": 8,
                              "line": 28
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
                            373,
                            374
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 28
                            },
                            "start": {
                              "column": 13,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          368,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          377,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 28
                          },
                          "start": {
                            "column": 17,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        368,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      368,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  341,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 27,
                    "line": 26
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    },
                    "range": [
                      331,
                      339
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        333,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 26
                        },
                        "start": {
                          "column": 19,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    330,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 26
                    },
                    "start": {
                      "column": 16,
                      "line": 26
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 26
                }
              }
            },
            "range": [
              318,
              384
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 21,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DDD",
        "optional": false,
        "range": [
          274,
          277
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 23
          },
          "start": {
            "column": 6,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "range": [
          286,
          288
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 23
          },
          "start": {
            "column": 18,
            "line": 23
          }
        }
      },
      "range": [
        268,
        386
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
