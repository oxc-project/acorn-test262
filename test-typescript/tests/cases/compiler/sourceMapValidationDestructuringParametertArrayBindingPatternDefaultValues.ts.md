__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    755
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
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                99,
                106
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    101,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "range": [
                  101,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              93,
              106
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                  110,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  113,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mowing\"",
                "value": "mowing",
                "range": [
                  122,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              109,
              131
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            93,
            131
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        89,
        132
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 5
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    219,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
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
                    207,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
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
                    215,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "range": [
                  207,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                207,
                225
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              207,
              226
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          201,
          228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 67,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          143,
          147
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
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
                    151,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"noName\"",
                  "value": "noName",
                  "range": [
                    159,
                    167
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
                "range": [
                  151,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 34,
                  "line": 7
                }
              },
              "range": [
                168,
                175
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    170,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  }
                },
                "range": [
                  170,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 36,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              148,
              175
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    180,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
                    },
                    "start": {
                      "column": 46,
                      "line": 7
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  179,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 45,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"name\"",
                "value": "name",
                "range": [
                  183,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 7
                  },
                  "start": {
                    "column": 49,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"skill\"",
                "value": "skill",
                "range": [
                  191,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 7
                  },
                  "start": {
                    "column": 57,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              178,
              199
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 7
              },
              "start": {
                "column": 44,
                "line": 7
              }
            }
          },
          "range": [
            148,
            199
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        }
      ],
      "range": [
        134,
        228
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    309,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
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
                    297,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
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
                    305,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  297,
                  308
                ],
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
              "optional": false,
              "range": [
                297,
                317
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              297,
              318
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          291,
          320
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 61,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          239,
          243
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    245,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
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
                      256,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
                        "line": 11
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    255,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 25,
                      "line": 11
                    }
                  }
                },
                "range": [
                  245,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 28,
                  "line": 11
                }
              },
              "range": [
                258,
                265
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    260,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 11
                    },
                    "start": {
                      "column": 30,
                      "line": 11
                    }
                  }
                },
                "range": [
                  260,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              244,
              265
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    270,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 40,
                      "line": 11
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  269,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 11
                  },
                  "start": {
                    "column": 39,
                    "line": 11
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"name\"",
                "value": "name",
                "range": [
                  273,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 11
                  },
                  "start": {
                    "column": 43,
                    "line": 11
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"skill\"",
                "value": "skill",
                "range": [
                  281,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 11
                  },
                  "start": {
                    "column": 51,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              268,
              289
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 11
              },
              "start": {
                "column": 38,
                "line": 11
              }
            }
          },
          "range": [
            244,
            289
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "range": [
        230,
        320
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    438,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
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
                    426,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                  "name": "log",
                  "optional": false,
                  "range": [
                    434,
                    437
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
                "range": [
                  426,
                  437
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
              "optional": false,
              "range": [
                426,
                445
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              426,
              446
            ],
            "loc": {
              "end": {
                "column": 24,
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
          420,
          448
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 98,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          331,
          335
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
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
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    337,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
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
                      349,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    348,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 26,
                      "line": 15
                    }
                  }
                },
                "range": [
                  337,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
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
                    352,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 15
                    },
                    "start": {
                      "column": 30,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"name\"",
                  "value": "name",
                  "range": [
                    361,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 15
                    },
                    "start": {
                      "column": 39,
                      "line": 15
                    }
                  }
                },
                "range": [
                  352,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 15
                  },
                  "start": {
                    "column": 30,
                    "line": 15
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
                    369,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 15
                    },
                    "start": {
                      "column": 47,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"skill\"",
                  "value": "skill",
                  "range": [
                    379,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 15
                    },
                    "start": {
                      "column": 57,
                      "line": 15
                    }
                  }
                },
                "range": [
                  369,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 15
                  },
                  "start": {
                    "column": 47,
                    "line": 15
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 72,
                  "line": 15
                },
                "start": {
                  "column": 65,
                  "line": 15
                }
              },
              "range": [
                387,
                394
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    389,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 15
                    },
                    "start": {
                      "column": 67,
                      "line": 15
                    }
                  }
                },
                "range": [
                  389,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 15
                  },
                  "start": {
                    "column": 67,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              336,
              394
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 15
              },
              "start": {
                "column": 14,
                "line": 15
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    399,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 15
                    },
                    "start": {
                      "column": 77,
                      "line": 15
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  398,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 15
                  },
                  "start": {
                    "column": 76,
                    "line": 15
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"name\"",
                "value": "name",
                "range": [
                  402,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 15
                  },
                  "start": {
                    "column": 80,
                    "line": 15
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"skill\"",
                "value": "skill",
                "range": [
                  410,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 15
                  },
                  "start": {
                    "column": 88,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              397,
              418
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 15
              },
              "start": {
                "column": 75,
                "line": 15
              }
            }
          },
          "range": [
            336,
            418
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        }
      ],
      "range": [
        322,
        448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "range": [
                    545,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
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
                    533,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                  "name": "log",
                  "optional": false,
                  "range": [
                    541,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "range": [
                  533,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                533,
                556
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              533,
              557
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          527,
          559
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 77,
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
        "name": "foo4",
        "optional": false,
        "range": [
          459,
          463
        ],
        "loc": {
          "end": {
            "column": 13,
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    465,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
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
                      477,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 27,
                        "line": 19
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    476,
                    478
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 26,
                      "line": 19
                    }
                  }
                },
                "range": [
                  465,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 19
                  },
                  "start": {
                    "column": 15,
                    "line": 19
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
                    483,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 19
                    },
                    "start": {
                      "column": 33,
                      "line": 19
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  480,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 19
                  },
                  "start": {
                    "column": 30,
                    "line": 19
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 19
                },
                "start": {
                  "column": 44,
                  "line": 19
                }
              },
              "range": [
                494,
                501
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    496,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 19
                    },
                    "start": {
                      "column": 46,
                      "line": 19
                    }
                  }
                },
                "range": [
                  496,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 19
                  },
                  "start": {
                    "column": 46,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              464,
              501
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    506,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 19
                    },
                    "start": {
                      "column": 56,
                      "line": 19
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  505,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 19
                  },
                  "start": {
                    "column": 55,
                    "line": 19
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"name\"",
                "value": "name",
                "range": [
                  509,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 19
                  },
                  "start": {
                    "column": 59,
                    "line": 19
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"skill\"",
                "value": "skill",
                "range": [
                  517,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 19
                  },
                  "start": {
                    "column": 67,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              504,
              525
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 19
              },
              "start": {
                "column": 54,
                "line": 19
              }
            }
          },
          "range": [
            464,
            525
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "range": [
        450,
        559
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              566,
              572
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 5,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            561,
            565
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          561,
          573
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        561,
        574
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  581,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 24
                  },
                  "start": {
                    "column": 6,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  584,
                  593
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
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  595,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              580,
              606
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 24
              },
              "start": {
                "column": 5,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            575,
            579
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          575,
          607
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        575,
        608
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              615,
              621
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 26
              },
              "start": {
                "column": 5,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            610,
            614
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          610,
          622
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        610,
        623
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  630,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 27
                  },
                  "start": {
                    "column": 6,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  633,
                  642
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
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  644,
                  654
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 27
                  },
                  "start": {
                    "column": 20,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              629,
              655
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 27
              },
              "start": {
                "column": 5,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            624,
            628
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          624,
          656
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        624,
        657
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              664,
              670
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 29
              },
              "start": {
                "column": 5,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            659,
            663
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          659,
          671
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        659,
        672
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  679,
                  680
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 30
                  },
                  "start": {
                    "column": 6,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  682,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 9,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  693,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 30
                  },
                  "start": {
                    "column": 20,
                    "line": 30
                  }
                }
              }
            ],
            "range": [
              678,
              704
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 5,
                "line": 30
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            673,
            677
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          673,
          705
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        673,
        706
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              713,
              719
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 32
              },
              "start": {
                "column": 5,
                "line": 32
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "range": [
            708,
            712
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          708,
          720
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        708,
        721
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  728,
                  729
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 33
                  },
                  "start": {
                    "column": 6,
                    "line": 33
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  731,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  742,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              727,
              753
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 33
              },
              "start": {
                "column": 5,
                "line": 33
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "range": [
            722,
            726
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "range": [
          722,
          754
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        722,
        755
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 33,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
