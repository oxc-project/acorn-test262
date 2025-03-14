__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1587
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "range": [
          5,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                10,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "range": [
              10,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                17,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "range": [
              17,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ],
        "range": [
          10,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "range": [
          29,
          31
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                34,
                39
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "range": [
              34,
              39
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                42,
                46
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              42,
              46
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 18,
                "line": 2
              }
            }
          }
        ],
        "range": [
          34,
          46
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        24,
        47
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    },
                    "range": [
                      74,
                      78
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "range": [
                          76,
                          78
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        76,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    73,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "init": null,
                "range": [
                  73,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              69,
              79
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 4,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    },
                    "range": [
                      89,
                      93
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "range": [
                          91,
                          93
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 6
                          },
                          "start": {
                            "column": 11,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        91,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    88,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": null,
                "range": [
                  88,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              84,
              94
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    },
                    "range": [
                      104,
                      118
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              106,
                              110
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 7
                              },
                              "start": {
                                "column": 11,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            106,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              113,
                              118
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 18,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            113,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 18,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        106,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    103,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": null,
                "range": [
                  103,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              99,
              119
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 4,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      129,
                      143
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              131,
                              136
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 8
                              },
                              "start": {
                                "column": 11,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            131,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 8
                            },
                            "start": {
                              "column": 11,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              139,
                              143
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            139,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 8
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        131,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    128,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  128,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
            "kind": "var",
            "range": [
              124,
              144
            ],
            "loc": {
              "end": {
                "column": 24,
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
          63,
          146
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 4
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
          58,
          60
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "range": [
        49,
        146
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  195,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  199,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                195,
                200
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              195,
              201
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  206,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  210,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "range": [
                206,
                211
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              206,
              212
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          189,
          214
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 41,
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
        "name": "f2",
        "optional": false,
        "range": [
          157,
          159
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            },
            "range": [
              161,
              175
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      163,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    163,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      170,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    170,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 22,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                163,
                175
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
          },
          "range": [
            160,
            175
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 11
              },
              "start": {
                "column": 30,
                "line": 11
              }
            },
            "range": [
              178,
              187
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                180,
                187
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 11
                },
                "start": {
                  "column": 32,
                  "line": 11
                }
              }
            }
          },
          "range": [
            177,
            187
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 11
            }
          }
        }
      ],
      "range": [
        148,
        214
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
                    272,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      276,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      281,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    276,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  272,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
            "kind": "var",
            "range": [
              268,
              283
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    292,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      296,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      301,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    296,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  292,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              288,
              303
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    312,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      317,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 19
                      },
                      "start": {
                        "column": 13,
                        "line": 19
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    316,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                },
                "range": [
                  312,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              308,
              319
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          262,
          321
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 46,
            "line": 16
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
          225,
          227
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
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
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 13,
                "line": 16
              }
            },
            "range": [
              229,
              243
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      231,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    231,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 15,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      238,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 22,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    238,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                231,
                243
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            }
          },
          "range": [
            228,
            243
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 16
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 16
              },
              "start": {
                "column": 30,
                "line": 16
              }
            },
            "range": [
              246,
              260
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      248,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 16
                      },
                      "start": {
                        "column": 32,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    248,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 16
                    },
                    "start": {
                      "column": 32,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      255,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 16
                      },
                      "start": {
                        "column": 39,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    255,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 16
                    },
                    "start": {
                      "column": 39,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                248,
                260
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            }
          },
          "range": [
            245,
            260
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 16
            },
            "start": {
              "column": 29,
              "line": 16
            }
          }
        }
      ],
      "range": [
        216,
        321
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
                    364,
                    366
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
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      369,
                      370
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      374,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 18,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    369,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  364,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
            "kind": "var",
            "range": [
              360,
              376
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
                    385,
                    387
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
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      390,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      395,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    390,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                },
                "range": [
                  385,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
            "kind": "var",
            "range": [
              381,
              397
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "range": [
                    406,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      411,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      416,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    411,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                },
                "range": [
                  406,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              402,
              418
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
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
                  "name": "x4",
                  "optional": false,
                  "range": [
                    427,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      432,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      437,
                      438
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 26
                      },
                      "start": {
                        "column": 18,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    432,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                },
                "range": [
                  427,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              423,
              439
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "name": "x5",
                  "optional": false,
                  "range": [
                    448,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      454,
                      455
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
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    453,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 27
                    },
                    "start": {
                      "column": 13,
                      "line": 27
                    }
                  }
                },
                "range": [
                  448,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              444,
              456
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                  "name": "x6",
                  "optional": false,
                  "range": [
                    465,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "init": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      471,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 28
                      },
                      "start": {
                        "column": 14,
                        "line": 28
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    470,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                },
                "range": [
                  465,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
            "kind": "var",
            "range": [
              461,
              473
            ],
            "loc": {
              "end": {
                "column": 16,
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
          354,
          475
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 31,
            "line": 22
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
          332,
          334
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 22
              }
            },
            "range": [
              336,
              342
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  338,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              "range": [
                338,
                342
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              }
            }
          },
          "range": [
            335,
            342
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 22
            },
            "start": {
              "column": 12,
              "line": 22
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
                "column": 29,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
              }
            },
            "range": [
              345,
              352
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  347,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 22
                  }
                }
              },
              "range": [
                347,
                352
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 22
                }
              }
            }
          },
          "range": [
            344,
            352
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 22
            },
            "start": {
              "column": 21,
              "line": 22
            }
          }
        }
      ],
      "range": [
        323,
        475
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          494,
          495
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 31
          },
          "start": {
            "column": 17,
            "line": 31
          }
        }
      },
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
                "column": 26,
                "line": 31
              },
              "start": {
                "column": 20,
                "line": 31
              }
            },
            "range": [
              497,
              503
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  499,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 31
                  },
                  "start": {
                    "column": 22,
                    "line": 31
                  }
                }
              },
              "range": [
                499,
                503
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 31
                },
                "start": {
                  "column": 22,
                  "line": 31
                }
              }
            }
          },
          "range": [
            496,
            503
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 31
            },
            "start": {
              "column": 19,
              "line": 31
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 31
          },
          "start": {
            "column": 27,
            "line": 31
          }
        },
        "range": [
          504,
          512
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            506,
            512
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 31
            },
            "start": {
              "column": 29,
              "line": 31
            }
          }
        }
      },
      "range": [
        477,
        513
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          531,
          532
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 32
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
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
                "column": 27,
                "line": 32
              },
              "start": {
                "column": 20,
                "line": 32
              }
            },
            "range": [
              534,
              541
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  536,
                  541
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 32
                  },
                  "start": {
                    "column": 22,
                    "line": 32
                  }
                }
              },
              "range": [
                536,
                541
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 32
                },
                "start": {
                  "column": 22,
                  "line": 32
                }
              }
            }
          },
          "range": [
            533,
            541
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 32
            },
            "start": {
              "column": 19,
              "line": 32
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 32
          },
          "start": {
            "column": 28,
            "line": 32
          }
        },
        "range": [
          542,
          551
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            544,
            551
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 32
            },
            "start": {
              "column": 30,
              "line": 32
            }
          }
        }
      },
      "range": [
        514,
        552
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          570,
          571
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 33
          },
          "start": {
            "column": 17,
            "line": 33
          }
        }
      },
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
                "column": 29,
                "line": 33
              },
              "start": {
                "column": 20,
                "line": 33
              }
            },
            "range": [
              573,
              582
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                575,
                582
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 33
                },
                "start": {
                  "column": 22,
                  "line": 33
                }
              }
            }
          },
          "range": [
            572,
            582
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 33
            },
            "start": {
              "column": 19,
              "line": 33
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 33
          },
          "start": {
            "column": 30,
            "line": 33
          }
        },
        "range": [
          583,
          591
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            585,
            591
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 33
            },
            "start": {
              "column": 32,
              "line": 33
            }
          }
        }
      },
      "range": [
        553,
        592
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
                  "name": "z1",
                  "optional": false,
                  "range": [
                    628,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        635,
                        639
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 36
                        },
                        "start": {
                          "column": 15,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      633,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    633,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 36
                    },
                    "start": {
                      "column": 13,
                      "line": 36
                    }
                  }
                },
                "range": [
                  628,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              624,
              641
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                  "name": "z2",
                  "optional": false,
                  "range": [
                    650,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        657,
                        662
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 37
                        },
                        "start": {
                          "column": 15,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      655,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 37
                      },
                      "start": {
                        "column": 13,
                        "line": 37
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    655,
                    663
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 37
                    },
                    "start": {
                      "column": 13,
                      "line": 37
                    }
                  }
                },
                "range": [
                  650,
                  663
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              646,
              664
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
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
                  "name": "z3",
                  "optional": false,
                  "range": [
                    673,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        680,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      678,
                      679
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    678,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 38
                    },
                    "start": {
                      "column": 13,
                      "line": 38
                    }
                  }
                },
                "range": [
                  673,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              669,
              683
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          618,
          685
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 24,
            "line": 35
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          603,
          605
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 35
              },
              "start": {
                "column": 13,
                "line": 35
              }
            },
            "range": [
              607,
              616
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                609,
                616
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
            }
          },
          "range": [
            606,
            616
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
        }
      ],
      "range": [
        594,
        685
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 35
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
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"Unexpected value\"",
                  "value": "Unexpected value",
                  "range": [
                    747,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 42
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  741,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 42
                  },
                  "start": {
                    "column": 14,
                    "line": 42
                  }
                }
              },
              "range": [
                737,
                766
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 42
                },
                "start": {
                  "column": 10,
                  "line": 42
                }
              }
            },
            "range": [
              731,
              767
            ],
            "loc": {
              "end": {
                "column": 40,
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
          725,
          769
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 38,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "range": [
          696,
          707
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
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
                "column": 29,
                "line": 41
              },
              "start": {
                "column": 22,
                "line": 41
              }
            },
            "range": [
              709,
              716
            ],
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "range": [
                711,
                716
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 41
                },
                "start": {
                  "column": 24,
                  "line": 41
                }
              }
            }
          },
          "range": [
            708,
            716
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 41
            },
            "start": {
              "column": 21,
              "line": 41
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 41
          },
          "start": {
            "column": 30,
            "line": 41
          }
        },
        "range": [
          717,
          724
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            719,
            724
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 41
            },
            "start": {
              "column": 32,
              "line": 41
            }
          }
        }
      },
      "range": [
        687,
        769
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"true\"",
                      "value": "true",
                      "range": [
                        846,
                        852
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 47
                        },
                        "start": {
                          "column": 26,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      839,
                      853
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 47
                      },
                      "start": {
                        "column": 19,
                        "line": 47
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    833,
                    837
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 47
                    },
                    "start": {
                      "column": 13,
                      "line": 47
                    }
                  }
                },
                "range": [
                  828,
                  853
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"false\"",
                      "value": "false",
                      "range": [
                        881,
                        888
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 48
                        },
                        "start": {
                          "column": 27,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      874,
                      889
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 48
                      },
                      "start": {
                        "column": 20,
                        "line": 48
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    867,
                    872
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 48
                    },
                    "start": {
                      "column": 13,
                      "line": 48
                    }
                  }
                },
                "range": [
                  862,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                815,
                816
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 46
                },
                "start": {
                  "column": 12,
                  "line": 46
                }
              }
            },
            "range": [
              807,
              895
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          801,
          897
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 30,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          780,
          783
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
          }
        }
      },
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
                "column": 28,
                "line": 45
              },
              "start": {
                "column": 14,
                "line": 45
              }
            },
            "range": [
              785,
              799
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      787,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 45
                      },
                      "start": {
                        "column": 16,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    787,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 45
                    },
                    "start": {
                      "column": 16,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      794,
                      799
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 45
                      },
                      "start": {
                        "column": 23,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    794,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 45
                    },
                    "start": {
                      "column": 23,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                787,
                799
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 45
                },
                "start": {
                  "column": 16,
                  "line": 45
                }
              }
            }
          },
          "range": [
            784,
            799
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 45
            },
            "start": {
              "column": 13,
              "line": 45
            }
          }
        }
      ],
      "range": [
        771,
        897
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"true\"",
                      "value": "true",
                      "range": [
                        974,
                        980
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 54
                        },
                        "start": {
                          "column": 26,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      967,
                      981
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 54
                      },
                      "start": {
                        "column": 19,
                        "line": 54
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    961,
                    965
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 54
                    },
                    "start": {
                      "column": 13,
                      "line": 54
                    }
                  }
                },
                "range": [
                  956,
                  981
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"false\"",
                      "value": "false",
                      "range": [
                        1009,
                        1016
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 55
                        },
                        "start": {
                          "column": 27,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1002,
                      1017
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 55
                      },
                      "start": {
                        "column": 20,
                        "line": 55
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    995,
                    1000
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 55
                    },
                    "start": {
                      "column": 13,
                      "line": 55
                    }
                  }
                },
                "range": [
                  990,
                  1017
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                943,
                944
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 53
                },
                "start": {
                  "column": 12,
                  "line": 53
                }
              }
            },
            "range": [
              935,
              1023
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1047,
                    1048
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 57
                    },
                    "start": {
                      "column": 23,
                      "line": 57
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "range": [
                  1035,
                  1046
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 57
                  },
                  "start": {
                    "column": 11,
                    "line": 57
                  }
                }
              },
              "optional": false,
              "range": [
                1035,
                1049
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 57
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            },
            "range": [
              1028,
              1050
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "range": [
          929,
          1052
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 30,
            "line": 52
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          908,
          911
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 52
          },
          "start": {
            "column": 9,
            "line": 52
          }
        }
      },
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
                "column": 28,
                "line": 52
              },
              "start": {
                "column": 14,
                "line": 52
              }
            },
            "range": [
              913,
              927
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      915,
                      919
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 52
                      },
                      "start": {
                        "column": 16,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    915,
                    919
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 52
                    },
                    "start": {
                      "column": 16,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      922,
                      927
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 52
                      },
                      "start": {
                        "column": 23,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    922,
                    927
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 52
                    },
                    "start": {
                      "column": 23,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                915,
                927
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 52
                },
                "start": {
                  "column": 16,
                  "line": 52
                }
              }
            }
          },
          "range": [
            912,
            927
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 52
            },
            "start": {
              "column": 13,
              "line": 52
            }
          }
        }
      ],
      "range": [
        899,
        1052
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 52
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
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1135,
                      1136
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1135,
                    1137
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                1125,
                1143
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 9,
                  "line": 64
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1107,
                      1108
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1107,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                }
              ],
              "range": [
                1097,
                1115
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 63
                },
                "start": {
                  "column": 11,
                  "line": 61
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1094,
                1095
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 61
                },
                "start": {
                  "column": 8,
                  "line": 61
                }
              }
            },
            "range": [
              1090,
              1143
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1084,
          1145
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 30,
            "line": 60
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "range": [
          1063,
          1066
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 60
          },
          "start": {
            "column": 9,
            "line": 60
          }
        }
      },
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
                "column": 28,
                "line": 60
              },
              "start": {
                "column": 14,
                "line": 60
              }
            },
            "range": [
              1068,
              1082
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1070,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 60
                      },
                      "start": {
                        "column": 16,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1070,
                    1074
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 60
                    },
                    "start": {
                      "column": 16,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      1077,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 60
                      },
                      "start": {
                        "column": 23,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1077,
                    1082
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 60
                    },
                    "start": {
                      "column": 23,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                1070,
                1082
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 60
                },
                "start": {
                  "column": 16,
                  "line": 60
                }
              }
            }
          },
          "range": [
            1067,
            1082
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 60
            },
            "start": {
              "column": 13,
              "line": 60
            }
          }
        }
      ],
      "range": [
        1054,
        1145
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 60
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
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1237,
                      1238
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 74
                      },
                      "start": {
                        "column": 8,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1237,
                    1239
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                }
              ],
              "range": [
                1227,
                1245
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 9,
                  "line": 73
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1209,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 71
                      },
                      "start": {
                        "column": 8,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1209,
                    1211
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                1199,
                1217
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 72
                },
                "start": {
                  "column": 20,
                  "line": 70
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1187,
                  1188
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  1193,
                  1197
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 70
                  },
                  "start": {
                    "column": 14,
                    "line": 70
                  }
                }
              },
              "range": [
                1187,
                1197
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 70
                },
                "start": {
                  "column": 8,
                  "line": 70
                }
              }
            },
            "range": [
              1183,
              1245
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          }
        ],
        "range": [
          1177,
          1247
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 30,
            "line": 69
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "range": [
          1156,
          1159
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 69
          },
          "start": {
            "column": 9,
            "line": 69
          }
        }
      },
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
                "column": 28,
                "line": 69
              },
              "start": {
                "column": 14,
                "line": 69
              }
            },
            "range": [
              1161,
              1175
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1163,
                      1167
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 69
                      },
                      "start": {
                        "column": 16,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1163,
                    1167
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 69
                    },
                    "start": {
                      "column": 16,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      1170,
                      1175
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 69
                      },
                      "start": {
                        "column": 23,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1170,
                    1175
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 69
                    },
                    "start": {
                      "column": 23,
                      "line": 69
                    }
                  }
                }
              ],
              "range": [
                1163,
                1175
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 69
                },
                "start": {
                  "column": 16,
                  "line": 69
                }
              }
            }
          },
          "range": [
            1160,
            1175
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 69
            },
            "start": {
              "column": 13,
              "line": 69
            }
          }
        }
      ],
      "range": [
        1147,
        1247
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "range": [
          1254,
          1258
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 78
          },
          "start": {
            "column": 5,
            "line": 78
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    1267,
                    1271
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 79
                    },
                    "start": {
                      "column": 6,
                      "line": 79
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
                      "column": 16,
                      "line": 79
                    },
                    "start": {
                      "column": 10,
                      "line": 79
                    }
                  },
                  "range": [
                    1271,
                    1277
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        1273,
                        1277
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 79
                        },
                        "start": {
                          "column": 12,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1273,
                      1277
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 79
                      },
                      "start": {
                        "column": 12,
                        "line": 79
                      }
                    }
                  }
                },
                "range": [
                  1267,
                  1278
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 79
                  },
                  "start": {
                    "column": 6,
                    "line": 79
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1279,
                    1280
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
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 79
                    },
                    "start": {
                      "column": 19,
                      "line": 79
                    }
                  },
                  "range": [
                    1280,
                    1288
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1282,
                      1288
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
                  }
                },
                "range": [
                  1279,
                  1288
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 79
                  },
                  "start": {
                    "column": 18,
                    "line": 79
                  }
                }
              }
            ],
            "range": [
              1265,
              1290
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    1299,
                    1303
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 80
                    },
                    "start": {
                      "column": 6,
                      "line": 80
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
                      "column": 17,
                      "line": 80
                    },
                    "start": {
                      "column": 10,
                      "line": 80
                    }
                  },
                  "range": [
                    1303,
                    1310
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        1305,
                        1310
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 80
                        },
                        "start": {
                          "column": 12,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      1305,
                      1310
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 80
                      },
                      "start": {
                        "column": 12,
                        "line": 80
                      }
                    }
                  }
                },
                "range": [
                  1299,
                  1311
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 80
                  },
                  "start": {
                    "column": 6,
                    "line": 80
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1312,
                    1313
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 80
                    },
                    "start": {
                      "column": 19,
                      "line": 80
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
                      "column": 28,
                      "line": 80
                    },
                    "start": {
                      "column": 20,
                      "line": 80
                    }
                  },
                  "range": [
                    1313,
                    1321
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1315,
                      1321
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 80
                      },
                      "start": {
                        "column": 22,
                        "line": 80
                      }
                    }
                  }
                },
                "range": [
                  1312,
                  1321
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 80
                  },
                  "start": {
                    "column": 19,
                    "line": 80
                  }
                }
              }
            ],
            "range": [
              1297,
              1323
            ],
            "loc": {
              "end": {
                "column": 30,
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
          1265,
          1323
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 80
          },
          "start": {
            "column": 4,
            "line": 79
          }
        }
      },
      "range": [
        1249,
        1324
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 78
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1398,
                          1399
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 84
                          },
                          "start": {
                            "column": 26,
                            "line": 84
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
                          1400,
                          1401
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 84
                          },
                          "start": {
                            "column": 28,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        1398,
                        1401
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 84
                        },
                        "start": {
                          "column": 26,
                          "line": 84
                        }
                      }
                    },
                    "range": [
                      1391,
                      1402
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 84
                      },
                      "start": {
                        "column": 19,
                        "line": 84
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1385,
                    1389
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 84
                    },
                    "start": {
                      "column": 13,
                      "line": 84
                    }
                  }
                },
                "range": [
                  1380,
                  1402
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 84
                  },
                  "start": {
                    "column": 8,
                    "line": 84
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1430,
                          1431
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 85
                          },
                          "start": {
                            "column": 27,
                            "line": 85
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1432,
                          1433
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 85
                          },
                          "start": {
                            "column": 29,
                            "line": 85
                          }
                        }
                      },
                      "range": [
                        1430,
                        1433
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 85
                        },
                        "start": {
                          "column": 27,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      1423,
                      1434
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 85
                      },
                      "start": {
                        "column": 20,
                        "line": 85
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    1416,
                    1421
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 85
                    },
                    "start": {
                      "column": 13,
                      "line": 85
                    }
                  }
                },
                "range": [
                  1411,
                  1434
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 85
                  },
                  "start": {
                    "column": 8,
                    "line": 85
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1362,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 83
                  },
                  "start": {
                    "column": 12,
                    "line": 83
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
                  1364,
                  1368
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 83
                  },
                  "start": {
                    "column": 14,
                    "line": 83
                  }
                }
              },
              "range": [
                1362,
                1368
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 83
                },
                "start": {
                  "column": 12,
                  "line": 83
                }
              }
            },
            "range": [
              1354,
              1440
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          }
        ],
        "range": [
          1348,
          1442
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 22,
            "line": 82
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "range": [
          1335,
          1338
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 82
          },
          "start": {
            "column": 9,
            "line": 82
          }
        }
      },
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
                "column": 20,
                "line": 82
              },
              "start": {
                "column": 14,
                "line": 82
              }
            },
            "range": [
              1340,
              1346
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1342,
                  1346
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 82
                  },
                  "start": {
                    "column": 16,
                    "line": 82
                  }
                }
              },
              "range": [
                1342,
                1346
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 82
                },
                "start": {
                  "column": 16,
                  "line": 82
                }
              }
            }
          },
          "range": [
            1339,
            1346
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 82
            },
            "start": {
              "column": 13,
              "line": 82
            }
          }
        }
      ],
      "range": [
        1326,
        1442
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1516,
                          1517
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 91
                          },
                          "start": {
                            "column": 26,
                            "line": 91
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
                          1518,
                          1519
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 91
                          },
                          "start": {
                            "column": 28,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        1516,
                        1519
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 91
                        },
                        "start": {
                          "column": 26,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      1509,
                      1520
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 91
                      },
                      "start": {
                        "column": 19,
                        "line": 91
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1503,
                    1507
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 91
                    },
                    "start": {
                      "column": 13,
                      "line": 91
                    }
                  }
                },
                "range": [
                  1498,
                  1520
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1548,
                          1549
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 92
                          },
                          "start": {
                            "column": 27,
                            "line": 92
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1550,
                          1551
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 92
                          },
                          "start": {
                            "column": 29,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        1548,
                        1551
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 92
                        },
                        "start": {
                          "column": 27,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      1541,
                      1552
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 92
                      },
                      "start": {
                        "column": 20,
                        "line": 92
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    1534,
                    1539
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 92
                    },
                    "start": {
                      "column": 13,
                      "line": 92
                    }
                  }
                },
                "range": [
                  1529,
                  1552
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 92
                  },
                  "start": {
                    "column": 8,
                    "line": 92
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1480,
                  1481
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 90
                  },
                  "start": {
                    "column": 12,
                    "line": 90
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
                  1482,
                  1486
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 90
                  },
                  "start": {
                    "column": 14,
                    "line": 90
                  }
                }
              },
              "range": [
                1480,
                1486
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 90
                },
                "start": {
                  "column": 12,
                  "line": 90
                }
              }
            },
            "range": [
              1472,
              1558
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1582,
                    1583
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 94
                    },
                    "start": {
                      "column": 23,
                      "line": 94
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "range": [
                  1570,
                  1581
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 94
                  },
                  "start": {
                    "column": 11,
                    "line": 94
                  }
                }
              },
              "optional": false,
              "range": [
                1570,
                1584
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 94
                },
                "start": {
                  "column": 11,
                  "line": 94
                }
              }
            },
            "range": [
              1563,
              1585
            ],
            "loc": {
              "end": {
                "column": 26,
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
          1466,
          1587
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 22,
            "line": 89
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "range": [
          1453,
          1456
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 89
          },
          "start": {
            "column": 9,
            "line": 89
          }
        }
      },
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
                "column": 20,
                "line": 89
              },
              "start": {
                "column": 14,
                "line": 89
              }
            },
            "range": [
              1458,
              1464
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1460,
                  1464
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 89
                  },
                  "start": {
                    "column": 16,
                    "line": 89
                  }
                }
              },
              "range": [
                1460,
                1464
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 89
                },
                "start": {
                  "column": 16,
                  "line": 89
                }
              }
            }
          },
          "range": [
            1457,
            1464
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 89
            },
            "start": {
              "column": 13,
              "line": 89
            }
          }
        }
      ],
      "range": [
        1444,
        1587
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 89
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
