__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    811
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                23
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        11,
                        12
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 1
                        },
                        "start": {
                          "column": 11,
                          "line": 1
                        }
                      }
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 1
                        },
                        "start": {
                          "column": 13,
                          "line": 1
                        }
                      },
                      "range": [
                        13,
                        21
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          15,
                          21
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 1
                          },
                          "start": {
                            "column": 15,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      11,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 11,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  9,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              26,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          "range": [
            6,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "x",
            "optional": false,
            "range": [
              35,
              36
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
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              39,
              40
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
            35,
            40
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
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        31,
        41
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                "name": "x",
                "optional": false,
                "range": [
                  44,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    44,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 3
                    },
                    "start": {
                      "column": 2,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    48,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 3
                    },
                    "start": {
                      "column": 6,
                      "line": 3
                    }
                  }
                },
                "range": [
                  44,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
                  }
                }
              },
              "range": [
                44,
                49
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            43,
            50
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 3
            },
            "start": {
              "column": 1,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            53,
            54
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
        "range": [
          43,
          54
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 1,
            "line": 3
          }
        }
      },
      "range": [
        42,
        56
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
                        "name": "color",
                        "optional": false,
                        "range": [
                          150,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
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
                        "name": "color",
                        "optional": false,
                        "range": [
                          150,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        150,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 10,
                          "line": 8
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "range": [
                          157,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
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
                        "name": "width",
                        "optional": false,
                        "range": [
                          157,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        157,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    148,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "range": [
                      167,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 27,
                        "line": 8
                      }
                    }
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      178,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 38,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    167,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  }
                },
                "range": [
                  148,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              144,
              181
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
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
                      "name": "color",
                      "optional": false,
                      "range": [
                        189,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 9
                        },
                        "start": {
                          "column": 7,
                          "line": 9
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
                      "name": "color",
                      "optional": false,
                      "range": [
                        189,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 9
                        },
                        "start": {
                          "column": 7,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      189,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 9
                      },
                      "start": {
                        "column": 7,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "range": [
                        196,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 14,
                          "line": 9
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
                      "name": "width",
                      "optional": false,
                      "range": [
                        196,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 14,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      196,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 14,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  187,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "range": [
                    206,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 24,
                      "line": 9
                    }
                  }
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    217,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 35,
                      "line": 9
                    }
                  }
                },
                "range": [
                  206,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                187,
                219
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              }
            },
            "range": [
              186,
              221
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "x1",
                  "optional": false,
                  "range": [
                    230,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        236,
                        243
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
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        247,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 10
                        },
                        "start": {
                          "column": 25,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      236,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "range": [
                      251,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 29,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    235,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  230,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              226,
              257
            ],
            "loc": {
              "end": {
                "column": 35,
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
                  "name": "x2",
                  "optional": false,
                  "range": [
                    266,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        272,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        283,
                        285
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
                      272,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "\"color\"",
                    "value": "color",
                    "range": [
                      287,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 11
                      },
                      "start": {
                        "column": 29,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    271,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "range": [
                  266,
                  295
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
              262,
              296
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
          138,
          298
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 58,
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
        "name": "f1",
        "optional": false,
        "range": [
          89,
          91
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            },
            "range": [
              100,
              136
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "range": [
                      104,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    },
                    "range": [
                      110,
                      118
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        112,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
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
                    104,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 7
                    },
                    "start": {
                      "column": 24,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "range": [
                      120,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 7
                      },
                      "start": {
                        "column": 40,
                        "line": 7
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 7
                      },
                      "start": {
                        "column": 46,
                        "line": 7
                      }
                    },
                    "range": [
                      126,
                      134
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        128,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 7
                        },
                        "start": {
                          "column": 48,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    120,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 7
                    },
                    "start": {
                      "column": 40,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                102,
                136
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            }
          },
          "range": [
            92,
            136
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        }
      ],
      "range": [
        80,
        298
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
                      "name": "str",
                      "optional": false,
                      "range": [
                        353,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 15
                        },
                        "start": {
                          "column": 9,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "range": [
                        358,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    352,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "range": [
                      365,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 21,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      376,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 15
                      },
                      "start": {
                        "column": 32,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    365,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 15
                    },
                    "start": {
                      "column": 21,
                      "line": 15
                    }
                  }
                },
                "range": [
                  352,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              348,
              379
            ],
            "loc": {
              "end": {
                "column": 35,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "range": [
                      385,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 16
                      },
                      "start": {
                        "column": 5,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "range": [
                      390,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 16
                      },
                      "start": {
                        "column": 10,
                        "line": 16
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  384,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "range": [
                    397,
                    404
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    408,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                },
                "range": [
                  397,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              },
              "range": [
                384,
                410
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              384,
              411
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                  "name": "x1",
                  "optional": false,
                  "range": [
                    420,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        426,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        437,
                        439
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 17
                        },
                        "start": {
                          "column": 25,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      426,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      441,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 17
                      },
                      "start": {
                        "column": 29,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    425,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "range": [
                  420,
                  443
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              416,
              444
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          342,
          446
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 42,
            "line": 14
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
          309,
          311
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 14
              },
              "start": {
                "column": 20,
                "line": 14
              }
            },
            "range": [
              320,
              340
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      323,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    323,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 23,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      332,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 14
                      },
                      "start": {
                        "column": 32,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    332,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 14
                    },
                    "start": {
                      "column": 32,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                322,
                340
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 22,
                  "line": 14
                }
              }
            }
          },
          "range": [
            312,
            340
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        }
      ],
      "range": [
        300,
        446
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 14
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
                        "name": "color",
                        "optional": false,
                        "range": [
                          516,
                          521
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 21
                          },
                          "start": {
                            "column": 10,
                            "line": 21
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
                        "name": "color",
                        "optional": false,
                        "range": [
                          516,
                          521
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 21
                          },
                          "start": {
                            "column": 10,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        516,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 21
                        },
                        "start": {
                          "column": 10,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "range": [
                          523,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 21
                          },
                          "start": {
                            "column": 17,
                            "line": 21
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
                        "name": "width",
                        "optional": false,
                        "range": [
                          523,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 21
                          },
                          "start": {
                            "column": 17,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        523,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 21
                        },
                        "start": {
                          "column": 17,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    514,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "range": [
                      533,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 27,
                        "line": 21
                      }
                    }
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      544,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 21
                      },
                      "start": {
                        "column": 38,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    533,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 21
                    },
                    "start": {
                      "column": 27,
                      "line": 21
                    }
                  }
                },
                "range": [
                  514,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              510,
              547
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
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
                      "name": "color",
                      "optional": false,
                      "range": [
                        555,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 22
                        },
                        "start": {
                          "column": 7,
                          "line": 22
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
                      "name": "color",
                      "optional": false,
                      "range": [
                        555,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 22
                        },
                        "start": {
                          "column": 7,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      555,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 22
                      },
                      "start": {
                        "column": 7,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "range": [
                        562,
                        567
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
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
                      "name": "width",
                      "optional": false,
                      "range": [
                        562,
                        567
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      562,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 14,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  553,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 5,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "range": [
                    572,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
                    }
                  }
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    583,
                    585
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 22
                    },
                    "start": {
                      "column": 35,
                      "line": 22
                    }
                  }
                },
                "range": [
                  572,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 22
                  }
                }
              },
              "range": [
                553,
                585
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 22
                }
              }
            },
            "range": [
              552,
              587
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 22
              },
              "start": {
                "column": 4,
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
                  "name": "x1",
                  "optional": false,
                  "range": [
                    596,
                    598
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        602,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
                          "line": 23
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        613,
                        615
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 23
                        },
                        "start": {
                          "column": 25,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      602,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 23
                      },
                      "start": {
                        "column": 14,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "range": [
                      617,
                      622
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 23
                      },
                      "start": {
                        "column": 29,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    601,
                    622
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  596,
                  622
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              592,
              623
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 23
              },
              "start": {
                "column": 4,
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
                  "name": "x2",
                  "optional": false,
                  "range": [
                    632,
                    634
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        638,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 14,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        649,
                        651
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 25,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      638,
                      651
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 14,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "\"color\"",
                    "value": "color",
                    "range": [
                      653,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 24
                      },
                      "start": {
                        "column": 29,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    637,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                },
                "range": [
                  632,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              628,
              662
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          504,
          664
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 56,
            "line": 20
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
          457,
          459
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 20
              },
              "start": {
                "column": 20,
                "line": 20
              }
            },
            "range": [
              468,
              502
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "range": [
                      472,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 24,
                        "line": 20
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
                        "column": 37,
                        "line": 20
                      },
                      "start": {
                        "column": 29,
                        "line": 20
                      }
                    },
                    "range": [
                      477,
                      485
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        479,
                        485
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 20
                        },
                        "start": {
                          "column": 31,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    472,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 20
                    },
                    "start": {
                      "column": 24,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "range": [
                      487,
                      492
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 20
                      },
                      "start": {
                        "column": 39,
                        "line": 20
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
                        "column": 52,
                        "line": 20
                      },
                      "start": {
                        "column": 44,
                        "line": 20
                      }
                    },
                    "range": [
                      492,
                      500
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        494,
                        500
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 20
                        },
                        "start": {
                          "column": 46,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    487,
                    500
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 20
                    },
                    "start": {
                      "column": 39,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                470,
                502
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            }
          },
          "range": [
            460,
            502
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 20
            }
          }
        }
      ],
      "range": [
        448,
        664
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 20
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
                      "name": "str",
                      "optional": false,
                      "range": [
                        717,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 28
                        },
                        "start": {
                          "column": 9,
                          "line": 28
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "range": [
                        722,
                        725
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 14,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    716,
                    726
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
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "range": [
                      729,
                      736
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 28
                      },
                      "start": {
                        "column": 21,
                        "line": 28
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      740,
                      742
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 28
                      },
                      "start": {
                        "column": 32,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    729,
                    742
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 28
                    },
                    "start": {
                      "column": 21,
                      "line": 28
                    }
                  }
                },
                "range": [
                  716,
                  742
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              712,
              743
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "range": [
                      749,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 29
                      },
                      "start": {
                        "column": 5,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "range": [
                      754,
                      757
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 29
                      },
                      "start": {
                        "column": 10,
                        "line": 29
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  748,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "range": [
                    761,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 29
                    },
                    "start": {
                      "column": 17,
                      "line": 29
                    }
                  }
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    772,
                    774
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 29
                    },
                    "start": {
                      "column": 28,
                      "line": 29
                    }
                  }
                },
                "range": [
                  761,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                }
              },
              "range": [
                748,
                774
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              748,
              775
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                  "name": "x1",
                  "optional": false,
                  "range": [
                    784,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        790,
                        797
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 30
                        },
                        "start": {
                          "column": 14,
                          "line": 30
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        801,
                        803
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 30
                        },
                        "start": {
                          "column": 25,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      790,
                      803
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 30
                      },
                      "start": {
                        "column": 14,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      805,
                      806
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 30
                      },
                      "start": {
                        "column": 29,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    789,
                    807
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 30
                    },
                    "start": {
                      "column": 13,
                      "line": 30
                    }
                  }
                },
                "range": [
                  784,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              780,
              808
            ],
            "loc": {
              "end": {
                "column": 32,
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
          706,
          810
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 40,
            "line": 27
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
          675,
          677
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 27
              },
              "start": {
                "column": 20,
                "line": 27
              }
            },
            "range": [
              686,
              704
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    689,
                    695
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
                  "type": "TSNumberKeyword",
                  "range": [
                    697,
                    703
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
                688,
                704
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
            }
          },
          "range": [
            678,
            704
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 27
            },
            "start": {
              "column": 12,
              "line": 27
            }
          }
        }
      ],
      "range": [
        666,
        810
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
