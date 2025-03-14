__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    77,
    531
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  127,
                  128
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  131,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                127,
                132
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              127,
              133
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                145,
                146
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
            "range": [
              138,
              147
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          121,
          149
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 44,
            "line": 3
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
          86,
          89
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            },
            "range": [
              107,
              110
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  109,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              },
              "range": [
                109,
                110
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            }
          },
          "range": [
            106,
            110
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 29,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            },
            "range": [
              113,
              116
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  115,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              },
              "range": [
                115,
                116
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            }
          },
          "range": [
            112,
            116
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 35,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 3
          },
          "start": {
            "column": 40,
            "line": 3
          }
        },
        "range": [
          117,
          120
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              119,
              120
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "range": [
            119,
            120
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          89,
          105
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
                90,
                91
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              90,
              91
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              "range": [
                103,
                104
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                93,
                94
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
            "out": false,
            "range": [
              93,
              104
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        77,
        149
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
                  202,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  206,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                202,
                207
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              202,
              208
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
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                220,
                221
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              213,
              222
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          196,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 45,
            "line": 8
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
          160,
          164
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
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
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 31,
                "line": 8
              }
            },
            "range": [
              182,
              185
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  184,
                  185
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
              },
              "range": [
                184,
                185
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
          },
          "range": [
            181,
            185
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 8
            },
            "start": {
              "column": 30,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 8
              },
              "start": {
                "column": 37,
                "line": 8
              }
            },
            "range": [
              188,
              191
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  190,
                  191
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
              "range": [
                190,
                191
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
            }
          },
          "range": [
            187,
            191
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 8
            },
            "start": {
              "column": 36,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 8
          },
          "start": {
            "column": 41,
            "line": 8
          }
        },
        "range": [
          192,
          195
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              194,
              195
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 43,
                "line": 8
              }
            }
          },
          "range": [
            194,
            195
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 8
            },
            "start": {
              "column": 43,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 13,
            "line": 8
          }
        },
        "range": [
          164,
          180
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  175,
                  176
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
              "range": [
                175,
                176
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              165,
              176
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
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
              "name": "T",
              "optional": false,
              "range": [
                178,
                179
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 27,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              178,
              179
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 27,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        151,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "f",
            "optional": false,
            "range": [
              230,
              231
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
          "init": {
            "type": "FunctionExpression",
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        281,
                        282
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
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        285,
                        286
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      281,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    281,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
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
                        "column": 12,
                        "line": 15
                      },
                      "start": {
                        "column": 11,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    292,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                275,
                303
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 16
                },
                "start": {
                  "column": 49,
                  "line": 13
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
                      "line": 13
                    },
                    "start": {
                      "column": 35,
                      "line": 13
                    }
                  },
                  "range": [
                    261,
                    264
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        263,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 13
                        },
                        "start": {
                          "column": 37,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      263,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 13
                      },
                      "start": {
                        "column": 37,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  260,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 13
                  },
                  "start": {
                    "column": 34,
                    "line": 13
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 13
                    },
                    "start": {
                      "column": 41,
                      "line": 13
                    }
                  },
                  "range": [
                    267,
                    270
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        269,
                        270
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 13
                        },
                        "start": {
                          "column": 43,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      269,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 13
                      },
                      "start": {
                        "column": 43,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  266,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 13
                  },
                  "start": {
                    "column": 40,
                    "line": 13
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 13
                },
                "start": {
                  "column": 45,
                  "line": 13
                }
              },
              "range": [
                271,
                274
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    273,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 47,
                      "line": 13
                    }
                  }
                },
                "range": [
                  273,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 13
                  },
                  "start": {
                    "column": 47,
                    "line": 13
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              },
              "range": [
                243,
                259
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
                      244,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    244,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        257,
                        258
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
                      257,
                      258
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
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      247,
                      248
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
                  "out": false,
                  "range": [
                    247,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                }
              ]
            },
            "range": [
              234,
              303
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            230,
            303
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        226,
        303
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "f2",
            "optional": false,
            "range": [
              309,
              311
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        361,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        365,
                        366
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
                    "range": [
                      361,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    361,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      379,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 20
                      },
                      "start": {
                        "column": 11,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    372,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
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
                355,
                383
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 21
                },
                "start": {
                  "column": 50,
                  "line": 18
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
                      "column": 39,
                      "line": 18
                    },
                    "start": {
                      "column": 36,
                      "line": 18
                    }
                  },
                  "range": [
                    341,
                    344
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        343,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 18
                        },
                        "start": {
                          "column": 38,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      343,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 18
                      },
                      "start": {
                        "column": 38,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  340,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 18
                  },
                  "start": {
                    "column": 35,
                    "line": 18
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 18
                    },
                    "start": {
                      "column": 42,
                      "line": 18
                    }
                  },
                  "range": [
                    347,
                    350
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        349,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 18
                        },
                        "start": {
                          "column": 44,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      349,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 44,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  346,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 18
                  },
                  "start": {
                    "column": 41,
                    "line": 18
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 18
                },
                "start": {
                  "column": 46,
                  "line": 18
                }
              },
              "range": [
                351,
                354
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    353,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 18
                    },
                    "start": {
                      "column": 48,
                      "line": 18
                    }
                  }
                },
                "range": [
                  353,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 18
                  },
                  "start": {
                    "column": 48,
                    "line": 18
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 18
                },
                "start": {
                  "column": 18,
                  "line": 18
                }
              },
              "range": [
                323,
                339
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        334,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 18
                        },
                        "start": {
                          "column": 29,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      334,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 18
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      324,
                      325
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
                  "out": false,
                  "range": [
                    324,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 18
                    },
                    "start": {
                      "column": 19,
                      "line": 18
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      337,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 18
                      },
                      "start": {
                        "column": 32,
                        "line": 18
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    337,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 18
                    },
                    "start": {
                      "column": 32,
                      "line": 18
                    }
                  }
                }
              ]
            },
            "range": [
              314,
              383
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            309,
            383
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        305,
        383
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "f3",
            "optional": false,
            "range": [
              389,
              391
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        435,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 24
                        },
                        "start": {
                          "column": 4,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        439,
                        440
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      435,
                      440
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
                    435,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 4,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      453,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    446,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                429,
                457
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 26
                },
                "start": {
                  "column": 44,
                  "line": 23
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 23
                    },
                    "start": {
                      "column": 27,
                      "line": 23
                    }
                  },
                  "range": [
                    412,
                    415
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        414,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 23
                        },
                        "start": {
                          "column": 29,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      414,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 23
                      },
                      "start": {
                        "column": 29,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  411,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 23
                  },
                  "start": {
                    "column": 26,
                    "line": 23
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 23
                    },
                    "start": {
                      "column": 33,
                      "line": 23
                    }
                  },
                  "range": [
                    418,
                    421
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        420,
                        421
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 23
                        },
                        "start": {
                          "column": 35,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      420,
                      421
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  417,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 32,
                    "line": 23
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 23
                },
                "start": {
                  "column": 37,
                  "line": 23
                }
              },
              "range": [
                422,
                425
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    424,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 23
                    },
                    "start": {
                      "column": 39,
                      "line": 23
                    }
                  }
                },
                "range": [
                  424,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 23
                  },
                  "start": {
                    "column": 39,
                    "line": 23
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              },
              "range": [
                394,
                410
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
                      395,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 23
                      },
                      "start": {
                        "column": 10,
                        "line": 23
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    395,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 23
                    },
                    "start": {
                      "column": 10,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        408,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 23
                        },
                        "start": {
                          "column": 23,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      408,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 23
                      },
                      "start": {
                        "column": 23,
                        "line": 23
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      398,
                      399
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
                  "out": false,
                  "range": [
                    398,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                }
              ]
            },
            "range": [
              394,
              457
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 23
              }
            }
          },
          "range": [
            389,
            457
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        385,
        457
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
            "name": "f4",
            "optional": false,
            "range": [
              463,
              465
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        509,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 29
                        },
                        "start": {
                          "column": 4,
                          "line": 29
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        513,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      509,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    509,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      527,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 30
                      },
                      "start": {
                        "column": 11,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    520,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
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
                503,
                531
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 31
                },
                "start": {
                  "column": 44,
                  "line": 28
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 28
                    },
                    "start": {
                      "column": 27,
                      "line": 28
                    }
                  },
                  "range": [
                    486,
                    489
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        488,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 28
                        },
                        "start": {
                          "column": 29,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      488,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 28
                      },
                      "start": {
                        "column": 29,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  485,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 28
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 28
                    },
                    "start": {
                      "column": 33,
                      "line": 28
                    }
                  },
                  "range": [
                    492,
                    495
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        494,
                        495
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 28
                        },
                        "start": {
                          "column": 35,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      494,
                      495
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 28
                      },
                      "start": {
                        "column": 35,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  491,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 28
                  },
                  "start": {
                    "column": 32,
                    "line": 28
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 28
                },
                "start": {
                  "column": 37,
                  "line": 28
                }
              },
              "range": [
                496,
                499
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    498,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 28
                    },
                    "start": {
                      "column": 39,
                      "line": 28
                    }
                  }
                },
                "range": [
                  498,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 28
                  },
                  "start": {
                    "column": 39,
                    "line": 28
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              },
              "range": [
                468,
                484
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        479,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 28
                        },
                        "start": {
                          "column": 20,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      479,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 28
                      },
                      "start": {
                        "column": 20,
                        "line": 28
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      469,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 28
                      },
                      "start": {
                        "column": 10,
                        "line": 28
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    469,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      482,
                      483
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    482,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 28
                    },
                    "start": {
                      "column": 23,
                      "line": 28
                    }
                  }
                }
              ]
            },
            "range": [
              468,
              531
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 31
              },
              "start": {
                "column": 9,
                "line": 28
              }
            }
          },
          "range": [
            463,
            531
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        459,
        531
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
