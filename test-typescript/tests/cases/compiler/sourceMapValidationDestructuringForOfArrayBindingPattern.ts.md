__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2528
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
                    598,
                    603
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
                    586,
                    593
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
                    594,
                    597
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
                  586,
                  597
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
                586,
                604
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
              586,
              605
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
          580,
          607
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 30,
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
                }
              ],
              "optional": false,
              "range": [
                559,
                568
              ],
              "loc": {
                "end": {
                  "column": 18,
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
              568
            ],
            "loc": {
              "end": {
                "column": 18,
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
          568
        ],
        "loc": {
          "end": {
            "column": 18,
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
          572,
          578
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 21
          },
          "start": {
            "column": 22,
            "line": 21
          }
        }
      },
      "range": [
        550,
        607
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
                    661,
                    666
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
                    649,
                    656
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
                    657,
                    660
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
                  649,
                  660
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
                649,
                667
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
              649,
              668
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
          643,
          670
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 35,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    620,
                    625
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
                }
              ],
              "optional": false,
              "range": [
                617,
                626
              ],
              "loc": {
                "end": {
                  "column": 18,
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
              617,
              626
            ],
            "loc": {
              "end": {
                "column": 18,
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
          613,
          626
        ],
        "loc": {
          "end": {
            "column": 18,
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
            630,
            639
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 24
            },
            "start": {
              "column": 22,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          630,
          641
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 24
          },
          "start": {
            "column": 22,
            "line": 24
          }
        }
      },
      "range": [
        608,
        670
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
                    729,
                    734
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
                    717,
                    724
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
                    725,
                    728
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
                  717,
                  728
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
                717,
                735
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
              717,
              736
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
          711,
          738
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 40,
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
                      "column": 17,
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
                680,
                689
              ],
              "loc": {
                "end": {
                  "column": 18,
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
              680,
              689
            ],
            "loc": {
              "end": {
                "column": 18,
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
          676,
          689
        ],
        "loc": {
          "end": {
            "column": 18,
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
              694,
              700
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 23,
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
              702,
              708
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 27
              },
              "start": {
                "column": 31,
                "line": 27
              }
            }
          }
        ],
        "range": [
          693,
          709
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 27
          },
          "start": {
            "column": 22,
            "line": 27
          }
        }
      },
      "range": [
        671,
        738
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
                    819,
                    832
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
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
                    807,
                    814
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                  "name": "log",
                  "optional": false,
                  "range": [
                    815,
                    818
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                },
                "range": [
                  807,
                  818
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
              "optional": false,
              "range": [
                807,
                833
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              807,
              834
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          801,
          836
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 62,
            "line": 30
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        752,
                        765
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 30
                        },
                        "start": {
                          "column": 13,
                          "line": 30
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        767,
                        782
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 30
                        },
                        "start": {
                          "column": 28,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    751,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 30
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
                748,
                784
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "init": null,
            "range": [
              748,
              784
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 30
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
          744,
          784
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 30
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
          788,
          799
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 30
          },
          "start": {
            "column": 49,
            "line": 30
          }
        }
      },
      "range": [
        739,
        836
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
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
                    922,
                    935
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
                    910,
                    917
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
                    918,
                    921
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
                  910,
                  921
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
                910,
                936
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
              910,
              937
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
          904,
          939
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 67,
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        850,
                        863
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 33
                        },
                        "start": {
                          "column": 13,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        865,
                        880
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 33
                        },
                        "start": {
                          "column": 28,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    849,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                846,
                882
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "init": null,
            "range": [
              846,
              882
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 33
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          842,
          882
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
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
            886,
            900
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 33
            },
            "start": {
              "column": 49,
              "line": 33
            }
          }
        },
        "optional": false,
        "range": [
          886,
          902
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 33
          },
          "start": {
            "column": 49,
            "line": 33
          }
        }
      },
      "range": [
        837,
        939
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
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
                    1035,
                    1048
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 37
                    },
                    "start": {
                      "column": 16,
                      "line": 37
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
                    1023,
                    1030
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                  "name": "log",
                  "optional": false,
                  "range": [
                    1031,
                    1034
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 37
                    },
                    "start": {
                      "column": 12,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1023,
                  1034
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "range": [
                1023,
                1049
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              1023,
              1050
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          1017,
          1052
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 77,
            "line": 36
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        953,
                        966
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 36
                        },
                        "start": {
                          "column": 13,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        968,
                        983
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 36
                        },
                        "start": {
                          "column": 28,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    952,
                    984
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 36
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
                949,
                985
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            },
            "init": null,
            "range": [
              949,
              985
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 36
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
          945,
          985
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
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
              990,
              1001
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 36
              },
              "start": {
                "column": 50,
                "line": 36
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1003,
              1014
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 36
              },
              "start": {
                "column": 63,
                "line": 36
              }
            }
          }
        ],
        "range": [
          989,
          1015
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 36
          },
          "start": {
            "column": 49,
            "line": 36
          }
        }
      },
      "range": [
        940,
        1052
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1102,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 41
                    },
                    "start": {
                      "column": 16,
                      "line": 41
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
                    1090,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
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
                    1098,
                    1101
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 41
                    },
                    "start": {
                      "column": 12,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1090,
                  1101
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "optional": false,
              "range": [
                1090,
                1110
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              1090,
              1111
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          1084,
          1113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 30,
            "line": 40
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1064,
                    1071
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 40
                    },
                    "start": {
                      "column": 10,
                      "line": 40
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1063,
                1072
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 40
                },
                "start": {
                  "column": 9,
                  "line": 40
                }
              }
            },
            "init": null,
            "range": [
              1063,
              1072
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 40
              },
              "start": {
                "column": 9,
                "line": 40
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1059,
          1072
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          1076,
          1082
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 40
          },
          "start": {
            "column": 22,
            "line": 40
          }
        }
      },
      "range": [
        1054,
        1113
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
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
                    1167,
                    1174
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 44
                    },
                    "start": {
                      "column": 16,
                      "line": 44
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
                    1155,
                    1162
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 44
                    },
                    "start": {
                      "column": 4,
                      "line": 44
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
                    1163,
                    1166
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 44
                    },
                    "start": {
                      "column": 12,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1155,
                  1166
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "range": [
                1155,
                1175
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              1155,
              1176
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          1149,
          1178
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 35,
            "line": 43
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1124,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1123,
                1132
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 43
                },
                "start": {
                  "column": 9,
                  "line": 43
                }
              }
            },
            "init": null,
            "range": [
              1123,
              1132
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 43
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1119,
          1132
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
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
            1136,
            1145
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 43
            },
            "start": {
              "column": 22,
              "line": 43
            }
          }
        },
        "optional": false,
        "range": [
          1136,
          1147
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 43
          },
          "start": {
            "column": 22,
            "line": 43
          }
        }
      },
      "range": [
        1114,
        1178
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
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
                    1237,
                    1244
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 47
                    },
                    "start": {
                      "column": 16,
                      "line": 47
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
                    1225,
                    1232
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                  "name": "log",
                  "optional": false,
                  "range": [
                    1233,
                    1236
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 47
                    },
                    "start": {
                      "column": 12,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1225,
                  1236
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
              "optional": false,
              "range": [
                1225,
                1245
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1225,
              1246
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          1219,
          1248
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 40,
            "line": 46
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1189,
                    1196
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1188,
                1197
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 46
                }
              }
            },
            "init": null,
            "range": [
              1188,
              1197
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 46
              },
              "start": {
                "column": 9,
                "line": 46
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1184,
          1197
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 46
          },
          "start": {
            "column": 5,
            "line": 46
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
              1202,
              1208
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 46
              },
              "start": {
                "column": 23,
                "line": 46
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              1210,
              1216
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 46
              },
              "start": {
                "column": 31,
                "line": 46
              }
            }
          }
        ],
        "range": [
          1201,
          1217
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 46
          },
          "start": {
            "column": 22,
            "line": 46
          }
        }
      },
      "range": [
        1179,
        1248
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 46
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
                    1300,
                    1305
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                    1288,
                    1295
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
                    1296,
                    1299
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
                  1288,
                  1299
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
                1288,
                1306
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1288,
              1307
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1282,
          1309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 33,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1259,
                    1264
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                1258,
                1265
              ],
              "loc": {
                "end": {
                  "column": 16,
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
              1258,
              1265
            ],
            "loc": {
              "end": {
                "column": 16,
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
          1254,
          1265
        ],
        "loc": {
          "end": {
            "column": 16,
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
        "name": "multiRobots",
        "optional": false,
        "range": [
          1269,
          1280
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 49
          },
          "start": {
            "column": 20,
            "line": 49
          }
        }
      },
      "range": [
        1249,
        1309
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1366,
                    1371
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                    1354,
                    1361
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
                    1362,
                    1365
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
                  1354,
                  1365
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
                1354,
                1372
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1354,
              1373
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1348,
          1375
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 38,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1320,
                    1325
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                1319,
                1326
              ],
              "loc": {
                "end": {
                  "column": 16,
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
              1319,
              1326
            ],
            "loc": {
              "end": {
                "column": 16,
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
          1315,
          1326
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "name": "getMultiRobots",
          "optional": false,
          "range": [
            1330,
            1344
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 52
            },
            "start": {
              "column": 20,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          1330,
          1346
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 52
          },
          "start": {
            "column": 20,
            "line": 52
          }
        }
      },
      "range": [
        1310,
        1375
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1442,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                    1430,
                    1437
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
                    1438,
                    1441
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
                  1430,
                  1441
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
                1430,
                1448
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1430,
              1449
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1424,
          1451
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 48,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1386,
                    1391
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                1385,
                1392
              ],
              "loc": {
                "end": {
                  "column": 16,
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
              1385,
              1392
            ],
            "loc": {
              "end": {
                "column": 16,
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
          1381,
          1392
        ],
        "loc": {
          "end": {
            "column": 16,
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
            "name": "multiRobotA",
            "optional": false,
            "range": [
              1397,
              1408
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 55
              },
              "start": {
                "column": 21,
                "line": 55
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1410,
              1421
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 55
              },
              "start": {
                "column": 34,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1396,
          1422
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 55
          },
          "start": {
            "column": 20,
            "line": 55
          }
        }
      },
      "range": [
        1376,
        1451
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1519,
                    1525
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 60
                    },
                    "start": {
                      "column": 16,
                      "line": 60
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
                    1507,
                    1514
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 60
                    },
                    "start": {
                      "column": 4,
                      "line": 60
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
                    1515,
                    1518
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 60
                    },
                    "start": {
                      "column": 12,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1507,
                  1518
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "range": [
                1507,
                1526
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1507,
              1527
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1501,
          1529
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 48,
            "line": 59
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1463,
                    1471
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 59
                    },
                    "start": {
                      "column": 10,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1473,
                    1479
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 59
                    },
                    "start": {
                      "column": 20,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    1481,
                    1488
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 59
                    },
                    "start": {
                      "column": 28,
                      "line": 59
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1462,
                1489
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 59
                },
                "start": {
                  "column": 9,
                  "line": 59
                }
              }
            },
            "init": null,
            "range": [
              1462,
              1489
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 59
              },
              "start": {
                "column": 9,
                "line": 59
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1458,
          1489
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 59
          },
          "start": {
            "column": 5,
            "line": 59
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          1493,
          1499
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 59
          },
          "start": {
            "column": 40,
            "line": 59
          }
        }
      },
      "range": [
        1453,
        1529
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 59
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
                    1601,
                    1607
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 63
                    },
                    "start": {
                      "column": 16,
                      "line": 63
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
                    1589,
                    1596
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 63
                    },
                    "start": {
                      "column": 4,
                      "line": 63
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
                    1597,
                    1600
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 63
                    },
                    "start": {
                      "column": 12,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1589,
                  1600
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "range": [
                1589,
                1608
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1589,
              1609
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1583,
          1611
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 53,
            "line": 62
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1540,
                    1548
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 62
                    },
                    "start": {
                      "column": 10,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1550,
                    1556
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 62
                    },
                    "start": {
                      "column": 20,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    1558,
                    1565
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 62
                    },
                    "start": {
                      "column": 28,
                      "line": 62
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1539,
                1566
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 62
                },
                "start": {
                  "column": 9,
                  "line": 62
                }
              }
            },
            "init": null,
            "range": [
              1539,
              1566
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 62
              },
              "start": {
                "column": 9,
                "line": 62
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1535,
          1566
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 62
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
            1570,
            1579
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 62
            },
            "start": {
              "column": 40,
              "line": 62
            }
          }
        },
        "optional": false,
        "range": [
          1570,
          1581
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 62
          },
          "start": {
            "column": 40,
            "line": 62
          }
        }
      },
      "range": [
        1530,
        1611
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 62
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
                    1688,
                    1694
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 66
                    },
                    "start": {
                      "column": 16,
                      "line": 66
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
                    1676,
                    1683
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 66
                    },
                    "start": {
                      "column": 4,
                      "line": 66
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
                    1684,
                    1687
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 66
                    },
                    "start": {
                      "column": 12,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1676,
                  1687
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
                  }
                }
              },
              "optional": false,
              "range": [
                1676,
                1695
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            "range": [
              1676,
              1696
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          1670,
          1698
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 58,
            "line": 65
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1622,
                    1630
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 65
                    },
                    "start": {
                      "column": 10,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1632,
                    1638
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 65
                    },
                    "start": {
                      "column": 20,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    1640,
                    1647
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 65
                    },
                    "start": {
                      "column": 28,
                      "line": 65
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1621,
                1648
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              }
            },
            "init": null,
            "range": [
              1621,
              1648
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 65
              },
              "start": {
                "column": 9,
                "line": 65
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1617,
          1648
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 65
          },
          "start": {
            "column": 5,
            "line": 65
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
              1653,
              1659
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 65
              },
              "start": {
                "column": 41,
                "line": 65
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              1661,
              1667
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 65
              },
              "start": {
                "column": 49,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1652,
          1668
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 65
          },
          "start": {
            "column": 40,
            "line": 65
          }
        }
      },
      "range": [
        1612,
        1698
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 65
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
                    1785,
                    1791
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
                    1773,
                    1780
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
                    1781,
                    1784
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
                  1773,
                  1784
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
                1773,
                1792
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
              1773,
              1793
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
          1767,
          1795
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 68,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    1709,
                    1715
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 68
                    },
                    "start": {
                      "column": 10,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        1718,
                        1731
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 68
                        },
                        "start": {
                          "column": 19,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        1733,
                        1748
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 68
                        },
                        "start": {
                          "column": 34,
                          "line": 68
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1717,
                    1749
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 68
                    },
                    "start": {
                      "column": 18,
                      "line": 68
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1708,
                1750
              ],
              "loc": {
                "end": {
                  "column": 51,
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
              1708,
              1750
            ],
            "loc": {
              "end": {
                "column": 51,
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
          1704,
          1750
        ],
        "loc": {
          "end": {
            "column": 51,
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
        "name": "multiRobots",
        "optional": false,
        "range": [
          1754,
          1765
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 68
          },
          "start": {
            "column": 55,
            "line": 68
          }
        }
      },
      "range": [
        1699,
        1795
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    1887,
                    1893
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
                    1875,
                    1882
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
                    1883,
                    1886
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
                  1875,
                  1886
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
                1875,
                1894
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
              1875,
              1895
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
          1869,
          1897
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 73,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    1806,
                    1812
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        1815,
                        1828
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 71
                        },
                        "start": {
                          "column": 19,
                          "line": 71
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        1830,
                        1845
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 71
                        },
                        "start": {
                          "column": 34,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1814,
                    1846
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 71
                    },
                    "start": {
                      "column": 18,
                      "line": 71
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1805,
                1847
              ],
              "loc": {
                "end": {
                  "column": 51,
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
              1805,
              1847
            ],
            "loc": {
              "end": {
                "column": 51,
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
          1801,
          1847
        ],
        "loc": {
          "end": {
            "column": 51,
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
          "name": "getMultiRobots",
          "optional": false,
          "range": [
            1851,
            1865
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 71
            },
            "start": {
              "column": 55,
              "line": 71
            }
          }
        },
        "optional": false,
        "range": [
          1851,
          1867
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 71
          },
          "start": {
            "column": 55,
            "line": 71
          }
        }
      },
      "range": [
        1796,
        1897
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    1999,
                    2005
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
                    1987,
                    1994
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
                    1995,
                    1998
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
                  1987,
                  1998
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
                1987,
                2006
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
              1987,
              2007
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
          1981,
          2009
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 83,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    1908,
                    1914
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 74
                    },
                    "start": {
                      "column": 10,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        1917,
                        1930
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 74
                        },
                        "start": {
                          "column": 19,
                          "line": 74
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        1932,
                        1947
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 74
                        },
                        "start": {
                          "column": 34,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1916,
                    1948
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 74
                    },
                    "start": {
                      "column": 18,
                      "line": 74
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1907,
                1949
              ],
              "loc": {
                "end": {
                  "column": 51,
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
              1907,
              1949
            ],
            "loc": {
              "end": {
                "column": 51,
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
          1903,
          1949
        ],
        "loc": {
          "end": {
            "column": 51,
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
            "name": "multiRobotA",
            "optional": false,
            "range": [
              1954,
              1965
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 74
              },
              "start": {
                "column": 56,
                "line": 74
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1967,
              1978
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 74
              },
              "start": {
                "column": 69,
                "line": 74
              }
            }
          }
        ],
        "range": [
          1953,
          1979
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 74
          },
          "start": {
            "column": 55,
            "line": 74
          }
        }
      },
      "range": [
        1898,
        2009
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2075,
                    2083
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
                      "line": 79
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
                    2063,
                    2070
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 79
                    },
                    "start": {
                      "column": 4,
                      "line": 79
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
                    2071,
                    2074
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 79
                    },
                    "start": {
                      "column": 12,
                      "line": 79
                    }
                  }
                },
                "range": [
                  2063,
                  2074
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 79
                  },
                  "start": {
                    "column": 4,
                    "line": 79
                  }
                }
              },
              "optional": false,
              "range": [
                2063,
                2084
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "range": [
              2063,
              2085
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "range": [
          2057,
          2087
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 46,
            "line": 78
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2021,
                    2029
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 78
                    },
                    "start": {
                      "column": 10,
                      "line": 78
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
                      2034,
                      2044
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 78
                      },
                      "start": {
                        "column": 23,
                        "line": 78
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2031,
                    2044
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 78
                    },
                    "start": {
                      "column": 20,
                      "line": 78
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2020,
                2045
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 78
                },
                "start": {
                  "column": 9,
                  "line": 78
                }
              }
            },
            "init": null,
            "range": [
              2020,
              2045
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 78
              },
              "start": {
                "column": 9,
                "line": 78
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2016,
          2045
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 78
          },
          "start": {
            "column": 5,
            "line": 78
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          2049,
          2055
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 78
          },
          "start": {
            "column": 38,
            "line": 78
          }
        }
      },
      "range": [
        2011,
        2087
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 78
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
                    2157,
                    2165
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 82
                    },
                    "start": {
                      "column": 16,
                      "line": 82
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
                    2145,
                    2152
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 82
                    },
                    "start": {
                      "column": 4,
                      "line": 82
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
                    2153,
                    2156
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 82
                    },
                    "start": {
                      "column": 12,
                      "line": 82
                    }
                  }
                },
                "range": [
                  2145,
                  2156
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              },
              "optional": false,
              "range": [
                2145,
                2166
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            "range": [
              2145,
              2167
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          }
        ],
        "range": [
          2139,
          2169
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 51,
            "line": 81
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2098,
                    2106
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 81
                    },
                    "start": {
                      "column": 10,
                      "line": 81
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
                      2111,
                      2121
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 81
                      },
                      "start": {
                        "column": 23,
                        "line": 81
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2108,
                    2121
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 81
                    },
                    "start": {
                      "column": 20,
                      "line": 81
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2097,
                2122
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 81
                },
                "start": {
                  "column": 9,
                  "line": 81
                }
              }
            },
            "init": null,
            "range": [
              2097,
              2122
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 81
              },
              "start": {
                "column": 9,
                "line": 81
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2093,
          2122
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 81
          },
          "start": {
            "column": 5,
            "line": 81
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
            2126,
            2135
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 81
            },
            "start": {
              "column": 38,
              "line": 81
            }
          }
        },
        "optional": false,
        "range": [
          2126,
          2137
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 81
          },
          "start": {
            "column": 38,
            "line": 81
          }
        }
      },
      "range": [
        2088,
        2169
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 81
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
                    2244,
                    2252
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 85
                    },
                    "start": {
                      "column": 16,
                      "line": 85
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
                    2232,
                    2239
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 85
                    },
                    "start": {
                      "column": 4,
                      "line": 85
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
                    2240,
                    2243
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 85
                    },
                    "start": {
                      "column": 12,
                      "line": 85
                    }
                  }
                },
                "range": [
                  2232,
                  2243
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "range": [
                2232,
                2253
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            "range": [
              2232,
              2254
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          2226,
          2256
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 56,
            "line": 84
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2180,
                    2188
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 84
                    },
                    "start": {
                      "column": 10,
                      "line": 84
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
                      2193,
                      2203
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 84
                      },
                      "start": {
                        "column": 23,
                        "line": 84
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2190,
                    2203
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 84
                    },
                    "start": {
                      "column": 20,
                      "line": 84
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2179,
                2204
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 84
                },
                "start": {
                  "column": 9,
                  "line": 84
                }
              }
            },
            "init": null,
            "range": [
              2179,
              2204
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 84
              },
              "start": {
                "column": 9,
                "line": 84
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2175,
          2204
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 84
          },
          "start": {
            "column": 5,
            "line": 84
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
              2209,
              2215
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 84
              },
              "start": {
                "column": 39,
                "line": 84
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              2217,
              2223
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 84
              },
              "start": {
                "column": 47,
                "line": 84
              }
            }
          }
        ],
        "range": [
          2208,
          2224
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 84
          },
          "start": {
            "column": 38,
            "line": 84
          }
        }
      },
      "range": [
        2170,
        2256
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 84
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
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    2321,
                    2336
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 88
                    },
                    "start": {
                      "column": 16,
                      "line": 88
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
                    2309,
                    2316
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 88
                    },
                    "start": {
                      "column": 4,
                      "line": 88
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
                    2317,
                    2320
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 88
                    },
                    "start": {
                      "column": 12,
                      "line": 88
                    }
                  }
                },
                "range": [
                  2309,
                  2320
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 88
                  },
                  "start": {
                    "column": 4,
                    "line": 88
                  }
                }
              },
              "optional": false,
              "range": [
                2309,
                2337
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "range": [
              2309,
              2338
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          }
        ],
        "range": [
          2303,
          2340
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 46,
            "line": 87
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2270,
                      2285
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 87
                      },
                      "start": {
                        "column": 13,
                        "line": 87
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2267,
                    2285
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 87
                    },
                    "start": {
                      "column": 10,
                      "line": 87
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2266,
                2286
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 87
                },
                "start": {
                  "column": 9,
                  "line": 87
                }
              }
            },
            "init": null,
            "range": [
              2266,
              2286
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 87
              },
              "start": {
                "column": 9,
                "line": 87
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2262,
          2286
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 87
          },
          "start": {
            "column": 5,
            "line": 87
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          2290,
          2301
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 87
          },
          "start": {
            "column": 33,
            "line": 87
          }
        }
      },
      "range": [
        2257,
        2340
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 87
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
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    2410,
                    2425
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 91
                    },
                    "start": {
                      "column": 16,
                      "line": 91
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
                    2398,
                    2405
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 91
                    },
                    "start": {
                      "column": 4,
                      "line": 91
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
                    2406,
                    2409
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 91
                    },
                    "start": {
                      "column": 12,
                      "line": 91
                    }
                  }
                },
                "range": [
                  2398,
                  2409
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              },
              "optional": false,
              "range": [
                2398,
                2426
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "range": [
              2398,
              2427
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
        "range": [
          2392,
          2429
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 51,
            "line": 90
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2354,
                      2369
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 90
                      },
                      "start": {
                        "column": 13,
                        "line": 90
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2351,
                    2369
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 90
                    },
                    "start": {
                      "column": 10,
                      "line": 90
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2350,
                2370
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 90
                },
                "start": {
                  "column": 9,
                  "line": 90
                }
              }
            },
            "init": null,
            "range": [
              2350,
              2370
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 90
              },
              "start": {
                "column": 9,
                "line": 90
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2346,
          2370
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 90
          },
          "start": {
            "column": 5,
            "line": 90
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
            2374,
            2388
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 90
            },
            "start": {
              "column": 33,
              "line": 90
            }
          }
        },
        "optional": false,
        "range": [
          2374,
          2390
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 90
          },
          "start": {
            "column": 33,
            "line": 90
          }
        }
      },
      "range": [
        2341,
        2429
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 90
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
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    2509,
                    2524
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 94
                    },
                    "start": {
                      "column": 16,
                      "line": 94
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
                    2497,
                    2504
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 94
                    },
                    "start": {
                      "column": 4,
                      "line": 94
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
                    2505,
                    2508
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 94
                    },
                    "start": {
                      "column": 12,
                      "line": 94
                    }
                  }
                },
                "range": [
                  2497,
                  2508
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
                  }
                }
              },
              "optional": false,
              "range": [
                2497,
                2525
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            "range": [
              2497,
              2526
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          }
        ],
        "range": [
          2491,
          2528
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 61,
            "line": 93
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2443,
                      2458
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 93
                      },
                      "start": {
                        "column": 13,
                        "line": 93
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2440,
                    2458
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 93
                    },
                    "start": {
                      "column": 10,
                      "line": 93
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2439,
                2459
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 93
                },
                "start": {
                  "column": 9,
                  "line": 93
                }
              }
            },
            "init": null,
            "range": [
              2439,
              2459
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 93
              },
              "start": {
                "column": 9,
                "line": 93
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2435,
          2459
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 93
          },
          "start": {
            "column": 5,
            "line": 93
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
              2464,
              2475
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 93
              },
              "start": {
                "column": 34,
                "line": 93
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              2477,
              2488
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 93
              },
              "start": {
                "column": 47,
                "line": 93
              }
            }
          }
        ],
        "range": [
          2463,
          2489
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 93
          },
          "start": {
            "column": 33,
            "line": 93
          }
        }
      },
      "range": [
        2430,
        2528
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 95
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
