__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2710
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              },
              "range": [
                559,
                567
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  561,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              554,
              567
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            554,
            567
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 21
                },
                "start": {
                  "column": 32,
                  "line": 21
                }
              },
              "range": [
                582,
                590
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  584,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 21
                  },
                  "start": {
                    "column": 34,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              569,
              590
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 21
              },
              "start": {
                "column": 19,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            569,
            590
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 21
            },
            "start": {
              "column": 19,
              "line": 21
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 21
                },
                "start": {
                  "column": 57,
                  "line": 21
                }
              },
              "range": [
                607,
                615
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  609,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 21
                  },
                  "start": {
                    "column": 59,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              592,
              615
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 21
              },
              "start": {
                "column": 42,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            592,
            615
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 21
            },
            "start": {
              "column": 42,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        550,
        616
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              },
              "range": [
                628,
                636
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  630,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              621,
              636
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            621,
            636
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 22
                },
                "start": {
                  "column": 26,
                  "line": 22
                }
              },
              "range": [
                643,
                651
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  645,
                  651
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
              }
            },
            "range": [
              638,
              651
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 22
              },
              "start": {
                "column": 21,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            638,
            651
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 22
            },
            "start": {
              "column": 21,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        617,
        652
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 22
        },
        "start": {
          "column": 0,
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
            "name": "numberA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              },
              "range": [
                665,
                673
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  667,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 14,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              657,
              673
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
          "init": null,
          "range": [
            657,
            673
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
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 28,
                  "line": 23
                }
              },
              "range": [
                681,
                689
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  683,
                  689
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 30,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              675,
              689
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 23
              },
              "start": {
                "column": 22,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            675,
            689
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 23
            },
            "start": {
              "column": 22,
              "line": 23
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 23
                },
                "start": {
                  "column": 45,
                  "line": 23
                }
              },
              "range": [
                698,
                706
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  700,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 23
                  },
                  "start": {
                    "column": 47,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              691,
              706
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 23
              },
              "start": {
                "column": 38,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            691,
            706
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 23
            },
            "start": {
              "column": 38,
              "line": 23
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 23
                },
                "start": {
                  "column": 61,
                  "line": 23
                }
              },
              "range": [
                714,
                722
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  716,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 23
                  },
                  "start": {
                    "column": 63,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              708,
              722
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 23
              },
              "start": {
                "column": 55,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            708,
            722
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 23
            },
            "start": {
              "column": 55,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        653,
        723
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 23
        },
        "start": {
          "column": 0,
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
            "name": "numberA3",
            "optional": false,
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
                736,
                744
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  738,
                  744
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
            "range": [
              728,
              744
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            728,
            744
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 24
                },
                "start": {
                  "column": 32,
                  "line": 24
                }
              },
              "range": [
                756,
                777
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        759,
                        765
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 24
                        },
                        "start": {
                          "column": 35,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        768,
                        774
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 24
                        },
                        "start": {
                          "column": 44,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "range": [
                    759,
                    774
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 24
                    },
                    "start": {
                      "column": 35,
                      "line": 24
                    }
                  }
                },
                "range": [
                  758,
                  777
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 24
                  },
                  "start": {
                    "column": 34,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              746,
              777
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            746,
            777
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 24
            },
            "start": {
              "column": 22,
              "line": 24
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 101,
                  "line": 24
                },
                "start": {
                  "column": 70,
                  "line": 24
                }
              },
              "range": [
                794,
                825
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        797,
                        803
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 24
                        },
                        "start": {
                          "column": 73,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            807,
                            813
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 24
                            },
                            "start": {
                              "column": 83,
                              "line": 24
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            815,
                            821
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 24
                            },
                            "start": {
                              "column": 91,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        806,
                        822
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 24
                        },
                        "start": {
                          "column": 82,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "range": [
                    797,
                    822
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 24
                    },
                    "start": {
                      "column": 73,
                      "line": 24
                    }
                  }
                },
                "range": [
                  796,
                  825
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 24
                  },
                  "start": {
                    "column": 72,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              779,
              825
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 24
              },
              "start": {
                "column": 55,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            779,
            825
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 24
            },
            "start": {
              "column": 55,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        724,
        826
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 24
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
                    872,
                    877
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 27
                    },
                    "start": {
                      "column": 16,
                      "line": 27
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
                    860,
                    867
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 27
                    },
                    "start": {
                      "column": 4,
                      "line": 27
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
                    868,
                    871
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 27
                    },
                    "start": {
                      "column": 12,
                      "line": 27
                    }
                  }
                },
                "range": [
                  860,
                  871
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                860,
                878
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              860,
              879
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          854,
          881
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 26,
            "line": 26
          }
        }
      },
      "left": {
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
              836,
              841
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          }
        ],
        "optional": false,
        "range": [
          833,
          842
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          846,
          852
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
      },
      "range": [
        828,
        881
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 26
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
                    931,
                    936
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 30
                    },
                    "start": {
                      "column": 16,
                      "line": 30
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
                    919,
                    926
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 30
                    },
                    "start": {
                      "column": 4,
                      "line": 30
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
                    927,
                    930
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 30
                    },
                    "start": {
                      "column": 12,
                      "line": 30
                    }
                  }
                },
                "range": [
                  919,
                  930
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                919,
                937
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              919,
              938
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          913,
          940
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 31,
            "line": 29
          }
        }
      },
      "left": {
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
              890,
              895
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          }
        ],
        "optional": false,
        "range": [
          887,
          896
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
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
            900,
            909
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 29
            },
            "start": {
              "column": 18,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          900,
          911
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 29
          },
          "start": {
            "column": 18,
            "line": 29
          }
        }
      },
      "range": [
        882,
        940
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
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
                    995,
                    1000
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 33
                    },
                    "start": {
                      "column": 16,
                      "line": 33
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
                    983,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                  "name": "log",
                  "optional": false,
                  "range": [
                    991,
                    994
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                },
                "range": [
                  983,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                983,
                1001
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              983,
              1002
            ],
            "loc": {
              "end": {
                "column": 23,
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
          977,
          1004
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 36,
            "line": 32
          }
        }
      },
      "left": {
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
              949,
              954
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 32
              },
              "start": {
                "column": 8,
                "line": 32
              }
            }
          }
        ],
        "optional": false,
        "range": [
          946,
          955
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
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
              960,
              966
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 32
              },
              "start": {
                "column": 19,
                "line": 32
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              968,
              974
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 32
              },
              "start": {
                "column": 27,
                "line": 32
              }
            }
          }
        ],
        "range": [
          959,
          975
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 32
          },
          "start": {
            "column": 18,
            "line": 32
          }
        }
      },
      "range": [
        941,
        1004
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
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
                    1081,
                    1094
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 36
                    },
                    "start": {
                      "column": 16,
                      "line": 36
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
                    1069,
                    1076
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
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
                    1077,
                    1080
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 36
                    },
                    "start": {
                      "column": 12,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1069,
                  1080
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                1069,
                1095
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              1069,
              1096
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          1063,
          1098
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 58,
            "line": 35
          }
        }
      },
      "left": {
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
                  1014,
                  1027
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 35
                  },
                  "start": {
                    "column": 9,
                    "line": 35
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "range": [
                  1029,
                  1044
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 35
                  },
                  "start": {
                    "column": 24,
                    "line": 35
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              1013,
              1045
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 35
              },
              "start": {
                "column": 8,
                "line": 35
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1010,
          1046
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          1050,
          1061
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 35
          },
          "start": {
            "column": 45,
            "line": 35
          }
        }
      },
      "range": [
        1005,
        1098
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
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
                    1180,
                    1193
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 39
                    },
                    "start": {
                      "column": 16,
                      "line": 39
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
                    1168,
                    1175
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
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
                    1176,
                    1179
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 39
                    },
                    "start": {
                      "column": 12,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1168,
                  1179
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "optional": false,
              "range": [
                1168,
                1194
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              1168,
              1195
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          1162,
          1197
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 63,
            "line": 38
          }
        }
      },
      "left": {
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
                  1108,
                  1121
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 38
                  },
                  "start": {
                    "column": 9,
                    "line": 38
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "range": [
                  1123,
                  1138
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 38
                  },
                  "start": {
                    "column": 24,
                    "line": 38
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              1107,
              1139
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 38
              },
              "start": {
                "column": 8,
                "line": 38
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1104,
          1140
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
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
            1144,
            1158
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 38
            },
            "start": {
              "column": 45,
              "line": 38
            }
          }
        },
        "optional": false,
        "range": [
          1144,
          1160
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 38
          },
          "start": {
            "column": 45,
            "line": 38
          }
        }
      },
      "range": [
        1099,
        1197
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 38
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
                    1289,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 42
                    },
                    "start": {
                      "column": 16,
                      "line": 42
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
                    1277,
                    1284
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
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
                    1285,
                    1288
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 42
                    },
                    "start": {
                      "column": 12,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1277,
                  1288
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              "optional": false,
              "range": [
                1277,
                1303
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "range": [
              1277,
              1304
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "range": [
          1271,
          1306
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 73,
            "line": 41
          }
        }
      },
      "left": {
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
                  1207,
                  1220
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 41
                  },
                  "start": {
                    "column": 9,
                    "line": 41
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "range": [
                  1222,
                  1237
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 41
                  },
                  "start": {
                    "column": 24,
                    "line": 41
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              1206,
              1238
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 41
              },
              "start": {
                "column": 8,
                "line": 41
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1203,
          1239
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 41
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
              1244,
              1255
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 41
              },
              "start": {
                "column": 46,
                "line": 41
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1257,
              1268
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 41
              },
              "start": {
                "column": 59,
                "line": 41
              }
            }
          }
        ],
        "range": [
          1243,
          1269
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 41
          },
          "start": {
            "column": 45,
            "line": 41
          }
        }
      },
      "range": [
        1198,
        1306
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 41
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
                    1352,
                    1359
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                    1340,
                    1347
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
                    1348,
                    1351
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
                  1340,
                  1351
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
                1340,
                1360
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              1340,
              1361
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1334,
          1363
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 26,
            "line": 45
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberB",
            "optional": false,
            "range": [
              1314,
              1321
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1313,
          1322
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 45
          },
          "start": {
            "column": 5,
            "line": 45
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          1326,
          1332
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 45
          },
          "start": {
            "column": 18,
            "line": 45
          }
        }
      },
      "range": [
        1308,
        1363
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 45
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
                    1413,
                    1420
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 49
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
                    1401,
                    1408
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
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
                    1409,
                    1412
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 49
                    },
                    "start": {
                      "column": 12,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1401,
                  1412
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1401,
                1421
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              1401,
              1422
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          1395,
          1424
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 31,
            "line": 48
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberB",
            "optional": false,
            "range": [
              1370,
              1377
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 48
              },
              "start": {
                "column": 6,
                "line": 48
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1369,
          1378
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 48
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
            1382,
            1391
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 48
            },
            "start": {
              "column": 18,
              "line": 48
            }
          }
        },
        "optional": false,
        "range": [
          1382,
          1393
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 48
          },
          "start": {
            "column": 18,
            "line": 48
          }
        }
      },
      "range": [
        1364,
        1424
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 48
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
                    1479,
                    1486
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 52
                    },
                    "start": {
                      "column": 16,
                      "line": 52
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
                    1467,
                    1474
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 52
                    },
                    "start": {
                      "column": 4,
                      "line": 52
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
                    1475,
                    1478
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 52
                    },
                    "start": {
                      "column": 12,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1467,
                  1478
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "range": [
                1467,
                1487
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              1467,
              1488
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          1461,
          1490
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 36,
            "line": 51
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberB",
            "optional": false,
            "range": [
              1431,
              1438
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 51
              },
              "start": {
                "column": 6,
                "line": 51
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1430,
          1439
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 51
          },
          "start": {
            "column": 5,
            "line": 51
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
              1444,
              1450
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 51
              },
              "start": {
                "column": 19,
                "line": 51
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              1452,
              1458
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 51
              },
              "start": {
                "column": 27,
                "line": 51
              }
            }
          }
        ],
        "range": [
          1443,
          1459
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 51
          },
          "start": {
            "column": 18,
            "line": 51
          }
        }
      },
      "range": [
        1425,
        1490
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 51
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
                    1538,
                    1543
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 55
                    },
                    "start": {
                      "column": 16,
                      "line": 55
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
                    1526,
                    1533
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
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
                    1534,
                    1537
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1526,
                  1537
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                1526,
                1544
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1526,
              1545
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1520,
          1547
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 29,
            "line": 54
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "range": [
              1497,
              1502
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1496,
          1503
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 54
          },
          "start": {
            "column": 5,
            "line": 54
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          1507,
          1518
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 54
          },
          "start": {
            "column": 16,
            "line": 54
          }
        }
      },
      "range": [
        1491,
        1547
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 54
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
                    1600,
                    1605
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 58
                    },
                    "start": {
                      "column": 16,
                      "line": 58
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
                    1588,
                    1595
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 58
                    },
                    "start": {
                      "column": 4,
                      "line": 58
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
                    1596,
                    1599
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 58
                    },
                    "start": {
                      "column": 12,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1588,
                  1599
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "range": [
                1588,
                1606
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              1588,
              1607
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          1582,
          1609
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 34,
            "line": 57
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "range": [
              1554,
              1559
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1553,
          1560
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 57
          },
          "start": {
            "column": 5,
            "line": 57
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
            1564,
            1578
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 57
            },
            "start": {
              "column": 16,
              "line": 57
            }
          }
        },
        "optional": false,
        "range": [
          1564,
          1580
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 57
          },
          "start": {
            "column": 16,
            "line": 57
          }
        }
      },
      "range": [
        1548,
        1609
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 57
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
                    1672,
                    1677
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 61
                    },
                    "start": {
                      "column": 16,
                      "line": 61
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
                    1660,
                    1667
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 61
                    },
                    "start": {
                      "column": 4,
                      "line": 61
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
                    1668,
                    1671
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 61
                    },
                    "start": {
                      "column": 12,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1660,
                  1671
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "range": [
                1660,
                1678
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1660,
              1679
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1654,
          1681
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 44,
            "line": 60
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "range": [
              1616,
              1621
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 60
              },
              "start": {
                "column": 6,
                "line": 60
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1615,
          1622
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 60
          },
          "start": {
            "column": 5,
            "line": 60
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
              1627,
              1638
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 60
              },
              "start": {
                "column": 17,
                "line": 60
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1640,
              1651
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 60
              },
              "start": {
                "column": 30,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1626,
          1652
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 60
          },
          "start": {
            "column": 16,
            "line": 60
          }
        }
      },
      "range": [
        1610,
        1681
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 60
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
                    1745,
                    1751
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                    1733,
                    1740
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
                    1741,
                    1744
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
                  1733,
                  1744
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
                1733,
                1752
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
            },
            "range": [
              1733,
              1753
            ],
            "loc": {
              "end": {
                "column": 24,
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
          1727,
          1755
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 44,
            "line": 64
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberA2",
            "optional": false,
            "range": [
              1689,
              1697
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 64
              },
              "start": {
                "column": 6,
                "line": 64
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "range": [
              1699,
              1705
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 64
              },
              "start": {
                "column": 16,
                "line": 64
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "range": [
              1707,
              1714
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 64
              },
              "start": {
                "column": 24,
                "line": 64
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1688,
          1715
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 64
          },
          "start": {
            "column": 5,
            "line": 64
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          1719,
          1725
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 64
          },
          "start": {
            "column": 36,
            "line": 64
          }
        }
      },
      "range": [
        1683,
        1755
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
                    1823,
                    1829
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 68
                    },
                    "start": {
                      "column": 16,
                      "line": 68
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
                    1811,
                    1818
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 68
                    },
                    "start": {
                      "column": 4,
                      "line": 68
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
                    1819,
                    1822
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 68
                    },
                    "start": {
                      "column": 12,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1811,
                  1822
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "range": [
                1811,
                1830
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1811,
              1831
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "range": [
          1805,
          1833
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 49,
            "line": 67
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberA2",
            "optional": false,
            "range": [
              1762,
              1770
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 67
              },
              "start": {
                "column": 6,
                "line": 67
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "range": [
              1772,
              1778
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 67
              },
              "start": {
                "column": 16,
                "line": 67
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "range": [
              1780,
              1787
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 67
              },
              "start": {
                "column": 24,
                "line": 67
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1761,
          1788
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 67
          },
          "start": {
            "column": 5,
            "line": 67
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
            1792,
            1801
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 67
            },
            "start": {
              "column": 36,
              "line": 67
            }
          }
        },
        "optional": false,
        "range": [
          1792,
          1803
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 67
          },
          "start": {
            "column": 36,
            "line": 67
          }
        }
      },
      "range": [
        1756,
        1833
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 67
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
                    1906,
                    1912
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 71
                    },
                    "start": {
                      "column": 16,
                      "line": 71
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
                    1894,
                    1901
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 71
                    },
                    "start": {
                      "column": 4,
                      "line": 71
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
                    1902,
                    1905
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 71
                    },
                    "start": {
                      "column": 12,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1894,
                  1905
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 71
                  },
                  "start": {
                    "column": 4,
                    "line": 71
                  }
                }
              },
              "optional": false,
              "range": [
                1894,
                1913
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            },
            "range": [
              1894,
              1914
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          }
        ],
        "range": [
          1888,
          1916
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 54,
            "line": 70
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberA2",
            "optional": false,
            "range": [
              1840,
              1848
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 70
              },
              "start": {
                "column": 6,
                "line": 70
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "range": [
              1850,
              1856
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 70
              },
              "start": {
                "column": 16,
                "line": 70
              }
            }
          },
          {
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
                "column": 31,
                "line": 70
              },
              "start": {
                "column": 24,
                "line": 70
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1839,
          1866
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 70
          },
          "start": {
            "column": 5,
            "line": 70
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
              1871,
              1877
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 70
              },
              "start": {
                "column": 37,
                "line": 70
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              1879,
              1885
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 70
              },
              "start": {
                "column": 45,
                "line": 70
              }
            }
          }
        ],
        "range": [
          1870,
          1886
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 70
          },
          "start": {
            "column": 36,
            "line": 70
          }
        }
      },
      "range": [
        1834,
        1916
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 70
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
                      "line": 74
                    },
                    "start": {
                      "column": 16,
                      "line": 74
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
                      "line": 74
                    },
                    "start": {
                      "column": 4,
                      "line": 74
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
                      "line": 74
                    },
                    "start": {
                      "column": 12,
                      "line": 74
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
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
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
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
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
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
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
            "line": 75
          },
          "start": {
            "column": 64,
            "line": 73
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "range": [
              1923,
              1929
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 73
              },
              "start": {
                "column": 6,
                "line": 73
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
                  1932,
                  1945
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 73
                  },
                  "start": {
                    "column": 15,
                    "line": 73
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "range": [
                  1947,
                  1962
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 73
                  },
                  "start": {
                    "column": 30,
                    "line": 73
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              1931,
              1963
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 73
              },
              "start": {
                "column": 14,
                "line": 73
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1922,
          1964
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 73
          },
          "start": {
            "column": 5,
            "line": 73
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          1968,
          1979
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 73
          },
          "start": {
            "column": 51,
            "line": 73
          }
        }
      },
      "range": [
        1917,
        2009
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 73
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
                    2097,
                    2103
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 77
                    },
                    "start": {
                      "column": 16,
                      "line": 77
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
                    2085,
                    2092
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 77
                    },
                    "start": {
                      "column": 4,
                      "line": 77
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
                    2093,
                    2096
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 77
                    },
                    "start": {
                      "column": 12,
                      "line": 77
                    }
                  }
                },
                "range": [
                  2085,
                  2096
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 77
                  },
                  "start": {
                    "column": 4,
                    "line": 77
                  }
                }
              },
              "optional": false,
              "range": [
                2085,
                2104
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "range": [
              2085,
              2105
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "range": [
          2079,
          2107
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 69,
            "line": 76
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "range": [
              2016,
              2022
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 76
              },
              "start": {
                "column": 6,
                "line": 76
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
                  2025,
                  2038
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 76
                  },
                  "start": {
                    "column": 15,
                    "line": 76
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "range": [
                  2040,
                  2055
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 76
                  },
                  "start": {
                    "column": 30,
                    "line": 76
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              2024,
              2056
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 76
              },
              "start": {
                "column": 14,
                "line": 76
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2015,
          2057
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 76
          },
          "start": {
            "column": 5,
            "line": 76
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
            2061,
            2075
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 76
            },
            "start": {
              "column": 51,
              "line": 76
            }
          }
        },
        "optional": false,
        "range": [
          2061,
          2077
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 76
          },
          "start": {
            "column": 51,
            "line": 76
          }
        }
      },
      "range": [
        2010,
        2107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 76
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
                    2205,
                    2211
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 80
                    },
                    "start": {
                      "column": 16,
                      "line": 80
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
                    2193,
                    2200
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 80
                    },
                    "start": {
                      "column": 4,
                      "line": 80
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
                    2201,
                    2204
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 80
                    },
                    "start": {
                      "column": 12,
                      "line": 80
                    }
                  }
                },
                "range": [
                  2193,
                  2204
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 80
                  },
                  "start": {
                    "column": 4,
                    "line": 80
                  }
                }
              },
              "optional": false,
              "range": [
                2193,
                2212
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            "range": [
              2193,
              2213
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
          }
        ],
        "range": [
          2187,
          2215
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 79,
            "line": 79
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "range": [
              2114,
              2120
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 79
              },
              "start": {
                "column": 6,
                "line": 79
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
                  2123,
                  2136
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 79
                  },
                  "start": {
                    "column": 15,
                    "line": 79
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "range": [
                  2138,
                  2153
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 79
                  },
                  "start": {
                    "column": 30,
                    "line": 79
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              2122,
              2154
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 79
              },
              "start": {
                "column": 14,
                "line": 79
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2113,
          2155
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 79
          },
          "start": {
            "column": 5,
            "line": 79
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
              2160,
              2171
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 79
              },
              "start": {
                "column": 52,
                "line": 79
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              2173,
              2184
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 79
              },
              "start": {
                "column": 65,
                "line": 79
              }
            }
          }
        ],
        "range": [
          2159,
          2185
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 79
          },
          "start": {
            "column": 51,
            "line": 79
          }
        }
      },
      "range": [
        2108,
        2215
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 79
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
                    2277,
                    2285
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 84
                    },
                    "start": {
                      "column": 16,
                      "line": 84
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
                    2265,
                    2272
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 84
                    },
                    "start": {
                      "column": 4,
                      "line": 84
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
                    2273,
                    2276
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 84
                    },
                    "start": {
                      "column": 12,
                      "line": 84
                    }
                  }
                },
                "range": [
                  2265,
                  2276
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 84
                  },
                  "start": {
                    "column": 4,
                    "line": 84
                  }
                }
              },
              "optional": false,
              "range": [
                2265,
                2286
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 84
                }
              }
            },
            "range": [
              2265,
              2287
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          }
        ],
        "range": [
          2259,
          2289
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 42,
            "line": 83
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberA3",
            "optional": false,
            "range": [
              2223,
              2231
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 83
              },
              "start": {
                "column": 6,
                "line": 83
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
                2236,
                2246
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 83
                },
                "start": {
                  "column": 19,
                  "line": 83
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2233,
              2246
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 83
              },
              "start": {
                "column": 16,
                "line": 83
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2222,
          2247
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 83
          },
          "start": {
            "column": 5,
            "line": 83
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          2251,
          2257
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 83
          },
          "start": {
            "column": 34,
            "line": 83
          }
        }
      },
      "range": [
        2217,
        2289
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2355,
                    2363
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                    2343,
                    2350
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
                    2351,
                    2354
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
                  2343,
                  2354
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
                2343,
                2364
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "range": [
              2343,
              2365
            ],
            "loc": {
              "end": {
                "column": 26,
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
          2337,
          2367
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
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberA3",
            "optional": false,
            "range": [
              2296,
              2304
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 86
              },
              "start": {
                "column": 6,
                "line": 86
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
                2309,
                2319
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 86
                },
                "start": {
                  "column": 19,
                  "line": 86
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2306,
              2319
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 86
              },
              "start": {
                "column": 16,
                "line": 86
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2295,
          2320
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 86
          },
          "start": {
            "column": 5,
            "line": 86
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
            2324,
            2333
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 86
            },
            "start": {
              "column": 34,
              "line": 86
            }
          }
        },
        "optional": false,
        "range": [
          2324,
          2335
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 86
          },
          "start": {
            "column": 34,
            "line": 86
          }
        }
      },
      "range": [
        2290,
        2367
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 86
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
                    2438,
                    2446
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 90
                    },
                    "start": {
                      "column": 16,
                      "line": 90
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
                    2426,
                    2433
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 90
                    },
                    "start": {
                      "column": 4,
                      "line": 90
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
                    2434,
                    2437
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 90
                    },
                    "start": {
                      "column": 12,
                      "line": 90
                    }
                  }
                },
                "range": [
                  2426,
                  2437
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 90
                  },
                  "start": {
                    "column": 4,
                    "line": 90
                  }
                }
              },
              "optional": false,
              "range": [
                2426,
                2447
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
                }
              }
            },
            "range": [
              2426,
              2448
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          }
        ],
        "range": [
          2420,
          2450
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 91
          },
          "start": {
            "column": 52,
            "line": 89
          }
        }
      },
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberA3",
            "optional": false,
            "range": [
              2374,
              2382
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 89
              },
              "start": {
                "column": 6,
                "line": 89
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
                2387,
                2397
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 89
                },
                "start": {
                  "column": 19,
                  "line": 89
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2384,
              2397
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 89
              },
              "start": {
                "column": 16,
                "line": 89
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2373,
          2398
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 89
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
            "name": "robotA",
            "optional": false,
            "range": [
              2403,
              2409
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 89
              },
              "start": {
                "column": 35,
                "line": 89
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              2411,
              2417
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 89
              },
              "start": {
                "column": 43,
                "line": 89
              }
            }
          }
        ],
        "range": [
          2402,
          2418
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 89
          },
          "start": {
            "column": 34,
            "line": 89
          }
        }
      },
      "range": [
        2368,
        2450
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
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
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    2511,
                    2526
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
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
                    2499,
                    2506
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
                    2507,
                    2510
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
                  2499,
                  2510
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
                2499,
                2527
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 93
                },
                "start": {
                  "column": 4,
                  "line": 93
                }
              }
            },
            "range": [
              2499,
              2528
            ],
            "loc": {
              "end": {
                "column": 33,
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
          2493,
          2530
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 42,
            "line": 92
          }
        }
      },
      "left": {
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
                2460,
                2475
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 92
                },
                "start": {
                  "column": 9,
                  "line": 92
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2457,
              2475
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 92
              },
              "start": {
                "column": 6,
                "line": 92
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2456,
          2476
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 92
          },
          "start": {
            "column": 5,
            "line": 92
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          2480,
          2491
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 92
          },
          "start": {
            "column": 29,
            "line": 92
          }
        }
      },
      "range": [
        2451,
        2530
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 92
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
                    2596,
                    2611
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 96
                    },
                    "start": {
                      "column": 16,
                      "line": 96
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
                    2584,
                    2591
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 96
                    },
                    "start": {
                      "column": 4,
                      "line": 96
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
                    2592,
                    2595
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 96
                    },
                    "start": {
                      "column": 12,
                      "line": 96
                    }
                  }
                },
                "range": [
                  2584,
                  2595
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 96
                  },
                  "start": {
                    "column": 4,
                    "line": 96
                  }
                }
              },
              "optional": false,
              "range": [
                2584,
                2612
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
            "range": [
              2584,
              2613
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          }
        ],
        "range": [
          2578,
          2615
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 47,
            "line": 95
          }
        }
      },
      "left": {
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
                2540,
                2555
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 95
                },
                "start": {
                  "column": 9,
                  "line": 95
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2537,
              2555
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 95
              },
              "start": {
                "column": 6,
                "line": 95
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2536,
          2556
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 95
          },
          "start": {
            "column": 5,
            "line": 95
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
            2560,
            2574
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 95
            },
            "start": {
              "column": 29,
              "line": 95
            }
          }
        },
        "optional": false,
        "range": [
          2560,
          2576
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 95
          },
          "start": {
            "column": 29,
            "line": 95
          }
        }
      },
      "range": [
        2531,
        2615
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 95
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
                    2691,
                    2706
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 99
                    },
                    "start": {
                      "column": 16,
                      "line": 99
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
                    2679,
                    2686
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 99
                    },
                    "start": {
                      "column": 4,
                      "line": 99
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
                    2687,
                    2690
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 99
                    },
                    "start": {
                      "column": 12,
                      "line": 99
                    }
                  }
                },
                "range": [
                  2679,
                  2690
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 99
                  },
                  "start": {
                    "column": 4,
                    "line": 99
                  }
                }
              },
              "optional": false,
              "range": [
                2679,
                2707
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 99
                },
                "start": {
                  "column": 4,
                  "line": 99
                }
              }
            },
            "range": [
              2679,
              2708
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          }
        ],
        "range": [
          2673,
          2710
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 100
          },
          "start": {
            "column": 57,
            "line": 98
          }
        }
      },
      "left": {
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
                2625,
                2640
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 98
                },
                "start": {
                  "column": 9,
                  "line": 98
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2622,
              2640
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 98
              },
              "start": {
                "column": 6,
                "line": 98
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2621,
          2641
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 98
          },
          "start": {
            "column": 5,
            "line": 98
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
              2646,
              2657
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 98
              },
              "start": {
                "column": 30,
                "line": 98
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              2659,
              2670
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 98
              },
              "start": {
                "column": 43,
                "line": 98
              }
            }
          }
        ],
        "range": [
          2645,
          2671
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 98
          },
          "start": {
            "column": 29,
            "line": 98
          }
        }
      },
      "range": [
        2616,
        2710
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 100
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
