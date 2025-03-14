__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    306,
    3803
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
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              },
              "range": [
                325,
                330
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  327,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              318,
              330
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            318,
            330
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        306,
        331
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"typescript\"",
        "value": "typescript",
        "range": [
          353,
          365
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 10
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "range": [
              345,
              347
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "range": [
            340,
            347
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 7,
              "line": 10
            }
          }
        }
      ],
      "range": [
        333,
        366
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    862,
                    869
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                852,
                875
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "range": [
                  844,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                843,
                850
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "range": [
              839,
              875
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
                  "name": "comments",
                  "optional": false,
                  "range": [
                    918,
                    926
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        960,
                        969
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 23
                        },
                        "start": {
                          "column": 50,
                          "line": 23
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
                      "name": "symbol",
                      "optional": false,
                      "range": [
                        929,
                        935
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 23
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getDocumentationComment",
                      "optional": false,
                      "range": [
                        936,
                        959
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 23
                        },
                        "start": {
                          "column": 26,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      929,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 23
                      },
                      "start": {
                        "column": 19,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    929,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 23
                    },
                    "start": {
                      "column": 19,
                      "line": 23
                    }
                  }
                },
                "range": [
                  918,
                  970
                ],
                "loc": {
                  "end": {
                    "column": 60,
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
              914,
              971
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definition",
                        "optional": false,
                        "range": [
                          1008,
                          1018
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "description",
                        "optional": false,
                        "range": [
                          1019,
                          1030
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 26
                          },
                          "start": {
                            "column": 19,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        1008,
                        1030
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"\"",
                          "value": "",
                          "range": [
                            1152,
                            1154
                          ],
                          "loc": {
                            "end": {
                              "column": 154,
                              "line": 26
                            },
                            "start": {
                              "column": 152,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "ConditionalExpression",
                                "alternate": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "raw": "/\\r\\n/g",
                                      "regex": {
                                        "flags": "g",
                                        "pattern": "\\r\\n"
                                      },
                                      "value": null,
                                      "range": [
                                        1131,
                                        1138
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 138,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 131,
                                          "line": 26
                                        }
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "raw": "\"\\n\"",
                                      "value": "\n",
                                      "range": [
                                        1140,
                                        1144
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 144,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 140,
                                          "line": 26
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "CallExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "comment",
                                            "optional": false,
                                            "range": [
                                              1103,
                                              1110
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 110,
                                                "line": 26
                                              },
                                              "start": {
                                                "column": 103,
                                                "line": 26
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "text",
                                            "optional": false,
                                            "range": [
                                              1111,
                                              1115
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 115,
                                                "line": 26
                                              },
                                              "start": {
                                                "column": 111,
                                                "line": 26
                                              }
                                            }
                                          },
                                          "range": [
                                            1103,
                                            1115
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 115,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 103,
                                              "line": 26
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "trim",
                                          "optional": false,
                                          "range": [
                                            1116,
                                            1120
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 120,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 116,
                                              "line": 26
                                            }
                                          }
                                        },
                                        "range": [
                                          1103,
                                          1120
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 120,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 103,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        1103,
                                        1122
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 122,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 103,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "replace",
                                      "optional": false,
                                      "range": [
                                        1123,
                                        1130
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 130,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 123,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "range": [
                                      1103,
                                      1130
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 130,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 103,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    1103,
                                    1145
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 145,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 103,
                                      "line": 26
                                    }
                                  }
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "comment",
                                    "optional": false,
                                    "range": [
                                      1088,
                                      1095
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 95,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 88,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "range": [
                                      1096,
                                      1100
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 100,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 96,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    1088,
                                    1100
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 100,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 88,
                                      "line": 26
                                    }
                                  }
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "comment",
                                      "optional": false,
                                      "range": [
                                        1057,
                                        1064
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 64,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 57,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "kind",
                                      "optional": false,
                                      "range": [
                                        1065,
                                        1069
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 69,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 65,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "range": [
                                      1057,
                                      1069
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 69,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 57,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "\"lineBreak\"",
                                    "value": "lineBreak",
                                    "range": [
                                      1074,
                                      1085
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 85,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 74,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    1057,
                                    1085
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 57,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  1057,
                                  1145
                                ],
                                "loc": {
                                  "end": {
                                    "column": 145,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 26
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
                                  "name": "comment",
                                  "optional": false,
                                  "range": [
                                    1046,
                                    1053
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 26
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1046,
                                1145
                              ],
                              "loc": {
                                "end": {
                                  "column": 145,
                                  "line": 26
                                },
                                "start": {
                                  "column": 46,
                                  "line": 26
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
                              "name": "comments",
                              "optional": false,
                              "range": [
                                1033,
                                1041
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 26
                                },
                                "start": {
                                  "column": 33,
                                  "line": 26
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "map",
                              "optional": false,
                              "range": [
                                1042,
                                1045
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 26
                                },
                                "start": {
                                  "column": 42,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              1033,
                              1045
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 26
                              },
                              "start": {
                                "column": 33,
                                "line": 26
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1033,
                            1146
                          ],
                          "loc": {
                            "end": {
                              "column": 146,
                              "line": 26
                            },
                            "start": {
                              "column": 33,
                              "line": 26
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "join",
                          "optional": false,
                          "range": [
                            1147,
                            1151
                          ],
                          "loc": {
                            "end": {
                              "column": 151,
                              "line": 26
                            },
                            "start": {
                              "column": 147,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          1033,
                          1151
                        ],
                        "loc": {
                          "end": {
                            "column": 151,
                            "line": 26
                          },
                          "start": {
                            "column": 33,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1033,
                        1155
                      ],
                      "loc": {
                        "end": {
                          "column": 155,
                          "line": 26
                        },
                        "start": {
                          "column": 33,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      1008,
                      1155
                    ],
                    "loc": {
                      "end": {
                        "column": 155,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    1008,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 156,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                998,
                1162
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "comments",
                "optional": false,
                "range": [
                  981,
                  989
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  990,
                  996
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 25
                  },
                  "start": {
                    "column": 17,
                    "line": 25
                  }
                }
              },
              "range": [
                981,
                996
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "range": [
              977,
              1162
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
                  "name": "jsdocs",
                  "optional": false,
                  "range": [
                    1215,
                    1221
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 30
                    },
                    "start": {
                      "column": 10,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          1244,
                          1248
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 30
                          },
                          "start": {
                            "column": 39,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "checker",
                        "optional": false,
                        "range": [
                          1249,
                          1256
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 30
                          },
                          "start": {
                            "column": 44,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        1244,
                        1256
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 30
                        },
                        "start": {
                          "column": 39,
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
                      "name": "symbol",
                      "optional": false,
                      "range": [
                        1224,
                        1230
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 30
                        },
                        "start": {
                          "column": 19,
                          "line": 30
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJsDocTags",
                      "optional": false,
                      "range": [
                        1231,
                        1243
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 30
                        },
                        "start": {
                          "column": 26,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      1224,
                      1243
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 30
                      },
                      "start": {
                        "column": 19,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1224,
                    1257
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 30
                    }
                  }
                },
                "range": [
                  1215,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1209,
              1258
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 30
              },
              "start": {
                "column": 4,
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
                  "type": "ArrowFunctionExpression",
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
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      1369,
                                      1373
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 33
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
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      1369,
                                      1373
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1369,
                                    1373
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 33
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "range": [
                                      1375,
                                      1379
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 33
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
                                    "name": "text",
                                    "optional": false,
                                    "range": [
                                      1375,
                                      1379
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1375,
                                    1379
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1367,
                                1381
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 33
                                },
                                "start": {
                                  "column": 14,
                                  "line": 33
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "doc",
                              "optional": false,
                              "range": [
                                1384,
                                1387
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 33
                                },
                                "start": {
                                  "column": 31,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              1367,
                              1387
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 33
                              },
                              "start": {
                                "column": 14,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1361,
                          1388
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 33
                          },
                          "start": {
                            "column": 8,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "otherAnnotations",
                                    "optional": false,
                                    "range": [
                                      1556,
                                      1572
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 38
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "doc",
                                      "optional": false,
                                      "range": [
                                        1573,
                                        1576
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 38
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "range": [
                                        1577,
                                        1581
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 38
                                        }
                                      }
                                    },
                                    "range": [
                                      1573,
                                      1581
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 38
                                      }
                                    }
                                  },
                                  "range": [
                                    1556,
                                    1582
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 38
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "true",
                                  "value": true,
                                  "range": [
                                    1585,
                                    1589
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 38
                                    }
                                  }
                                },
                                "range": [
                                  1556,
                                  1589
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                1556,
                                1590
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 38
                                },
                                "start": {
                                  "column": 12,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "range": [
                            1507,
                            1600
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 39
                            },
                            "start": {
                              "column": 15,
                              "line": 36
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "definition",
                                    "optional": false,
                                    "range": [
                                      1450,
                                      1460
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      1461,
                                      1465
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    1450,
                                    1466
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 35
                                    }
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "text",
                                      "optional": false,
                                      "range": [
                                        1485,
                                        1489
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 35
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        1469,
                                        1473
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parseValue",
                                      "optional": false,
                                      "range": [
                                        1474,
                                        1484
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "range": [
                                      1469,
                                      1484
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    1469,
                                    1490
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 35
                                    }
                                  }
                                },
                                "range": [
                                  1450,
                                  1490
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 35
                                  }
                                }
                              },
                              "range": [
                                1450,
                                1491
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 35
                                },
                                "start": {
                                  "column": 12,
                                  "line": 35
                                }
                              }
                            }
                          ],
                          "range": [
                            1436,
                            1501
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 36
                            },
                            "start": {
                              "column": 47,
                              "line": 34
                            }
                          }
                        },
                        "test": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1401,
                                1405
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 34
                                },
                                "start": {
                                  "column": 12,
                                  "line": 34
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "userValidationKeywords",
                              "optional": false,
                              "range": [
                                1406,
                                1428
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 34
                                },
                                "start": {
                                  "column": 17,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              1401,
                              1428
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 34
                              },
                              "start": {
                                "column": 12,
                                "line": 34
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "range": [
                              1429,
                              1433
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 34
                              },
                              "start": {
                                "column": 40,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1401,
                            1434
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 34
                            },
                            "start": {
                              "column": 12,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1397,
                          1600
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "range": [
                      1285,
                      1606
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 40
                      },
                      "start": {
                        "column": 26,
                        "line": 31
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doc",
                      "optional": false,
                      "range": [
                        1278,
                        1281
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "range": [
                    1278,
                    1606
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 40
                    },
                    "start": {
                      "column": 19,
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
                  "name": "jsdocs",
                  "optional": false,
                  "range": [
                    1263,
                    1269
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                  "name": "forEach",
                  "optional": false,
                  "range": [
                    1270,
                    1277
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 31
                    },
                    "start": {
                      "column": 11,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1263,
                  1277
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
                1263,
                1607
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              1263,
              1608
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          833,
          1610
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 83,
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
        "name": "parseCommentsIntoDefinition",
        "optional": false,
        "range": [
          549,
          576
        ],
        "loc": {
          "end": {
            "column": 36,
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
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 14
              },
              "start": {
                "column": 41,
                "line": 14
              }
            },
            "range": [
              581,
              586
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                583,
                586
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 14
                },
                "start": {
                  "column": 43,
                  "line": 14
                }
              }
            }
          },
          "range": [
            577,
            586
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 14
            },
            "start": {
              "column": 37,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "symbol",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 15
              },
              "start": {
                "column": 43,
                "line": 15
              }
            },
            "range": [
              631,
              642
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "range": [
                    633,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 15
                    },
                    "start": {
                      "column": 45,
                      "line": 15
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "range": [
                    636,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 15
                    },
                    "start": {
                      "column": 48,
                      "line": 15
                    }
                  }
                },
                "range": [
                  633,
                  642
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 15
                  },
                  "start": {
                    "column": 45,
                    "line": 15
                  }
                }
              },
              "range": [
                633,
                642
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 15
                },
                "start": {
                  "column": 45,
                  "line": 15
                }
              }
            }
          },
          "range": [
            625,
            642
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 15
            },
            "start": {
              "column": 37,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 104,
                "line": 16
              },
              "start": {
                "column": 47,
                "line": 16
              }
            },
            "range": [
              691,
              748
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
                    "name": "description",
                    "optional": false,
                    "range": [
                      694,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 16
                      },
                      "start": {
                        "column": 50,
                        "line": 16
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
                        "column": 70,
                        "line": 16
                      },
                      "start": {
                        "column": 62,
                        "line": 16
                      }
                    },
                    "range": [
                      706,
                      714
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        708,
                        714
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 16
                        },
                        "start": {
                          "column": 64,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    694,
                    715
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 16
                    },
                    "start": {
                      "column": 50,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 16
                          },
                          "start": {
                            "column": 74,
                            "line": 16
                          }
                        },
                        "range": [
                          718,
                          726
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            720,
                            726
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 16
                            },
                            "start": {
                              "column": 76,
                              "line": 16
                            }
                          }
                        }
                      },
                      "range": [
                        717,
                        726
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 16
                        },
                        "start": {
                          "column": 73,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 16
                      },
                      "start": {
                        "column": 83,
                        "line": 16
                      }
                    },
                    "range": [
                      727,
                      747
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            729,
                            735
                          ],
                          "loc": {
                            "end": {
                              "column": 91,
                              "line": 16
                            },
                            "start": {
                              "column": 85,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            738,
                            747
                          ],
                          "loc": {
                            "end": {
                              "column": 103,
                              "line": 16
                            },
                            "start": {
                              "column": 94,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        729,
                        747
                      ],
                      "loc": {
                        "end": {
                          "column": 103,
                          "line": 16
                        },
                        "start": {
                          "column": 85,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    716,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 16
                    },
                    "start": {
                      "column": 72,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                693,
                748
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 16
                },
                "start": {
                  "column": 49,
                  "line": 16
                }
              }
            }
          },
          "range": [
            681,
            748
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 16
            },
            "start": {
              "column": 37,
              "line": 16
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "otherAnnotations",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 17
              },
              "start": {
                "column": 53,
                "line": 17
              }
            },
            "range": [
              803,
              825
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 17
                          },
                          "start": {
                            "column": 59,
                            "line": 17
                          }
                        },
                        "range": [
                          809,
                          817
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            811,
                            817
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 17
                            },
                            "start": {
                              "column": 61,
                              "line": 17
                            }
                          }
                        }
                      },
                      "range": [
                        808,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 17
                        },
                        "start": {
                          "column": 58,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 17
                      },
                      "start": {
                        "column": 68,
                        "line": 17
                      }
                    },
                    "range": [
                      818,
                      824
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          820,
                          824
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 17
                          },
                          "start": {
                            "column": 70,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        820,
                        824
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 17
                        },
                        "start": {
                          "column": 70,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    807,
                    824
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 17
                    },
                    "start": {
                      "column": 57,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                805,
                825
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 17
                },
                "start": {
                  "column": 55,
                  "line": 17
                }
              }
            }
          },
          "range": [
            787,
            825
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 17
            },
            "start": {
              "column": 37,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 17
          },
          "start": {
            "column": 76,
            "line": 17
          }
        },
        "range": [
          826,
          832
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            828,
            832
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 17
            },
            "start": {
              "column": 78,
              "line": 17
            }
          }
        }
      },
      "range": [
        540,
        1610
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1680,
        1737
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            1709,
            1737
          ],
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 46
                      },
                      "start": {
                        "column": 9,
                        "line": 46
                      }
                    },
                    "range": [
                      1720,
                      1728
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1722,
                        1728
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 46
                        },
                        "start": {
                          "column": 11,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1716,
                    1728
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 46
                    },
                    "start": {
                      "column": 5,
                      "line": 46
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 46
                  },
                  "start": {
                    "column": 18,
                    "line": 46
                  }
                },
                "range": [
                  1729,
                  1734
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1731,
                    1734
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 46
                    },
                    "start": {
                      "column": 20,
                      "line": 46
                    }
                  }
                }
              },
              "range": [
                1715,
                1735
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
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 47
            },
            "start": {
              "column": 29,
              "line": 45
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Annotations",
          "optional": false,
          "range": [
            1697,
            1708
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 45
            },
            "start": {
              "column": 17,
              "line": 45
            }
          }
        },
        "range": [
          1687,
          1737
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 7,
            "line": 45
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
                  "name": "symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 49
                      },
                      "start": {
                        "column": 16,
                        "line": 49
                      }
                    },
                    "range": [
                      1831,
                      1842
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "range": [
                            1833,
                            1835
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 49
                            },
                            "start": {
                              "column": 18,
                              "line": 49
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "range": [
                            1836,
                            1842
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 49
                            },
                            "start": {
                              "column": 21,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1833,
                          1842
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 49
                          },
                          "start": {
                            "column": 18,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        1833,
                        1842
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 49
                        },
                        "start": {
                          "column": 18,
                          "line": 49
                        }
                      }
                    }
                  },
                  "range": [
                    1825,
                    1842
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        1846,
                        1850
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 49
                        },
                        "start": {
                          "column": 31,
                          "line": 49
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1854,
                        1857
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 49
                        },
                        "start": {
                          "column": 39,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1846,
                      1857
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 49
                      },
                      "start": {
                        "column": 31,
                        "line": 49
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "symbol",
                    "optional": false,
                    "range": [
                      1859,
                      1865
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 49
                      },
                      "start": {
                        "column": 44,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1845,
                    1865
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 49
                    },
                    "start": {
                      "column": 30,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1825,
                  1865
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 49
                  },
                  "start": {
                    "column": 10,
                    "line": 49
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1819,
              1866
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      1901,
                      1910
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 51
                      },
                      "start": {
                        "column": 15,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1894,
                    1911
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                1884,
                1917
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 17,
                  "line": 50
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "range": [
                  1876,
                  1882
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 50
                  },
                  "start": {
                    "column": 9,
                    "line": 50
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                1875,
                1882
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "range": [
              1871,
              1917
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 50
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
                  "name": "jsDocTags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 54
                      },
                      "start": {
                        "column": 19,
                        "line": 54
                      }
                    },
                    "range": [
                      1938,
                      1957
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              1940,
                              1942
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 54
                              },
                              "start": {
                                "column": 21,
                                "line": 54
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSDocTagInfo",
                            "optional": false,
                            "range": [
                              1943,
                              1955
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 54
                              },
                              "start": {
                                "column": 24,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            1940,
                            1955
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 54
                            },
                            "start": {
                              "column": 21,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          1940,
                          1955
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 54
                          },
                          "start": {
                            "column": 21,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1940,
                        1957
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 54
                        },
                        "start": {
                          "column": 21,
                          "line": 54
                        }
                      }
                    }
                  },
                  "range": [
                    1929,
                    1957
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 54
                    },
                    "start": {
                      "column": 10,
                      "line": 54
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          1980,
                          1984
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 54
                          },
                          "start": {
                            "column": 61,
                            "line": 54
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "checker",
                        "optional": false,
                        "range": [
                          1985,
                          1992
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 54
                          },
                          "start": {
                            "column": 66,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1980,
                        1992
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 54
                        },
                        "start": {
                          "column": 61,
                          "line": 54
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
                      "name": "symbol",
                      "optional": false,
                      "range": [
                        1960,
                        1966
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 54
                        },
                        "start": {
                          "column": 41,
                          "line": 54
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJsDocTags",
                      "optional": false,
                      "range": [
                        1967,
                        1979
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 54
                        },
                        "start": {
                          "column": 48,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1960,
                      1979
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 54
                      },
                      "start": {
                        "column": 41,
                        "line": 54
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1960,
                    1993
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 54
                    },
                    "start": {
                      "column": 41,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1929,
                  1993
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1923,
              1994
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      2053,
                      2062
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 56
                      },
                      "start": {
                        "column": 15,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    2046,
                    2063
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                }
              ],
              "range": [
                2036,
                2069
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 41,
                  "line": 55
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "jsDocTags",
                  "optional": false,
                  "range": [
                    2004,
                    2013
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 55
                    },
                    "start": {
                      "column": 9,
                      "line": 55
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  2003,
                  2013
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              },
              "right": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "jsDocTags",
                    "optional": false,
                    "range": [
                      2018,
                      2027
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 55
                      },
                      "start": {
                        "column": 23,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      2028,
                      2034
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 55
                      },
                      "start": {
                        "column": 33,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    2018,
                    2034
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 55
                    },
                    "start": {
                      "column": 23,
                      "line": 55
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  2017,
                  2034
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 55
                  },
                  "start": {
                    "column": 22,
                    "line": 55
                  }
                }
              },
              "range": [
                2003,
                2034
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 55
                },
                "start": {
                  "column": 8,
                  "line": 55
                }
              }
            },
            "range": [
              1999,
              2069
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 55
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
                  "name": "annotations",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 59
                      },
                      "start": {
                        "column": 21,
                        "line": 59
                      }
                    },
                    "range": [
                      2092,
                      2105
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Annotations",
                        "optional": false,
                        "range": [
                          2094,
                          2105
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 59
                          },
                          "start": {
                            "column": 23,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        2094,
                        2105
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 59
                        },
                        "start": {
                          "column": 23,
                          "line": 59
                        }
                      }
                    }
                  },
                  "range": [
                    2081,
                    2105
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 59
                    },
                    "start": {
                      "column": 10,
                      "line": 59
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
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
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    2193,
                                    2198
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 60
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 60
                                    }
                                  }
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "jsDocTag",
                                      "optional": false,
                                      "range": [
                                        2220,
                                        2228
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 60
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        2201,
                                        2205
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 60
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parseJsDocTag",
                                      "optional": false,
                                      "range": [
                                        2206,
                                        2219
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 60
                                        }
                                      }
                                    },
                                    "range": [
                                      2201,
                                      2219
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 60
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 60
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    2201,
                                    2229
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 60
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 60
                                    }
                                  }
                                },
                                "range": [
                                  2193,
                                  2229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 60
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              2187,
                              2230
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 60
                              },
                              "start": {
                                "column": 8,
                                "line": 60
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "range": [
                                          2278,
                                          2284
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 62
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 62
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "jsDocTag",
                                          "optional": false,
                                          "range": [
                                            2285,
                                            2293
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 62
                                            },
                                            "start": {
                                              "column": 19,
                                              "line": 62
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "range": [
                                            2294,
                                            2298
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 32,
                                              "line": 62
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 62
                                            }
                                          }
                                        },
                                        "range": [
                                          2285,
                                          2298
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 62
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 62
                                          }
                                        }
                                      },
                                      "range": [
                                        2278,
                                        2299
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 62
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 62
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        2302,
                                        2307
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 62
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 62
                                        }
                                      }
                                    },
                                    "range": [
                                      2278,
                                      2307
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 62
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 62
                                      }
                                    }
                                  },
                                  "range": [
                                    2278,
                                    2308
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 62
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2264,
                                2318
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 63
                                },
                                "start": {
                                  "column": 33,
                                  "line": 61
                                }
                              }
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "!==",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "range": [
                                  2243,
                                  2248
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 61
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "range": [
                                  2253,
                                  2262
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 61
                                  }
                                }
                              },
                              "range": [
                                2243,
                                2262
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 61
                                },
                                "start": {
                                  "column": 12,
                                  "line": 61
                                }
                              }
                            },
                            "range": [
                              2239,
                              2318
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 63
                              },
                              "start": {
                                "column": 8,
                                "line": 61
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "range": [
                                2335,
                                2341
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 65
                                },
                                "start": {
                                  "column": 15,
                                  "line": 65
                                }
                              }
                            },
                            "range": [
                              2328,
                              2342
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 65
                              },
                              "start": {
                                "column": 8,
                                "line": 65
                              }
                            }
                          }
                        ],
                        "range": [
                          2177,
                          2348
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 66
                          },
                          "start": {
                            "column": 106,
                            "line": 59
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 59
                              },
                              "start": {
                                "column": 61,
                                "line": 59
                              }
                            },
                            "range": [
                              2132,
                              2145
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Annotations",
                                "optional": false,
                                "range": [
                                  2134,
                                  2145
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 59
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 59
                                  }
                                }
                              },
                              "range": [
                                2134,
                                2145
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 59
                                },
                                "start": {
                                  "column": 63,
                                  "line": 59
                                }
                              }
                            }
                          },
                          "range": [
                            2126,
                            2145
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 59
                            },
                            "start": {
                              "column": 55,
                              "line": 59
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "jsDocTag",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 101,
                                "line": 59
                              },
                              "start": {
                                "column": 84,
                                "line": 59
                              }
                            },
                            "range": [
                              2155,
                              2172
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ts",
                                  "optional": false,
                                  "range": [
                                    2157,
                                    2159
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 88,
                                      "line": 59
                                    },
                                    "start": {
                                      "column": 86,
                                      "line": 59
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "JSDocTagInfo",
                                  "optional": false,
                                  "range": [
                                    2160,
                                    2172
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 101,
                                      "line": 59
                                    },
                                    "start": {
                                      "column": 89,
                                      "line": 59
                                    }
                                  }
                                },
                                "range": [
                                  2157,
                                  2172
                                ],
                                "loc": {
                                  "end": {
                                    "column": 101,
                                    "line": 59
                                  },
                                  "start": {
                                    "column": 86,
                                    "line": 59
                                  }
                                }
                              },
                              "range": [
                                2157,
                                2172
                              ],
                              "loc": {
                                "end": {
                                  "column": 101,
                                  "line": 59
                                },
                                "start": {
                                  "column": 86,
                                  "line": 59
                                }
                              }
                            }
                          },
                          "range": [
                            2147,
                            2172
                          ],
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 59
                            },
                            "start": {
                              "column": 76,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "range": [
                        2125,
                        2348
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 66
                        },
                        "start": {
                          "column": 54,
                          "line": 59
                        }
                      }
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        2350,
                        2352
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 66
                        },
                        "start": {
                          "column": 7,
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
                      "name": "jsDocTags",
                      "optional": false,
                      "range": [
                        2108,
                        2117
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 59
                        },
                        "start": {
                          "column": 37,
                          "line": 59
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reduce",
                      "optional": false,
                      "range": [
                        2118,
                        2124
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 59
                        },
                        "start": {
                          "column": 47,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      2108,
                      2124
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 59
                      },
                      "start": {
                        "column": 37,
                        "line": 59
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2108,
                    2353
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 66
                    },
                    "start": {
                      "column": 37,
                      "line": 59
                    }
                  }
                },
                "range": [
                  2081,
                  2353
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 66
                  },
                  "start": {
                    "column": 10,
                    "line": 59
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2075,
              2354
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  2414,
                  2423
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 67
                  },
                  "start": {
                    "column": 59,
                    "line": 67
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "annotations",
                "optional": false,
                "range": [
                  2400,
                  2411
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 67
                  },
                  "start": {
                    "column": 45,
                    "line": 67
                  }
                }
              },
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "annotations",
                      "optional": false,
                      "range": [
                        2378,
                        2389
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 67
                        },
                        "start": {
                          "column": 23,
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
                      "name": "Object",
                      "optional": false,
                      "range": [
                        2366,
                        2372
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 67
                        },
                        "start": {
                          "column": 11,
                          "line": 67
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "range": [
                        2373,
                        2377
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 67
                        },
                        "start": {
                          "column": 18,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      2366,
                      2377
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 67
                      },
                      "start": {
                        "column": 11,
                        "line": 67
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2366,
                    2390
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 67
                    },
                    "start": {
                      "column": 11,
                      "line": 67
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    2391,
                    2397
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 67
                    },
                    "start": {
                      "column": 36,
                      "line": 67
                    }
                  }
                },
                "range": [
                  2366,
                  2397
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 67
                  },
                  "start": {
                    "column": 11,
                    "line": 67
                  }
                }
              },
              "range": [
                2366,
                2423
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 67
                },
                "start": {
                  "column": 11,
                  "line": 67
                }
              }
            },
            "range": [
              2359,
              2424
            ],
            "loc": {
              "end": {
                "column": 69,
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
          1813,
          2426
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 75,
            "line": 48
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAnnotations",
        "optional": false,
        "range": [
          1747,
          1761
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 48
          },
          "start": {
            "column": 9,
            "line": 48
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 48
              },
              "start": {
                "column": 28,
                "line": 48
              }
            },
            "range": [
              1766,
              1771
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1768,
                1771
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 48
                },
                "start": {
                  "column": 30,
                  "line": 48
                }
              }
            }
          },
          "range": [
            1762,
            1771
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 48
            },
            "start": {
              "column": 24,
              "line": 48
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 48
              },
              "start": {
                "column": 39,
                "line": 48
              }
            },
            "range": [
              1777,
              1786
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "range": [
                    1779,
                    1781
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 48
                    },
                    "start": {
                      "column": 41,
                      "line": 48
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "range": [
                    1782,
                    1786
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 48
                    },
                    "start": {
                      "column": 44,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1779,
                  1786
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 48
                  },
                  "start": {
                    "column": 41,
                    "line": 48
                  }
                }
              },
              "range": [
                1779,
                1786
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 48
                },
                "start": {
                  "column": 41,
                  "line": 48
                }
              }
            }
          },
          "range": [
            1773,
            1786
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 48
            },
            "start": {
              "column": 35,
              "line": 48
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 74,
            "line": 48
          },
          "start": {
            "column": 49,
            "line": 48
          }
        },
        "range": [
          1787,
          1812
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Annotations",
                "optional": false,
                "range": [
                  1789,
                  1800
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 48
                  },
                  "start": {
                    "column": 51,
                    "line": 48
                  }
                }
              },
              "range": [
                1789,
                1800
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 48
                },
                "start": {
                  "column": 51,
                  "line": 48
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                1803,
                1812
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 48
                },
                "start": {
                  "column": 65,
                  "line": 48
                }
              }
            }
          ],
          "range": [
            1789,
            1812
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 48
            },
            "start": {
              "column": 51,
              "line": 48
            }
          }
        }
      },
      "range": [
        1738,
        2426
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 48
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "range": [
                            2617,
                            2621
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 73
                            },
                            "start": {
                              "column": 40,
                              "line": 73
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "range": [
                                2625,
                                2627
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 73
                                },
                                "start": {
                                  "column": 48,
                                  "line": 73
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ParameterDeclaration",
                              "optional": false,
                              "range": [
                                2628,
                                2648
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 73
                                },
                                "start": {
                                  "column": 51,
                                  "line": 73
                                }
                              }
                            },
                            "range": [
                              2625,
                              2648
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 73
                              },
                              "start": {
                                "column": 48,
                                "line": 73
                              }
                            }
                          },
                          "range": [
                            2625,
                            2648
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 73
                            },
                            "start": {
                              "column": 48,
                              "line": 73
                            }
                          }
                        },
                        "range": [
                          2617,
                          2648
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 73
                          },
                          "start": {
                            "column": 40,
                            "line": 73
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
                        "name": "ts",
                        "optional": false,
                        "range": [
                          2592,
                          2594
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 73
                          },
                          "start": {
                            "column": 15,
                            "line": 73
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getJSDocParameterTags",
                        "optional": false,
                        "range": [
                          2595,
                          2616
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 73
                          },
                          "start": {
                            "column": 18,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        2592,
                        2616
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 73
                        },
                        "start": {
                          "column": 15,
                          "line": 73
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2592,
                      2649
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 73
                      },
                      "start": {
                        "column": 15,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    2585,
                    2650
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                }
              ],
              "range": [
                2575,
                2656
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 47,
                  "line": 72
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "range": [
                    2536,
                    2540
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    2541,
                    2545
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 72
                    },
                    "start": {
                      "column": 13,
                      "line": 72
                    }
                  }
                },
                "range": [
                  2536,
                  2545
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "range": [
                      2550,
                      2552
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 72
                      },
                      "start": {
                        "column": 22,
                        "line": 72
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      2553,
                      2563
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 72
                      },
                      "start": {
                        "column": 25,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    2550,
                    2563
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 72
                    },
                    "start": {
                      "column": 22,
                      "line": 72
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parameter",
                  "optional": false,
                  "range": [
                    2564,
                    2573
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 72
                    },
                    "start": {
                      "column": 36,
                      "line": 72
                    }
                  }
                },
                "range": [
                  2550,
                  2573
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 72
                  },
                  "start": {
                    "column": 22,
                    "line": 72
                  }
                }
              },
              "range": [
                2536,
                2573
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 72
                },
                "start": {
                  "column": 8,
                  "line": 72
                }
              }
            },
            "range": [
              2532,
              2656
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "func",
                        "optional": false,
                        "range": [
                          2730,
                          2734
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 76
                          },
                          "start": {
                            "column": 14,
                            "line": 76
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "range": [
                            2737,
                            2741
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 76
                            },
                            "start": {
                              "column": 21,
                              "line": 76
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "range": [
                                2745,
                                2747
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 76
                                },
                                "start": {
                                  "column": 29,
                                  "line": 76
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FunctionDeclaration",
                              "optional": false,
                              "range": [
                                2748,
                                2767
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 76
                                },
                                "start": {
                                  "column": 32,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              2745,
                              2767
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 76
                              },
                              "start": {
                                "column": 29,
                                "line": 76
                              }
                            }
                          },
                          "range": [
                            2745,
                            2767
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 76
                            },
                            "start": {
                              "column": 29,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          2737,
                          2767
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 76
                          },
                          "start": {
                            "column": 21,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        2730,
                        2767
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 76
                        },
                        "start": {
                          "column": 14,
                          "line": 76
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2724,
                    2768
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 76
                    },
                    "start": {
                      "column": 8,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
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
                              "name": "flat",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 78
                                  }
                                },
                                "range": [
                                  2837,
                                  2852
                                ],
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "range": [
                                          2839,
                                          2841
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 78
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 78
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "JSDocTag",
                                        "optional": false,
                                        "range": [
                                          2842,
                                          2850
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 78
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 78
                                          }
                                        }
                                      },
                                      "range": [
                                        2839,
                                        2850
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 78
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 78
                                        }
                                      }
                                    },
                                    "range": [
                                      2839,
                                      2850
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 78
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 78
                                      }
                                    }
                                  },
                                  "range": [
                                    2839,
                                    2852
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 78
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 78
                                    }
                                  }
                                }
                              },
                              "range": [
                                2833,
                                2852
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 78
                                },
                                "start": {
                                  "column": 18,
                                  "line": 78
                                }
                              }
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "range": [
                                2855,
                                2857
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 78
                                },
                                "start": {
                                  "column": 40,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              2833,
                              2857
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 78
                              },
                              "start": {
                                "column": 18,
                                "line": 78
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          2827,
                          2858
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 78
                          },
                          "start": {
                            "column": 12,
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
                              "type": "IfStatement",
                              "alternate": null,
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tags",
                                        "optional": false,
                                        "range": [
                                          2978,
                                          2982
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 80
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 80
                                          }
                                        }
                                      },
                                      "range": [
                                        2975,
                                        2982
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 36,
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
                                      "name": "flat",
                                      "optional": false,
                                      "range": [
                                        2965,
                                        2969
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 80
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
                                        2970,
                                        2974
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 80
                                        }
                                      }
                                    },
                                    "range": [
                                      2965,
                                      2974
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    2965,
                                    2983
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 80
                                    }
                                  }
                                },
                                "range": [
                                  2965,
                                  2984
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 80
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 80
                                  }
                                }
                              },
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "tags",
                                "optional": false,
                                "range": [
                                  2959,
                                  2963
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 80
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 80
                                  }
                                }
                              },
                              "range": [
                                2955,
                                2984
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 80
                                },
                                "start": {
                                  "column": 16,
                                  "line": 80
                                }
                              }
                            }
                          ],
                          "range": [
                            2937,
                            2998
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 81
                            },
                            "start": {
                              "column": 78,
                              "line": 79
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "tags",
                                "optional": false,
                                "range": [
                                  2882,
                                  2886
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 79
                                  }
                                }
                              },
                              "init": null,
                              "range": [
                                2882,
                                2886
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 79
                                },
                                "start": {
                                  "column": 23,
                                  "line": 79
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const",
                          "range": [
                            2876,
                            2886
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 79
                            },
                            "start": {
                              "column": 17,
                              "line": 79
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "range": [
                                  2910,
                                  2912
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 79
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getJSDocParameterTags",
                                "optional": false,
                                "range": [
                                  2913,
                                  2934
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 79
                                  }
                                }
                              },
                              "range": [
                                2910,
                                2934
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 79
                                },
                                "start": {
                                  "column": 51,
                                  "line": 79
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "range": [
                                  2890,
                                  2894
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 79
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "parameters",
                                "optional": false,
                                "range": [
                                  2895,
                                  2905
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 79
                                  }
                                }
                              },
                              "range": [
                                2890,
                                2905
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 79
                                },
                                "start": {
                                  "column": 31,
                                  "line": 79
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "map",
                              "optional": false,
                              "range": [
                                2906,
                                2909
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 79
                                },
                                "start": {
                                  "column": 47,
                                  "line": 79
                                }
                              }
                            },
                            "range": [
                              2890,
                              2909
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 79
                              },
                              "start": {
                                "column": 31,
                                "line": 79
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2890,
                            2935
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 79
                            },
                            "start": {
                              "column": 31,
                              "line": 79
                            }
                          }
                        },
                        "range": [
                          2871,
                          2998
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 81
                          },
                          "start": {
                            "column": 12,
                            "line": 79
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flat",
                          "optional": false,
                          "range": [
                            3018,
                            3022
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 82
                            },
                            "start": {
                              "column": 19,
                              "line": 82
                            }
                          }
                        },
                        "range": [
                          3011,
                          3023
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 82
                          },
                          "start": {
                            "column": 12,
                            "line": 82
                          }
                        }
                      }
                    ],
                    "range": [
                      2813,
                      3033
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 83
                      },
                      "start": {
                        "column": 44,
                        "line": 77
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "range": [
                          2806,
                          2810
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 77
                          },
                          "start": {
                            "column": 37,
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
                        "name": "ts",
                        "optional": false,
                        "range": [
                          2781,
                          2783
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
                            "line": 77
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasJSDocParameterTags",
                        "optional": false,
                        "range": [
                          2784,
                          2805
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 77
                          },
                          "start": {
                            "column": 15,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        2781,
                        2805
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 77
                        },
                        "start": {
                          "column": 12,
                          "line": 77
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2781,
                      2811
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 77
                      },
                      "start": {
                        "column": 12,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    2777,
                    3033
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                2714,
                3039
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 84
                },
                "start": {
                  "column": 57,
                  "line": 75
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "range": [
                    2665,
                    2669
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    2670,
                    2674
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 75
                    },
                    "start": {
                      "column": 13,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2665,
                  2674
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 75
                  },
                  "start": {
                    "column": 8,
                    "line": 75
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "range": [
                      2679,
                      2681
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 75
                      },
                      "start": {
                        "column": 22,
                        "line": 75
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      2682,
                      2692
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 75
                      },
                      "start": {
                        "column": 25,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    2679,
                    2692
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 75
                    },
                    "start": {
                      "column": 22,
                      "line": 75
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionDeclaration",
                  "optional": false,
                  "range": [
                    2693,
                    2712
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 75
                    },
                    "start": {
                      "column": 36,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2679,
                  2712
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 75
                  },
                  "start": {
                    "column": 22,
                    "line": 75
                  }
                }
              },
              "range": [
                2665,
                2712
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 75
                },
                "start": {
                  "column": 8,
                  "line": 75
                }
              }
            },
            "range": [
              2661,
              3039
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          2526,
          3041
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 42,
            "line": 71
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parseSpecificTags",
        "optional": false,
        "range": [
          2493,
          2510
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 71
          },
          "start": {
            "column": 9,
            "line": 71
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 71
              },
              "start": {
                "column": 31,
                "line": 71
              }
            },
            "range": [
              2515,
              2524
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "range": [
                    2517,
                    2519
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 71
                    },
                    "start": {
                      "column": 33,
                      "line": 71
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "range": [
                    2520,
                    2524
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 71
                    },
                    "start": {
                      "column": 36,
                      "line": 71
                    }
                  }
                },
                "range": [
                  2517,
                  2524
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 71
                  },
                  "start": {
                    "column": 33,
                    "line": 71
                  }
                }
              },
              "range": [
                2517,
                2524
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 71
                },
                "start": {
                  "column": 33,
                  "line": 71
                }
              }
            }
          },
          "range": [
            2511,
            2524
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 71
            },
            "start": {
              "column": 27,
              "line": 71
            }
          }
        }
      ],
      "range": [
        2484,
        3041
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 71
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "range": [
                          3188,
                          3192
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 89
                          },
                          "start": {
                            "column": 37,
                            "line": 89
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
                        "name": "ts",
                        "optional": false,
                        "range": [
                          3166,
                          3168
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 89
                          },
                          "start": {
                            "column": 15,
                            "line": 89
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getJSDocReturnType",
                        "optional": false,
                        "range": [
                          3169,
                          3187
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 89
                          },
                          "start": {
                            "column": 18,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        3166,
                        3187
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 89
                        },
                        "start": {
                          "column": 15,
                          "line": 89
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3166,
                      3193
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 89
                      },
                      "start": {
                        "column": 15,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    3159,
                    3194
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                }
              ],
              "range": [
                3149,
                3200
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 57,
                  "line": 88
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "range": [
                    3100,
                    3104
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    3105,
                    3109
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 88
                    },
                    "start": {
                      "column": 13,
                      "line": 88
                    }
                  }
                },
                "range": [
                  3100,
                  3109
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "range": [
                      3114,
                      3116
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 88
                      },
                      "start": {
                        "column": 22,
                        "line": 88
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      3117,
                      3127
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 88
                      },
                      "start": {
                        "column": 25,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    3114,
                    3127
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 88
                    },
                    "start": {
                      "column": 22,
                      "line": 88
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionDeclaration",
                  "optional": false,
                  "range": [
                    3128,
                    3147
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 88
                    },
                    "start": {
                      "column": 36,
                      "line": 88
                    }
                  }
                },
                "range": [
                  3114,
                  3147
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 88
                  },
                  "start": {
                    "column": 22,
                    "line": 88
                  }
                }
              },
              "range": [
                3100,
                3147
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 88
                },
                "start": {
                  "column": 8,
                  "line": 88
                }
              }
            },
            "range": [
              3096,
              3200
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 88
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    3209,
                    3213
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        3232,
                        3236
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 91
                        },
                        "start": {
                          "column": 31,
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        3216,
                        3218
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 91
                        },
                        "start": {
                          "column": 15,
                          "line": 91
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocType",
                      "optional": false,
                      "range": [
                        3219,
                        3231
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 91
                        },
                        "start": {
                          "column": 18,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      3216,
                      3231
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 91
                      },
                      "start": {
                        "column": 15,
                        "line": 91
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3216,
                    3237
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 91
                    },
                    "start": {
                      "column": 15,
                      "line": 91
                    }
                  }
                },
                "range": [
                  3209,
                  3237
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3205,
              3238
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          3315,
                          3319
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 93
                          },
                          "start": {
                            "column": 16,
                            "line": 93
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              3323,
                              3325
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 93
                              },
                              "start": {
                                "column": 24,
                                "line": 93
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FunctionTypeNode",
                            "optional": false,
                            "range": [
                              3326,
                              3342
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 93
                              },
                              "start": {
                                "column": 27,
                                "line": 93
                              }
                            }
                          },
                          "range": [
                            3323,
                            3342
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 93
                            },
                            "start": {
                              "column": 24,
                              "line": 93
                            }
                          }
                        },
                        "range": [
                          3323,
                          3342
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 93
                          },
                          "start": {
                            "column": 24,
                            "line": 93
                          }
                        }
                      },
                      "range": [
                        3315,
                        3342
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 93
                        },
                        "start": {
                          "column": 16,
                          "line": 93
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        3344,
                        3348
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 93
                        },
                        "start": {
                          "column": 45,
                          "line": 93
                        }
                      }
                    },
                    "range": [
                      3314,
                      3348
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 93
                      },
                      "start": {
                        "column": 15,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    3307,
                    3349
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                }
              ],
              "range": [
                3297,
                3355
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 94
                },
                "start": {
                  "column": 58,
                  "line": 92
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "range": [
                  3247,
                  3251
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 92
                  },
                  "start": {
                    "column": 8,
                    "line": 92
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      3255,
                      3259
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 92
                      },
                      "start": {
                        "column": 16,
                        "line": 92
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "range": [
                      3260,
                      3264
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 92
                      },
                      "start": {
                        "column": 21,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    3255,
                    3264
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 92
                    },
                    "start": {
                      "column": 16,
                      "line": 92
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "range": [
                        3269,
                        3271
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 92
                        },
                        "start": {
                          "column": 30,
                          "line": 92
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SyntaxKind",
                      "optional": false,
                      "range": [
                        3272,
                        3282
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 92
                        },
                        "start": {
                          "column": 33,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      3269,
                      3282
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 92
                      },
                      "start": {
                        "column": 30,
                        "line": 92
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FunctionType",
                    "optional": false,
                    "range": [
                      3283,
                      3295
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 92
                      },
                      "start": {
                        "column": 44,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    3269,
                    3295
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 92
                    },
                    "start": {
                      "column": 30,
                      "line": 92
                    }
                  }
                },
                "range": [
                  3255,
                  3295
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 92
                  },
                  "start": {
                    "column": 16,
                    "line": 92
                  }
                }
              },
              "range": [
                3247,
                3295
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 92
                },
                "start": {
                  "column": 8,
                  "line": 92
                }
              }
            },
            "range": [
              3243,
              3355
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          }
        ],
        "range": [
          3090,
          3357
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 47,
            "line": 87
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getReturnTypeFromJSDoc",
        "optional": false,
        "range": [
          3052,
          3074
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 87
          },
          "start": {
            "column": 9,
            "line": 87
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 87
              },
              "start": {
                "column": 36,
                "line": 87
              }
            },
            "range": [
              3079,
              3088
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "range": [
                    3081,
                    3083
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 87
                    },
                    "start": {
                      "column": 38,
                      "line": 87
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "range": [
                    3084,
                    3088
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 87
                    },
                    "start": {
                      "column": 41,
                      "line": 87
                    }
                  }
                },
                "range": [
                  3081,
                  3088
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 87
                  },
                  "start": {
                    "column": 38,
                    "line": 87
                  }
                }
              },
              "range": [
                3081,
                3088
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 87
                },
                "start": {
                  "column": 38,
                  "line": 87
                }
              }
            }
          },
          "range": [
            3075,
            3088
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 87
            },
            "start": {
              "column": 32,
              "line": 87
            }
          }
        }
      ],
      "range": [
        3043,
        3357
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 87
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
                  "name": "node",
                  "optional": false,
                  "range": [
                    3416,
                    3420
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 98
                    },
                    "start": {
                      "column": 20,
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
                  "name": "ts",
                  "optional": false,
                  "range": [
                    3400,
                    3402
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
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
                  "name": "getJSDocTags",
                  "optional": false,
                  "range": [
                    3403,
                    3415
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 98
                    },
                    "start": {
                      "column": 7,
                      "line": 98
                    }
                  }
                },
                "range": [
                  3400,
                  3415
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
                3400,
                3421
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 98
                }
              }
            },
            "range": [
              3400,
              3422
            ],
            "loc": {
              "end": {
                "column": 26,
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
          3394,
          3424
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 35,
            "line": 97
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAllTags",
        "optional": false,
        "range": [
          3368,
          3378
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 97
          },
          "start": {
            "column": 9,
            "line": 97
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 97
              },
              "start": {
                "column": 24,
                "line": 97
              }
            },
            "range": [
              3383,
              3392
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "range": [
                    3385,
                    3387
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 97
                    },
                    "start": {
                      "column": 26,
                      "line": 97
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "range": [
                    3388,
                    3392
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 97
                    },
                    "start": {
                      "column": 29,
                      "line": 97
                    }
                  }
                },
                "range": [
                  3385,
                  3392
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 97
                  },
                  "start": {
                    "column": 26,
                    "line": 97
                  }
                }
              },
              "range": [
                3385,
                3392
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 97
                },
                "start": {
                  "column": 26,
                  "line": 97
                }
              }
            }
          },
          "range": [
            3379,
            3392
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 97
            },
            "start": {
              "column": 20,
              "line": 97
            }
          }
        }
      ],
      "range": [
        3359,
        3424
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 97
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 102
                      },
                      "start": {
                        "column": 14,
                        "line": 102
                      }
                    },
                    "range": [
                      3483,
                      3512
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "range": [
                                  3486,
                                  3488
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 102
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 102
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "JSDocTag",
                                "optional": false,
                                "range": [
                                  3489,
                                  3497
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 102
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 102
                                  }
                                }
                              },
                              "range": [
                                3486,
                                3497
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 102
                                },
                                "start": {
                                  "column": 17,
                                  "line": 102
                                }
                              }
                            },
                            "range": [
                              3486,
                              3497
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 102
                              },
                              "start": {
                                "column": 17,
                                "line": 102
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              3500,
                              3509
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 102
                              },
                              "start": {
                                "column": 31,
                                "line": 102
                              }
                            }
                          }
                        ],
                        "range": [
                          3486,
                          3509
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 102
                          },
                          "start": {
                            "column": 17,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        3485,
                        3512
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 102
                        },
                        "start": {
                          "column": 16,
                          "line": 102
                        }
                      }
                    }
                  },
                  "range": [
                    3479,
                    3512
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 102
                    },
                    "start": {
                      "column": 10,
                      "line": 102
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    3515,
                    3517
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 102
                    },
                    "start": {
                      "column": 46,
                      "line": 102
                    }
                  }
                },
                "range": [
                  3479,
                  3517
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 102
                  },
                  "start": {
                    "column": 10,
                    "line": 102
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3473,
              3518
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        3556,
                        3560
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 103
                        },
                        "start": {
                          "column": 37,
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        3533,
                        3535
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 103
                        },
                        "start": {
                          "column": 14,
                          "line": 103
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocAugmentsTag",
                      "optional": false,
                      "range": [
                        3536,
                        3555
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 103
                        },
                        "start": {
                          "column": 17,
                          "line": 103
                        }
                      }
                    },
                    "range": [
                      3533,
                      3555
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 103
                      },
                      "start": {
                        "column": 14,
                        "line": 103
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3533,
                    3561
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 103
                    },
                    "start": {
                      "column": 14,
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
                  "name": "tags",
                  "optional": false,
                  "range": [
                    3523,
                    3527
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
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
                  "name": "push",
                  "optional": false,
                  "range": [
                    3528,
                    3532
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 103
                    },
                    "start": {
                      "column": 9,
                      "line": 103
                    }
                  }
                },
                "range": [
                  3523,
                  3532
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
                3523,
                3562
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            "range": [
              3523,
              3563
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        3598,
                        3602
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 104
                        },
                        "start": {
                          "column": 34,
                          "line": 104
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        3578,
                        3580
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 104
                        },
                        "start": {
                          "column": 14,
                          "line": 104
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocClassTag",
                      "optional": false,
                      "range": [
                        3581,
                        3597
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 104
                        },
                        "start": {
                          "column": 17,
                          "line": 104
                        }
                      }
                    },
                    "range": [
                      3578,
                      3597
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 104
                      },
                      "start": {
                        "column": 14,
                        "line": 104
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3578,
                    3603
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 104
                    },
                    "start": {
                      "column": 14,
                      "line": 104
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
                  "name": "tags",
                  "optional": false,
                  "range": [
                    3568,
                    3572
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 104
                    },
                    "start": {
                      "column": 4,
                      "line": 104
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
                    3573,
                    3577
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 104
                    },
                    "start": {
                      "column": 9,
                      "line": 104
                    }
                  }
                },
                "range": [
                  3568,
                  3577
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 104
                  },
                  "start": {
                    "column": 4,
                    "line": 104
                  }
                }
              },
              "optional": false,
              "range": [
                3568,
                3604
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "range": [
              3568,
              3605
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        3641,
                        3645
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 105
                        },
                        "start": {
                          "column": 35,
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        3620,
                        3622
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 105
                        },
                        "start": {
                          "column": 14,
                          "line": 105
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocReturnTag",
                      "optional": false,
                      "range": [
                        3623,
                        3640
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 105
                        },
                        "start": {
                          "column": 17,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      3620,
                      3640
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 105
                      },
                      "start": {
                        "column": 14,
                        "line": 105
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3620,
                    3646
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 105
                    },
                    "start": {
                      "column": 14,
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
                  "name": "tags",
                  "optional": false,
                  "range": [
                    3610,
                    3614
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
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
                  "name": "push",
                  "optional": false,
                  "range": [
                    3615,
                    3619
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 105
                    },
                    "start": {
                      "column": 9,
                      "line": 105
                    }
                  }
                },
                "range": [
                  3610,
                  3619
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
                3610,
                3647
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "range": [
              3610,
              3648
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    3659,
                    3663
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 106
                    },
                    "start": {
                      "column": 10,
                      "line": 106
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        3685,
                        3689
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 106
                        },
                        "start": {
                          "column": 36,
                          "line": 106
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        3666,
                        3668
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 106
                        },
                        "start": {
                          "column": 17,
                          "line": 106
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocTypeTag",
                      "optional": false,
                      "range": [
                        3669,
                        3684
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 106
                        },
                        "start": {
                          "column": 20,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      3666,
                      3684
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 106
                      },
                      "start": {
                        "column": 17,
                        "line": 106
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3666,
                    3690
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 106
                    },
                    "start": {
                      "column": 17,
                      "line": 106
                    }
                  }
                },
                "range": [
                  3659,
                  3690
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 106
                  },
                  "start": {
                    "column": 10,
                    "line": 106
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3653,
              3691
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 106
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "type",
                        "optional": false,
                        "range": [
                          3726,
                          3730
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 108
                          },
                          "start": {
                            "column": 18,
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
                        "name": "tags",
                        "optional": false,
                        "range": [
                          3716,
                          3720
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 108
                          },
                          "start": {
                            "column": 8,
                            "line": 108
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
                          3721,
                          3725
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 108
                          },
                          "start": {
                            "column": 13,
                            "line": 108
                          }
                        }
                      },
                      "range": [
                        3716,
                        3725
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 108
                        },
                        "start": {
                          "column": 8,
                          "line": 108
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3716,
                      3731
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 108
                      },
                      "start": {
                        "column": 8,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    3716,
                    3732
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 108
                    },
                    "start": {
                      "column": 8,
                      "line": 108
                    }
                  }
                }
              ],
              "range": [
                3706,
                3738
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 109
                },
                "start": {
                  "column": 14,
                  "line": 107
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                3700,
                3704
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 107
                },
                "start": {
                  "column": 8,
                  "line": 107
                }
              }
            },
            "range": [
              3696,
              3738
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        3776,
                        3780
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 110
                        },
                        "start": {
                          "column": 37,
                          "line": 110
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        3753,
                        3755
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 110
                        },
                        "start": {
                          "column": 14,
                          "line": 110
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocTemplateTag",
                      "optional": false,
                      "range": [
                        3756,
                        3775
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 110
                        },
                        "start": {
                          "column": 17,
                          "line": 110
                        }
                      }
                    },
                    "range": [
                      3753,
                      3775
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 110
                      },
                      "start": {
                        "column": 14,
                        "line": 110
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3753,
                    3781
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 110
                    },
                    "start": {
                      "column": 14,
                      "line": 110
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
                  "name": "tags",
                  "optional": false,
                  "range": [
                    3743,
                    3747
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 110
                    },
                    "start": {
                      "column": 4,
                      "line": 110
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
                    3748,
                    3752
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 110
                    },
                    "start": {
                      "column": 9,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3743,
                  3752
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 110
                  },
                  "start": {
                    "column": 4,
                    "line": 110
                  }
                }
              },
              "optional": false,
              "range": [
                3743,
                3782
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              3743,
              3783
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tags",
              "optional": false,
              "range": [
                3795,
                3799
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 111
                },
                "start": {
                  "column": 11,
                  "line": 111
                }
              }
            },
            "range": [
              3788,
              3800
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          }
        ],
        "range": [
          3467,
          3802
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 112
          },
          "start": {
            "column": 41,
            "line": 101
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSomeOtherTags",
        "optional": false,
        "range": [
          3435,
          3451
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 101
          },
          "start": {
            "column": 9,
            "line": 101
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 101
              },
              "start": {
                "column": 30,
                "line": 101
              }
            },
            "range": [
              3456,
              3465
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "range": [
                    3458,
                    3460
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 101
                    },
                    "start": {
                      "column": 32,
                      "line": 101
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "range": [
                    3461,
                    3465
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 101
                    },
                    "start": {
                      "column": 35,
                      "line": 101
                    }
                  }
                },
                "range": [
                  3458,
                  3465
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 101
                  },
                  "start": {
                    "column": 32,
                    "line": 101
                  }
                }
              },
              "range": [
                3458,
                3465
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 101
                },
                "start": {
                  "column": 32,
                  "line": 101
                }
              }
            }
          },
          "range": [
            3452,
            3465
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 101
            },
            "start": {
              "column": 26,
              "line": 101
            }
          }
        }
      ],
      "range": [
        3426,
        3802
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 113
    },
    "start": {
      "column": 0,
      "line": 8
    }
  },
  "hashbang": null
}
```
