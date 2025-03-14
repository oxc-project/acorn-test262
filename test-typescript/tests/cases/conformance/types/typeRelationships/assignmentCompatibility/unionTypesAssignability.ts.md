__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    1446
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
            "name": "unionNumberString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              },
              "range": [
                22,
                39
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      24,
                      30
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 1
                      },
                      "start": {
                        "column": 24,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      33,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 1
                      },
                      "start": {
                        "column": 33,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  24,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              5,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            5,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1,
        40
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 1
        },
        "start": {
          "column": 1,
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
          49,
          52
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 8,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          47,
          48
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        41,
        52
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          71,
          85
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "range": [
                73,
                77
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                77,
                83
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  80,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
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
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "range": [
              73,
              83
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          59,
          60
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
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          69,
          70
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        53,
        85
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 3
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
          104,
          118
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                106,
                110
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                110,
                116
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  113,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 27,
                    "line": 4
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
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            "range": [
              106,
              116
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 20,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          92,
          93
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
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          102,
          103
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "range": [
        86,
        118
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "unionDE",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              },
              "range": [
                130,
                137
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        132,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      132,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        136,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  132,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              123,
              137
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            123,
            137
          ],
          "loc": {
            "end": {
              "column": 18,
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
        119,
        138
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                147,
                155
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  149,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              144,
              155
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            144,
            155
          ],
          "loc": {
            "end": {
              "column": 15,
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
        140,
        156
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                164,
                172
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  166,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              161,
              172
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
          "init": null,
          "range": [
            161,
            172
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        157,
        173
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              },
              "range": [
                179,
                182
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    181,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                },
                "range": [
                  181,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              178,
              182
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            178,
            182
          ],
          "loc": {
            "end": {
              "column": 8,
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
        174,
        183
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              },
              "range": [
                189,
                192
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    191,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 10
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                },
                "range": [
                  191,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              188,
              192
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            188,
            192
          ],
          "loc": {
            "end": {
              "column": 8,
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
        184,
        193
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              },
              "range": [
                199,
                202
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    201,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 11
                    },
                    "start": {
                      "column": 7,
                      "line": 11
                    }
                  }
                },
                "range": [
                  201,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 11
                  },
                  "start": {
                    "column": 7,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              198,
              202
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            198,
            202
          ],
          "loc": {
            "end": {
              "column": 8,
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
        194,
        203
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
          "name": "c",
          "optional": false,
          "range": [
            286,
            287
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            290,
            291
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "range": [
          286,
          291
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        286,
        292
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
          "name": "c",
          "optional": false,
          "range": [
            293,
            294
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            297,
            298
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "range": [
          293,
          298
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        293,
        299
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 15
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
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            300,
            301
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "range": [
            304,
            311
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
        "range": [
          300,
          311
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        300,
        312
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
          "name": "d",
          "optional": false,
          "range": [
            319,
            320
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            323,
            324
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          319,
          324
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        319,
        325
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
          "name": "d",
          "optional": false,
          "range": [
            326,
            327
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            330,
            331
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        "range": [
          326,
          331
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        326,
        332
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 18
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
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            333,
            334
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "range": [
            337,
            344
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        "range": [
          333,
          344
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        333,
        345
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 19
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            380,
            381
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            384,
            385
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "range": [
          380,
          385
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        380,
        386
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
          "name": "e",
          "optional": false,
          "range": [
            387,
            388
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            391,
            392
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "range": [
          387,
          392
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        387,
        393
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 21
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
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            394,
            395
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "range": [
            398,
            405
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        "range": [
          394,
          405
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        394,
        406
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
          "name": "num",
          "optional": false,
          "range": [
            441,
            444
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            447,
            450
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        },
        "range": [
          441,
          450
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        441,
        451
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            452,
            455
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            458,
            461
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        },
        "range": [
          452,
          461
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
      "range": [
        452,
        462
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            463,
            466
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "range": [
            469,
            486
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        },
        "range": [
          463,
          486
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        463,
        487
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
          "name": "str",
          "optional": false,
          "range": [
            532,
            535
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            538,
            541
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        },
        "range": [
          532,
          541
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        532,
        542
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            543,
            546
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            549,
            552
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        },
        "range": [
          543,
          552
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        543,
        553
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            554,
            557
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "range": [
            560,
            577
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        },
        "range": [
          554,
          577
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        554,
        578
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 28
        },
        "start": {
          "column": 0,
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
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            710,
            711
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            714,
            715
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        },
        "range": [
          710,
          715
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        710,
        716
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
          "name": "e",
          "optional": false,
          "range": [
            717,
            718
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            721,
            722
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        },
        "range": [
          717,
          722
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        717,
        723
      ],
      "loc": {
        "end": {
          "column": 6,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "range": [
            724,
            731
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            734,
            735
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 33
            },
            "start": {
              "column": 10,
              "line": 33
            }
          }
        },
        "range": [
          724,
          735
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
      "range": [
        724,
        736
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 33
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
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            788,
            789
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            792,
            793
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        "range": [
          788,
          793
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        788,
        794
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
          "name": "e",
          "optional": false,
          "range": [
            795,
            796
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            799,
            800
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        "range": [
          795,
          800
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        795,
        801
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
          "name": "unionDE",
          "optional": false,
          "range": [
            802,
            809
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            812,
            813
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 36
            },
            "start": {
              "column": 10,
              "line": 36
            }
          }
        },
        "range": [
          802,
          813
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        802,
        814
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 36
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
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            821,
            822
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            825,
            826
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
            }
          }
        },
        "range": [
          821,
          826
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        821,
        827
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
          "name": "e",
          "optional": false,
          "range": [
            828,
            829
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            832,
            833
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        },
        "range": [
          828,
          833
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        828,
        834
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
          "name": "unionDE",
          "optional": false,
          "range": [
            835,
            842
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            845,
            846
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 39
            },
            "start": {
              "column": 10,
              "line": 39
            }
          }
        },
        "range": [
          835,
          846
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        835,
        847
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 39
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
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            854,
            857
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            860,
            863
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "range": [
          854,
          863
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        854,
        864
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
          "name": "str",
          "optional": false,
          "range": [
            865,
            868
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            871,
            874
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        },
        "range": [
          865,
          874
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        865,
        875
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
          "name": "unionNumberString",
          "optional": false,
          "range": [
            876,
            893
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            896,
            899
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 42
            },
            "start": {
              "column": 20,
              "line": 42
            }
          }
        },
        "range": [
          876,
          899
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        876,
        900
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 42
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
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            908,
            911
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            914,
            917
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        },
        "range": [
          908,
          917
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        908,
        918
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
          "name": "str",
          "optional": false,
          "range": [
            919,
            922
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            925,
            928
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        },
        "range": [
          919,
          928
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        919,
        929
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
          "name": "unionNumberString",
          "optional": false,
          "range": [
            930,
            947
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            950,
            953
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 45
            },
            "start": {
              "column": 20,
              "line": 45
            }
          }
        },
        "range": [
          930,
          953
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        930,
        954
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 48
                },
                "start": {
                  "column": 10,
                  "line": 48
                }
              },
              "range": [
                979,
                984
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  981,
                  984
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 48
                  },
                  "start": {
                    "column": 12,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              973,
              984
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "init": null,
          "range": [
            973,
            984
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        969,
        985
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 48
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
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "range": [
            986,
            992
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "range": [
            995,
            1002
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 49
            },
            "start": {
              "column": 9,
              "line": 49
            }
          }
        },
        "range": [
          986,
          1002
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        986,
        1003
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
          "name": "anyVar",
          "optional": false,
          "range": [
            1004,
            1010
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "range": [
            1013,
            1030
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 50
            },
            "start": {
              "column": 9,
              "line": 50
            }
          }
        },
        "range": [
          1004,
          1030
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        1004,
        1031
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
          "name": "unionDE",
          "optional": false,
          "range": [
            1032,
            1039
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "range": [
            1042,
            1048
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 51
            },
            "start": {
              "column": 10,
              "line": 51
            }
          }
        },
        "range": [
          1032,
          1048
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1032,
        1049
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 51
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
          "type": "Identifier",
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "range": [
            1050,
            1067
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "range": [
            1070,
            1076
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 52
            },
            "start": {
              "column": 20,
              "line": 52
            }
          }
        },
        "range": [
          1050,
          1076
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        1050,
        1077
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
          "name": "unionDE",
          "optional": false,
          "range": [
            1087,
            1094
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            1097,
            1101
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 55
            },
            "start": {
              "column": 10,
              "line": 55
            }
          }
        },
        "range": [
          1087,
          1101
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        1087,
        1102
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
          "name": "unionNumberString",
          "optional": false,
          "range": [
            1103,
            1120
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            1123,
            1127
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 56
            },
            "start": {
              "column": 20,
              "line": 56
            }
          }
        },
        "range": [
          1103,
          1127
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        1103,
        1128
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
          "name": "unionDE",
          "optional": false,
          "range": [
            1143,
            1150
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            1153,
            1162
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 59
            },
            "start": {
              "column": 10,
              "line": 59
            }
          }
        },
        "range": [
          1143,
          1162
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        1143,
        1163
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
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
          "name": "unionNumberString",
          "optional": false,
          "range": [
            1164,
            1181
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 60
            },
            "start": {
              "column": 0,
              "line": 60
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            1184,
            1193
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 60
            },
            "start": {
              "column": 20,
              "line": 60
            }
          }
        },
        "range": [
          1164,
          1193
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        1164,
        1194
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 60
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  1252,
                  1253
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  1256,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              },
              "range": [
                1252,
                1257
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              1252,
              1258
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
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
                "name": "u",
                "optional": false,
                "range": [
                  1272,
                  1273
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  1276,
                  1277
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
                1272,
                1277
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1272,
              1278
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 66
                      },
                      "start": {
                        "column": 10,
                        "line": 66
                      }
                    },
                    "range": [
                      1298,
                      1305
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1300,
                              1301
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 66
                              },
                              "start": {
                                "column": 12,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1300,
                            1301
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 66
                            },
                            "start": {
                              "column": 12,
                              "line": 66
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1304,
                              1305
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 66
                              },
                              "start": {
                                "column": 16,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1304,
                            1305
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 66
                            },
                            "start": {
                              "column": 16,
                              "line": 66
                            }
                          }
                        }
                      ],
                      "range": [
                        1300,
                        1305
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 66
                        },
                        "start": {
                          "column": 12,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1296,
                    1305
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                "init": null,
                "range": [
                  1296,
                  1305
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1292,
              1306
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 66
              },
              "start": {
                "column": 4,
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1311,
                  1312
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  1315,
                  1316
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 67
                  },
                  "start": {
                    "column": 8,
                    "line": 67
                  }
                }
              },
              "range": [
                1311,
                1316
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "range": [
              1311,
              1317
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
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
                "name": "x",
                "optional": false,
                "range": [
                  1328,
                  1329
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  1332,
                  1333
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                }
              },
              "range": [
                1328,
                1333
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1328,
              1334
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
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
                "name": "x",
                "optional": false,
                "range": [
                  1345,
                  1346
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 69
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  1349,
                  1358
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              },
              "range": [
                1345,
                1358
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1345,
              1359
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 69
              },
              "start": {
                "column": 4,
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
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  1364,
                  1365
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1368,
                  1369
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
              "range": [
                1364,
                1369
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            "range": [
              1364,
              1370
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
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
                "name": "u",
                "optional": false,
                "range": [
                  1406,
                  1407
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 4,
                    "line": 71
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1410,
                  1411
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
                1406,
                1411
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            },
            "range": [
              1406,
              1412
            ],
            "loc": {
              "end": {
                "column": 10,
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
          1246,
          1445
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 31,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          1224,
          1227
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
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
                "column": 23,
                "line": 63
              },
              "start": {
                "column": 20,
                "line": 63
              }
            },
            "range": [
              1235,
              1238
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1237,
                  1238
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 63
                  },
                  "start": {
                    "column": 22,
                    "line": 63
                  }
                }
              },
              "range": [
                1237,
                1238
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 63
                },
                "start": {
                  "column": 22,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1234,
            1238
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 63
            },
            "start": {
              "column": 19,
              "line": 63
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 63
              },
              "start": {
                "column": 26,
                "line": 63
              }
            },
            "range": [
              1241,
              1244
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  1243,
                  1244
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 63
                  },
                  "start": {
                    "column": 28,
                    "line": 63
                  }
                }
              },
              "range": [
                1243,
                1244
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 63
                },
                "start": {
                  "column": 28,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1240,
            1244
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 63
            },
            "start": {
              "column": 25,
              "line": 63
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 63
          },
          "start": {
            "column": 12,
            "line": 63
          }
        },
        "range": [
          1227,
          1233
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
                1228,
                1229
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 63
                },
                "start": {
                  "column": 13,
                  "line": 63
                }
              }
            },
            "out": false,
            "range": [
              1228,
              1229
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 63
              },
              "start": {
                "column": 13,
                "line": 63
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
                1231,
                1232
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 63
                },
                "start": {
                  "column": 16,
                  "line": 63
                }
              }
            },
            "out": false,
            "range": [
              1231,
              1232
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 63
              },
              "start": {
                "column": 16,
                "line": 63
              }
            }
          }
        ]
      },
      "range": [
        1215,
        1445
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 73
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
