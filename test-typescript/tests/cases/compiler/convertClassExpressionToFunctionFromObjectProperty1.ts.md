__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3512
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
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              },
              "range": [
                9,
                14
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  11,
                  14
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 1
                  },
                  "start": {
                    "column": 11,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
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
              17,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          "range": [
            6,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
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
        20
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              36,
              39
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "range": [
            36,
            41
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              50,
              75
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    56,
                    67
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    68,
                    73
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      71,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
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
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                "range": [
                  56,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            44,
            75
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 8,
              "line": 4
            }
          }
        },
        "range": [
          36,
          75
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        36,
        75
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              76,
              79
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              80,
              81
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "range": [
            76,
            81
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              90,
              115
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    96,
                    107
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    108,
                    113
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      111,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
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
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "range": [
                  96,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            84,
            115
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 8,
              "line": 7
            }
          }
        },
        "range": [
          76,
          115
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
      "range": [
        76,
        115
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
            "name": "foo",
            "optional": false,
            "range": [
              129,
              132
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "break",
            "optional": false,
            "range": [
              133,
              138
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
            129,
            138
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              147,
              172
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    153,
                    164
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    165,
                    170
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      168,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
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
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  }
                },
                "range": [
                  153,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 18,
                "line": 12
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            141,
            172
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 12
            }
          }
        },
        "range": [
          129,
          172
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        129,
        172
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              173,
              176
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "case",
            "optional": false,
            "range": [
              177,
              181
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "range": [
            173,
            181
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              190,
              215
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    196,
                    207
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    208,
                    213
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      211,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
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
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
                    }
                  }
                },
                "range": [
                  196,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 17,
                "line": 15
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            184,
            215
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 11,
              "line": 15
            }
          }
        },
        "range": [
          173,
          215
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
      "range": [
        173,
        215
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
            "name": "foo",
            "optional": false,
            "range": [
              216,
              219
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 18
              },
              "start": {
                "column": 0,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "catch",
            "optional": false,
            "range": [
              220,
              225
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "range": [
            216,
            225
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              234,
              259
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    240,
                    251
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    252,
                    257
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      255,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 19
                      },
                      "start": {
                        "column": 19,
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
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                },
                "range": [
                  240,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            228,
            259
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        },
        "range": [
          216,
          259
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        216,
        259
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              260,
              263
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "class",
            "optional": false,
            "range": [
              264,
              269
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "range": [
            260,
            269
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              278,
              303
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    284,
                    295
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    296,
                    301
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      299,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 22
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
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                },
                "range": [
                  284,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
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
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 21
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            272,
            303
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 21
            }
          }
        },
        "range": [
          260,
          303
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
      "range": [
        260,
        303
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
            "name": "foo",
            "optional": false,
            "range": [
              304,
              307
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 24
              },
              "start": {
                "column": 0,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "const",
            "optional": false,
            "range": [
              308,
              313
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "range": [
            304,
            313
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              322,
              347
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    328,
                    339
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    340,
                    345
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      343,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 25
                      },
                      "start": {
                        "column": 19,
                        "line": 25
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
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                },
                "range": [
                  328,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 18,
                "line": 24
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            316,
            347
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 12,
              "line": 24
            }
          }
        },
        "range": [
          304,
          347
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
      "range": [
        304,
        347
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
            "name": "foo",
            "optional": false,
            "range": [
              348,
              351
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 27
              },
              "start": {
                "column": 0,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "continue",
            "optional": false,
            "range": [
              352,
              360
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "range": [
            348,
            360
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              369,
              394
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    375,
                    386
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    387,
                    392
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      390,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 28
                      },
                      "start": {
                        "column": 19,
                        "line": 28
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
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 16,
                      "line": 28
                    }
                  }
                },
                "range": [
                  375,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 29
              },
              "start": {
                "column": 21,
                "line": 27
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            363,
            394
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 29
            },
            "start": {
              "column": 15,
              "line": 27
            }
          }
        },
        "range": [
          348,
          394
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
      "range": [
        348,
        394
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
            "name": "foo",
            "optional": false,
            "range": [
              395,
              398
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 0,
                "line": 30
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "debugger",
            "optional": false,
            "range": [
              399,
              407
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "range": [
            395,
            407
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              416,
              441
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    422,
                    433
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    434,
                    439
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      437,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 31
                      },
                      "start": {
                        "column": 19,
                        "line": 31
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
                      "column": 21,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
                    }
                  }
                },
                "range": [
                  422,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 32
              },
              "start": {
                "column": 21,
                "line": 30
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            410,
            441
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 15,
              "line": 30
            }
          }
        },
        "range": [
          395,
          441
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
      "range": [
        395,
        441
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
            "name": "foo",
            "optional": false,
            "range": [
              442,
              445
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 33
              },
              "start": {
                "column": 0,
                "line": 33
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              446,
              453
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
          "range": [
            442,
            453
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              462,
              487
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    468,
                    479
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    480,
                    485
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      483,
                      485
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 34
                      },
                      "start": {
                        "column": 19,
                        "line": 34
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
                      "column": 21,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
                    }
                  }
                },
                "range": [
                  468,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 35
              },
              "start": {
                "column": 20,
                "line": 33
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            456,
            487
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        },
        "range": [
          442,
          487
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
      "range": [
        442,
        487
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
            "name": "foo",
            "optional": false,
            "range": [
              488,
              491
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 36
              },
              "start": {
                "column": 0,
                "line": 36
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "delete",
            "optional": false,
            "range": [
              492,
              498
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "range": [
            488,
            498
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              507,
              532
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    513,
                    524
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    525,
                    530
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      528,
                      530
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 37
                      },
                      "start": {
                        "column": 19,
                        "line": 37
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
                      "column": 21,
                      "line": 37
                    },
                    "start": {
                      "column": 16,
                      "line": 37
                    }
                  }
                },
                "range": [
                  513,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 38
              },
              "start": {
                "column": 19,
                "line": 36
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            501,
            532
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 13,
              "line": 36
            }
          }
        },
        "range": [
          488,
          532
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
      "range": [
        488,
        532
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
            "name": "foo",
            "optional": false,
            "range": [
              533,
              536
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 39
              },
              "start": {
                "column": 0,
                "line": 39
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "do",
            "optional": false,
            "range": [
              537,
              539
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          "range": [
            533,
            539
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              548,
              573
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    554,
                    565
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    566,
                    571
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      569,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 40
                      },
                      "start": {
                        "column": 19,
                        "line": 40
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
                      "column": 21,
                      "line": 40
                    },
                    "start": {
                      "column": 16,
                      "line": 40
                    }
                  }
                },
                "range": [
                  554,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 41
              },
              "start": {
                "column": 15,
                "line": 39
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            542,
            573
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 41
            },
            "start": {
              "column": 9,
              "line": 39
            }
          }
        },
        "range": [
          533,
          573
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        533,
        573
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              574,
              577
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 42
              },
              "start": {
                "column": 0,
                "line": 42
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "else",
            "optional": false,
            "range": [
              578,
              582
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "range": [
            574,
            582
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              591,
              616
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    597,
                    608
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    609,
                    614
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      612,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 43
                      },
                      "start": {
                        "column": 19,
                        "line": 43
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
                      "column": 21,
                      "line": 43
                    },
                    "start": {
                      "column": 16,
                      "line": 43
                    }
                  }
                },
                "range": [
                  597,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 44
              },
              "start": {
                "column": 17,
                "line": 42
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            585,
            616
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 44
            },
            "start": {
              "column": 11,
              "line": 42
            }
          }
        },
        "range": [
          574,
          616
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        574,
        616
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              617,
              620
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 45
              },
              "start": {
                "column": 0,
                "line": 45
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "enum",
            "optional": false,
            "range": [
              621,
              625
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          "range": [
            617,
            625
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              634,
              659
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    640,
                    651
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    652,
                    657
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      655,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 46
                      },
                      "start": {
                        "column": 19,
                        "line": 46
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
                      "column": 21,
                      "line": 46
                    },
                    "start": {
                      "column": 16,
                      "line": 46
                    }
                  }
                },
                "range": [
                  640,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
                "column": 17,
                "line": 45
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            628,
            659
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 47
            },
            "start": {
              "column": 11,
              "line": 45
            }
          }
        },
        "range": [
          617,
          659
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
      "range": [
        617,
        659
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
            "name": "foo",
            "optional": false,
            "range": [
              660,
              663
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 48
              },
              "start": {
                "column": 0,
                "line": 48
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "export",
            "optional": false,
            "range": [
              664,
              670
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "range": [
            660,
            670
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              679,
              704
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    685,
                    696
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    697,
                    702
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      700,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 49
                      },
                      "start": {
                        "column": 19,
                        "line": 49
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
                      "column": 21,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 49
                    }
                  }
                },
                "range": [
                  685,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 50
              },
              "start": {
                "column": 19,
                "line": 48
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            673,
            704
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 50
            },
            "start": {
              "column": 13,
              "line": 48
            }
          }
        },
        "range": [
          660,
          704
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
      "range": [
        660,
        704
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
            "name": "foo",
            "optional": false,
            "range": [
              705,
              708
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 51
              },
              "start": {
                "column": 0,
                "line": 51
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extends",
            "optional": false,
            "range": [
              709,
              716
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
          "range": [
            705,
            716
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              725,
              750
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    731,
                    742
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    743,
                    748
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      746,
                      748
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 52
                      },
                      "start": {
                        "column": 19,
                        "line": 52
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
                      "column": 21,
                      "line": 52
                    },
                    "start": {
                      "column": 16,
                      "line": 52
                    }
                  }
                },
                "range": [
                  731,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 53
              },
              "start": {
                "column": 20,
                "line": 51
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            719,
            750
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 53
            },
            "start": {
              "column": 14,
              "line": 51
            }
          }
        },
        "range": [
          705,
          750
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
      "range": [
        705,
        750
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
            "name": "foo",
            "optional": false,
            "range": [
              751,
              754
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "false",
            "optional": false,
            "range": [
              755,
              760
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "range": [
            751,
            760
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              769,
              794
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    775,
                    786
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    787,
                    792
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      790,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 55
                      },
                      "start": {
                        "column": 19,
                        "line": 55
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
                      "column": 21,
                      "line": 55
                    },
                    "start": {
                      "column": 16,
                      "line": 55
                    }
                  }
                },
                "range": [
                  775,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 56
              },
              "start": {
                "column": 18,
                "line": 54
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            763,
            794
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 56
            },
            "start": {
              "column": 12,
              "line": 54
            }
          }
        },
        "range": [
          751,
          794
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
      "range": [
        751,
        794
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
            "name": "foo",
            "optional": false,
            "range": [
              795,
              798
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 57
              },
              "start": {
                "column": 0,
                "line": 57
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "finally",
            "optional": false,
            "range": [
              799,
              806
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          "range": [
            795,
            806
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              815,
              840
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    821,
                    832
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    833,
                    838
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      836,
                      838
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 58
                      },
                      "start": {
                        "column": 19,
                        "line": 58
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
                      "column": 21,
                      "line": 58
                    },
                    "start": {
                      "column": 16,
                      "line": 58
                    }
                  }
                },
                "range": [
                  821,
                  838
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 59
              },
              "start": {
                "column": 20,
                "line": 57
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            809,
            840
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 59
            },
            "start": {
              "column": 14,
              "line": 57
            }
          }
        },
        "range": [
          795,
          840
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
      "range": [
        795,
        840
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
            "name": "foo",
            "optional": false,
            "range": [
              841,
              844
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 60
              },
              "start": {
                "column": 0,
                "line": 60
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "for",
            "optional": false,
            "range": [
              845,
              848
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          "range": [
            841,
            848
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 60
            },
            "start": {
              "column": 0,
              "line": 60
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              857,
              882
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    863,
                    874
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    875,
                    880
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      878,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 61
                      },
                      "start": {
                        "column": 19,
                        "line": 61
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
                      "column": 21,
                      "line": 61
                    },
                    "start": {
                      "column": 16,
                      "line": 61
                    }
                  }
                },
                "range": [
                  863,
                  880
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 62
              },
              "start": {
                "column": 16,
                "line": 60
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            851,
            882
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 62
            },
            "start": {
              "column": 10,
              "line": 60
            }
          }
        },
        "range": [
          841,
          882
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
      "range": [
        841,
        882
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
            "name": "foo",
            "optional": false,
            "range": [
              883,
              886
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 63
              },
              "start": {
                "column": 0,
                "line": 63
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "function",
            "optional": false,
            "range": [
              887,
              895
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          "range": [
            883,
            895
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              904,
              929
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    910,
                    921
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    922,
                    927
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      925,
                      927
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 64
                      },
                      "start": {
                        "column": 19,
                        "line": 64
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
                      "column": 21,
                      "line": 64
                    },
                    "start": {
                      "column": 16,
                      "line": 64
                    }
                  }
                },
                "range": [
                  910,
                  927
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 65
              },
              "start": {
                "column": 21,
                "line": 63
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            898,
            929
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 65
            },
            "start": {
              "column": 15,
              "line": 63
            }
          }
        },
        "range": [
          883,
          929
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
      "range": [
        883,
        929
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
            "name": "foo",
            "optional": false,
            "range": [
              930,
              933
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 66
              },
              "start": {
                "column": 0,
                "line": 66
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "if",
            "optional": false,
            "range": [
              934,
              936
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          "range": [
            930,
            936
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 66
            },
            "start": {
              "column": 0,
              "line": 66
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              945,
              970
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    951,
                    962
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    963,
                    968
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      966,
                      968
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 67
                      },
                      "start": {
                        "column": 19,
                        "line": 67
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
                      "column": 21,
                      "line": 67
                    },
                    "start": {
                      "column": 16,
                      "line": 67
                    }
                  }
                },
                "range": [
                  951,
                  968
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 68
              },
              "start": {
                "column": 15,
                "line": 66
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            939,
            970
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 68
            },
            "start": {
              "column": 9,
              "line": 66
            }
          }
        },
        "range": [
          930,
          970
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
      "range": [
        930,
        970
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
            "name": "foo",
            "optional": false,
            "range": [
              971,
              974
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 69
              },
              "start": {
                "column": 0,
                "line": 69
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "import",
            "optional": false,
            "range": [
              975,
              981
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          "range": [
            971,
            981
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              990,
              1015
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    996,
                    1007
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1008,
                    1013
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1011,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 70
                      },
                      "start": {
                        "column": 19,
                        "line": 70
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
                      "column": 21,
                      "line": 70
                    },
                    "start": {
                      "column": 16,
                      "line": 70
                    }
                  }
                },
                "range": [
                  996,
                  1013
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 71
              },
              "start": {
                "column": 19,
                "line": 69
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            984,
            1015
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 71
            },
            "start": {
              "column": 13,
              "line": 69
            }
          }
        },
        "range": [
          971,
          1015
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
      "range": [
        971,
        1015
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
            "name": "foo",
            "optional": false,
            "range": [
              1016,
              1019
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 72
              },
              "start": {
                "column": 0,
                "line": 72
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "in",
            "optional": false,
            "range": [
              1020,
              1022
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          "range": [
            1016,
            1022
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 72
            },
            "start": {
              "column": 0,
              "line": 72
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1031,
              1056
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1037,
                    1048
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 73
                    },
                    "start": {
                      "column": 4,
                      "line": 73
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1049,
                    1054
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1052,
                      1054
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 73
                      },
                      "start": {
                        "column": 19,
                        "line": 73
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
                      "column": 21,
                      "line": 73
                    },
                    "start": {
                      "column": 16,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1037,
                  1054
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 74
              },
              "start": {
                "column": 15,
                "line": 72
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1025,
            1056
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 74
            },
            "start": {
              "column": 9,
              "line": 72
            }
          }
        },
        "range": [
          1016,
          1056
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        1016,
        1056
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1057,
              1060
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 75
              },
              "start": {
                "column": 0,
                "line": 75
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "instanceof",
            "optional": false,
            "range": [
              1061,
              1071
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          "range": [
            1057,
            1071
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 75
            },
            "start": {
              "column": 0,
              "line": 75
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1080,
              1105
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1086,
                    1097
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 76
                    },
                    "start": {
                      "column": 4,
                      "line": 76
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1098,
                    1103
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1101,
                      1103
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 76
                      },
                      "start": {
                        "column": 19,
                        "line": 76
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
                      "column": 21,
                      "line": 76
                    },
                    "start": {
                      "column": 16,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1086,
                  1103
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 76
                  },
                  "start": {
                    "column": 4,
                    "line": 76
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 77
              },
              "start": {
                "column": 23,
                "line": 75
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1074,
            1105
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 77
            },
            "start": {
              "column": 17,
              "line": 75
            }
          }
        },
        "range": [
          1057,
          1105
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 0,
            "line": 75
          }
        }
      },
      "range": [
        1057,
        1105
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1106,
              1109
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 78
              },
              "start": {
                "column": 0,
                "line": 78
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "new",
            "optional": false,
            "range": [
              1110,
              1113
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          "range": [
            1106,
            1113
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 78
            },
            "start": {
              "column": 0,
              "line": 78
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1122,
              1147
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1128,
                    1139
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1140,
                    1145
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1143,
                      1145
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 79
                      },
                      "start": {
                        "column": 19,
                        "line": 79
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
                      "column": 21,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1128,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 79
                  },
                  "start": {
                    "column": 4,
                    "line": 79
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 80
              },
              "start": {
                "column": 16,
                "line": 78
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1116,
            1147
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 80
            },
            "start": {
              "column": 10,
              "line": 78
            }
          }
        },
        "range": [
          1106,
          1147
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
      "range": [
        1106,
        1147
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
            "name": "foo",
            "optional": false,
            "range": [
              1148,
              1151
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 81
              },
              "start": {
                "column": 0,
                "line": 81
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "null",
            "optional": false,
            "range": [
              1152,
              1156
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          "range": [
            1148,
            1156
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 81
            },
            "start": {
              "column": 0,
              "line": 81
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1165,
              1190
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1171,
                    1182
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1183,
                    1188
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1186,
                      1188
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 82
                      },
                      "start": {
                        "column": 19,
                        "line": 82
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
                      "column": 21,
                      "line": 82
                    },
                    "start": {
                      "column": 16,
                      "line": 82
                    }
                  }
                },
                "range": [
                  1171,
                  1188
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 83
              },
              "start": {
                "column": 17,
                "line": 81
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1159,
            1190
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 83
            },
            "start": {
              "column": 11,
              "line": 81
            }
          }
        },
        "range": [
          1148,
          1190
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
      "range": [
        1148,
        1190
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
            "name": "foo",
            "optional": false,
            "range": [
              1191,
              1194
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 84
              },
              "start": {
                "column": 0,
                "line": 84
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "return",
            "optional": false,
            "range": [
              1195,
              1201
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          "range": [
            1191,
            1201
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 84
            },
            "start": {
              "column": 0,
              "line": 84
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1210,
              1235
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1216,
                    1227
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1228,
                    1233
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1231,
                      1233
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 85
                      },
                      "start": {
                        "column": 19,
                        "line": 85
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
                      "column": 21,
                      "line": 85
                    },
                    "start": {
                      "column": 16,
                      "line": 85
                    }
                  }
                },
                "range": [
                  1216,
                  1233
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 86
              },
              "start": {
                "column": 19,
                "line": 84
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1204,
            1235
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 86
            },
            "start": {
              "column": 13,
              "line": 84
            }
          }
        },
        "range": [
          1191,
          1235
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
      "range": [
        1191,
        1235
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
            "name": "foo",
            "optional": false,
            "range": [
              1236,
              1239
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 87
              },
              "start": {
                "column": 0,
                "line": 87
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "super",
            "optional": false,
            "range": [
              1240,
              1245
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "range": [
            1236,
            1245
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 87
            },
            "start": {
              "column": 0,
              "line": 87
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1254,
              1279
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1260,
                    1271
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1272,
                    1277
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1275,
                      1277
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 88
                      },
                      "start": {
                        "column": 19,
                        "line": 88
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
                      "column": 21,
                      "line": 88
                    },
                    "start": {
                      "column": 16,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1260,
                  1277
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 88
                  },
                  "start": {
                    "column": 4,
                    "line": 88
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 89
              },
              "start": {
                "column": 18,
                "line": 87
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1248,
            1279
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 89
            },
            "start": {
              "column": 12,
              "line": 87
            }
          }
        },
        "range": [
          1236,
          1279
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
      "range": [
        1236,
        1279
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
            "name": "foo",
            "optional": false,
            "range": [
              1280,
              1283
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 90
              },
              "start": {
                "column": 0,
                "line": 90
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "switch",
            "optional": false,
            "range": [
              1284,
              1290
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          "range": [
            1280,
            1290
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 90
            },
            "start": {
              "column": 0,
              "line": 90
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1299,
              1324
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1305,
                    1316
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1317,
                    1322
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1320,
                      1322
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 91
                      },
                      "start": {
                        "column": 19,
                        "line": 91
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
                      "column": 21,
                      "line": 91
                    },
                    "start": {
                      "column": 16,
                      "line": 91
                    }
                  }
                },
                "range": [
                  1305,
                  1322
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 92
              },
              "start": {
                "column": 19,
                "line": 90
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1293,
            1324
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 92
            },
            "start": {
              "column": 13,
              "line": 90
            }
          }
        },
        "range": [
          1280,
          1324
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
      "range": [
        1280,
        1324
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
            "name": "foo",
            "optional": false,
            "range": [
              1325,
              1328
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 93
              },
              "start": {
                "column": 0,
                "line": 93
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "range": [
              1329,
              1333
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          },
          "range": [
            1325,
            1333
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 93
            },
            "start": {
              "column": 0,
              "line": 93
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1342,
              1367
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1348,
                    1359
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1360,
                    1365
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1363,
                      1365
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 94
                      },
                      "start": {
                        "column": 19,
                        "line": 94
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
                      "column": 21,
                      "line": 94
                    },
                    "start": {
                      "column": 16,
                      "line": 94
                    }
                  }
                },
                "range": [
                  1348,
                  1365
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 95
              },
              "start": {
                "column": 17,
                "line": 93
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1336,
            1367
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 95
            },
            "start": {
              "column": 11,
              "line": 93
            }
          }
        },
        "range": [
          1325,
          1367
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
      },
      "range": [
        1325,
        1367
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
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1368,
              1371
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 96
              },
              "start": {
                "column": 0,
                "line": 96
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "throw",
            "optional": false,
            "range": [
              1372,
              1377
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          },
          "range": [
            1368,
            1377
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 96
            },
            "start": {
              "column": 0,
              "line": 96
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1386,
              1411
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1392,
                    1403
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1404,
                    1409
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1407,
                      1409
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 97
                      },
                      "start": {
                        "column": 19,
                        "line": 97
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
                      "column": 21,
                      "line": 97
                    },
                    "start": {
                      "column": 16,
                      "line": 97
                    }
                  }
                },
                "range": [
                  1392,
                  1409
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 97
                  },
                  "start": {
                    "column": 4,
                    "line": 97
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 98
              },
              "start": {
                "column": 18,
                "line": 96
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1380,
            1411
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 98
            },
            "start": {
              "column": 12,
              "line": 96
            }
          }
        },
        "range": [
          1368,
          1411
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
      "range": [
        1368,
        1411
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
            "name": "foo",
            "optional": false,
            "range": [
              1412,
              1415
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 99
              },
              "start": {
                "column": 0,
                "line": 99
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "true",
            "optional": false,
            "range": [
              1416,
              1420
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          "range": [
            1412,
            1420
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 99
            },
            "start": {
              "column": 0,
              "line": 99
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1429,
              1454
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1435,
                    1446
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1447,
                    1452
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1450,
                      1452
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 100
                      },
                      "start": {
                        "column": 19,
                        "line": 100
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
                      "column": 21,
                      "line": 100
                    },
                    "start": {
                      "column": 16,
                      "line": 100
                    }
                  }
                },
                "range": [
                  1435,
                  1452
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 100
                  },
                  "start": {
                    "column": 4,
                    "line": 100
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 101
              },
              "start": {
                "column": 17,
                "line": 99
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1423,
            1454
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 101
            },
            "start": {
              "column": 11,
              "line": 99
            }
          }
        },
        "range": [
          1412,
          1454
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
      "range": [
        1412,
        1454
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
            "name": "foo",
            "optional": false,
            "range": [
              1455,
              1458
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 102
              },
              "start": {
                "column": 0,
                "line": 102
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "range": [
              1459,
              1462
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          },
          "range": [
            1455,
            1462
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 102
            },
            "start": {
              "column": 0,
              "line": 102
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1471,
              1496
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1477,
                    1488
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
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
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1489,
                    1494
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1492,
                      1494
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 103
                      },
                      "start": {
                        "column": 19,
                        "line": 103
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
                      "column": 21,
                      "line": 103
                    },
                    "start": {
                      "column": 16,
                      "line": 103
                    }
                  }
                },
                "range": [
                  1477,
                  1494
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 103
                  },
                  "start": {
                    "column": 4,
                    "line": 103
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 104
              },
              "start": {
                "column": 16,
                "line": 102
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1465,
            1496
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 104
            },
            "start": {
              "column": 10,
              "line": 102
            }
          }
        },
        "range": [
          1455,
          1496
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
      },
      "range": [
        1455,
        1496
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
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1497,
              1500
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 105
              },
              "start": {
                "column": 0,
                "line": 105
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeof",
            "optional": false,
            "range": [
              1501,
              1507
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          },
          "range": [
            1497,
            1507
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 105
            },
            "start": {
              "column": 0,
              "line": 105
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1516,
              1541
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1522,
                    1533
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 106
                    },
                    "start": {
                      "column": 4,
                      "line": 106
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1534,
                    1539
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1537,
                      1539
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 106
                      },
                      "start": {
                        "column": 19,
                        "line": 106
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
                      "column": 21,
                      "line": 106
                    },
                    "start": {
                      "column": 16,
                      "line": 106
                    }
                  }
                },
                "range": [
                  1522,
                  1539
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 106
                  },
                  "start": {
                    "column": 4,
                    "line": 106
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 107
              },
              "start": {
                "column": 19,
                "line": 105
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1510,
            1541
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 107
            },
            "start": {
              "column": 13,
              "line": 105
            }
          }
        },
        "range": [
          1497,
          1541
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 107
          },
          "start": {
            "column": 0,
            "line": 105
          }
        }
      },
      "range": [
        1497,
        1541
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1542,
              1545
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 108
              },
              "start": {
                "column": 0,
                "line": 108
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "var",
            "optional": false,
            "range": [
              1546,
              1549
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          },
          "range": [
            1542,
            1549
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 108
            },
            "start": {
              "column": 0,
              "line": 108
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1558,
              1583
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1564,
                    1575
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 109
                    },
                    "start": {
                      "column": 4,
                      "line": 109
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1576,
                    1581
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1579,
                      1581
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 109
                      },
                      "start": {
                        "column": 19,
                        "line": 109
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
                      "column": 21,
                      "line": 109
                    },
                    "start": {
                      "column": 16,
                      "line": 109
                    }
                  }
                },
                "range": [
                  1564,
                  1581
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 109
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 110
              },
              "start": {
                "column": 16,
                "line": 108
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1552,
            1583
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 110
            },
            "start": {
              "column": 10,
              "line": 108
            }
          }
        },
        "range": [
          1542,
          1583
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 110
          },
          "start": {
            "column": 0,
            "line": 108
          }
        }
      },
      "range": [
        1542,
        1583
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 108
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1584,
              1587
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 111
              },
              "start": {
                "column": 0,
                "line": 111
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "void",
            "optional": false,
            "range": [
              1588,
              1592
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          },
          "range": [
            1584,
            1592
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 111
            },
            "start": {
              "column": 0,
              "line": 111
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1601,
              1626
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1607,
                    1618
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 112
                    },
                    "start": {
                      "column": 4,
                      "line": 112
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1619,
                    1624
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1622,
                      1624
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 112
                      },
                      "start": {
                        "column": 19,
                        "line": 112
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
                      "column": 21,
                      "line": 112
                    },
                    "start": {
                      "column": 16,
                      "line": 112
                    }
                  }
                },
                "range": [
                  1607,
                  1624
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 112
                  },
                  "start": {
                    "column": 4,
                    "line": 112
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 113
              },
              "start": {
                "column": 17,
                "line": 111
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1595,
            1626
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 113
            },
            "start": {
              "column": 11,
              "line": 111
            }
          }
        },
        "range": [
          1584,
          1626
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 113
          },
          "start": {
            "column": 0,
            "line": 111
          }
        }
      },
      "range": [
        1584,
        1626
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1627,
              1630
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 114
              },
              "start": {
                "column": 0,
                "line": 114
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "while",
            "optional": false,
            "range": [
              1631,
              1636
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          },
          "range": [
            1627,
            1636
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 114
            },
            "start": {
              "column": 0,
              "line": 114
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1645,
              1670
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1651,
                    1662
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 115
                    },
                    "start": {
                      "column": 4,
                      "line": 115
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1663,
                    1668
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1666,
                      1668
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 115
                      },
                      "start": {
                        "column": 19,
                        "line": 115
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
                      "column": 21,
                      "line": 115
                    },
                    "start": {
                      "column": 16,
                      "line": 115
                    }
                  }
                },
                "range": [
                  1651,
                  1668
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 115
                  },
                  "start": {
                    "column": 4,
                    "line": 115
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 116
              },
              "start": {
                "column": 18,
                "line": 114
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1639,
            1670
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 116
            },
            "start": {
              "column": 12,
              "line": 114
            }
          }
        },
        "range": [
          1627,
          1670
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 0,
            "line": 114
          }
        }
      },
      "range": [
        1627,
        1670
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 114
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1671,
              1674
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 117
              },
              "start": {
                "column": 0,
                "line": 117
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "with",
            "optional": false,
            "range": [
              1675,
              1679
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
              }
            }
          },
          "range": [
            1671,
            1679
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 117
            },
            "start": {
              "column": 0,
              "line": 117
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1688,
              1713
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1694,
                    1705
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 118
                    },
                    "start": {
                      "column": 4,
                      "line": 118
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1706,
                    1711
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1709,
                      1711
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 118
                      },
                      "start": {
                        "column": 19,
                        "line": 118
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
                      "column": 21,
                      "line": 118
                    },
                    "start": {
                      "column": 16,
                      "line": 118
                    }
                  }
                },
                "range": [
                  1694,
                  1711
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 118
                  },
                  "start": {
                    "column": 4,
                    "line": 118
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 119
              },
              "start": {
                "column": 17,
                "line": 117
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1682,
            1713
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 119
            },
            "start": {
              "column": 11,
              "line": 117
            }
          }
        },
        "range": [
          1671,
          1713
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 0,
            "line": 117
          }
        }
      },
      "range": [
        1671,
        1713
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1714,
              1717
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 120
              },
              "start": {
                "column": 0,
                "line": 120
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "implements",
            "optional": false,
            "range": [
              1718,
              1728
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
              }
            }
          },
          "range": [
            1714,
            1728
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 120
            },
            "start": {
              "column": 0,
              "line": 120
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1737,
              1762
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1743,
                    1754
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 121
                    },
                    "start": {
                      "column": 4,
                      "line": 121
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1755,
                    1760
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1758,
                      1760
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 121
                      },
                      "start": {
                        "column": 19,
                        "line": 121
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
                      "column": 21,
                      "line": 121
                    },
                    "start": {
                      "column": 16,
                      "line": 121
                    }
                  }
                },
                "range": [
                  1743,
                  1760
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 121
                  },
                  "start": {
                    "column": 4,
                    "line": 121
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 122
              },
              "start": {
                "column": 23,
                "line": 120
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1731,
            1762
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 122
            },
            "start": {
              "column": 17,
              "line": 120
            }
          }
        },
        "range": [
          1714,
          1762
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 122
          },
          "start": {
            "column": 0,
            "line": 120
          }
        }
      },
      "range": [
        1714,
        1762
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 120
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1763,
              1766
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 123
              },
              "start": {
                "column": 0,
                "line": 123
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "interface",
            "optional": false,
            "range": [
              1767,
              1776
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          },
          "range": [
            1763,
            1776
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 123
            },
            "start": {
              "column": 0,
              "line": 123
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1785,
              1810
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1791,
                    1802
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 124
                    },
                    "start": {
                      "column": 4,
                      "line": 124
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1803,
                    1808
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1806,
                      1808
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 124
                      },
                      "start": {
                        "column": 19,
                        "line": 124
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
                      "column": 21,
                      "line": 124
                    },
                    "start": {
                      "column": 16,
                      "line": 124
                    }
                  }
                },
                "range": [
                  1791,
                  1808
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 124
                  },
                  "start": {
                    "column": 4,
                    "line": 124
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 125
              },
              "start": {
                "column": 22,
                "line": 123
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1779,
            1810
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 125
            },
            "start": {
              "column": 16,
              "line": 123
            }
          }
        },
        "range": [
          1763,
          1810
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 125
          },
          "start": {
            "column": 0,
            "line": 123
          }
        }
      },
      "range": [
        1763,
        1810
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1811,
              1814
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 126
              },
              "start": {
                "column": 0,
                "line": 126
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "let",
            "optional": false,
            "range": [
              1815,
              1818
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 126
              }
            }
          },
          "range": [
            1811,
            1818
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 126
            },
            "start": {
              "column": 0,
              "line": 126
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1827,
              1852
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1833,
                    1844
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 127
                    },
                    "start": {
                      "column": 4,
                      "line": 127
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1845,
                    1850
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1848,
                      1850
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 127
                      },
                      "start": {
                        "column": 19,
                        "line": 127
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
                      "column": 21,
                      "line": 127
                    },
                    "start": {
                      "column": 16,
                      "line": 127
                    }
                  }
                },
                "range": [
                  1833,
                  1850
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 127
                  },
                  "start": {
                    "column": 4,
                    "line": 127
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 128
              },
              "start": {
                "column": 16,
                "line": 126
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1821,
            1852
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 128
            },
            "start": {
              "column": 10,
              "line": 126
            }
          }
        },
        "range": [
          1811,
          1852
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 0,
            "line": 126
          }
        }
      },
      "range": [
        1811,
        1852
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 126
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1853,
              1856
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 129
              },
              "start": {
                "column": 0,
                "line": 129
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "package",
            "optional": false,
            "range": [
              1857,
              1864
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          },
          "range": [
            1853,
            1864
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 129
            },
            "start": {
              "column": 0,
              "line": 129
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1873,
              1898
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1879,
                    1890
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 130
                    },
                    "start": {
                      "column": 4,
                      "line": 130
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1891,
                    1896
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1894,
                      1896
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 130
                      },
                      "start": {
                        "column": 19,
                        "line": 130
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
                      "column": 21,
                      "line": 130
                    },
                    "start": {
                      "column": 16,
                      "line": 130
                    }
                  }
                },
                "range": [
                  1879,
                  1896
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 130
                  },
                  "start": {
                    "column": 4,
                    "line": 130
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 131
              },
              "start": {
                "column": 20,
                "line": 129
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1867,
            1898
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 131
            },
            "start": {
              "column": 14,
              "line": 129
            }
          }
        },
        "range": [
          1853,
          1898
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 131
          },
          "start": {
            "column": 0,
            "line": 129
          }
        }
      },
      "range": [
        1853,
        1898
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 131
        },
        "start": {
          "column": 0,
          "line": 129
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1899,
              1902
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 132
              },
              "start": {
                "column": 0,
                "line": 132
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "private",
            "optional": false,
            "range": [
              1903,
              1910
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 132
              }
            }
          },
          "range": [
            1899,
            1910
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 132
            },
            "start": {
              "column": 0,
              "line": 132
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1919,
              1944
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1925,
                    1936
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 133
                    },
                    "start": {
                      "column": 4,
                      "line": 133
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1937,
                    1942
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1940,
                      1942
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 133
                      },
                      "start": {
                        "column": 19,
                        "line": 133
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
                      "column": 21,
                      "line": 133
                    },
                    "start": {
                      "column": 16,
                      "line": 133
                    }
                  }
                },
                "range": [
                  1925,
                  1942
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 133
                  },
                  "start": {
                    "column": 4,
                    "line": 133
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 134
              },
              "start": {
                "column": 20,
                "line": 132
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1913,
            1944
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 134
            },
            "start": {
              "column": 14,
              "line": 132
            }
          }
        },
        "range": [
          1899,
          1944
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 134
          },
          "start": {
            "column": 0,
            "line": 132
          }
        }
      },
      "range": [
        1899,
        1944
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 134
        },
        "start": {
          "column": 0,
          "line": 132
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1945,
              1948
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 135
              },
              "start": {
                "column": 0,
                "line": 135
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "protected",
            "optional": false,
            "range": [
              1949,
              1958
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 135
              },
              "start": {
                "column": 4,
                "line": 135
              }
            }
          },
          "range": [
            1945,
            1958
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 135
            },
            "start": {
              "column": 0,
              "line": 135
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1967,
              1992
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    1973,
                    1984
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 136
                    },
                    "start": {
                      "column": 4,
                      "line": 136
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1985,
                    1990
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1988,
                      1990
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 136
                      },
                      "start": {
                        "column": 19,
                        "line": 136
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
                      "column": 21,
                      "line": 136
                    },
                    "start": {
                      "column": 16,
                      "line": 136
                    }
                  }
                },
                "range": [
                  1973,
                  1990
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 136
                  },
                  "start": {
                    "column": 4,
                    "line": 136
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 137
              },
              "start": {
                "column": 22,
                "line": 135
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1961,
            1992
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 137
            },
            "start": {
              "column": 16,
              "line": 135
            }
          }
        },
        "range": [
          1945,
          1992
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 137
          },
          "start": {
            "column": 0,
            "line": 135
          }
        }
      },
      "range": [
        1945,
        1992
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 137
        },
        "start": {
          "column": 0,
          "line": 135
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              1993,
              1996
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 138
              },
              "start": {
                "column": 0,
                "line": 138
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "range": [
              1997,
              2003
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 138
              }
            }
          },
          "range": [
            1993,
            2003
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 138
            },
            "start": {
              "column": 0,
              "line": 138
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2012,
              2037
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2018,
                    2029
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 139
                    },
                    "start": {
                      "column": 4,
                      "line": 139
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2030,
                    2035
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2033,
                      2035
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 139
                      },
                      "start": {
                        "column": 19,
                        "line": 139
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
                      "column": 21,
                      "line": 139
                    },
                    "start": {
                      "column": 16,
                      "line": 139
                    }
                  }
                },
                "range": [
                  2018,
                  2035
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 139
                  },
                  "start": {
                    "column": 4,
                    "line": 139
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 140
              },
              "start": {
                "column": 19,
                "line": 138
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2006,
            2037
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 140
            },
            "start": {
              "column": 13,
              "line": 138
            }
          }
        },
        "range": [
          1993,
          2037
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 140
          },
          "start": {
            "column": 0,
            "line": 138
          }
        }
      },
      "range": [
        1993,
        2037
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 138
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2038,
              2041
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 141
              },
              "start": {
                "column": 0,
                "line": 141
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "static",
            "optional": false,
            "range": [
              2042,
              2048
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 141
              },
              "start": {
                "column": 4,
                "line": 141
              }
            }
          },
          "range": [
            2038,
            2048
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 141
            },
            "start": {
              "column": 0,
              "line": 141
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2057,
              2082
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2063,
                    2074
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 142
                    },
                    "start": {
                      "column": 4,
                      "line": 142
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2075,
                    2080
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2078,
                      2080
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 142
                      },
                      "start": {
                        "column": 19,
                        "line": 142
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
                      "column": 21,
                      "line": 142
                    },
                    "start": {
                      "column": 16,
                      "line": 142
                    }
                  }
                },
                "range": [
                  2063,
                  2080
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 142
                  },
                  "start": {
                    "column": 4,
                    "line": 142
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 143
              },
              "start": {
                "column": 19,
                "line": 141
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2051,
            2082
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 143
            },
            "start": {
              "column": 13,
              "line": 141
            }
          }
        },
        "range": [
          2038,
          2082
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 143
          },
          "start": {
            "column": 0,
            "line": 141
          }
        }
      },
      "range": [
        2038,
        2082
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 141
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2083,
              2086
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 144
              },
              "start": {
                "column": 0,
                "line": 144
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "yield",
            "optional": false,
            "range": [
              2087,
              2092
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 144
              },
              "start": {
                "column": 4,
                "line": 144
              }
            }
          },
          "range": [
            2083,
            2092
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 144
            },
            "start": {
              "column": 0,
              "line": 144
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2101,
              2126
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2107,
                    2118
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 145
                    },
                    "start": {
                      "column": 4,
                      "line": 145
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2119,
                    2124
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2122,
                      2124
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 145
                      },
                      "start": {
                        "column": 19,
                        "line": 145
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
                      "column": 21,
                      "line": 145
                    },
                    "start": {
                      "column": 16,
                      "line": 145
                    }
                  }
                },
                "range": [
                  2107,
                  2124
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 145
                  },
                  "start": {
                    "column": 4,
                    "line": 145
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 146
              },
              "start": {
                "column": 18,
                "line": 144
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2095,
            2126
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 146
            },
            "start": {
              "column": 12,
              "line": 144
            }
          }
        },
        "range": [
          2083,
          2126
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 146
          },
          "start": {
            "column": 0,
            "line": 144
          }
        }
      },
      "range": [
        2083,
        2126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 144
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2127,
              2130
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 147
              },
              "start": {
                "column": 0,
                "line": 147
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "abstract",
            "optional": false,
            "range": [
              2131,
              2139
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 147
              },
              "start": {
                "column": 4,
                "line": 147
              }
            }
          },
          "range": [
            2127,
            2139
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 147
            },
            "start": {
              "column": 0,
              "line": 147
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2148,
              2173
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2154,
                    2165
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 148
                    },
                    "start": {
                      "column": 4,
                      "line": 148
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2166,
                    2171
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2169,
                      2171
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 148
                      },
                      "start": {
                        "column": 19,
                        "line": 148
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
                      "column": 21,
                      "line": 148
                    },
                    "start": {
                      "column": 16,
                      "line": 148
                    }
                  }
                },
                "range": [
                  2154,
                  2171
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 148
                  },
                  "start": {
                    "column": 4,
                    "line": 148
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 149
              },
              "start": {
                "column": 21,
                "line": 147
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2142,
            2173
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 149
            },
            "start": {
              "column": 15,
              "line": 147
            }
          }
        },
        "range": [
          2127,
          2173
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 149
          },
          "start": {
            "column": 0,
            "line": 147
          }
        }
      },
      "range": [
        2127,
        2173
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 147
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2174,
              2177
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 150
              },
              "start": {
                "column": 0,
                "line": 150
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "as",
            "optional": false,
            "range": [
              2178,
              2180
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 150
              },
              "start": {
                "column": 4,
                "line": 150
              }
            }
          },
          "range": [
            2174,
            2180
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 150
            },
            "start": {
              "column": 0,
              "line": 150
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2189,
              2214
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2195,
                    2206
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 151
                    },
                    "start": {
                      "column": 4,
                      "line": 151
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2207,
                    2212
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2210,
                      2212
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 151
                      },
                      "start": {
                        "column": 19,
                        "line": 151
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
                      "column": 21,
                      "line": 151
                    },
                    "start": {
                      "column": 16,
                      "line": 151
                    }
                  }
                },
                "range": [
                  2195,
                  2212
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 151
                  },
                  "start": {
                    "column": 4,
                    "line": 151
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 152
              },
              "start": {
                "column": 15,
                "line": 150
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2183,
            2214
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 152
            },
            "start": {
              "column": 9,
              "line": 150
            }
          }
        },
        "range": [
          2174,
          2214
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 152
          },
          "start": {
            "column": 0,
            "line": 150
          }
        }
      },
      "range": [
        2174,
        2214
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 150
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2215,
              2218
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 153
              },
              "start": {
                "column": 0,
                "line": 153
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserts",
            "optional": false,
            "range": [
              2219,
              2226
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          },
          "range": [
            2215,
            2226
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 153
            },
            "start": {
              "column": 0,
              "line": 153
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2235,
              2260
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2241,
                    2252
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 154
                    },
                    "start": {
                      "column": 4,
                      "line": 154
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2253,
                    2258
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2256,
                      2258
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 154
                      },
                      "start": {
                        "column": 19,
                        "line": 154
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
                      "column": 21,
                      "line": 154
                    },
                    "start": {
                      "column": 16,
                      "line": 154
                    }
                  }
                },
                "range": [
                  2241,
                  2258
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 154
                  },
                  "start": {
                    "column": 4,
                    "line": 154
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 155
              },
              "start": {
                "column": 20,
                "line": 153
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2229,
            2260
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 155
            },
            "start": {
              "column": 14,
              "line": 153
            }
          }
        },
        "range": [
          2215,
          2260
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 155
          },
          "start": {
            "column": 0,
            "line": 153
          }
        }
      },
      "range": [
        2215,
        2260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 155
        },
        "start": {
          "column": 0,
          "line": 153
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2261,
              2264
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 156
              },
              "start": {
                "column": 0,
                "line": 156
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "any",
            "optional": false,
            "range": [
              2265,
              2268
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 156
              }
            }
          },
          "range": [
            2261,
            2268
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 156
            },
            "start": {
              "column": 0,
              "line": 156
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2277,
              2302
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2283,
                    2294
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 157
                    },
                    "start": {
                      "column": 4,
                      "line": 157
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2295,
                    2300
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2298,
                      2300
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 157
                      },
                      "start": {
                        "column": 19,
                        "line": 157
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
                      "column": 21,
                      "line": 157
                    },
                    "start": {
                      "column": 16,
                      "line": 157
                    }
                  }
                },
                "range": [
                  2283,
                  2300
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 157
                  },
                  "start": {
                    "column": 4,
                    "line": 157
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 158
              },
              "start": {
                "column": 16,
                "line": 156
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2271,
            2302
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 158
            },
            "start": {
              "column": 10,
              "line": 156
            }
          }
        },
        "range": [
          2261,
          2302
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 0,
            "line": 156
          }
        }
      },
      "range": [
        2261,
        2302
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 156
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2303,
              2306
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 159
              },
              "start": {
                "column": 0,
                "line": 159
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "range": [
              2307,
              2312
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 159
              },
              "start": {
                "column": 4,
                "line": 159
              }
            }
          },
          "range": [
            2303,
            2312
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 159
            },
            "start": {
              "column": 0,
              "line": 159
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2321,
              2346
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2327,
                    2338
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 160
                    },
                    "start": {
                      "column": 4,
                      "line": 160
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2339,
                    2344
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2342,
                      2344
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 160
                      },
                      "start": {
                        "column": 19,
                        "line": 160
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
                      "column": 21,
                      "line": 160
                    },
                    "start": {
                      "column": 16,
                      "line": 160
                    }
                  }
                },
                "range": [
                  2327,
                  2344
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 160
                  },
                  "start": {
                    "column": 4,
                    "line": 160
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 161
              },
              "start": {
                "column": 18,
                "line": 159
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2315,
            2346
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 161
            },
            "start": {
              "column": 12,
              "line": 159
            }
          }
        },
        "range": [
          2303,
          2346
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 161
          },
          "start": {
            "column": 0,
            "line": 159
          }
        }
      },
      "range": [
        2303,
        2346
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 159
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2347,
              2350
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 162
              },
              "start": {
                "column": 0,
                "line": 162
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "range": [
              2351,
              2356
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 162
              }
            }
          },
          "range": [
            2347,
            2356
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 162
            },
            "start": {
              "column": 0,
              "line": 162
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2365,
              2390
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2371,
                    2382
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 163
                    },
                    "start": {
                      "column": 4,
                      "line": 163
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2383,
                    2388
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2386,
                      2388
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 163
                      },
                      "start": {
                        "column": 19,
                        "line": 163
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
                      "column": 21,
                      "line": 163
                    },
                    "start": {
                      "column": 16,
                      "line": 163
                    }
                  }
                },
                "range": [
                  2371,
                  2388
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 163
                  },
                  "start": {
                    "column": 4,
                    "line": 163
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 164
              },
              "start": {
                "column": 18,
                "line": 162
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2359,
            2390
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 164
            },
            "start": {
              "column": 12,
              "line": 162
            }
          }
        },
        "range": [
          2347,
          2390
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 164
          },
          "start": {
            "column": 0,
            "line": 162
          }
        }
      },
      "range": [
        2347,
        2390
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 162
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2391,
              2394
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 165
              },
              "start": {
                "column": 0,
                "line": 165
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "boolean",
            "optional": false,
            "range": [
              2395,
              2402
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 165
              },
              "start": {
                "column": 4,
                "line": 165
              }
            }
          },
          "range": [
            2391,
            2402
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 165
            },
            "start": {
              "column": 0,
              "line": 165
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2411,
              2436
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2417,
                    2428
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 166
                    },
                    "start": {
                      "column": 4,
                      "line": 166
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2429,
                    2434
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2432,
                      2434
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 166
                      },
                      "start": {
                        "column": 19,
                        "line": 166
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
                      "column": 21,
                      "line": 166
                    },
                    "start": {
                      "column": 16,
                      "line": 166
                    }
                  }
                },
                "range": [
                  2417,
                  2434
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 166
                  },
                  "start": {
                    "column": 4,
                    "line": 166
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 167
              },
              "start": {
                "column": 20,
                "line": 165
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2405,
            2436
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 167
            },
            "start": {
              "column": 14,
              "line": 165
            }
          }
        },
        "range": [
          2391,
          2436
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 167
          },
          "start": {
            "column": 0,
            "line": 165
          }
        }
      },
      "range": [
        2391,
        2436
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 167
        },
        "start": {
          "column": 0,
          "line": 165
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2437,
              2440
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 168
              },
              "start": {
                "column": 0,
                "line": 168
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              2441,
              2452
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 168
              },
              "start": {
                "column": 4,
                "line": 168
              }
            }
          },
          "range": [
            2437,
            2452
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 168
            },
            "start": {
              "column": 0,
              "line": 168
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2461,
              2486
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2467,
                    2478
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 169
                    },
                    "start": {
                      "column": 4,
                      "line": 169
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2479,
                    2484
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2482,
                      2484
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 169
                      },
                      "start": {
                        "column": 19,
                        "line": 169
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
                      "column": 21,
                      "line": 169
                    },
                    "start": {
                      "column": 16,
                      "line": 169
                    }
                  }
                },
                "range": [
                  2467,
                  2484
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 169
                  },
                  "start": {
                    "column": 4,
                    "line": 169
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 170
              },
              "start": {
                "column": 24,
                "line": 168
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2455,
            2486
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 170
            },
            "start": {
              "column": 18,
              "line": 168
            }
          }
        },
        "range": [
          2437,
          2486
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 0,
            "line": 168
          }
        }
      },
      "range": [
        2437,
        2486
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 168
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2487,
              2490
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 171
              },
              "start": {
                "column": 0,
                "line": 171
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "declare",
            "optional": false,
            "range": [
              2491,
              2498
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 171
              },
              "start": {
                "column": 4,
                "line": 171
              }
            }
          },
          "range": [
            2487,
            2498
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 171
            },
            "start": {
              "column": 0,
              "line": 171
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2507,
              2532
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2513,
                    2524
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 172
                    },
                    "start": {
                      "column": 4,
                      "line": 172
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2525,
                    2530
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2528,
                      2530
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 172
                      },
                      "start": {
                        "column": 19,
                        "line": 172
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
                      "column": 21,
                      "line": 172
                    },
                    "start": {
                      "column": 16,
                      "line": 172
                    }
                  }
                },
                "range": [
                  2513,
                  2530
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 172
                  },
                  "start": {
                    "column": 4,
                    "line": 172
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 173
              },
              "start": {
                "column": 20,
                "line": 171
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2501,
            2532
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 173
            },
            "start": {
              "column": 14,
              "line": 171
            }
          }
        },
        "range": [
          2487,
          2532
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 173
          },
          "start": {
            "column": 0,
            "line": 171
          }
        }
      },
      "range": [
        2487,
        2532
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 173
        },
        "start": {
          "column": 0,
          "line": 171
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2533,
              2536
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 174
              },
              "start": {
                "column": 0,
                "line": 174
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "range": [
              2537,
              2540
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 174
              }
            }
          },
          "range": [
            2533,
            2540
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 174
            },
            "start": {
              "column": 0,
              "line": 174
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2549,
              2574
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2555,
                    2566
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 175
                    },
                    "start": {
                      "column": 4,
                      "line": 175
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2567,
                    2572
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2570,
                      2572
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 175
                      },
                      "start": {
                        "column": 19,
                        "line": 175
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
                      "column": 21,
                      "line": 175
                    },
                    "start": {
                      "column": 16,
                      "line": 175
                    }
                  }
                },
                "range": [
                  2555,
                  2572
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 175
                  },
                  "start": {
                    "column": 4,
                    "line": 175
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 176
              },
              "start": {
                "column": 16,
                "line": 174
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2543,
            2574
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 176
            },
            "start": {
              "column": 10,
              "line": 174
            }
          }
        },
        "range": [
          2533,
          2574
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 176
          },
          "start": {
            "column": 0,
            "line": 174
          }
        }
      },
      "range": [
        2533,
        2574
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 176
        },
        "start": {
          "column": 0,
          "line": 174
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2575,
              2578
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 177
              },
              "start": {
                "column": 0,
                "line": 177
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "infer",
            "optional": false,
            "range": [
              2579,
              2584
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 177
              },
              "start": {
                "column": 4,
                "line": 177
              }
            }
          },
          "range": [
            2575,
            2584
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 177
            },
            "start": {
              "column": 0,
              "line": 177
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2593,
              2618
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2599,
                    2610
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 178
                    },
                    "start": {
                      "column": 4,
                      "line": 178
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2611,
                    2616
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2614,
                      2616
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 178
                      },
                      "start": {
                        "column": 19,
                        "line": 178
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
                      "column": 21,
                      "line": 178
                    },
                    "start": {
                      "column": 16,
                      "line": 178
                    }
                  }
                },
                "range": [
                  2599,
                  2616
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 178
                  },
                  "start": {
                    "column": 4,
                    "line": 178
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 179
              },
              "start": {
                "column": 18,
                "line": 177
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2587,
            2618
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 179
            },
            "start": {
              "column": 12,
              "line": 177
            }
          }
        },
        "range": [
          2575,
          2618
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 179
          },
          "start": {
            "column": 0,
            "line": 177
          }
        }
      },
      "range": [
        2575,
        2618
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 179
        },
        "start": {
          "column": 0,
          "line": 177
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2619,
              2622
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 180
              },
              "start": {
                "column": 0,
                "line": 180
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "is",
            "optional": false,
            "range": [
              2623,
              2625
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 180
              },
              "start": {
                "column": 4,
                "line": 180
              }
            }
          },
          "range": [
            2619,
            2625
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 180
            },
            "start": {
              "column": 0,
              "line": 180
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2634,
              2659
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2640,
                    2651
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 181
                    },
                    "start": {
                      "column": 4,
                      "line": 181
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2652,
                    2657
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2655,
                      2657
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 181
                      },
                      "start": {
                        "column": 19,
                        "line": 181
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
                      "column": 21,
                      "line": 181
                    },
                    "start": {
                      "column": 16,
                      "line": 181
                    }
                  }
                },
                "range": [
                  2640,
                  2657
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 181
                  },
                  "start": {
                    "column": 4,
                    "line": 181
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 182
              },
              "start": {
                "column": 15,
                "line": 180
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2628,
            2659
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 182
            },
            "start": {
              "column": 9,
              "line": 180
            }
          }
        },
        "range": [
          2619,
          2659
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 182
          },
          "start": {
            "column": 0,
            "line": 180
          }
        }
      },
      "range": [
        2619,
        2659
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 182
        },
        "start": {
          "column": 0,
          "line": 180
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2660,
              2663
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 183
              },
              "start": {
                "column": 0,
                "line": 183
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "keyof",
            "optional": false,
            "range": [
              2664,
              2669
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 183
              },
              "start": {
                "column": 4,
                "line": 183
              }
            }
          },
          "range": [
            2660,
            2669
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 183
            },
            "start": {
              "column": 0,
              "line": 183
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2678,
              2703
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2684,
                    2695
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 184
                    },
                    "start": {
                      "column": 4,
                      "line": 184
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2696,
                    2701
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2699,
                      2701
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 184
                      },
                      "start": {
                        "column": 19,
                        "line": 184
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
                      "column": 21,
                      "line": 184
                    },
                    "start": {
                      "column": 16,
                      "line": 184
                    }
                  }
                },
                "range": [
                  2684,
                  2701
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 184
                  },
                  "start": {
                    "column": 4,
                    "line": 184
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 185
              },
              "start": {
                "column": 18,
                "line": 183
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2672,
            2703
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 185
            },
            "start": {
              "column": 12,
              "line": 183
            }
          }
        },
        "range": [
          2660,
          2703
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 185
          },
          "start": {
            "column": 0,
            "line": 183
          }
        }
      },
      "range": [
        2660,
        2703
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 185
        },
        "start": {
          "column": 0,
          "line": 183
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2704,
              2707
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 186
              },
              "start": {
                "column": 0,
                "line": 186
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "range": [
              2708,
              2714
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 186
              },
              "start": {
                "column": 4,
                "line": 186
              }
            }
          },
          "range": [
            2704,
            2714
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 186
            },
            "start": {
              "column": 0,
              "line": 186
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2723,
              2748
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2729,
                    2740
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 187
                    },
                    "start": {
                      "column": 4,
                      "line": 187
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2741,
                    2746
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2744,
                      2746
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 187
                      },
                      "start": {
                        "column": 19,
                        "line": 187
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
                      "column": 21,
                      "line": 187
                    },
                    "start": {
                      "column": 16,
                      "line": 187
                    }
                  }
                },
                "range": [
                  2729,
                  2746
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 187
                  },
                  "start": {
                    "column": 4,
                    "line": 187
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 188
              },
              "start": {
                "column": 19,
                "line": 186
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2717,
            2748
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 188
            },
            "start": {
              "column": 13,
              "line": 186
            }
          }
        },
        "range": [
          2704,
          2748
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 188
          },
          "start": {
            "column": 0,
            "line": 186
          }
        }
      },
      "range": [
        2704,
        2748
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 188
        },
        "start": {
          "column": 0,
          "line": 186
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2749,
              2752
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 189
              },
              "start": {
                "column": 0,
                "line": 189
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "namespace",
            "optional": false,
            "range": [
              2753,
              2762
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 189
              },
              "start": {
                "column": 4,
                "line": 189
              }
            }
          },
          "range": [
            2749,
            2762
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 189
            },
            "start": {
              "column": 0,
              "line": 189
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2771,
              2796
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2777,
                    2788
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 190
                    },
                    "start": {
                      "column": 4,
                      "line": 190
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2789,
                    2794
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2792,
                      2794
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 190
                      },
                      "start": {
                        "column": 19,
                        "line": 190
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
                      "column": 21,
                      "line": 190
                    },
                    "start": {
                      "column": 16,
                      "line": 190
                    }
                  }
                },
                "range": [
                  2777,
                  2794
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 190
                  },
                  "start": {
                    "column": 4,
                    "line": 190
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 191
              },
              "start": {
                "column": 22,
                "line": 189
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2765,
            2796
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 191
            },
            "start": {
              "column": 16,
              "line": 189
            }
          }
        },
        "range": [
          2749,
          2796
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 191
          },
          "start": {
            "column": 0,
            "line": 189
          }
        }
      },
      "range": [
        2749,
        2796
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 191
        },
        "start": {
          "column": 0,
          "line": 189
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2797,
              2800
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 192
              },
              "start": {
                "column": 0,
                "line": 192
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "never",
            "optional": false,
            "range": [
              2801,
              2806
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 192
              },
              "start": {
                "column": 4,
                "line": 192
              }
            }
          },
          "range": [
            2797,
            2806
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 192
            },
            "start": {
              "column": 0,
              "line": 192
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2815,
              2840
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2821,
                    2832
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 193
                    },
                    "start": {
                      "column": 4,
                      "line": 193
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2833,
                    2838
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2836,
                      2838
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 193
                      },
                      "start": {
                        "column": 19,
                        "line": 193
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
                      "column": 21,
                      "line": 193
                    },
                    "start": {
                      "column": 16,
                      "line": 193
                    }
                  }
                },
                "range": [
                  2821,
                  2838
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 193
                  },
                  "start": {
                    "column": 4,
                    "line": 193
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 194
              },
              "start": {
                "column": 18,
                "line": 192
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2809,
            2840
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 194
            },
            "start": {
              "column": 12,
              "line": 192
            }
          }
        },
        "range": [
          2797,
          2840
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 194
          },
          "start": {
            "column": 0,
            "line": 192
          }
        }
      },
      "range": [
        2797,
        2840
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 194
        },
        "start": {
          "column": 0,
          "line": 192
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2841,
              2844
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 195
              },
              "start": {
                "column": 0,
                "line": 195
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonly",
            "optional": false,
            "range": [
              2845,
              2853
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 195
              },
              "start": {
                "column": 4,
                "line": 195
              }
            }
          },
          "range": [
            2841,
            2853
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 195
            },
            "start": {
              "column": 0,
              "line": 195
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2862,
              2887
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2868,
                    2879
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 196
                    },
                    "start": {
                      "column": 4,
                      "line": 196
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2880,
                    2885
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2883,
                      2885
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 196
                      },
                      "start": {
                        "column": 19,
                        "line": 196
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
                      "column": 21,
                      "line": 196
                    },
                    "start": {
                      "column": 16,
                      "line": 196
                    }
                  }
                },
                "range": [
                  2868,
                  2885
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 196
                  },
                  "start": {
                    "column": 4,
                    "line": 196
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 197
              },
              "start": {
                "column": 21,
                "line": 195
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2856,
            2887
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 197
            },
            "start": {
              "column": 15,
              "line": 195
            }
          }
        },
        "range": [
          2841,
          2887
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 197
          },
          "start": {
            "column": 0,
            "line": 195
          }
        }
      },
      "range": [
        2841,
        2887
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 197
        },
        "start": {
          "column": 0,
          "line": 195
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2888,
              2891
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 198
              },
              "start": {
                "column": 0,
                "line": 198
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "range": [
              2892,
              2899
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 198
              },
              "start": {
                "column": 4,
                "line": 198
              }
            }
          },
          "range": [
            2888,
            2899
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 198
            },
            "start": {
              "column": 0,
              "line": 198
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2908,
              2933
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2914,
                    2925
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 199
                    },
                    "start": {
                      "column": 4,
                      "line": 199
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2926,
                    2931
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2929,
                      2931
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 199
                      },
                      "start": {
                        "column": 19,
                        "line": 199
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
                      "column": 21,
                      "line": 199
                    },
                    "start": {
                      "column": 16,
                      "line": 199
                    }
                  }
                },
                "range": [
                  2914,
                  2931
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 199
                  },
                  "start": {
                    "column": 4,
                    "line": 199
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 200
              },
              "start": {
                "column": 20,
                "line": 198
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2902,
            2933
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 200
            },
            "start": {
              "column": 14,
              "line": 198
            }
          }
        },
        "range": [
          2888,
          2933
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 200
          },
          "start": {
            "column": 0,
            "line": 198
          }
        }
      },
      "range": [
        2888,
        2933
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 200
        },
        "start": {
          "column": 0,
          "line": 198
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2934,
              2937
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 201
              },
              "start": {
                "column": 0,
                "line": 201
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "number",
            "optional": false,
            "range": [
              2938,
              2944
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 201
              },
              "start": {
                "column": 4,
                "line": 201
              }
            }
          },
          "range": [
            2934,
            2944
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 201
            },
            "start": {
              "column": 0,
              "line": 201
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2953,
              2978
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    2959,
                    2970
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 202
                    },
                    "start": {
                      "column": 4,
                      "line": 202
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2971,
                    2976
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2974,
                      2976
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 202
                      },
                      "start": {
                        "column": 19,
                        "line": 202
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
                      "column": 21,
                      "line": 202
                    },
                    "start": {
                      "column": 16,
                      "line": 202
                    }
                  }
                },
                "range": [
                  2959,
                  2976
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 202
                  },
                  "start": {
                    "column": 4,
                    "line": 202
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 203
              },
              "start": {
                "column": 19,
                "line": 201
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2947,
            2978
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 203
            },
            "start": {
              "column": 13,
              "line": 201
            }
          }
        },
        "range": [
          2934,
          2978
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 203
          },
          "start": {
            "column": 0,
            "line": 201
          }
        }
      },
      "range": [
        2934,
        2978
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 203
        },
        "start": {
          "column": 0,
          "line": 201
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              2979,
              2982
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 204
              },
              "start": {
                "column": 0,
                "line": 204
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "range": [
              2983,
              2989
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 204
              },
              "start": {
                "column": 4,
                "line": 204
              }
            }
          },
          "range": [
            2979,
            2989
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 204
            },
            "start": {
              "column": 0,
              "line": 204
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2998,
              3023
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3004,
                    3015
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 205
                    },
                    "start": {
                      "column": 4,
                      "line": 205
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3016,
                    3021
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3019,
                      3021
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 205
                      },
                      "start": {
                        "column": 19,
                        "line": 205
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
                      "column": 21,
                      "line": 205
                    },
                    "start": {
                      "column": 16,
                      "line": 205
                    }
                  }
                },
                "range": [
                  3004,
                  3021
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 205
                  },
                  "start": {
                    "column": 4,
                    "line": 205
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 206
              },
              "start": {
                "column": 19,
                "line": 204
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            2992,
            3023
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 206
            },
            "start": {
              "column": 13,
              "line": 204
            }
          }
        },
        "range": [
          2979,
          3023
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 206
          },
          "start": {
            "column": 0,
            "line": 204
          }
        }
      },
      "range": [
        2979,
        3023
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 206
        },
        "start": {
          "column": 0,
          "line": 204
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3024,
              3027
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 207
              },
              "start": {
                "column": 0,
                "line": 207
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "set",
            "optional": false,
            "range": [
              3028,
              3031
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 207
              },
              "start": {
                "column": 4,
                "line": 207
              }
            }
          },
          "range": [
            3024,
            3031
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 207
            },
            "start": {
              "column": 0,
              "line": 207
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3040,
              3065
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3046,
                    3057
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 208
                    },
                    "start": {
                      "column": 4,
                      "line": 208
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3058,
                    3063
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3061,
                      3063
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 208
                      },
                      "start": {
                        "column": 19,
                        "line": 208
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
                      "column": 21,
                      "line": 208
                    },
                    "start": {
                      "column": 16,
                      "line": 208
                    }
                  }
                },
                "range": [
                  3046,
                  3063
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 208
                  },
                  "start": {
                    "column": 4,
                    "line": 208
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 209
              },
              "start": {
                "column": 16,
                "line": 207
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3034,
            3065
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 209
            },
            "start": {
              "column": 10,
              "line": 207
            }
          }
        },
        "range": [
          3024,
          3065
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 209
          },
          "start": {
            "column": 0,
            "line": 207
          }
        }
      },
      "range": [
        3024,
        3065
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 209
        },
        "start": {
          "column": 0,
          "line": 207
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3066,
              3069
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 210
              },
              "start": {
                "column": 0,
                "line": 210
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "string",
            "optional": false,
            "range": [
              3070,
              3076
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 210
              },
              "start": {
                "column": 4,
                "line": 210
              }
            }
          },
          "range": [
            3066,
            3076
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 210
            },
            "start": {
              "column": 0,
              "line": 210
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3085,
              3110
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3091,
                    3102
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 211
                    },
                    "start": {
                      "column": 4,
                      "line": 211
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3103,
                    3108
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3106,
                      3108
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 211
                      },
                      "start": {
                        "column": 19,
                        "line": 211
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
                      "column": 21,
                      "line": 211
                    },
                    "start": {
                      "column": 16,
                      "line": 211
                    }
                  }
                },
                "range": [
                  3091,
                  3108
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 211
                  },
                  "start": {
                    "column": 4,
                    "line": 211
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 212
              },
              "start": {
                "column": 19,
                "line": 210
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3079,
            3110
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 212
            },
            "start": {
              "column": 13,
              "line": 210
            }
          }
        },
        "range": [
          3066,
          3110
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 212
          },
          "start": {
            "column": 0,
            "line": 210
          }
        }
      },
      "range": [
        3066,
        3110
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 212
        },
        "start": {
          "column": 0,
          "line": 210
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3111,
              3114
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 213
              },
              "start": {
                "column": 0,
                "line": 213
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
              3115,
              3121
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 213
              },
              "start": {
                "column": 4,
                "line": 213
              }
            }
          },
          "range": [
            3111,
            3121
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 213
            },
            "start": {
              "column": 0,
              "line": 213
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3130,
              3155
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3136,
                    3147
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 214
                    },
                    "start": {
                      "column": 4,
                      "line": 214
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3148,
                    3153
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3151,
                      3153
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 214
                      },
                      "start": {
                        "column": 19,
                        "line": 214
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
                      "column": 21,
                      "line": 214
                    },
                    "start": {
                      "column": 16,
                      "line": 214
                    }
                  }
                },
                "range": [
                  3136,
                  3153
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 214
                  },
                  "start": {
                    "column": 4,
                    "line": 214
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 215
              },
              "start": {
                "column": 19,
                "line": 213
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3124,
            3155
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 215
            },
            "start": {
              "column": 13,
              "line": 213
            }
          }
        },
        "range": [
          3111,
          3155
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 215
          },
          "start": {
            "column": 0,
            "line": 213
          }
        }
      },
      "range": [
        3111,
        3155
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 215
        },
        "start": {
          "column": 0,
          "line": 213
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3156,
              3159
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 216
              },
              "start": {
                "column": 0,
                "line": 216
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
              3160,
              3164
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 216
              },
              "start": {
                "column": 4,
                "line": 216
              }
            }
          },
          "range": [
            3156,
            3164
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 216
            },
            "start": {
              "column": 0,
              "line": 216
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3173,
              3198
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3179,
                    3190
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 217
                    },
                    "start": {
                      "column": 4,
                      "line": 217
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3191,
                    3196
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3194,
                      3196
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 217
                      },
                      "start": {
                        "column": 19,
                        "line": 217
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
                      "column": 21,
                      "line": 217
                    },
                    "start": {
                      "column": 16,
                      "line": 217
                    }
                  }
                },
                "range": [
                  3179,
                  3196
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 217
                  },
                  "start": {
                    "column": 4,
                    "line": 217
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 218
              },
              "start": {
                "column": 17,
                "line": 216
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3167,
            3198
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 218
            },
            "start": {
              "column": 11,
              "line": 216
            }
          }
        },
        "range": [
          3156,
          3198
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 218
          },
          "start": {
            "column": 0,
            "line": 216
          }
        }
      },
      "range": [
        3156,
        3198
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 218
        },
        "start": {
          "column": 0,
          "line": 216
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3199,
              3202
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 219
              },
              "start": {
                "column": 0,
                "line": 219
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              3203,
              3212
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 219
              },
              "start": {
                "column": 4,
                "line": 219
              }
            }
          },
          "range": [
            3199,
            3212
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 219
            },
            "start": {
              "column": 0,
              "line": 219
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3221,
              3246
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3227,
                    3238
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 220
                    },
                    "start": {
                      "column": 4,
                      "line": 220
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3239,
                    3244
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3242,
                      3244
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 220
                      },
                      "start": {
                        "column": 19,
                        "line": 220
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
                      "column": 21,
                      "line": 220
                    },
                    "start": {
                      "column": 16,
                      "line": 220
                    }
                  }
                },
                "range": [
                  3227,
                  3244
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 220
                  },
                  "start": {
                    "column": 4,
                    "line": 220
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 221
              },
              "start": {
                "column": 22,
                "line": 219
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3215,
            3246
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 221
            },
            "start": {
              "column": 16,
              "line": 219
            }
          }
        },
        "range": [
          3199,
          3246
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 221
          },
          "start": {
            "column": 0,
            "line": 219
          }
        }
      },
      "range": [
        3199,
        3246
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 221
        },
        "start": {
          "column": 0,
          "line": 219
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3247,
              3250
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 222
              },
              "start": {
                "column": 0,
                "line": 222
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unique",
            "optional": false,
            "range": [
              3251,
              3257
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 222
              },
              "start": {
                "column": 4,
                "line": 222
              }
            }
          },
          "range": [
            3247,
            3257
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 222
            },
            "start": {
              "column": 0,
              "line": 222
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3266,
              3291
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3272,
                    3283
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 223
                    },
                    "start": {
                      "column": 4,
                      "line": 223
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3284,
                    3289
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3287,
                      3289
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 223
                      },
                      "start": {
                        "column": 19,
                        "line": 223
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
                      "column": 21,
                      "line": 223
                    },
                    "start": {
                      "column": 16,
                      "line": 223
                    }
                  }
                },
                "range": [
                  3272,
                  3289
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 223
                  },
                  "start": {
                    "column": 4,
                    "line": 223
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 224
              },
              "start": {
                "column": 19,
                "line": 222
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3260,
            3291
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 224
            },
            "start": {
              "column": 13,
              "line": 222
            }
          }
        },
        "range": [
          3247,
          3291
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 224
          },
          "start": {
            "column": 0,
            "line": 222
          }
        }
      },
      "range": [
        3247,
        3291
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 224
        },
        "start": {
          "column": 0,
          "line": 222
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3292,
              3295
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 225
              },
              "start": {
                "column": 0,
                "line": 225
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "range": [
              3296,
              3303
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 225
              },
              "start": {
                "column": 4,
                "line": 225
              }
            }
          },
          "range": [
            3292,
            3303
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 225
            },
            "start": {
              "column": 0,
              "line": 225
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3312,
              3337
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3318,
                    3329
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 226
                    },
                    "start": {
                      "column": 4,
                      "line": 226
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3330,
                    3335
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3333,
                      3335
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 226
                      },
                      "start": {
                        "column": 19,
                        "line": 226
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
                      "column": 21,
                      "line": 226
                    },
                    "start": {
                      "column": 16,
                      "line": 226
                    }
                  }
                },
                "range": [
                  3318,
                  3335
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 226
                  },
                  "start": {
                    "column": 4,
                    "line": 226
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 227
              },
              "start": {
                "column": 20,
                "line": 225
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3306,
            3337
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 227
            },
            "start": {
              "column": 14,
              "line": 225
            }
          }
        },
        "range": [
          3292,
          3337
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 227
          },
          "start": {
            "column": 0,
            "line": 225
          }
        }
      },
      "range": [
        3292,
        3337
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 227
        },
        "start": {
          "column": 0,
          "line": 225
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3338,
              3341
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 228
              },
              "start": {
                "column": 0,
                "line": 228
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "from",
            "optional": false,
            "range": [
              3342,
              3346
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 228
              },
              "start": {
                "column": 4,
                "line": 228
              }
            }
          },
          "range": [
            3338,
            3346
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 228
            },
            "start": {
              "column": 0,
              "line": 228
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3355,
              3380
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3361,
                    3372
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 229
                    },
                    "start": {
                      "column": 4,
                      "line": 229
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3373,
                    3378
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3376,
                      3378
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 229
                      },
                      "start": {
                        "column": 19,
                        "line": 229
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
                      "column": 21,
                      "line": 229
                    },
                    "start": {
                      "column": 16,
                      "line": 229
                    }
                  }
                },
                "range": [
                  3361,
                  3378
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 229
                  },
                  "start": {
                    "column": 4,
                    "line": 229
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 230
              },
              "start": {
                "column": 17,
                "line": 228
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3349,
            3380
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 230
            },
            "start": {
              "column": 11,
              "line": 228
            }
          }
        },
        "range": [
          3338,
          3380
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 230
          },
          "start": {
            "column": 0,
            "line": 228
          }
        }
      },
      "range": [
        3338,
        3380
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 230
        },
        "start": {
          "column": 0,
          "line": 228
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3381,
              3384
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 231
              },
              "start": {
                "column": 0,
                "line": 231
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "global",
            "optional": false,
            "range": [
              3385,
              3391
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 231
              },
              "start": {
                "column": 4,
                "line": 231
              }
            }
          },
          "range": [
            3381,
            3391
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 231
            },
            "start": {
              "column": 0,
              "line": 231
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3400,
              3425
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3406,
                    3417
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 232
                    },
                    "start": {
                      "column": 4,
                      "line": 232
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3418,
                    3423
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3421,
                      3423
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 232
                      },
                      "start": {
                        "column": 19,
                        "line": 232
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
                      "column": 21,
                      "line": 232
                    },
                    "start": {
                      "column": 16,
                      "line": 232
                    }
                  }
                },
                "range": [
                  3406,
                  3423
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 232
                  },
                  "start": {
                    "column": 4,
                    "line": 232
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 233
              },
              "start": {
                "column": 19,
                "line": 231
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3394,
            3425
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 233
            },
            "start": {
              "column": 13,
              "line": 231
            }
          }
        },
        "range": [
          3381,
          3425
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 233
          },
          "start": {
            "column": 0,
            "line": 231
          }
        }
      },
      "range": [
        3381,
        3425
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 233
        },
        "start": {
          "column": 0,
          "line": 231
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3426,
              3429
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 234
              },
              "start": {
                "column": 0,
                "line": 234
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigint",
            "optional": false,
            "range": [
              3430,
              3436
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 234
              },
              "start": {
                "column": 4,
                "line": 234
              }
            }
          },
          "range": [
            3426,
            3436
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 234
            },
            "start": {
              "column": 0,
              "line": 234
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3445,
              3470
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3451,
                    3462
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 235
                    },
                    "start": {
                      "column": 4,
                      "line": 235
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3463,
                    3468
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3466,
                      3468
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 235
                      },
                      "start": {
                        "column": 19,
                        "line": 235
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
                      "column": 21,
                      "line": 235
                    },
                    "start": {
                      "column": 16,
                      "line": 235
                    }
                  }
                },
                "range": [
                  3451,
                  3468
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 235
                  },
                  "start": {
                    "column": 4,
                    "line": 235
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 236
              },
              "start": {
                "column": 19,
                "line": 234
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3439,
            3470
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 236
            },
            "start": {
              "column": 13,
              "line": 234
            }
          }
        },
        "range": [
          3426,
          3470
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 236
          },
          "start": {
            "column": 0,
            "line": 234
          }
        }
      },
      "range": [
        3426,
        3470
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 236
        },
        "start": {
          "column": 0,
          "line": 234
        }
      }
    },
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
            "name": "foo",
            "optional": false,
            "range": [
              3471,
              3474
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 237
              },
              "start": {
                "column": 0,
                "line": 237
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "of",
            "optional": false,
            "range": [
              3475,
              3477
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 237
              },
              "start": {
                "column": 4,
                "line": 237
              }
            }
          },
          "range": [
            3471,
            3477
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 237
            },
            "start": {
              "column": 0,
              "line": 237
            }
          }
        },
        "right": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3486,
              3511
            ],
            "body": [
              {
                "type": "MethodDefinition",
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "range": [
                    3492,
                    3503
                  ],
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 238
                    },
                    "start": {
                      "column": 4,
                      "line": 238
                    }
                  }
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3504,
                    3509
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3507,
                      3509
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 238
                      },
                      "start": {
                        "column": 19,
                        "line": 238
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
                      "column": 21,
                      "line": 238
                    },
                    "start": {
                      "column": 16,
                      "line": 238
                    }
                  }
                },
                "range": [
                  3492,
                  3509
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 238
                  },
                  "start": {
                    "column": 4,
                    "line": 238
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 239
              },
              "start": {
                "column": 15,
                "line": 237
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            3480,
            3511
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 239
            },
            "start": {
              "column": 9,
              "line": 237
            }
          }
        },
        "range": [
          3471,
          3511
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 239
          },
          "start": {
            "column": 0,
            "line": 237
          }
        }
      },
      "range": [
        3471,
        3511
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 239
        },
        "start": {
          "column": 0,
          "line": 237
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 240
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
