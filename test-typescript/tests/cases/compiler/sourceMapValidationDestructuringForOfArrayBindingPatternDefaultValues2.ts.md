__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3011
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
                    883,
                    888
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
                    871,
                    878
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
                    879,
                    882
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
                  871,
                  882
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
                871,
                889
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
              871,
              890
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
          865,
          892
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 37,
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
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
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
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                844,
                852
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 26
                },
                "start": {
                  "column": 16,
                  "line": 26
                }
              }
            },
            "range": [
              836,
              852
            ],
            "loc": {
              "end": {
                "column": 24,
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
          853
        ],
        "loc": {
          "end": {
            "column": 25,
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
          857,
          863
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 26
          },
          "start": {
            "column": 29,
            "line": 26
          }
        }
      },
      "range": [
        828,
        892
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
                    953,
                    958
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
                    941,
                    948
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
                    949,
                    952
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
                  941,
                  952
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
                941,
                959
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
              941,
              960
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
          935,
          962
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 42,
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
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "range": [
                901,
                906
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
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                909,
                917
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 29
                },
                "start": {
                  "column": 16,
                  "line": 29
                }
              }
            },
            "range": [
              901,
              917
            ],
            "loc": {
              "end": {
                "column": 24,
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
          898,
          918
        ],
        "loc": {
          "end": {
            "column": 25,
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
            922,
            931
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 29
            },
            "start": {
              "column": 29,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          922,
          933
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 29
          },
          "start": {
            "column": 29,
            "line": 29
          }
        }
      },
      "range": [
        893,
        962
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
                    1028,
                    1033
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
                    1016,
                    1023
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
                    1024,
                    1027
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
                  1016,
                  1027
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
                1016,
                1034
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
              1016,
              1035
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
          1010,
          1037
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 47,
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
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "range": [
                971,
                976
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
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                979,
                987
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 32
                },
                "start": {
                  "column": 16,
                  "line": 32
                }
              }
            },
            "range": [
              971,
              987
            ],
            "loc": {
              "end": {
                "column": 24,
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
          968,
          988
        ],
        "loc": {
          "end": {
            "column": 25,
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
              993,
              999
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 32
              },
              "start": {
                "column": 30,
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
              1001,
              1007
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 32
              },
              "start": {
                "column": 38,
                "line": 32
              }
            }
          }
        ],
        "range": [
          992,
          1008
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 32
          },
          "start": {
            "column": 29,
            "line": 32
          }
        }
      },
      "range": [
        963,
        1037
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
                    1173,
                    1186
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
                    1161,
                    1168
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
                    1169,
                    1172
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
                  1161,
                  1172
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
                1161,
                1187
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
              1161,
              1188
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
          1155,
          1190
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 42,
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
                      1052,
                      1065
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 36
                      },
                      "start": {
                        "column": 4,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"primary\"",
                    "value": "primary",
                    "range": [
                      1068,
                      1077
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 36
                      },
                      "start": {
                        "column": 20,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1052,
                    1077
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
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
                      1083,
                      1098
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                    "raw": "\"secondary\"",
                    "value": "secondary",
                    "range": [
                      1101,
                      1112
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 37
                      },
                      "start": {
                        "column": 22,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1083,
                    1112
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 37
                    },
                    "start": {
                      "column": 4,
                      "line": 37
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1046,
                1114
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 35
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
                    1118,
                    1126
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 38
                    },
                    "start": {
                      "column": 5,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"skill2\"",
                  "value": "skill2",
                  "range": [
                    1128,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 38
                    },
                    "start": {
                      "column": 15,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                1117,
                1137
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              1046,
              1137
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 38
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
          1043,
          1138
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 38
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
          1142,
          1153
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 38
          },
          "start": {
            "column": 29,
            "line": 38
          }
        }
      },
      "range": [
        1038,
        1190
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
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
                    1331,
                    1344
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 45
                    },
                    "start": {
                      "column": 16,
                      "line": 45
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
                    1319,
                    1326
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
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
                    1327,
                    1330
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1319,
                  1330
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "range": [
                1319,
                1345
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              1319,
              1346
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1313,
          1348
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 47,
            "line": 44
          }
        }
      },
      "left": {
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
                      1205,
                      1218
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 42
                      },
                      "start": {
                        "column": 4,
                        "line": 42
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"primary\"",
                    "value": "primary",
                    "range": [
                      1221,
                      1230
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 42
                      },
                      "start": {
                        "column": 20,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1205,
                    1230
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
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
                      1236,
                      1251
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                    "raw": "\"secondary\"",
                    "value": "secondary",
                    "range": [
                      1254,
                      1265
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
                    1236,
                    1265
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1199,
                1267
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 41
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
                    1271,
                    1279
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 44
                    },
                    "start": {
                      "column": 5,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"skill2\"",
                  "value": "skill2",
                  "range": [
                    1281,
                    1289
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 44
                    },
                    "start": {
                      "column": 15,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                1270,
                1290
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
              1199,
              1290
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 44
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
          1196,
          1291
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 44
          },
          "start": {
            "column": 5,
            "line": 41
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
            1295,
            1309
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 44
            },
            "start": {
              "column": 29,
              "line": 44
            }
          }
        },
        "optional": false,
        "range": [
          1295,
          1311
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 44
          },
          "start": {
            "column": 29,
            "line": 44
          }
        }
      },
      "range": [
        1191,
        1348
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
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
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    1499,
                    1512
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 51
                    },
                    "start": {
                      "column": 16,
                      "line": 51
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
                    1487,
                    1494
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 51
                    },
                    "start": {
                      "column": 4,
                      "line": 51
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
                    1495,
                    1498
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 51
                    },
                    "start": {
                      "column": 12,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1487,
                  1498
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "range": [
                1487,
                1513
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1487,
              1514
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          1481,
          1516
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 57,
            "line": 50
          }
        }
      },
      "left": {
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
                      1363,
                      1376
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 48
                      },
                      "start": {
                        "column": 4,
                        "line": 48
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"primary\"",
                    "value": "primary",
                    "range": [
                      1379,
                      1388
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 48
                      },
                      "start": {
                        "column": 20,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1363,
                    1388
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
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
                      1394,
                      1409
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 49
                      },
                      "start": {
                        "column": 4,
                        "line": 49
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"secondary\"",
                    "value": "secondary",
                    "range": [
                      1412,
                      1423
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 49
                      },
                      "start": {
                        "column": 22,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1394,
                    1423
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1357,
                1425
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 47
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
                    1429,
                    1437
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 50
                    },
                    "start": {
                      "column": 5,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"skill2\"",
                  "value": "skill2",
                  "range": [
                    1439,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                1428,
                1448
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
              1357,
              1448
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 50
              },
              "start": {
                "column": 8,
                "line": 47
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1354,
          1449
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 47
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
              1454,
              1465
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 50
              },
              "start": {
                "column": 30,
                "line": 50
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1467,
              1478
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 50
              },
              "start": {
                "column": 43,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1453,
          1479
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 50
          },
          "start": {
            "column": 29,
            "line": 50
          }
        }
      },
      "range": [
        1349,
        1516
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 47
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
                    1567,
                    1574
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                    1555,
                    1562
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
                    1563,
                    1566
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
                  1555,
                  1566
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
                1555,
                1575
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1555,
              1576
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1549,
          1578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 31,
            "line": 54
          }
        }
      },
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
              "name": "numberB",
              "optional": false,
              "range": [
                1524,
                1531
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 54
                },
                "start": {
                  "column": 6,
                  "line": 54
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
                  1535,
                  1536
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 54
                  },
                  "start": {
                    "column": 17,
                    "line": 54
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                1534,
                1536
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 54
                },
                "start": {
                  "column": 16,
                  "line": 54
                }
              }
            },
            "range": [
              1524,
              1536
            ],
            "loc": {
              "end": {
                "column": 18,
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
          1523,
          1537
        ],
        "loc": {
          "end": {
            "column": 19,
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
        "name": "robots",
        "optional": false,
        "range": [
          1541,
          1547
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 54
          },
          "start": {
            "column": 23,
            "line": 54
          }
        }
      },
      "range": [
        1518,
        1578
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1633,
                    1640
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                    1621,
                    1628
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
                    1629,
                    1632
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
                  1621,
                  1632
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
                1621,
                1641
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              1621,
              1642
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1615,
          1644
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 36,
            "line": 57
          }
        }
      },
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
              "name": "numberB",
              "optional": false,
              "range": [
                1585,
                1592
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 57
                },
                "start": {
                  "column": 6,
                  "line": 57
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
                  1596,
                  1597
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 57
                  },
                  "start": {
                    "column": 17,
                    "line": 57
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                1595,
                1597
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 57
                },
                "start": {
                  "column": 16,
                  "line": 57
                }
              }
            },
            "range": [
              1585,
              1597
            ],
            "loc": {
              "end": {
                "column": 18,
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
          1584,
          1598
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "getRobots",
          "optional": false,
          "range": [
            1602,
            1611
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 57
            },
            "start": {
              "column": 23,
              "line": 57
            }
          }
        },
        "optional": false,
        "range": [
          1602,
          1613
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 57
          },
          "start": {
            "column": 23,
            "line": 57
          }
        }
      },
      "range": [
        1579,
        1644
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1704,
                    1711
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                    1692,
                    1699
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
                    1700,
                    1703
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
                  1692,
                  1703
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
                1692,
                1712
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1692,
              1713
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1686,
          1715
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 41,
            "line": 60
          }
        }
      },
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
              "name": "numberB",
              "optional": false,
              "range": [
                1651,
                1658
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 60
                },
                "start": {
                  "column": 6,
                  "line": 60
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
                  1662,
                  1663
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 60
                  },
                  "start": {
                    "column": 17,
                    "line": 60
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                1661,
                1663
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 60
                },
                "start": {
                  "column": 16,
                  "line": 60
                }
              }
            },
            "range": [
              1651,
              1663
            ],
            "loc": {
              "end": {
                "column": 18,
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
          1650,
          1664
        ],
        "loc": {
          "end": {
            "column": 19,
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
            "name": "robotA",
            "optional": false,
            "range": [
              1669,
              1675
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 60
              },
              "start": {
                "column": 24,
                "line": 60
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              1677,
              1683
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 60
              },
              "start": {
                "column": 32,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1668,
          1684
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 60
          },
          "start": {
            "column": 23,
            "line": 60
          }
        }
      },
      "range": [
        1645,
        1715
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1774,
                    1779
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 64
                    },
                    "start": {
                      "column": 16,
                      "line": 64
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
                    1762,
                    1769
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 64
                    },
                    "start": {
                      "column": 4,
                      "line": 64
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
                    1770,
                    1773
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 64
                    },
                    "start": {
                      "column": 12,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1762,
                  1773
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              },
              "optional": false,
              "range": [
                1762,
                1780
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              1762,
              1781
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1756,
          1783
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 40,
            "line": 63
          }
        }
      },
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
              "name": "nameB",
              "optional": false,
              "range": [
                1722,
                1727
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 63
                },
                "start": {
                  "column": 6,
                  "line": 63
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                1730,
                1738
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 63
                },
                "start": {
                  "column": 14,
                  "line": 63
                }
              }
            },
            "range": [
              1722,
              1738
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 63
              },
              "start": {
                "column": 6,
                "line": 63
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1721,
          1739
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 63
          },
          "start": {
            "column": 5,
            "line": 63
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          1743,
          1754
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 63
          },
          "start": {
            "column": 27,
            "line": 63
          }
        }
      },
      "range": [
        1716,
        1783
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 63
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
                    1847,
                    1852
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 67
                    },
                    "start": {
                      "column": 16,
                      "line": 67
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
                    1835,
                    1842
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 67
                    },
                    "start": {
                      "column": 4,
                      "line": 67
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
                    1843,
                    1846
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 67
                    },
                    "start": {
                      "column": 12,
                      "line": 67
                    }
                  }
                },
                "range": [
                  1835,
                  1846
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              "optional": false,
              "range": [
                1835,
                1853
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "range": [
              1835,
              1854
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          }
        ],
        "range": [
          1829,
          1856
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 45,
            "line": 66
          }
        }
      },
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
              "name": "nameB",
              "optional": false,
              "range": [
                1790,
                1795
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 66
                },
                "start": {
                  "column": 6,
                  "line": 66
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                1798,
                1806
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 66
                },
                "start": {
                  "column": 14,
                  "line": 66
                }
              }
            },
            "range": [
              1790,
              1806
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 66
              },
              "start": {
                "column": 6,
                "line": 66
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1789,
          1807
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 66
          },
          "start": {
            "column": 5,
            "line": 66
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
            1811,
            1825
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 66
            },
            "start": {
              "column": 27,
              "line": 66
            }
          }
        },
        "optional": false,
        "range": [
          1811,
          1827
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 66
          },
          "start": {
            "column": 27,
            "line": 66
          }
        }
      },
      "range": [
        1784,
        1856
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 66
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
                    1930,
                    1935
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 70
                    },
                    "start": {
                      "column": 16,
                      "line": 70
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
                    1918,
                    1925
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 70
                    },
                    "start": {
                      "column": 4,
                      "line": 70
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
                    1926,
                    1929
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 70
                    },
                    "start": {
                      "column": 12,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1918,
                  1929
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              },
              "optional": false,
              "range": [
                1918,
                1936
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            "range": [
              1918,
              1937
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          }
        ],
        "range": [
          1912,
          1939
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 55,
            "line": 69
          }
        }
      },
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
              "name": "nameB",
              "optional": false,
              "range": [
                1863,
                1868
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 69
                },
                "start": {
                  "column": 6,
                  "line": 69
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                1871,
                1879
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 69
                },
                "start": {
                  "column": 14,
                  "line": 69
                }
              }
            },
            "range": [
              1863,
              1879
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 69
              },
              "start": {
                "column": 6,
                "line": 69
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1862,
          1880
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 69
          },
          "start": {
            "column": 5,
            "line": 69
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
              1885,
              1896
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 69
              },
              "start": {
                "column": 28,
                "line": 69
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              1898,
              1909
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 69
              },
              "start": {
                "column": 41,
                "line": 69
              }
            }
          }
        ],
        "range": [
          1884,
          1910
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 69
          },
          "start": {
            "column": 27,
            "line": 69
          }
        }
      },
      "range": [
        1857,
        1939
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 69
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
                    2029,
                    2035
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
                    2017,
                    2024
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
                    2025,
                    2028
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
                  2017,
                  2028
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
                2017,
                2036
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
              2017,
              2037
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
          2011,
          2039
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 70,
            "line": 73
          }
        }
      },
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
              "name": "numberA2",
              "optional": false,
              "range": [
                1947,
                1955
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 73
                },
                "start": {
                  "column": 6,
                  "line": 73
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
                  1959,
                  1960
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 73
                  },
                  "start": {
                    "column": 18,
                    "line": 73
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                1958,
                1960
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 73
                },
                "start": {
                  "column": 17,
                  "line": 73
                }
              }
            },
            "range": [
              1947,
              1960
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 73
              },
              "start": {
                "column": 6,
                "line": 73
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
                1962,
                1968
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 73
                },
                "start": {
                  "column": 21,
                  "line": 73
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                1971,
                1979
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 73
                },
                "start": {
                  "column": 30,
                  "line": 73
                }
              }
            },
            "range": [
              1962,
              1979
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 73
              },
              "start": {
                "column": 21,
                "line": 73
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
                1981,
                1988
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 73
                },
                "start": {
                  "column": 40,
                  "line": 73
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"skill\"",
              "value": "skill",
              "range": [
                1991,
                1998
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 73
                },
                "start": {
                  "column": 50,
                  "line": 73
                }
              }
            },
            "range": [
              1981,
              1998
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 73
              },
              "start": {
                "column": 40,
                "line": 73
              }
            }
          }
        ],
        "optional": false,
        "range": [
          1946,
          1999
        ],
        "loc": {
          "end": {
            "column": 58,
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
        "name": "robots",
        "optional": false,
        "range": [
          2003,
          2009
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 73
          },
          "start": {
            "column": 62,
            "line": 73
          }
        }
      },
      "range": [
        1941,
        2039
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    2133,
                    2139
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
                    2121,
                    2128
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
                    2129,
                    2132
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
                  2121,
                  2132
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
                2121,
                2140
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
              2121,
              2141
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
          2115,
          2143
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 75,
            "line": 76
          }
        }
      },
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
              "name": "numberA2",
              "optional": false,
              "range": [
                2046,
                2054
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 76
                },
                "start": {
                  "column": 6,
                  "line": 76
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
                  2058,
                  2059
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 76
                  },
                  "start": {
                    "column": 18,
                    "line": 76
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                2057,
                2059
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 76
                },
                "start": {
                  "column": 17,
                  "line": 76
                }
              }
            },
            "range": [
              2046,
              2059
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 76
              },
              "start": {
                "column": 6,
                "line": 76
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
                2061,
                2067
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 76
                },
                "start": {
                  "column": 21,
                  "line": 76
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                2070,
                2078
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 76
                },
                "start": {
                  "column": 30,
                  "line": 76
                }
              }
            },
            "range": [
              2061,
              2078
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 76
              },
              "start": {
                "column": 21,
                "line": 76
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
                2080,
                2087
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 76
                },
                "start": {
                  "column": 40,
                  "line": 76
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"skill\"",
              "value": "skill",
              "range": [
                2090,
                2097
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 76
                },
                "start": {
                  "column": 50,
                  "line": 76
                }
              }
            },
            "range": [
              2080,
              2097
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 76
              },
              "start": {
                "column": 40,
                "line": 76
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2045,
          2098
        ],
        "loc": {
          "end": {
            "column": 58,
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
          "name": "getRobots",
          "optional": false,
          "range": [
            2102,
            2111
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 76
            },
            "start": {
              "column": 62,
              "line": 76
            }
          }
        },
        "optional": false,
        "range": [
          2102,
          2113
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 76
          },
          "start": {
            "column": 62,
            "line": 76
          }
        }
      },
      "range": [
        2040,
        2143
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    2242,
                    2248
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
                    2230,
                    2237
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
                    2238,
                    2241
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
                  2230,
                  2241
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
                2230,
                2249
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
              2230,
              2250
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
          2224,
          2252
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 80,
            "line": 79
          }
        }
      },
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
              "name": "numberA2",
              "optional": false,
              "range": [
                2150,
                2158
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 79
                },
                "start": {
                  "column": 6,
                  "line": 79
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
                  2162,
                  2163
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 79
                  },
                  "start": {
                    "column": 18,
                    "line": 79
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                2161,
                2163
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 79
                },
                "start": {
                  "column": 17,
                  "line": 79
                }
              }
            },
            "range": [
              2150,
              2163
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 79
              },
              "start": {
                "column": 6,
                "line": 79
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
                2165,
                2171
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 79
                },
                "start": {
                  "column": 21,
                  "line": 79
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                2174,
                2182
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 79
                },
                "start": {
                  "column": 30,
                  "line": 79
                }
              }
            },
            "range": [
              2165,
              2182
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 79
              },
              "start": {
                "column": 21,
                "line": 79
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
                2184,
                2191
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 79
                },
                "start": {
                  "column": 40,
                  "line": 79
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"skill\"",
              "value": "skill",
              "range": [
                2194,
                2201
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 79
                },
                "start": {
                  "column": 50,
                  "line": 79
                }
              }
            },
            "range": [
              2184,
              2201
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 79
              },
              "start": {
                "column": 40,
                "line": 79
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2149,
          2202
        ],
        "loc": {
          "end": {
            "column": 58,
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
            "name": "robotA",
            "optional": false,
            "range": [
              2207,
              2213
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 79
              },
              "start": {
                "column": 63,
                "line": 79
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              2215,
              2221
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 79
              },
              "start": {
                "column": 71,
                "line": 79
              }
            }
          }
        ],
        "range": [
          2206,
          2222
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 79
          },
          "start": {
            "column": 62,
            "line": 79
          }
        }
      },
      "range": [
        2144,
        2252
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2405,
                    2411
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 86
                    },
                    "start": {
                      "column": 16,
                      "line": 86
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
                    2393,
                    2400
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 86
                    },
                    "start": {
                      "column": 4,
                      "line": 86
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
                    2401,
                    2404
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 86
                    },
                    "start": {
                      "column": 12,
                      "line": 86
                    }
                  }
                },
                "range": [
                  2393,
                  2404
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 86
                  },
                  "start": {
                    "column": 4,
                    "line": 86
                  }
                }
              },
              "optional": false,
              "range": [
                2393,
                2412
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "range": [
              2393,
              2413
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
          }
        ],
        "range": [
          2387,
          2415
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 42,
            "line": 85
          }
        }
      },
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
              "name": "nameMA",
              "optional": false,
              "range": [
                2259,
                2265
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 82
                },
                "start": {
                  "column": 6,
                  "line": 82
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                2268,
                2276
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 82
                },
                "start": {
                  "column": 15,
                  "line": 82
                }
              }
            },
            "range": [
              2259,
              2276
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 82
              },
              "start": {
                "column": 6,
                "line": 82
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
                      2284,
                      2297
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 83
                      },
                      "start": {
                        "column": 4,
                        "line": 83
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"primary\"",
                    "value": "primary",
                    "range": [
                      2300,
                      2309
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 83
                      },
                      "start": {
                        "column": 20,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    2284,
                    2309
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 83
                    },
                    "start": {
                      "column": 4,
                      "line": 83
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
                      2315,
                      2330
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                    "raw": "\"secondary\"",
                    "value": "secondary",
                    "range": [
                      2333,
                      2344
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 84
                      },
                      "start": {
                        "column": 22,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2315,
                    2344
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 84
                    },
                    "start": {
                      "column": 4,
                      "line": 84
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2278,
                2346
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 85
                },
                "start": {
                  "column": 25,
                  "line": 82
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
                    2350,
                    2358
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 85
                    },
                    "start": {
                      "column": 5,
                      "line": 85
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"skill2\"",
                  "value": "skill2",
                  "range": [
                    2360,
                    2368
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 85
                    },
                    "start": {
                      "column": 15,
                      "line": 85
                    }
                  }
                }
              ],
              "range": [
                2349,
                2369
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            "range": [
              2278,
              2369
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 85
              },
              "start": {
                "column": 25,
                "line": 82
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2258,
          2370
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 85
          },
          "start": {
            "column": 5,
            "line": 82
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "range": [
          2374,
          2385
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 85
          },
          "start": {
            "column": 29,
            "line": 85
          }
        }
      },
      "range": [
        2253,
        2415
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 82
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
                    2573,
                    2579
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 92
                    },
                    "start": {
                      "column": 16,
                      "line": 92
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
                    2561,
                    2568
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 92
                    },
                    "start": {
                      "column": 4,
                      "line": 92
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
                    2569,
                    2572
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 92
                    },
                    "start": {
                      "column": 12,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2561,
                  2572
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 92
                  },
                  "start": {
                    "column": 4,
                    "line": 92
                  }
                }
              },
              "optional": false,
              "range": [
                2561,
                2580
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 92
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            "range": [
              2561,
              2581
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
          }
        ],
        "range": [
          2555,
          2583
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 47,
            "line": 91
          }
        }
      },
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
              "name": "nameMA",
              "optional": false,
              "range": [
                2422,
                2428
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 88
                },
                "start": {
                  "column": 6,
                  "line": 88
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                2431,
                2439
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 88
                },
                "start": {
                  "column": 15,
                  "line": 88
                }
              }
            },
            "range": [
              2422,
              2439
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 88
              },
              "start": {
                "column": 6,
                "line": 88
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
                      2447,
                      2460
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 89
                      },
                      "start": {
                        "column": 4,
                        "line": 89
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"primary\"",
                    "value": "primary",
                    "range": [
                      2463,
                      2472
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 89
                      },
                      "start": {
                        "column": 20,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2447,
                    2472
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 89
                    },
                    "start": {
                      "column": 4,
                      "line": 89
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
                      2478,
                      2493
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                    "raw": "\"secondary\"",
                    "value": "secondary",
                    "range": [
                      2496,
                      2507
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 90
                      },
                      "start": {
                        "column": 22,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    2478,
                    2507
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 90
                    },
                    "start": {
                      "column": 4,
                      "line": 90
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2441,
                2509
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 91
                },
                "start": {
                  "column": 25,
                  "line": 88
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
                    2513,
                    2521
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 91
                    },
                    "start": {
                      "column": 5,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"skill2\"",
                  "value": "skill2",
                  "range": [
                    2523,
                    2531
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 91
                    },
                    "start": {
                      "column": 15,
                      "line": 91
                    }
                  }
                }
              ],
              "range": [
                2512,
                2532
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "range": [
              2441,
              2532
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 91
              },
              "start": {
                "column": 25,
                "line": 88
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2421,
          2533
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 91
          },
          "start": {
            "column": 5,
            "line": 88
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
            2537,
            2551
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 91
            },
            "start": {
              "column": 29,
              "line": 91
            }
          }
        },
        "optional": false,
        "range": [
          2537,
          2553
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 91
          },
          "start": {
            "column": 29,
            "line": 91
          }
        }
      },
      "range": [
        2416,
        2583
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 88
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
                    2751,
                    2757
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 98
                    },
                    "start": {
                      "column": 16,
                      "line": 98
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
                    2739,
                    2746
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 98
                    },
                    "start": {
                      "column": 4,
                      "line": 98
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
                    2747,
                    2750
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 98
                    },
                    "start": {
                      "column": 12,
                      "line": 98
                    }
                  }
                },
                "range": [
                  2739,
                  2750
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 98
                  },
                  "start": {
                    "column": 4,
                    "line": 98
                  }
                }
              },
              "optional": false,
              "range": [
                2739,
                2758
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 98
                }
              }
            },
            "range": [
              2739,
              2759
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          }
        ],
        "range": [
          2733,
          2761
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 57,
            "line": 97
          }
        }
      },
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
              "name": "nameMA",
              "optional": false,
              "range": [
                2590,
                2596
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 94
                },
                "start": {
                  "column": 6,
                  "line": 94
                }
              }
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "raw": "\"noName\"",
              "value": "noName",
              "range": [
                2599,
                2607
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 94
                },
                "start": {
                  "column": 15,
                  "line": 94
                }
              }
            },
            "range": [
              2590,
              2607
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 94
              },
              "start": {
                "column": 6,
                "line": 94
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
                      2615,
                      2628
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 95
                      },
                      "start": {
                        "column": 4,
                        "line": 95
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"primary\"",
                    "value": "primary",
                    "range": [
                      2631,
                      2640
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 95
                      },
                      "start": {
                        "column": 20,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2615,
                    2640
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 95
                    },
                    "start": {
                      "column": 4,
                      "line": 95
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
                      2646,
                      2661
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 96
                      },
                      "start": {
                        "column": 4,
                        "line": 96
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"secondary\"",
                    "value": "secondary",
                    "range": [
                      2664,
                      2675
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 96
                      },
                      "start": {
                        "column": 22,
                        "line": 96
                      }
                    }
                  },
                  "range": [
                    2646,
                    2675
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
              "optional": false,
              "range": [
                2609,
                2677
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 97
                },
                "start": {
                  "column": 25,
                  "line": 94
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
                    2681,
                    2689
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 97
                    },
                    "start": {
                      "column": 5,
                      "line": 97
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"skill2\"",
                  "value": "skill2",
                  "range": [
                    2691,
                    2699
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 97
                    },
                    "start": {
                      "column": 15,
                      "line": 97
                    }
                  }
                }
              ],
              "range": [
                2680,
                2700
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
            "range": [
              2609,
              2700
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 97
              },
              "start": {
                "column": 25,
                "line": 94
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2589,
          2701
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 97
          },
          "start": {
            "column": 5,
            "line": 94
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
              2706,
              2717
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 97
              },
              "start": {
                "column": 30,
                "line": 97
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "range": [
              2719,
              2730
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 97
              },
              "start": {
                "column": 43,
                "line": 97
              }
            }
          }
        ],
        "range": [
          2705,
          2731
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 97
          },
          "start": {
            "column": 29,
            "line": 97
          }
        }
      },
      "range": [
        2584,
        2761
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 94
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
                    2828,
                    2836
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 102
                    },
                    "start": {
                      "column": 16,
                      "line": 102
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
                    2816,
                    2823
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 102
                    },
                    "start": {
                      "column": 4,
                      "line": 102
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
                    2824,
                    2827
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 102
                    },
                    "start": {
                      "column": 12,
                      "line": 102
                    }
                  }
                },
                "range": [
                  2816,
                  2827
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 102
                  },
                  "start": {
                    "column": 4,
                    "line": 102
                  }
                }
              },
              "optional": false,
              "range": [
                2816,
                2837
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            "range": [
              2816,
              2838
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          }
        ],
        "range": [
          2810,
          2840
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 103
          },
          "start": {
            "column": 47,
            "line": 101
          }
        }
      },
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
              "name": "numberA3",
              "optional": false,
              "range": [
                2769,
                2777
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 101
                },
                "start": {
                  "column": 6,
                  "line": 101
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
                  2781,
                  2782
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 101
                  },
                  "start": {
                    "column": 18,
                    "line": 101
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                2780,
                2782
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 101
                },
                "start": {
                  "column": 17,
                  "line": 101
                }
              }
            },
            "range": [
              2769,
              2782
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 101
              },
              "start": {
                "column": 6,
                "line": 101
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
                2787,
                2797
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 101
                },
                "start": {
                  "column": 24,
                  "line": 101
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2784,
              2797
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 101
              },
              "start": {
                "column": 21,
                "line": 101
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2768,
          2798
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 101
          },
          "start": {
            "column": 5,
            "line": 101
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "range": [
          2802,
          2808
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 101
          },
          "start": {
            "column": 39,
            "line": 101
          }
        }
      },
      "range": [
        2763,
        2840
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 101
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
                    2911,
                    2919
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 105
                    },
                    "start": {
                      "column": 16,
                      "line": 105
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
                    2899,
                    2906
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 105
                    },
                    "start": {
                      "column": 4,
                      "line": 105
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
                    2907,
                    2910
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 105
                    },
                    "start": {
                      "column": 12,
                      "line": 105
                    }
                  }
                },
                "range": [
                  2899,
                  2910
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 105
                  },
                  "start": {
                    "column": 4,
                    "line": 105
                  }
                }
              },
              "optional": false,
              "range": [
                2899,
                2920
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "range": [
              2899,
              2921
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "range": [
          2893,
          2923
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 52,
            "line": 104
          }
        }
      },
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
              "name": "numberA3",
              "optional": false,
              "range": [
                2847,
                2855
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 104
                },
                "start": {
                  "column": 6,
                  "line": 104
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
                  2859,
                  2860
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 104
                  },
                  "start": {
                    "column": 18,
                    "line": 104
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                2858,
                2860
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 104
                },
                "start": {
                  "column": 17,
                  "line": 104
                }
              }
            },
            "range": [
              2847,
              2860
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 104
              },
              "start": {
                "column": 6,
                "line": 104
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
                2865,
                2875
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 104
                },
                "start": {
                  "column": 24,
                  "line": 104
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2862,
              2875
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 104
              },
              "start": {
                "column": 21,
                "line": 104
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2846,
          2876
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 104
          },
          "start": {
            "column": 5,
            "line": 104
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
            2880,
            2889
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 104
            },
            "start": {
              "column": 39,
              "line": 104
            }
          }
        },
        "optional": false,
        "range": [
          2880,
          2891
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 104
          },
          "start": {
            "column": 39,
            "line": 104
          }
        }
      },
      "range": [
        2841,
        2923
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 104
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
                    2999,
                    3007
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 108
                    },
                    "start": {
                      "column": 16,
                      "line": 108
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
                    2987,
                    2994
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 108
                    },
                    "start": {
                      "column": 4,
                      "line": 108
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
                    2995,
                    2998
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 108
                    },
                    "start": {
                      "column": 12,
                      "line": 108
                    }
                  }
                },
                "range": [
                  2987,
                  2998
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 108
                  },
                  "start": {
                    "column": 4,
                    "line": 108
                  }
                }
              },
              "optional": false,
              "range": [
                2987,
                3008
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 108
                },
                "start": {
                  "column": 4,
                  "line": 108
                }
              }
            },
            "range": [
              2987,
              3009
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          }
        ],
        "range": [
          2981,
          3011
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 57,
            "line": 107
          }
        }
      },
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
              "name": "numberA3",
              "optional": false,
              "range": [
                2930,
                2938
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 107
                },
                "start": {
                  "column": 6,
                  "line": 107
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
                  2942,
                  2943
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 107
                  },
                  "start": {
                    "column": 18,
                    "line": 107
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                2941,
                2943
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 107
                },
                "start": {
                  "column": 17,
                  "line": 107
                }
              }
            },
            "range": [
              2930,
              2943
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 107
              },
              "start": {
                "column": 6,
                "line": 107
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
                2948,
                2958
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 107
                },
                "start": {
                  "column": 24,
                  "line": 107
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              2945,
              2958
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 107
              },
              "start": {
                "column": 21,
                "line": 107
              }
            }
          }
        ],
        "optional": false,
        "range": [
          2929,
          2959
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 107
          },
          "start": {
            "column": 5,
            "line": 107
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
              2964,
              2970
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 107
              },
              "start": {
                "column": 40,
                "line": 107
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "range": [
              2972,
              2978
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 107
              },
              "start": {
                "column": 48,
                "line": 107
              }
            }
          }
        ],
        "range": [
          2963,
          2979
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 107
          },
          "start": {
            "column": 39,
            "line": 107
          }
        }
      },
      "range": [
        2924,
        3011
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 109
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
