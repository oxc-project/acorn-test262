__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    467
  ],
  "body": [
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    },
                    "range": [
                      56,
                      61
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            58,
                            59
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 2
                            },
                            "start": {
                              "column": 12,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          58,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 2
                          },
                          "start": {
                            "column": 12,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        58,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    54,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    64,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  54,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              50,
              67
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              98,
                              99
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 3
                              },
                              "start": {
                                "column": 30,
                                "line": 3
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
                            96,
                            97
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 3
                            },
                            "start": {
                              "column": 28,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          96,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
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
                        "name": "ys",
                        "optional": false,
                        "range": [
                          88,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 3
                          },
                          "start": {
                            "column": 20,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "range": [
                          91,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 23,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        88,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 20,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      88,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        83,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    83,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
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
                  "name": "xs",
                  "optional": false,
                  "range": [
                    72,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "range": [
                    75,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 7,
                      "line": 3
                    }
                  }
                },
                "range": [
                  72,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                72,
                102
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              72,
              103
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ys",
              "optional": false,
              "range": [
                115,
                117
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              108,
              118
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          44,
          120
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 44,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            },
            "range": [
              21,
              26
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    23,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                },
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              },
              "range": [
                23,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            }
          },
          "range": [
            19,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            },
            "range": [
              29,
              42
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 33,
                        "line": 1
                      }
                    },
                    "range": [
                      33,
                      36
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          35,
                          36
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 1
                          },
                          "start": {
                            "column": 35,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        35,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 1
                        },
                        "start": {
                          "column": 35,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    32,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 38,
                    "line": 1
                  }
                },
                "range": [
                  38,
                  42
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      41,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 41,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    41,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 1
                    },
                    "start": {
                      "column": 41,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                31,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            }
          },
          "range": [
            28,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          18
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 13,
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
              "name": "U",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        120
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "r0",
            "optional": false,
            "range": [
              126,
              128
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 7
                      },
                      "start": {
                        "column": 14,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      139,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  135,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        151,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 29,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        153,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 7
                        },
                        "start": {
                          "column": 31,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      151,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    151,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
                      "line": 7
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      145,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 7
                      },
                      "start": {
                        "column": 23,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  144,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                131,
                134
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              131,
              164
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            126,
            164
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
      "kind": "var",
      "range": [
        122,
        165
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
            "name": "r5",
            "optional": false,
            "range": [
              170,
              172
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      190,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
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
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      193,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 27,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  189,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        205,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 39,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        207,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 8
                        },
                        "start": {
                          "column": 41,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      205,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 8
                      },
                      "start": {
                        "column": 39,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    205,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 8
                    },
                    "start": {
                      "column": 39,
                      "line": 8
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      199,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 33,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  198,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 8
                  },
                  "start": {
                    "column": 32,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                175,
                178
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                178,
                188
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    179,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    184,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "range": [
              175,
              218
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 8
              },
              "start": {
                "column": 9,
                "line": 8
              }
            }
          },
          "range": [
            170,
            218
          ],
          "loc": {
            "end": {
              "column": 52,
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
      "kind": "var",
      "range": [
        166,
        219
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "name": "r6",
            "optional": false,
            "range": [
              224,
              226
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      250,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 9
                      },
                      "start": {
                        "column": 30,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      253,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 9
                      },
                      "start": {
                        "column": 33,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  249,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        265,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 9
                        },
                        "start": {
                          "column": 45,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        267,
                        275
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 9
                        },
                        "start": {
                          "column": 47,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      265,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 9
                      },
                      "start": {
                        "column": 45,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    265,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 9
                    },
                    "start": {
                      "column": 45,
                      "line": 9
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      259,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 9
                      },
                      "start": {
                        "column": 39,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  258,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 9
                  },
                  "start": {
                    "column": 38,
                    "line": 9
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                229,
                232
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                232,
                248
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "range": [
                      233,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    233,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "range": [
                      241,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    241,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 9
                    },
                    "start": {
                      "column": 21,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "range": [
              229,
              278
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            224,
            278
          ],
          "loc": {
            "end": {
              "column": 58,
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
      "kind": "var",
      "range": [
        220,
        279
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "name": "r7",
            "optional": false,
            "range": [
              284,
              286
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      310,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 30,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      313,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  309,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        325,
                        326
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 10
                        },
                        "start": {
                          "column": 45,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        327,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 10
                        },
                        "start": {
                          "column": 47,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      325,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 10
                      },
                      "start": {
                        "column": 45,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    325,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 10
                    },
                    "start": {
                      "column": 45,
                      "line": 10
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      319,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 39,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  318,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 10
                  },
                  "start": {
                    "column": 38,
                    "line": 10
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                289,
                292
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
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                292,
                308
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    293,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    301,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 10
                    },
                    "start": {
                      "column": 21,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "range": [
              289,
              338
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            284,
            338
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        280,
        339
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 10
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
            "name": "r7b",
            "optional": false,
            "range": [
              353,
              356
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      372,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      375,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  371,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        387,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 11
                        },
                        "start": {
                          "column": 38,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        389,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 11
                        },
                        "start": {
                          "column": 40,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      387,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 11
                      },
                      "start": {
                        "column": 38,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    387,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 11
                    },
                    "start": {
                      "column": 38,
                      "line": 11
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      381,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 11
                      },
                      "start": {
                        "column": 32,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  380,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 11
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                359,
                362
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                362,
                370
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    363,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "range": [
              359,
              400
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 11
              }
            }
          },
          "range": [
            353,
            400
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        349,
        401
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "r8",
            "optional": false,
            "range": [
              415,
              417
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      438,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 27,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      441,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  437,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 26,
                    "line": 12
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        453,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 12
                        },
                        "start": {
                          "column": 42,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "range": [
                        455,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 12
                        },
                        "start": {
                          "column": 44,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      453,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 12
                      },
                      "start": {
                        "column": 42,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    453,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 12
                    },
                    "start": {
                      "column": 42,
                      "line": 12
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      447,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 12
                      },
                      "start": {
                        "column": 36,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  446,
                  465
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 12
                  },
                  "start": {
                    "column": 35,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                420,
                423
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                423,
                436
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    424,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    429,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "range": [
              420,
              466
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            415,
            466
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        411,
        467
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 56,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
