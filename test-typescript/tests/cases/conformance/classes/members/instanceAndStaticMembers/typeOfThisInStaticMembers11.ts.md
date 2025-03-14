__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    857
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              },
              "range": [
                17,
                22
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  19,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
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
          38,
          86
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
                51,
                52
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              44,
              57
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
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    73,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
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
                    78,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                },
                "range": [
                  73,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  82,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              },
              "range": [
                73,
                83
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              62,
              84
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 8,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              26,
              29
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 3
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          "range": [
            25,
            29
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          36,
          37
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        25,
        86
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
          111,
          443
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
              "name": "c",
              "optional": false,
              "range": [
                124,
                125
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                128,
                129
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              117,
              130
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                142,
                143
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    146,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    151,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                },
                "range": [
                  146,
                  152
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
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  155,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "range": [
                146,
                156
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              135,
              157
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                169,
                170
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "range": [
                      173,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
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
                      179,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    173,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      183,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 25,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      188,
                      189
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 13
                      },
                      "start": {
                        "column": 30,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    183,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 13
                    },
                    "start": {
                      "column": 25,
                      "line": 13
                    }
                  }
                },
                "range": [
                  173,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  192,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 34,
                    "line": 13
                  }
                }
              },
              "range": [
                173,
                193
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "range": [
              162,
              194
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                206,
                207
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      216,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      221,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    216,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    225,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 30,
                      "line": 14
                    }
                  }
                },
                "range": [
                  216,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 14
                  },
                  "start": {
                    "column": 21,
                    "line": 14
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                210,
                226
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              199,
              227
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff",
              "optional": false,
              "range": [
                239,
                241
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            258,
                            262
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 15
                            },
                            "start": {
                              "column": 30,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            263,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 15
                            },
                            "start": {
                              "column": 35,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          258,
                          264
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
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          267,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 15
                          },
                          "start": {
                            "column": 39,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        258,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 15
                        },
                        "start": {
                          "column": 30,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      258,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  256,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 15
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                244,
                270
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "range": [
              232,
              270
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
              "name": "foo",
              "optional": false,
              "range": [
                282,
                285
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                286,
                323
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            306,
                            310
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            311,
                            312
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 17
                            },
                            "start": {
                              "column": 20,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          306,
                          312
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 15,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          315,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 17
                          },
                          "start": {
                            "column": 24,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        306,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      299,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  289,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              275,
              323
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
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
              "name": "fa",
              "optional": false,
              "range": [
                339,
                341
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                342,
                379
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            362,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 20
                            },
                            "start": {
                              "column": 15,
                              "line": 20
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            367,
                            368
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 20
                            },
                            "start": {
                              "column": 20,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          362,
                          368
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          371,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 20
                          },
                          "start": {
                            "column": 24,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        362,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      355,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  345,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 19
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              }
            },
            "range": [
              328,
              379
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
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
              "name": "fa",
              "optional": false,
              "range": [
                395,
                397
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                398,
                441
              ],
              "async": false,
              "body": {
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
                          "type": "ThisExpression",
                          "range": [
                            420,
                            424
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 23
                            },
                            "start": {
                              "column": 8,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            425,
                            426
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 23
                            },
                            "start": {
                              "column": 13,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          420,
                          426
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            429,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 23
                            },
                            "start": {
                              "column": 17,
                              "line": 23
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            433,
                            434
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 23
                            },
                            "start": {
                              "column": 21,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          429,
                          434
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
                        420,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      420,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  410,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 30,
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 22
                      },
                      "start": {
                        "column": 20,
                        "line": 22
                      }
                    },
                    "range": [
                      400,
                      408
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        402,
                        408
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 22
                        },
                        "start": {
                          "column": 22,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    399,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 22
                    },
                    "start": {
                      "column": 19,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 18,
                  "line": 22
                }
              }
            },
            "range": [
              384,
              441
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 18,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              89,
              92
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          },
          "range": [
            88,
            92
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          99,
          100
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          109,
          110
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        }
      },
      "range": [
        88,
        443
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          454,
          502
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
                467,
                468
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                471,
                472
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              }
            },
            "range": [
              460,
              473
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                485,
                486
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    489,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 29
                    },
                    "start": {
                      "column": 15,
                      "line": 29
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
                    494,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 29
                    },
                    "start": {
                      "column": 20,
                      "line": 29
                    }
                  }
                },
                "range": [
                  489,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 29
                  },
                  "start": {
                    "column": 15,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  498,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 29
                  },
                  "start": {
                    "column": 24,
                    "line": 29
                  }
                }
              },
              "range": [
                489,
                499
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            },
            "range": [
              478,
              500
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
            "column": 9,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "range": [
          451,
          453
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        445,
        502
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          524,
          856
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
              "name": "c",
              "optional": false,
              "range": [
                537,
                538
              ],
              "loc": {
                "end": {
                  "column": 12,
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
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                541,
                542
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 33
                },
                "start": {
                  "column": 15,
                  "line": 33
                }
              }
            },
            "range": [
              530,
              543
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                555,
                556
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    559,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 34
                    },
                    "start": {
                      "column": 15,
                      "line": 34
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    564,
                    565
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 34
                    },
                    "start": {
                      "column": 20,
                      "line": 34
                    }
                  }
                },
                "range": [
                  559,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  568,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 34
                  },
                  "start": {
                    "column": 24,
                    "line": 34
                  }
                }
              },
              "range": [
                559,
                569
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "range": [
              548,
              570
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                582,
                583
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "range": [
                      586,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 35
                      },
                      "start": {
                        "column": 15,
                        "line": 35
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
                      592,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 35
                      },
                      "start": {
                        "column": 21,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    586,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 35
                    },
                    "start": {
                      "column": 15,
                      "line": 35
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      596,
                      600
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 35
                      },
                      "start": {
                        "column": 25,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      601,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 35
                      },
                      "start": {
                        "column": 30,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    596,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 35
                    },
                    "start": {
                      "column": 25,
                      "line": 35
                    }
                  }
                },
                "range": [
                  586,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  605,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 35
                  },
                  "start": {
                    "column": 34,
                    "line": 35
                  }
                }
              },
              "range": [
                586,
                606
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 35
                },
                "start": {
                  "column": 15,
                  "line": 35
                }
              }
            },
            "range": [
              575,
              607
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                619,
                620
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      629,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 36
                      },
                      "start": {
                        "column": 21,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      634,
                      635
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 36
                      },
                      "start": {
                        "column": 26,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    629,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 36
                    },
                    "start": {
                      "column": 21,
                      "line": 36
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    638,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 36
                    },
                    "start": {
                      "column": 30,
                      "line": 36
                    }
                  }
                },
                "range": [
                  629,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 36
                  },
                  "start": {
                    "column": 21,
                    "line": 36
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                623,
                639
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 36
                },
                "start": {
                  "column": 15,
                  "line": 36
                }
              }
            },
            "range": [
              612,
              640
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff",
              "optional": false,
              "range": [
                652,
                654
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 37
                },
                "start": {
                  "column": 11,
                  "line": 37
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            671,
                            675
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 37
                            },
                            "start": {
                              "column": 30,
                              "line": 37
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            676,
                            677
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 37
                            },
                            "start": {
                              "column": 35,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          671,
                          677
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 37
                          },
                          "start": {
                            "column": 30,
                            "line": 37
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          680,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 37
                          },
                          "start": {
                            "column": 39,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        671,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 37
                        },
                        "start": {
                          "column": 30,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      671,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 37
                      },
                      "start": {
                        "column": 30,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  669,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 37
                  },
                  "start": {
                    "column": 28,
                    "line": 37
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                657,
                683
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 37
                },
                "start": {
                  "column": 16,
                  "line": 37
                }
              }
            },
            "range": [
              645,
              683
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
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
              "name": "foo",
              "optional": false,
              "range": [
                695,
                698
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                699,
                736
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            719,
                            723
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 39
                            },
                            "start": {
                              "column": 15,
                              "line": 39
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            724,
                            725
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 39
                            },
                            "start": {
                              "column": 20,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          719,
                          725
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 39
                          },
                          "start": {
                            "column": 15,
                            "line": 39
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          728,
                          729
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 39
                          },
                          "start": {
                            "column": 24,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        719,
                        729
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      712,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  702,
                  736
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 18,
                    "line": 38
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 38
                }
              }
            },
            "range": [
              688,
              736
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 38
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
              "name": "fa",
              "optional": false,
              "range": [
                752,
                754
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 41
                },
                "start": {
                  "column": 15,
                  "line": 41
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                755,
                792
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            775,
                            779
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 42
                            },
                            "start": {
                              "column": 15,
                              "line": 42
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            780,
                            781
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 42
                            },
                            "start": {
                              "column": 20,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          775,
                          781
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 42
                          },
                          "start": {
                            "column": 15,
                            "line": 42
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          784,
                          785
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 42
                          },
                          "start": {
                            "column": 24,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        775,
                        785
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 42
                        },
                        "start": {
                          "column": 15,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      768,
                      786
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  758,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 43
                  },
                  "start": {
                    "column": 21,
                    "line": 41
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 18,
                  "line": 41
                }
              }
            },
            "range": [
              741,
              792
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 41
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
              "name": "fa",
              "optional": false,
              "range": [
                808,
                810
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 44
                },
                "start": {
                  "column": 15,
                  "line": 44
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                811,
                854
              ],
              "async": false,
              "body": {
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
                          "type": "ThisExpression",
                          "range": [
                            833,
                            837
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 45
                            },
                            "start": {
                              "column": 8,
                              "line": 45
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            838,
                            839
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 45
                            },
                            "start": {
                              "column": 13,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          833,
                          839
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 45
                          },
                          "start": {
                            "column": 8,
                            "line": 45
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            842,
                            843
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 45
                            },
                            "start": {
                              "column": 17,
                              "line": 45
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            846,
                            847
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 45
                            },
                            "start": {
                              "column": 21,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          842,
                          847
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 45
                          },
                          "start": {
                            "column": 17,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        833,
                        847
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      833,
                      848
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  823,
                  854
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 30,
                    "line": 44
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 44
                      },
                      "start": {
                        "column": 20,
                        "line": 44
                      }
                    },
                    "range": [
                      813,
                      821
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        815,
                        821
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 44
                        },
                        "start": {
                          "column": 22,
                          "line": 44
                        }
                      }
                    }
                  },
                  "range": [
                    812,
                    821
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 44
                    },
                    "start": {
                      "column": 19,
                      "line": 44
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 18,
                  "line": 44
                }
              }
            },
            "range": [
              797,
              854
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 44
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
            "column": 20,
            "line": 32
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
          510,
          512
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 32
          },
          "start": {
            "column": 6,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "range": [
          521,
          523
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 32
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
      "range": [
        504,
        856
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 48
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
