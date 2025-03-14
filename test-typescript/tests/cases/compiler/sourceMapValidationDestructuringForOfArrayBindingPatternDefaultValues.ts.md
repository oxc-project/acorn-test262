__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2817
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
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                49
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
                        27,
                        30
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
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 2
                            },
                            "start": {
                              "column": 11,
                              "line": 2
                            }
                          },
                          "range": [
                            34,
                            39
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              36,
                              39
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 2
                              },
                              "start": {
                                "column": 13,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          31,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
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
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 19,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  21,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              49
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
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
            49
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "range": [
          55,
          60
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "range": [
              64,
              70
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              72,
              78
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              80,
              86
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            }
          }
        ],
        "range": [
          63,
          87
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        }
      },
      "range": [
        50,
        88
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "range": [
          94,
          111
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "range": [
              115,
              121
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
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "range": [
                  124,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 35,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              123,
              139
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          }
        ],
        "range": [
          114,
          140
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        }
      },
      "range": [
        89,
        141
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              },
              "range": [
                153,
                160
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    155,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                },
                "range": [
                  155,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              147,
              160
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  164,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  167,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mowing\"",
                "value": "mowing",
                "range": [
                  176,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              163,
              185
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          },
          "range": [
            147,
            185
          ],
          "loc": {
            "end": {
              "column": 42,
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
      "kind": "let",
      "range": [
        143,
        186
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              },
              "range": [
                197,
                204
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    199,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "range": [
                  199,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              191,
              204
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  211,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  222,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 35,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              207,
              233
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          },
          "range": [
            191,
            233
          ],
          "loc": {
            "end": {
              "column": 46,
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
      "kind": "let",
      "range": [
        187,
        234
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "robots",
            "optional": false,
            "range": [
              239,
              245
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "robotA",
                "optional": false,
                "range": [
                  249,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "robotB",
                "optional": false,
                "range": [
                  257,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              248,
              264
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          },
          "range": [
            239,
            264
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        235,
        265
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 9
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "robots",
              "optional": false,
              "range": [
                300,
                306
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              293,
              307
            ],
            "loc": {
              "end": {
                "column": 18,
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
          287,
          309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 21,
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
        "name": "getRobots",
        "optional": false,
        "range": [
          275,
          284
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        266,
        309
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              },
              "range": [
                326,
                345
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    328,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                },
                "range": [
                  328,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              315,
              345
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  349,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 14
                  },
                  "start": {
                    "column": 38,
                    "line": 14
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"mowing\"",
                    "value": "mowing",
                    "range": [
                      359,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 14
                      },
                      "start": {
                        "column": 48,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      369,
                      371
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 14
                      },
                      "start": {
                        "column": 58,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  358,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 14
                  },
                  "start": {
                    "column": 47,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              348,
              373
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 14
              },
              "start": {
                "column": 37,
                "line": 14
              }
            }
          },
          "range": [
            315,
            373
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        311,
        374
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              },
              "range": [
                390,
                409
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    392,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                "range": [
                  392,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              379,
              409
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  413,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 15
                  },
                  "start": {
                    "column": 38,
                    "line": 15
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"trimming\"",
                    "value": "trimming",
                    "range": [
                      425,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 15
                      },
                      "start": {
                        "column": 50,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"edging\"",
                    "value": "edging",
                    "range": [
                      437,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 15
                      },
                      "start": {
                        "column": 62,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  424,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 15
                  },
                  "start": {
                    "column": 49,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              412,
              447
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 15
              },
              "start": {
                "column": 37,
                "line": 15
              }
            }
          },
          "range": [
            379,
            447
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        375,
        448
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 15
        },
        "start": {
          "column": 0,
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
            "name": "multiRobots",
            "optional": false,
            "range": [
              453,
              464
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotA",
                "optional": false,
                "range": [
                  468,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotB",
                "optional": false,
                "range": [
                  481,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              467,
              493
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 16
              },
              "start": {
                "column": 18,
                "line": 16
              }
            }
          },
          "range": [
            453,
            493
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        449,
        494
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobots",
              "optional": false,
              "range": [
                534,
                545
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              527,
              546
            ],
            "loc": {
              "end": {
                "column": 23,
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
          521,
          548
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 26,
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
        "name": "getMultiRobots",
        "optional": false,
        "range": [
          504,
          518
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [],
      "range": [
        495,
        548
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    609,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
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
                    597,
                    604
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
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
                    605,
                    608
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  597,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                597,
                615
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
            "range": [
              597,
              616
            ],
            "loc": {
              "end": {
                "column": 23,
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
          591,
          618
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 41,
            "line": 21
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      562,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      570,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    562,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                559,
                579
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "init": null,
            "range": [
              559,
              579
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          555,
          579
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          583,
          589
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 21
          },
          "start": {
            "column": 33,
            "line": 21
          }
        }
      },
      "range": [
        550,
        618
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    683,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
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
                    671,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
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
                    679,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                },
                "range": [
                  671,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "range": [
                671,
                689
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              671,
              690
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          665,
          692
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 46,
            "line": 24
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      631,
                      636
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      639,
                      647
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    631,
                    647
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                628,
                648
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "init": null,
            "range": [
              628,
              648
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          624,
          648
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "range": [
            652,
            661
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 24
            },
            "start": {
              "column": 33,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          652,
          663
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 24
          },
          "start": {
            "column": 33,
            "line": 24
          }
        }
      },
      "range": [
        619,
        692
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    762,
                    767
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 16,
                      "line": 28
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
                    750,
                    757
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
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
                    758,
                    761
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 28
                    },
                    "start": {
                      "column": 12,
                      "line": 28
                    }
                  }
                },
                "range": [
                  750,
                  761
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
              },
              "optional": false,
              "range": [
                750,
                768
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              750,
              769
            ],
            "loc": {
              "end": {
                "column": 23,
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
          744,
          771
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 51,
            "line": 27
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      705,
                      710
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 27
                      },
                      "start": {
                        "column": 12,
                        "line": 27
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      713,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 27
                      },
                      "start": {
                        "column": 20,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    705,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 12,
                      "line": 27
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                702,
                722
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "init": null,
            "range": [
              702,
              722
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          698,
          722
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              727,
              733
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 27
              },
              "start": {
                "column": 34,
                "line": 27
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              735,
              741
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 27
              },
              "start": {
                "column": 42,
                "line": 27
              }
            }
          }
        ],
        "range": [
          726,
          742
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 27
          },
          "start": {
            "column": 33,
            "line": 27
          }
        }
      },
      "range": [
        693,
        771
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    911,
                    924
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
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
                    899,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
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
                    907,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 34
                    },
                    "start": {
                      "column": 12,
                      "line": 34
                    }
                  }
                },
                "range": [
                  899,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                899,
                925
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              899,
              926
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          893,
          928
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 42,
            "line": 33
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            790,
                            803
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 31
                            },
                            "start": {
                              "column": 4,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            806,
                            815
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 31
                            },
                            "start": {
                              "column": 20,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          790,
                          815
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 31
                          },
                          "start": {
                            "column": 4,
                            "line": 31
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            821,
                            836
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 32
                            },
                            "start": {
                              "column": 4,
                              "line": 32
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            839,
                            850
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 32
                            },
                            "start": {
                              "column": 22,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          821,
                          850
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 32
                          },
                          "start": {
                            "column": 4,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      784,
                      852
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 33
                      },
                      "start": {
                        "column": 12,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"skill1\"",
                        "value": "skill1",
                        "range": [
                          856,
                          864
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 33
                          },
                          "start": {
                            "column": 5,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"skill2\"",
                        "value": "skill2",
                        "range": [
                          866,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 33
                          },
                          "start": {
                            "column": 15,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "range": [
                      855,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    784,
                    875
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 30
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                781,
                876
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "init": null,
            "range": [
              781,
              876
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          777,
          876
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          880,
          891
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 33
          },
          "start": {
            "column": 29,
            "line": 33
          }
        }
      },
      "range": [
        772,
        928
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    1073,
                    1086
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 40
                    },
                    "start": {
                      "column": 16,
                      "line": 40
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
                    1061,
                    1068
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 40
                    },
                    "start": {
                      "column": 4,
                      "line": 40
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
                    1069,
                    1072
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 40
                    },
                    "start": {
                      "column": 12,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1061,
                  1072
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                1061,
                1087
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              1061,
              1088
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          1055,
          1090
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 47,
            "line": 39
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            947,
                            960
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
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            963,
                            972
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 37
                            },
                            "start": {
                              "column": 20,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          947,
                          972
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 37
                          },
                          "start": {
                            "column": 4,
                            "line": 37
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            978,
                            993
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 38
                            },
                            "start": {
                              "column": 4,
                              "line": 38
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            996,
                            1007
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 38
                            },
                            "start": {
                              "column": 22,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          978,
                          1007
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 38
                          },
                          "start": {
                            "column": 4,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      941,
                      1009
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 39
                      },
                      "start": {
                        "column": 12,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"skill1\"",
                        "value": "skill1",
                        "range": [
                          1013,
                          1021
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 39
                          },
                          "start": {
                            "column": 5,
                            "line": 39
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"skill2\"",
                        "value": "skill2",
                        "range": [
                          1023,
                          1031
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 39
                          },
                          "start": {
                            "column": 15,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      1012,
                      1032
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 39
                      },
                      "start": {
                        "column": 4,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    941,
                    1032
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 39
                    },
                    "start": {
                      "column": 12,
                      "line": 36
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                938,
                1033
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 39
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            },
            "init": null,
            "range": [
              938,
              1033
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 39
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          934,
          1033
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "range": [
            1037,
            1051
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 39
            },
            "start": {
              "column": 29,
              "line": 39
            }
          }
        },
        "optional": false,
        "range": [
          1037,
          1053
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 39
          },
          "start": {
            "column": 29,
            "line": 39
          }
        }
      },
      "range": [
        929,
        1090
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    1245,
                    1258
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 46
                    },
                    "start": {
                      "column": 16,
                      "line": 46
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
                    1233,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 46
                    },
                    "start": {
                      "column": 4,
                      "line": 46
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
                    1241,
                    1244
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 46
                    },
                    "start": {
                      "column": 12,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1233,
                  1244
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "range": [
                1233,
                1259
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              1233,
              1260
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          1227,
          1262
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 57,
            "line": 45
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            1109,
                            1122
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 43
                            },
                            "start": {
                              "column": 4,
                              "line": 43
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            1125,
                            1134
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 43
                            },
                            "start": {
                              "column": 20,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          1109,
                          1134
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 43
                          },
                          "start": {
                            "column": 4,
                            "line": 43
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            1140,
                            1155
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 44
                            },
                            "start": {
                              "column": 4,
                              "line": 44
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            1158,
                            1169
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 44
                            },
                            "start": {
                              "column": 22,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1140,
                          1169
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 44
                          },
                          "start": {
                            "column": 4,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      1103,
                      1171
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 45
                      },
                      "start": {
                        "column": 12,
                        "line": 42
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"skill1\"",
                        "value": "skill1",
                        "range": [
                          1175,
                          1183
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 45
                          },
                          "start": {
                            "column": 5,
                            "line": 45
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"skill2\"",
                        "value": "skill2",
                        "range": [
                          1185,
                          1193
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 45
                          },
                          "start": {
                            "column": 15,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "range": [
                      1174,
                      1194
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 45
                      },
                      "start": {
                        "column": 4,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1103,
                    1194
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 42
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1100,
                1195
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 45
                },
                "start": {
                  "column": 9,
                  "line": 42
                }
              }
            },
            "init": null,
            "range": [
              1100,
              1195
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 45
              },
              "start": {
                "column": 9,
                "line": 42
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1096,
          1195
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 45
          },
          "start": {
            "column": 5,
            "line": 42
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "range": [
              1200,
              1211
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 45
              },
              "start": {
                "column": 30,
                "line": 45
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1213,
              1224
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 45
              },
              "start": {
                "column": 43,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1199,
          1225
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 45
          },
          "start": {
            "column": 29,
            "line": 45
          }
        }
      },
      "range": [
        1091,
        1262
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1317,
                    1324
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 50
                    },
                    "start": {
                      "column": 16,
                      "line": 50
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
                    1305,
                    1312
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 50
                    },
                    "start": {
                      "column": 4,
                      "line": 50
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
                    1313,
                    1316
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 50
                    },
                    "start": {
                      "column": 12,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1305,
                  1316
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "range": [
                1305,
                1325
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1305,
              1326
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1299,
          1328
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 35,
            "line": 49
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1274,
                      1281
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 49
                      },
                      "start": {
                        "column": 10,
                        "line": 49
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1285,
                        1286
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 49
                        },
                        "start": {
                          "column": 21,
                          "line": 49
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1284,
                      1286
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 49
                      },
                      "start": {
                        "column": 20,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1274,
                    1286
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1273,
                1287
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 49
                },
                "start": {
                  "column": 9,
                  "line": 49
                }
              }
            },
            "init": null,
            "range": [
              1273,
              1287
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 49
              },
              "start": {
                "column": 9,
                "line": 49
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1269,
          1287
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 49
          },
          "start": {
            "column": 5,
            "line": 49
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          1291,
          1297
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 49
          },
          "start": {
            "column": 27,
            "line": 49
          }
        }
      },
      "range": [
        1264,
        1328
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1387,
                    1394
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 53
                    },
                    "start": {
                      "column": 16,
                      "line": 53
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
                    1375,
                    1382
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 53
                    },
                    "start": {
                      "column": 4,
                      "line": 53
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
                    1383,
                    1386
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 53
                    },
                    "start": {
                      "column": 12,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1375,
                  1386
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "range": [
                1375,
                1395
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1375,
              1396
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          1369,
          1398
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 40,
            "line": 52
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1339,
                      1346
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 52
                      },
                      "start": {
                        "column": 10,
                        "line": 52
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1350,
                        1351
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
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1349,
                      1351
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 52
                      },
                      "start": {
                        "column": 20,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1339,
                    1351
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 52
                    },
                    "start": {
                      "column": 10,
                      "line": 52
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1338,
                1352
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 52
                },
                "start": {
                  "column": 9,
                  "line": 52
                }
              }
            },
            "init": null,
            "range": [
              1338,
              1352
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 52
              },
              "start": {
                "column": 9,
                "line": 52
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1334,
          1352
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "range": [
            1356,
            1365
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 52
            },
            "start": {
              "column": 27,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          1356,
          1367
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 52
          },
          "start": {
            "column": 27,
            "line": 52
          }
        }
      },
      "range": [
        1329,
        1398
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1462,
                    1469
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 56
                    },
                    "start": {
                      "column": 16,
                      "line": 56
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
                    1450,
                    1457
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
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
                    1458,
                    1461
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 56
                    },
                    "start": {
                      "column": 12,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1450,
                  1461
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "range": [
                1450,
                1470
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1450,
              1471
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1444,
          1473
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 45,
            "line": 55
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1409,
                      1416
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 55
                      },
                      "start": {
                        "column": 10,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1420,
                        1421
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 55
                        },
                        "start": {
                          "column": 21,
                          "line": 55
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1419,
                      1421
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 55
                      },
                      "start": {
                        "column": 20,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1409,
                    1421
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 55
                    },
                    "start": {
                      "column": 10,
                      "line": 55
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1408,
                1422
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 55
                },
                "start": {
                  "column": 9,
                  "line": 55
                }
              }
            },
            "init": null,
            "range": [
              1408,
              1422
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 55
              },
              "start": {
                "column": 9,
                "line": 55
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1404,
          1422
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 55
          },
          "start": {
            "column": 5,
            "line": 55
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              1427,
              1433
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 55
              },
              "start": {
                "column": 28,
                "line": 55
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              1435,
              1441
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 55
              },
              "start": {
                "column": 36,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1426,
          1442
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 55
          },
          "start": {
            "column": 27,
            "line": 55
          }
        }
      },
      "range": [
        1399,
        1473
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1536,
                    1541
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 59
                    },
                    "start": {
                      "column": 16,
                      "line": 59
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
                    1524,
                    1531
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                  "name": "log",
                  "optional": false,
                  "range": [
                    1532,
                    1535
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 59
                    },
                    "start": {
                      "column": 12,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1524,
                  1535
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
              "optional": false,
              "range": [
                1524,
                1542
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1524,
              1543
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          1518,
          1545
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 44,
            "line": 58
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1484,
                      1489
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 58
                      },
                      "start": {
                        "column": 10,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      1492,
                      1500
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 58
                      },
                      "start": {
                        "column": 18,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1484,
                    1500
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 58
                    },
                    "start": {
                      "column": 10,
                      "line": 58
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1483,
                1501
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 58
                },
                "start": {
                  "column": 9,
                  "line": 58
                }
              }
            },
            "init": null,
            "range": [
              1483,
              1501
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 58
              },
              "start": {
                "column": 9,
                "line": 58
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1479,
          1501
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 58
          },
          "start": {
            "column": 5,
            "line": 58
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          1505,
          1516
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 58
          },
          "start": {
            "column": 31,
            "line": 58
          }
        }
      },
      "range": [
        1474,
        1545
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1613,
                    1618
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 62
                    },
                    "start": {
                      "column": 16,
                      "line": 62
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
                    1601,
                    1608
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 62
                    },
                    "start": {
                      "column": 4,
                      "line": 62
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
                    1609,
                    1612
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 62
                    },
                    "start": {
                      "column": 12,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1601,
                  1612
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              },
              "optional": false,
              "range": [
                1601,
                1619
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "range": [
              1601,
              1620
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1595,
          1622
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 49,
            "line": 61
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1556,
                      1561
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 61
                      },
                      "start": {
                        "column": 10,
                        "line": 61
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      1564,
                      1572
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 61
                      },
                      "start": {
                        "column": 18,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1556,
                    1572
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 61
                    },
                    "start": {
                      "column": 10,
                      "line": 61
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1555,
                1573
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 61
                },
                "start": {
                  "column": 9,
                  "line": 61
                }
              }
            },
            "init": null,
            "range": [
              1555,
              1573
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 61
              },
              "start": {
                "column": 9,
                "line": 61
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1551,
          1573
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 61
          },
          "start": {
            "column": 5,
            "line": 61
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "range": [
            1577,
            1591
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 61
            },
            "start": {
              "column": 31,
              "line": 61
            }
          }
        },
        "optional": false,
        "range": [
          1577,
          1593
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 61
          },
          "start": {
            "column": 31,
            "line": 61
          }
        }
      },
      "range": [
        1546,
        1622
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1700,
                    1705
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 65
                    },
                    "start": {
                      "column": 16,
                      "line": 65
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
                    1688,
                    1695
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 65
                    },
                    "start": {
                      "column": 4,
                      "line": 65
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
                    1696,
                    1699
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 65
                    },
                    "start": {
                      "column": 12,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1688,
                  1699
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "range": [
                1688,
                1706
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1688,
              1707
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1682,
          1709
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 59,
            "line": 64
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1633,
                      1638
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 64
                      },
                      "start": {
                        "column": 10,
                        "line": 64
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      1641,
                      1649
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 64
                      },
                      "start": {
                        "column": 18,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1633,
                    1649
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 64
                    },
                    "start": {
                      "column": 10,
                      "line": 64
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1632,
                1650
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 64
                },
                "start": {
                  "column": 9,
                  "line": 64
                }
              }
            },
            "init": null,
            "range": [
              1632,
              1650
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 64
              },
              "start": {
                "column": 9,
                "line": 64
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1628,
          1650
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 64
          },
          "start": {
            "column": 5,
            "line": 64
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "range": [
              1655,
              1666
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 64
              },
              "start": {
                "column": 32,
                "line": 64
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1668,
              1679
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 64
              },
              "start": {
                "column": 45,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1654,
          1680
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 64
          },
          "start": {
            "column": 31,
            "line": 64
          }
        }
      },
      "range": [
        1623,
        1709
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1803,
                    1809
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 69
                    },
                    "start": {
                      "column": 16,
                      "line": 69
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
                    1791,
                    1798
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 69
                    },
                    "start": {
                      "column": 4,
                      "line": 69
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
                    1799,
                    1802
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 69
                    },
                    "start": {
                      "column": 12,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1791,
                  1802
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 69
                  }
                }
              },
              "optional": false,
              "range": [
                1791,
                1810
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1791,
              1811
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "range": [
          1785,
          1813
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 74,
            "line": 68
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      1721,
                      1729
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 68
                      },
                      "start": {
                        "column": 10,
                        "line": 68
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1733,
                        1734
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 68
                        },
                        "start": {
                          "column": 22,
                          "line": 68
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1732,
                      1734
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 68
                      },
                      "start": {
                        "column": 21,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1721,
                    1734
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 68
                    },
                    "start": {
                      "column": 10,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "range": [
                      1736,
                      1742
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 68
                      },
                      "start": {
                        "column": 25,
                        "line": 68
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      1745,
                      1753
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 68
                      },
                      "start": {
                        "column": 34,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1736,
                    1753
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 68
                    },
                    "start": {
                      "column": 25,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "range": [
                      1755,
                      1762
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 68
                      },
                      "start": {
                        "column": 44,
                        "line": 68
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      1765,
                      1772
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 68
                      },
                      "start": {
                        "column": 54,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1755,
                    1772
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 68
                    },
                    "start": {
                      "column": 44,
                      "line": 68
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1720,
                1773
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 68
                },
                "start": {
                  "column": 9,
                  "line": 68
                }
              }
            },
            "init": null,
            "range": [
              1720,
              1773
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 68
              },
              "start": {
                "column": 9,
                "line": 68
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1716,
          1773
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          1777,
          1783
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 68
          },
          "start": {
            "column": 66,
            "line": 68
          }
        }
      },
      "range": [
        1711,
        1813
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1911,
                    1917
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 72
                    },
                    "start": {
                      "column": 16,
                      "line": 72
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
                    1899,
                    1906
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 72
                    },
                    "start": {
                      "column": 4,
                      "line": 72
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
                    1907,
                    1910
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 72
                    },
                    "start": {
                      "column": 12,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1899,
                  1910
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 72
                  },
                  "start": {
                    "column": 4,
                    "line": 72
                  }
                }
              },
              "optional": false,
              "range": [
                1899,
                1918
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              1899,
              1919
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "range": [
          1893,
          1921
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 79,
            "line": 71
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      1824,
                      1832
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 71
                      },
                      "start": {
                        "column": 10,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1836,
                        1837
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 71
                        },
                        "start": {
                          "column": 22,
                          "line": 71
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1835,
                      1837
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 71
                      },
                      "start": {
                        "column": 21,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1824,
                    1837
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "range": [
                      1839,
                      1845
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 71
                      },
                      "start": {
                        "column": 25,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      1848,
                      1856
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 71
                      },
                      "start": {
                        "column": 34,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1839,
                    1856
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 71
                    },
                    "start": {
                      "column": 25,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "range": [
                      1858,
                      1865
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 71
                      },
                      "start": {
                        "column": 44,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      1868,
                      1875
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 71
                      },
                      "start": {
                        "column": 54,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1858,
                    1875
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 71
                    },
                    "start": {
                      "column": 44,
                      "line": 71
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1823,
                1876
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 71
                },
                "start": {
                  "column": 9,
                  "line": 71
                }
              }
            },
            "init": null,
            "range": [
              1823,
              1876
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 71
              },
              "start": {
                "column": 9,
                "line": 71
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1819,
          1876
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 71
          },
          "start": {
            "column": 5,
            "line": 71
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "range": [
            1880,
            1889
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 71
            },
            "start": {
              "column": 66,
              "line": 71
            }
          }
        },
        "optional": false,
        "range": [
          1880,
          1891
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 71
          },
          "start": {
            "column": 66,
            "line": 71
          }
        }
      },
      "range": [
        1814,
        1921
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    2024,
                    2030
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 75
                    },
                    "start": {
                      "column": 16,
                      "line": 75
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
                    2012,
                    2019
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 75
                    },
                    "start": {
                      "column": 4,
                      "line": 75
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
                    2020,
                    2023
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 75
                    },
                    "start": {
                      "column": 12,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2012,
                  2023
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "optional": false,
              "range": [
                2012,
                2031
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              2012,
              2032
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          2006,
          2034
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 84,
            "line": 74
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      1932,
                      1940
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 74
                      },
                      "start": {
                        "column": 10,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1944,
                        1945
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 74
                        },
                        "start": {
                          "column": 22,
                          "line": 74
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1943,
                      1945
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 74
                      },
                      "start": {
                        "column": 21,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1932,
                    1945
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 74
                    },
                    "start": {
                      "column": 10,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "range": [
                      1947,
                      1953
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 74
                      },
                      "start": {
                        "column": 25,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      1956,
                      1964
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 74
                      },
                      "start": {
                        "column": 34,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1947,
                    1964
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 74
                    },
                    "start": {
                      "column": 25,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "range": [
                      1966,
                      1973
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 74
                      },
                      "start": {
                        "column": 44,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      1976,
                      1983
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 74
                      },
                      "start": {
                        "column": 54,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1966,
                    1983
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 74
                    },
                    "start": {
                      "column": 44,
                      "line": 74
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1931,
                1984
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 74
                },
                "start": {
                  "column": 9,
                  "line": 74
                }
              }
            },
            "init": null,
            "range": [
              1931,
              1984
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 74
              },
              "start": {
                "column": 9,
                "line": 74
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1927,
          1984
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 74
          },
          "start": {
            "column": 5,
            "line": 74
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              1989,
              1995
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 74
              },
              "start": {
                "column": 67,
                "line": 74
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              1997,
              2003
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 74
              },
              "start": {
                "column": 75,
                "line": 74
              }
            }
          }
        ],
        "range": [
          1988,
          2004
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 74
          },
          "start": {
            "column": 66,
            "line": 74
          }
        }
      },
      "range": [
        1922,
        2034
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2191,
                    2197
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 81
                    },
                    "start": {
                      "column": 16,
                      "line": 81
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
                    2179,
                    2186
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 81
                    },
                    "start": {
                      "column": 4,
                      "line": 81
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
                    2187,
                    2190
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 81
                    },
                    "start": {
                      "column": 12,
                      "line": 81
                    }
                  }
                },
                "range": [
                  2179,
                  2190
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              "optional": false,
              "range": [
                2179,
                2198
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 81
                },
                "start": {
                  "column": 4,
                  "line": 81
                }
              }
            },
            "range": [
              2179,
              2199
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          }
        ],
        "range": [
          2173,
          2201
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 82
          },
          "start": {
            "column": 42,
            "line": 80
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "range": [
                      2045,
                      2051
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 77
                      },
                      "start": {
                        "column": 10,
                        "line": 77
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2054,
                      2062
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 77
                      },
                      "start": {
                        "column": 19,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    2045,
                    2062
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 77
                    },
                    "start": {
                      "column": 10,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            2070,
                            2083
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 78
                            },
                            "start": {
                              "column": 4,
                              "line": 78
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2086,
                            2095
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 78
                            },
                            "start": {
                              "column": 20,
                              "line": 78
                            }
                          }
                        },
                        "range": [
                          2070,
                          2095
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 78
                          },
                          "start": {
                            "column": 4,
                            "line": 78
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            2101,
                            2116
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 79
                            },
                            "start": {
                              "column": 4,
                              "line": 79
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2119,
                            2130
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 79
                            },
                            "start": {
                              "column": 22,
                              "line": 79
                            }
                          }
                        },
                        "range": [
                          2101,
                          2130
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 79
                          },
                          "start": {
                            "column": 4,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2064,
                      2132
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 80
                      },
                      "start": {
                        "column": 29,
                        "line": 77
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"skill1\"",
                        "value": "skill1",
                        "range": [
                          2136,
                          2144
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 80
                          },
                          "start": {
                            "column": 5,
                            "line": 80
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"skill2\"",
                        "value": "skill2",
                        "range": [
                          2146,
                          2154
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 80
                          },
                          "start": {
                            "column": 15,
                            "line": 80
                          }
                        }
                      }
                    ],
                    "range": [
                      2135,
                      2155
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 80
                      },
                      "start": {
                        "column": 4,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    2064,
                    2155
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 80
                    },
                    "start": {
                      "column": 29,
                      "line": 77
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2044,
                2156
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 80
                },
                "start": {
                  "column": 9,
                  "line": 77
                }
              }
            },
            "init": null,
            "range": [
              2044,
              2156
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 80
              },
              "start": {
                "column": 9,
                "line": 77
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2040,
          2156
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 80
          },
          "start": {
            "column": 5,
            "line": 77
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          2160,
          2171
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 80
          },
          "start": {
            "column": 29,
            "line": 80
          }
        }
      },
      "range": [
        2035,
        2201
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2363,
                    2369
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 87
                    },
                    "start": {
                      "column": 16,
                      "line": 87
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
                    2351,
                    2358
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 87
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
                    2359,
                    2362
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 87
                    },
                    "start": {
                      "column": 12,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2351,
                  2362
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 87
                  },
                  "start": {
                    "column": 4,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "range": [
                2351,
                2370
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "range": [
              2351,
              2371
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "range": [
          2345,
          2373
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 47,
            "line": 86
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "range": [
                      2212,
                      2218
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 83
                      },
                      "start": {
                        "column": 10,
                        "line": 83
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2221,
                      2229
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 83
                      },
                      "start": {
                        "column": 19,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    2212,
                    2229
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 83
                    },
                    "start": {
                      "column": 10,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            2237,
                            2250
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 84
                            },
                            "start": {
                              "column": 4,
                              "line": 84
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2253,
                            2262
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 84
                            },
                            "start": {
                              "column": 20,
                              "line": 84
                            }
                          }
                        },
                        "range": [
                          2237,
                          2262
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 84
                          },
                          "start": {
                            "column": 4,
                            "line": 84
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            2268,
                            2283
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 85
                            },
                            "start": {
                              "column": 4,
                              "line": 85
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2286,
                            2297
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 85
                            },
                            "start": {
                              "column": 22,
                              "line": 85
                            }
                          }
                        },
                        "range": [
                          2268,
                          2297
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 85
                          },
                          "start": {
                            "column": 4,
                            "line": 85
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2231,
                      2299
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 86
                      },
                      "start": {
                        "column": 29,
                        "line": 83
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"skill1\"",
                        "value": "skill1",
                        "range": [
                          2303,
                          2311
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 86
                          },
                          "start": {
                            "column": 5,
                            "line": 86
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"skill2\"",
                        "value": "skill2",
                        "range": [
                          2313,
                          2321
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 86
                          },
                          "start": {
                            "column": 15,
                            "line": 86
                          }
                        }
                      }
                    ],
                    "range": [
                      2302,
                      2322
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 86
                      },
                      "start": {
                        "column": 4,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    2231,
                    2322
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 86
                    },
                    "start": {
                      "column": 29,
                      "line": 83
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2211,
                2323
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 86
                },
                "start": {
                  "column": 9,
                  "line": 83
                }
              }
            },
            "init": null,
            "range": [
              2211,
              2323
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 86
              },
              "start": {
                "column": 9,
                "line": 83
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2207,
          2323
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 86
          },
          "start": {
            "column": 5,
            "line": 83
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "range": [
            2327,
            2341
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 86
            },
            "start": {
              "column": 29,
              "line": 86
            }
          }
        },
        "optional": false,
        "range": [
          2327,
          2343
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 86
          },
          "start": {
            "column": 29,
            "line": 86
          }
        }
      },
      "range": [
        2202,
        2373
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2545,
                    2551
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 93
                    },
                    "start": {
                      "column": 16,
                      "line": 93
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
                    2533,
                    2540
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 93
                    },
                    "start": {
                      "column": 4,
                      "line": 93
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
                    2541,
                    2544
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 93
                    },
                    "start": {
                      "column": 12,
                      "line": 93
                    }
                  }
                },
                "range": [
                  2533,
                  2544
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 93
                  },
                  "start": {
                    "column": 4,
                    "line": 93
                  }
                }
              },
              "optional": false,
              "range": [
                2533,
                2552
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 93
                },
                "start": {
                  "column": 4,
                  "line": 93
                }
              }
            },
            "range": [
              2533,
              2553
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          }
        ],
        "range": [
          2527,
          2555
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 57,
            "line": 92
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "range": [
                      2384,
                      2390
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 89
                      },
                      "start": {
                        "column": 10,
                        "line": 89
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2393,
                      2401
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 89
                      },
                      "start": {
                        "column": 19,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2384,
                    2401
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 89
                    },
                    "start": {
                      "column": 10,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            2409,
                            2422
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 90
                            },
                            "start": {
                              "column": 4,
                              "line": 90
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2425,
                            2434
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 90
                            },
                            "start": {
                              "column": 20,
                              "line": 90
                            }
                          }
                        },
                        "range": [
                          2409,
                          2434
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 90
                          },
                          "start": {
                            "column": 4,
                            "line": 90
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            2440,
                            2455
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 91
                            },
                            "start": {
                              "column": 4,
                              "line": 91
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2458,
                            2469
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 91
                            },
                            "start": {
                              "column": 22,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          2440,
                          2469
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 91
                          },
                          "start": {
                            "column": 4,
                            "line": 91
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2403,
                      2471
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 92
                      },
                      "start": {
                        "column": 29,
                        "line": 89
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"skill1\"",
                        "value": "skill1",
                        "range": [
                          2475,
                          2483
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 92
                          },
                          "start": {
                            "column": 5,
                            "line": 92
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"skill2\"",
                        "value": "skill2",
                        "range": [
                          2485,
                          2493
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 92
                          },
                          "start": {
                            "column": 15,
                            "line": 92
                          }
                        }
                      }
                    ],
                    "range": [
                      2474,
                      2494
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 92
                      },
                      "start": {
                        "column": 4,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    2403,
                    2494
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 92
                    },
                    "start": {
                      "column": 29,
                      "line": 89
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2383,
                2495
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 92
                },
                "start": {
                  "column": 9,
                  "line": 89
                }
              }
            },
            "init": null,
            "range": [
              2383,
              2495
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 92
              },
              "start": {
                "column": 9,
                "line": 89
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2379,
          2495
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 92
          },
          "start": {
            "column": 5,
            "line": 89
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "range": [
              2500,
              2511
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 92
              },
              "start": {
                "column": 30,
                "line": 92
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              2513,
              2524
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 92
              },
              "start": {
                "column": 43,
                "line": 92
              }
            }
          }
        ],
        "range": [
          2499,
          2525
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 92
          },
          "start": {
            "column": 29,
            "line": 92
          }
        }
      },
      "range": [
        2374,
        2555
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2626,
                    2634
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 97
                    },
                    "start": {
                      "column": 16,
                      "line": 97
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
                    2614,
                    2621
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 97
                    },
                    "start": {
                      "column": 4,
                      "line": 97
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
                    2622,
                    2625
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 97
                    },
                    "start": {
                      "column": 12,
                      "line": 97
                    }
                  }
                },
                "range": [
                  2614,
                  2625
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 97
                  },
                  "start": {
                    "column": 4,
                    "line": 97
                  }
                }
              },
              "optional": false,
              "range": [
                2614,
                2635
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
            "range": [
              2614,
              2636
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          }
        ],
        "range": [
          2608,
          2638
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 98
          },
          "start": {
            "column": 51,
            "line": 96
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      2567,
                      2575
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 96
                      },
                      "start": {
                        "column": 10,
                        "line": 96
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2579,
                        2580
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 96
                        },
                        "start": {
                          "column": 22,
                          "line": 96
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2578,
                      2580
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 96
                      },
                      "start": {
                        "column": 21,
                        "line": 96
                      }
                    }
                  },
                  "range": [
                    2567,
                    2580
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 96
                    },
                    "start": {
                      "column": 10,
                      "line": 96
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "range": [
                      2585,
                      2595
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 96
                      },
                      "start": {
                        "column": 28,
                        "line": 96
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2582,
                    2595
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 96
                    },
                    "start": {
                      "column": 25,
                      "line": 96
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2566,
                2596
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 96
                },
                "start": {
                  "column": 9,
                  "line": 96
                }
              }
            },
            "init": null,
            "range": [
              2566,
              2596
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 96
              },
              "start": {
                "column": 9,
                "line": 96
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2562,
          2596
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 96
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          2600,
          2606
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 96
          },
          "start": {
            "column": 43,
            "line": 96
          }
        }
      },
      "range": [
        2557,
        2638
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2713,
                    2721
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 100
                    },
                    "start": {
                      "column": 16,
                      "line": 100
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
                    2701,
                    2708
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 100
                    },
                    "start": {
                      "column": 4,
                      "line": 100
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
                    2709,
                    2712
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 100
                    },
                    "start": {
                      "column": 12,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2701,
                  2712
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 100
                  },
                  "start": {
                    "column": 4,
                    "line": 100
                  }
                }
              },
              "optional": false,
              "range": [
                2701,
                2722
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 100
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            },
            "range": [
              2701,
              2723
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          }
        ],
        "range": [
          2695,
          2725
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 101
          },
          "start": {
            "column": 56,
            "line": 99
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      2649,
                      2657
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 99
                      },
                      "start": {
                        "column": 10,
                        "line": 99
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2661,
                        2662
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 99
                        },
                        "start": {
                          "column": 22,
                          "line": 99
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2660,
                      2662
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 99
                      },
                      "start": {
                        "column": 21,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    2649,
                    2662
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 99
                    },
                    "start": {
                      "column": 10,
                      "line": 99
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "range": [
                      2667,
                      2677
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 99
                      },
                      "start": {
                        "column": 28,
                        "line": 99
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2664,
                    2677
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 99
                    },
                    "start": {
                      "column": 25,
                      "line": 99
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2648,
                2678
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 99
                },
                "start": {
                  "column": 9,
                  "line": 99
                }
              }
            },
            "init": null,
            "range": [
              2648,
              2678
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 99
              },
              "start": {
                "column": 9,
                "line": 99
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2644,
          2678
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 99
          },
          "start": {
            "column": 5,
            "line": 99
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "range": [
            2682,
            2691
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 99
            },
            "start": {
              "column": 43,
              "line": 99
            }
          }
        },
        "optional": false,
        "range": [
          2682,
          2693
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 99
          },
          "start": {
            "column": 43,
            "line": 99
          }
        }
      },
      "range": [
        2639,
        2725
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2805,
                    2813
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 103
                    },
                    "start": {
                      "column": 16,
                      "line": 103
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
                    2793,
                    2800
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 103
                    },
                    "start": {
                      "column": 4,
                      "line": 103
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
                    2801,
                    2804
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 103
                    },
                    "start": {
                      "column": 12,
                      "line": 103
                    }
                  }
                },
                "range": [
                  2793,
                  2804
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 103
                  },
                  "start": {
                    "column": 4,
                    "line": 103
                  }
                }
              },
              "optional": false,
              "range": [
                2793,
                2814
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            "range": [
              2793,
              2815
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          }
        ],
        "range": [
          2787,
          2817
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 104
          },
          "start": {
            "column": 61,
            "line": 102
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      2736,
                      2744
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 102
                      },
                      "start": {
                        "column": 10,
                        "line": 102
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2748,
                        2749
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 102
                        },
                        "start": {
                          "column": 22,
                          "line": 102
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2747,
                      2749
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 102
                      },
                      "start": {
                        "column": 21,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    2736,
                    2749
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 102
                    },
                    "start": {
                      "column": 10,
                      "line": 102
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "range": [
                      2754,
                      2764
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 102
                      },
                      "start": {
                        "column": 28,
                        "line": 102
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2751,
                    2764
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 102
                    },
                    "start": {
                      "column": 25,
                      "line": 102
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2735,
                2765
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 102
                },
                "start": {
                  "column": 9,
                  "line": 102
                }
              }
            },
            "init": null,
            "range": [
              2735,
              2765
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 102
              },
              "start": {
                "column": 9,
                "line": 102
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2731,
          2765
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 102
          },
          "start": {
            "column": 5,
            "line": 102
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              2770,
              2776
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 102
              },
              "start": {
                "column": 44,
                "line": 102
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              2778,
              2784
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 102
              },
              "start": {
                "column": 52,
                "line": 102
              }
            }
          }
        ],
        "range": [
          2769,
          2785
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 102
          },
          "start": {
            "column": 43,
            "line": 102
          }
        }
      },
      "range": [
        2726,
        2817
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 104
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
