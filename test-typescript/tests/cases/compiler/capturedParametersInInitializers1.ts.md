__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    26,
    818
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    76,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "range": [
                  72,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 11,
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
                "name": "c",
                "optional": false,
                "range": [
                  80,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              },
              "range": [
                72,
                81
              ],
              "loc": {
                "end": {
                  "column": 13,
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
          }
        ],
        "range": [
          66,
          84
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 40,
            "line": 2
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
          35,
          39
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                50,
                57
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
                      51,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      55,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 2
                      },
                      "start": {
                        "column": 29,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    51,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 2
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
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
              57
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 18,
                "line": 2
              }
            }
          },
          "range": [
            40,
            57
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 33,
                "line": 2
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              63,
              64
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 2
              },
              "start": {
                "column": 37,
                "line": 2
              }
            }
          },
          "range": [
            59,
            64
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 2
            },
            "start": {
              "column": 33,
              "line": 2
            }
          }
        }
      ],
      "range": [
        26,
        84
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
        "body": [],
        "range": [
          158,
          166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 51,
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
        "name": "foo2",
        "optional": false,
        "range": [
          116,
          120
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
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              121,
              122
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
          "optional": false,
          "right": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                147,
                149
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 7
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  },
                  "range": [
                    135,
                    145
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        144,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 7
                        },
                        "start": {
                          "column": 37,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      137,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  134,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              125,
              149
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          "range": [
            121,
            149
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              151,
              152
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 7
              },
              "start": {
                "column": 44,
                "line": 7
              }
            }
          },
          "optional": false,
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
                "column": 49,
                "line": 7
              },
              "start": {
                "column": 48,
                "line": 7
              }
            }
          },
          "range": [
            151,
            156
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 44,
              "line": 7
            }
          }
        }
      ],
      "range": [
        107,
        166
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
            "range": [
              192,
              193
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
          "init": null,
          "range": [
            192,
            193
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
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        188,
        194
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          240,
          248
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 45,
            "line": 13
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
          204,
          208
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              209,
              210
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
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
                    215,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 20,
                      "line": 13
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 33,
                        "line": 13
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        226,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 13
                        },
                        "start": {
                          "column": 31,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      219,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 13
                      },
                      "start": {
                        "column": 24,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    218,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 13
                    },
                    "start": {
                      "column": 23,
                      "line": 13
                    }
                  }
                },
                "range": [
                  215,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              213,
              231
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 13
              },
              "start": {
                "column": 18,
                "line": 13
              }
            }
          },
          "range": [
            209,
            231
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 13
            },
            "start": {
              "column": 14,
              "line": 13
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              233,
              234
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 13
              },
              "start": {
                "column": 38,
                "line": 13
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              237,
              238
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 13
              },
              "start": {
                "column": 42,
                "line": 13
              }
            }
          },
          "range": [
            233,
            238
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 13
            },
            "start": {
              "column": 38,
              "line": 13
            }
          }
        }
      ],
      "range": [
        195,
        248
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          315,
          318
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 30,
            "line": 18
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
          294,
          298
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              299,
              300
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    304,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 19,
                      "line": 18
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    304,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 19,
                      "line": 18
                    }
                  }
                },
                "range": [
                  304,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              303,
              306
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 18
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          },
          "range": [
            299,
            306
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              308,
              309
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 18
              },
              "start": {
                "column": 23,
                "line": 18
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              312,
              313
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 27,
                "line": 18
              }
            }
          },
          "range": [
            308,
            313
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 18
            },
            "start": {
              "column": 23,
              "line": 18
            }
          }
        }
      ],
      "range": [
        285,
        318
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          412,
          415
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 38,
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
        "name": "foo5",
        "optional": false,
        "range": [
          383,
          387
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              388,
              389
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "range": [
                  399,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 22
                  },
                  "start": {
                    "column": 25,
                    "line": 22
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                393,
                400
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 19,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              392,
              403
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "range": [
            388,
            403
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              405,
              406
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 31,
                "line": 22
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              409,
              410
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 22
              },
              "start": {
                "column": 35,
                "line": 22
              }
            }
          },
          "range": [
            405,
            410
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 22
            },
            "start": {
              "column": 31,
              "line": 22
            }
          }
        }
      ],
      "range": [
        374,
        415
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          498,
          501
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 44,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          463,
          467
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              468,
              469
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 26
              },
              "start": {
                "column": 14,
                "line": 26
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    485,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 26
                    },
                    "start": {
                      "column": 31,
                      "line": 26
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  479,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 26
                  },
                  "start": {
                    "column": 25,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                478,
                489
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 26
                },
                "start": {
                  "column": 24,
                  "line": 26
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              472,
              489
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 26
              },
              "start": {
                "column": 18,
                "line": 26
              }
            }
          },
          "range": [
            468,
            489
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 26
            },
            "start": {
              "column": 14,
              "line": 26
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              491,
              492
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 26
              },
              "start": {
                "column": 37,
                "line": 26
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              495,
              496
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 26
              },
              "start": {
                "column": 41,
                "line": 26
              }
            }
          },
          "range": [
            491,
            496
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 26
            },
            "start": {
              "column": 37,
              "line": 26
            }
          }
        }
      ],
      "range": [
        454,
        501
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          614,
          617
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 52,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          571,
          575
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              576,
              577
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 30
              },
              "start": {
                "column": 14,
                "line": 30
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "YieldExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          600,
                          601
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 30
                          },
                          "start": {
                            "column": 38,
                            "line": 30
                          }
                        }
                      },
                      "delegate": false,
                      "range": [
                        594,
                        601
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 30
                        },
                        "start": {
                          "column": 32,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      594,
                      601
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 30
                      },
                      "start": {
                        "column": 32,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  593,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 30
                  },
                  "start": {
                    "column": 31,
                    "line": 30
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [],
              "range": [
                581,
                602
              ],
              "loc": {
                "end": {
                  "column": 40,
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
              580,
              605
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 30
              },
              "start": {
                "column": 18,
                "line": 30
              }
            }
          },
          "range": [
            576,
            605
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 30
            },
            "start": {
              "column": 14,
              "line": 30
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              607,
              608
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 30
              },
              "start": {
                "column": 45,
                "line": 30
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              611,
              612
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 30
              },
              "start": {
                "column": 49,
                "line": 30
              }
            }
          },
          "range": [
            607,
            612
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 30
            },
            "start": {
              "column": 45,
              "line": 30
            }
          }
        }
      ],
      "range": [
        562,
        617
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          718,
          721
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 44,
            "line": 34
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "range": [
          683,
          687
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              688,
              689
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 34
              },
              "start": {
                "column": 14,
                "line": 34
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "async": true,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "range": [
                  705,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 34
                  },
                  "start": {
                    "column": 31,
                    "line": 34
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                693,
                706
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 34
                },
                "start": {
                  "column": 19,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              692,
              709
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 34
              },
              "start": {
                "column": 18,
                "line": 34
              }
            }
          },
          "range": [
            688,
            709
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 34
            },
            "start": {
              "column": 14,
              "line": 34
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              711,
              712
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 34
              },
              "start": {
                "column": 37,
                "line": 34
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              715,
              716
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 34
              },
              "start": {
                "column": 41,
                "line": 34
              }
            }
          },
          "range": [
            711,
            716
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 34
            },
            "start": {
              "column": 37,
              "line": 34
            }
          }
        }
      ],
      "range": [
        674,
        721
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          814,
          817
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 48,
            "line": 38
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "range": [
          775,
          779
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 38
          },
          "start": {
            "column": 9,
            "line": 38
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              780,
              781
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 38
              },
              "start": {
                "column": 14,
                "line": 38
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    786,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 38
                    },
                    "start": {
                      "column": 20,
                      "line": 38
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    788,
                    804
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "range": [
                            800,
                            801
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 38
                            },
                            "start": {
                              "column": 34,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          793,
                          802
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 38
                          },
                          "start": {
                            "column": 27,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "range": [
                      791,
                      804
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 38
                      },
                      "start": {
                        "column": 25,
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
                      "column": 38,
                      "line": 38
                    },
                    "start": {
                      "column": 22,
                      "line": 38
                    }
                  }
                },
                "range": [
                  785,
                  804
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 38
                  },
                  "start": {
                    "column": 19,
                    "line": 38
                  }
                }
              }
            ],
            "range": [
              784,
              805
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 38
              },
              "start": {
                "column": 18,
                "line": 38
              }
            }
          },
          "range": [
            780,
            805
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 38
            },
            "start": {
              "column": 14,
              "line": 38
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              807,
              808
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 38
              },
              "start": {
                "column": 41,
                "line": 38
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              811,
              812
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 38
              },
              "start": {
                "column": 45,
                "line": 38
              }
            }
          },
          "range": [
            807,
            812
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 38
            },
            "start": {
              "column": 41,
              "line": 38
            }
          }
        }
      ],
      "range": [
        766,
        817
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
