__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    1593
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Either",
        "optional": false,
        "range": [
          61,
          67
        ],
        "loc": {
          "end": {
            "column": 11,
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
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                80,
                83
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      81,
                      82
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
                  "range": [
                    81,
                    82
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
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Left",
              "optional": false,
              "range": [
                76,
                80
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "range": [
              76,
              83
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                91,
                94
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      92,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 2
                      },
                      "start": {
                        "column": 36,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    92,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 2
                    },
                    "start": {
                      "column": 36,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Right",
              "optional": false,
              "range": [
                86,
                91
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 30,
                  "line": 2
                }
              }
            },
            "range": [
              86,
              94
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 2
              },
              "start": {
                "column": 30,
                "line": 2
              }
            }
          }
        ],
        "range": [
          76,
          94
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 2
          },
          "start": {
            "column": 20,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        },
        "range": [
          67,
          73
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                68,
                69
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
            "out": false,
            "range": [
              68,
              69
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              71,
              72
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 15,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        56,
        95
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Left",
        "optional": false,
        "range": [
          101,
          105
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "range": [
                113,
                116
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
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
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              },
              "range": [
                116,
                124
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'Left'",
                  "value": "Left",
                  "range": [
                    118,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                },
                "range": [
                  118,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              113,
              125
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                126,
                127
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
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              },
              "range": [
                127,
                130
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    129,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                },
                "range": [
                  129,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              126,
              130
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            }
          }
        ],
        "range": [
          111,
          132
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        },
        "range": [
          105,
          108
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                106,
                107
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              106,
              107
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        96,
        133
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Right",
        "optional": false,
        "range": [
          139,
          144
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
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "range": [
                152,
                155
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
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
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              },
              "range": [
                155,
                164
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'Right'",
                  "value": "Right",
                  "range": [
                    157,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "range": [
                  157,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              152,
              165
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
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
                166,
                167
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 4
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
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              },
              "range": [
                167,
                170
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    169,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 35,
                      "line": 4
                    }
                  }
                },
                "range": [
                  169,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 35,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              166,
              170
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          }
        ],
        "range": [
          150,
          172
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        },
        "range": [
          144,
          147
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                145,
                146
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              145,
              146
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        134,
        173
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "mkLeft",
            "optional": false,
            "range": [
              181,
              187
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "range": [
                      224,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 6
                      },
                      "start": {
                        "column": 49,
                        "line": 6
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'Left'",
                    "value": "Left",
                    "range": [
                      229,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 6
                      },
                      "start": {
                        "column": 54,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    224,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 6
                    },
                    "start": {
                      "column": 49,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "range": [
                      237,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 6
                      },
                      "start": {
                        "column": 62,
                        "line": 6
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
                    "name": "e",
                    "optional": false,
                    "range": [
                      237,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 6
                      },
                      "start": {
                        "column": 62,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    237,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 6
                    },
                    "start": {
                      "column": 62,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                222,
                240
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 6
                },
                "start": {
                  "column": 47,
                  "line": 6
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
                "name": "e",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  },
                  "range": [
                    195,
                    198
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        197,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      197,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  194,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              },
              "range": [
                199,
                217
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    207,
                    217
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "range": [
                          208,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        208,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 33,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "TSNeverKeyword",
                      "range": [
                        211,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 6
                        },
                        "start": {
                          "column": 36,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 6
                    },
                    "start": {
                      "column": 32,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Either",
                  "optional": false,
                  "range": [
                    201,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
                    }
                  }
                },
                "range": [
                  201,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              },
              "range": [
                190,
                193
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      191,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    191,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              190,
              241
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            }
          },
          "range": [
            181,
            241
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        175,
        242
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "name": "mkRight",
            "optional": false,
            "range": [
              249,
              256
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "range": [
                      293,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 7
                      },
                      "start": {
                        "column": 50,
                        "line": 7
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'Right'",
                    "value": "Right",
                    "range": [
                      298,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 7
                      },
                      "start": {
                        "column": 55,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    293,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 7
                    },
                    "start": {
                      "column": 50,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      307,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 7
                      },
                      "start": {
                        "column": 64,
                        "line": 7
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      307,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 7
                      },
                      "start": {
                        "column": 64,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    307,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 7
                    },
                    "start": {
                      "column": 64,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                291,
                310
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 7
                },
                "start": {
                  "column": 48,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 21,
                      "line": 7
                    }
                  },
                  "range": [
                    264,
                    267
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        266,
                        267
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
                    },
                    "range": [
                      266,
                      267
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
                },
                "range": [
                  263,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 20,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              },
              "range": [
                268,
                286
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    276,
                    286
                  ],
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "range": [
                        277,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 7
                        },
                        "start": {
                          "column": 34,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          284,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 41,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        284,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 41,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 7
                    },
                    "start": {
                      "column": 33,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Either",
                  "optional": false,
                  "range": [
                    270,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 27,
                      "line": 7
                    }
                  }
                },
                "range": [
                  270,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 7
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              },
              "range": [
                259,
                262
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      260,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    260,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                }
              ]
            },
            "range": [
              259,
              311
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            249,
            311
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        243,
        312
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          361,
          1242
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "succeed",
              "optional": false,
              "range": [
                374,
                381
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
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
                381,
                476
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    465,
                                    466
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 11
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mkRight",
                                "optional": false,
                                "range": [
                                  457,
                                  464
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 11
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                457,
                                467
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 11
                                },
                                "start": {
                                  "column": 44,
                                  "line": 11
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
                              "name": "Promise",
                              "optional": false,
                              "range": [
                                441,
                                448
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 11
                                },
                                "start": {
                                  "column": 28,
                                  "line": 11
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "range": [
                                449,
                                456
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 11
                                },
                                "start": {
                                  "column": 36,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              441,
                              456
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 11
                              },
                              "start": {
                                "column": 28,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            441,
                            468
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 11
                            },
                            "start": {
                              "column": 28,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "range": [
                          432,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 11
                          },
                          "start": {
                            "column": 19,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        428,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      421,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  411,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 48,
                    "line": 10
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    },
                    "range": [
                      386,
                      389
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          388,
                          389
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 10
                          },
                          "start": {
                            "column": 25,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        388,
                        389
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 10
                        },
                        "start": {
                          "column": 25,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    385,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                },
                "range": [
                  390,
                  410
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      400,
                      410
                    ],
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "range": [
                          401,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 10
                          },
                          "start": {
                            "column": 38,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            408,
                            409
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
                        "range": [
                          408,
                          409
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
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 10
                      },
                      "start": {
                        "column": 37,
                        "line": 10
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EPromise",
                    "optional": false,
                    "range": [
                      392,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 10
                      },
                      "start": {
                        "column": 29,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    392,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 10
                    },
                    "start": {
                      "column": 29,
                      "line": 10
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                },
                "range": [
                  381,
                  384
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        382,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 19,
                          "line": 10
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      382,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 10
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "range": [
              367,
              476
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
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
              "name": "fail",
              "optional": false,
              "range": [
                489,
                493
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
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
                493,
                587
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "range": [
                                    576,
                                    577
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 15
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mkLeft",
                                "optional": false,
                                "range": [
                                  569,
                                  575
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 15
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                569,
                                578
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 15
                                },
                                "start": {
                                  "column": 44,
                                  "line": 15
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
                              "name": "Promise",
                              "optional": false,
                              "range": [
                                553,
                                560
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 15
                                },
                                "start": {
                                  "column": 28,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "range": [
                                561,
                                568
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 15
                                },
                                "start": {
                                  "column": 36,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              553,
                              568
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 15
                              },
                              "start": {
                                "column": 28,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            553,
                            579
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 15
                            },
                            "start": {
                              "column": 28,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "range": [
                          544,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 15
                          },
                          "start": {
                            "column": 19,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        540,
                        580
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      533,
                      581
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  523,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 45,
                    "line": 14
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 14
                      },
                      "start": {
                        "column": 20,
                        "line": 14
                      }
                    },
                    "range": [
                      498,
                      501
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "range": [
                          500,
                          501
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 14
                          },
                          "start": {
                            "column": 22,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        500,
                        501
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
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
                    497,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 19,
                      "line": 14
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 14
                  },
                  "start": {
                    "column": 24,
                    "line": 14
                  }
                },
                "range": [
                  502,
                  522
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      512,
                      522
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            513,
                            514
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 14
                            },
                            "start": {
                              "column": 35,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          513,
                          514
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 14
                          },
                          "start": {
                            "column": 35,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "TSNeverKeyword",
                        "range": [
                          516,
                          521
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 14
                          },
                          "start": {
                            "column": 38,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 14
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EPromise",
                    "optional": false,
                    "range": [
                      504,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    504,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 14
                    },
                    "start": {
                      "column": 26,
                      "line": 14
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                },
                "range": [
                  493,
                  496
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        494,
                        495
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      494,
                      495
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 14
                      },
                      "start": {
                        "column": 16,
                        "line": 14
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              482,
              587
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                593,
                604
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                604,
                647
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  644,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 18
                  },
                  "start": {
                    "column": 55,
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
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 18
                        },
                        "start": {
                          "column": 26,
                          "line": 18
                        }
                      },
                      "range": [
                        615,
                        642
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            628,
                            642
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  635,
                                  641
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "range": [
                                        636,
                                        637
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 18
                                        }
                                      }
                                    },
                                    "range": [
                                      636,
                                      637
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 18
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        639,
                                        640
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 50,
                                          "line": 18
                                        }
                                      }
                                    },
                                    "range": [
                                      639,
                                      640
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 18
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 18
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Either",
                                "optional": false,
                                "range": [
                                  629,
                                  635
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                629,
                                641
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 18
                                },
                                "start": {
                                  "column": 40,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 18
                            },
                            "start": {
                              "column": 39,
                              "line": 18
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "range": [
                            617,
                            628
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 18
                            },
                            "start": {
                              "column": 28,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          617,
                          642
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 18
                          },
                          "start": {
                            "column": 28,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      614,
                      642
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 18
                      },
                      "start": {
                        "column": 25,
                        "line": 18
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    605,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              593,
              647
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
              "name": "then",
              "optional": false,
              "range": [
                653,
                657
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                657,
                1240
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "LogicalExpression",
                            "operator": "??",
                            "left": {
                              "type": "ChainExpression",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "either",
                                        "optional": false,
                                        "range": [
                                          1136,
                                          1142
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 28
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 28
                                          }
                                        }
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "range": [
                                            1151,
                                            1154
                                          ],
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "range": [
                                                  1152,
                                                  1153
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 54,
                                                    "line": 28
                                                  },
                                                  "start": {
                                                    "column": 53,
                                                    "line": 28
                                                  }
                                                }
                                              },
                                              "range": [
                                                1152,
                                                1153
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 54,
                                                  "line": 28
                                                },
                                                "start": {
                                                  "column": 53,
                                                  "line": 28
                                                }
                                              }
                                            }
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 55,
                                              "line": 28
                                            },
                                            "start": {
                                              "column": 52,
                                              "line": 28
                                            }
                                          }
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Right",
                                          "optional": false,
                                          "range": [
                                            1146,
                                            1151
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 52,
                                              "line": 28
                                            },
                                            "start": {
                                              "column": 47,
                                              "line": 28
                                            }
                                          }
                                        },
                                        "range": [
                                          1146,
                                          1154
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 55,
                                            "line": 28
                                          },
                                          "start": {
                                            "column": 47,
                                            "line": 28
                                          }
                                        }
                                      },
                                      "range": [
                                        1136,
                                        1154
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 55,
                                          "line": 28
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 28
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
                                        1156,
                                        1157
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 28
                                        },
                                        "start": {
                                          "column": 57,
                                          "line": 28
                                        }
                                      }
                                    },
                                    "range": [
                                      1135,
                                      1157
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 28
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "onfulfilled",
                                  "optional": false,
                                  "range": [
                                    1121,
                                    1132
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 28
                                    }
                                  }
                                },
                                "optional": true,
                                "range": [
                                  1121,
                                  1158
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 28
                                  }
                                }
                              },
                              "range": [
                                1121,
                                1158
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 28
                                },
                                "start": {
                                  "column": 22,
                                  "line": 28
                                }
                              }
                            },
                            "right": {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "either",
                                      "optional": false,
                                      "range": [
                                        1163,
                                        1169
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 70,
                                          "line": 28
                                        },
                                        "start": {
                                          "column": 64,
                                          "line": 28
                                        }
                                      }
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          1178,
                                          1181
                                        ],
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "range": [
                                                1179,
                                                1180
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 81,
                                                  "line": 28
                                                },
                                                "start": {
                                                  "column": 80,
                                                  "line": 28
                                                }
                                              }
                                            },
                                            "range": [
                                              1179,
                                              1180
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 81,
                                                "line": 28
                                              },
                                              "start": {
                                                "column": 80,
                                                "line": 28
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 82,
                                            "line": 28
                                          },
                                          "start": {
                                            "column": 79,
                                            "line": 28
                                          }
                                        }
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Right",
                                        "optional": false,
                                        "range": [
                                          1173,
                                          1178
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 79,
                                            "line": 28
                                          },
                                          "start": {
                                            "column": 74,
                                            "line": 28
                                          }
                                        }
                                      },
                                      "range": [
                                        1173,
                                        1181
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 82,
                                          "line": 28
                                        },
                                        "start": {
                                          "column": 74,
                                          "line": 28
                                        }
                                      }
                                    },
                                    "range": [
                                      1163,
                                      1181
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 82,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 64,
                                        "line": 28
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
                                      1183,
                                      1184
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 85,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 84,
                                        "line": 28
                                      }
                                    }
                                  },
                                  "range": [
                                    1162,
                                    1184
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 63,
                                      "line": 28
                                    }
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "range": [
                                    1188,
                                    1195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 96,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 89,
                                      "line": 28
                                    }
                                  }
                                },
                                "range": [
                                  1162,
                                  1195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 96,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 28
                                  }
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    1199,
                                    1200
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 101,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 100,
                                      "line": 28
                                    }
                                  }
                                },
                                "range": [
                                  1199,
                                  1200
                                ],
                                "loc": {
                                  "end": {
                                    "column": 101,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 100,
                                    "line": 28
                                  }
                                }
                              },
                              "range": [
                                1162,
                                1200
                              ],
                              "loc": {
                                "end": {
                                  "column": 101,
                                  "line": 28
                                },
                                "start": {
                                  "column": 63,
                                  "line": 28
                                }
                              }
                            },
                            "range": [
                              1121,
                              1200
                            ],
                            "loc": {
                              "end": {
                                "column": 101,
                                "line": 28
                              },
                              "start": {
                                "column": 22,
                                "line": 28
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
                              "name": "either",
                              "optional": false,
                              "range": [
                                1111,
                                1117
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 28
                                },
                                "start": {
                                  "column": 12,
                                  "line": 28
                                }
                              }
                            }
                          ],
                          "range": [
                            1111,
                            1200
                          ],
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 28
                            },
                            "start": {
                              "column": 12,
                              "line": 28
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onrejected",
                          "optional": false,
                          "range": [
                            1214,
                            1224
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
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
                            "type": "ThisExpression",
                            "range": [
                              981,
                              985
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 26
                              },
                              "start": {
                                "column": 15,
                                "line": 26
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "range": [
                              986,
                              987
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 26
                              },
                              "start": {
                                "column": 20,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            981,
                            987
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 26
                            },
                            "start": {
                              "column": 15,
                              "line": 26
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "range": [
                            988,
                            992
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 26
                            },
                            "start": {
                              "column": 22,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          981,
                          992
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 26
                          },
                          "start": {
                            "column": 15,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        981,
                        1234
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 30
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      974,
                      1234
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  964,
                  1240
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 27,
                    "line": 25
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    },
                    "range": [
                      758,
                      778
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          768,
                          778
                        ],
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "range": [
                              769,
                              774
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 22
                              },
                              "start": {
                                "column": 23,
                                "line": 22
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                776,
                                777
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 22
                                },
                                "start": {
                                  "column": 30,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              776,
                              777
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 22
                              },
                              "start": {
                                "column": 30,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 22
                          },
                          "start": {
                            "column": 22,
                            "line": 22
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "range": [
                          760,
                          768
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 22
                          },
                          "start": {
                            "column": 14,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        760,
                        778
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    754,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onfulfilled",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 23
                      },
                      "start": {
                        "column": 20,
                        "line": 23
                      }
                    },
                    "range": [
                      800,
                      855
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 23
                                  }
                                },
                                "range": [
                                  809,
                                  812
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "range": [
                                      811,
                                      812
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    811,
                                    812
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 23
                                    }
                                  }
                                }
                              },
                              "range": [
                                804,
                                812
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 23
                                },
                                "start": {
                                  "column": 24,
                                  "line": 23
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 23
                              },
                              "start": {
                                "column": 34,
                                "line": 23
                              }
                            },
                            "range": [
                              814,
                              835
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "range": [
                                      817,
                                      818
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    817,
                                    818
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 23
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      832,
                                      835
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B",
                                          "optional": false,
                                          "range": [
                                            833,
                                            834
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 54,
                                              "line": 23
                                            },
                                            "start": {
                                              "column": 53,
                                              "line": 23
                                            }
                                          }
                                        },
                                        "range": [
                                          833,
                                          834
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 54,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 53,
                                            "line": 23
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 52,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "range": [
                                      821,
                                      832
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    821,
                                    835
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 23
                                    }
                                  }
                                }
                              ],
                              "range": [
                                817,
                                835
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 23
                                },
                                "start": {
                                  "column": 37,
                                  "line": 23
                                }
                              }
                            }
                          },
                          "range": [
                            803,
                            835
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 23
                            },
                            "start": {
                              "column": 23,
                              "line": 23
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            839,
                            843
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 23
                            },
                            "start": {
                              "column": 59,
                              "line": 23
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            846,
                            855
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 23
                            },
                            "start": {
                              "column": 66,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "range": [
                        802,
                        855
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 23
                        },
                        "start": {
                          "column": 22,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    788,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onrejected",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 24
                      },
                      "start": {
                        "column": 19,
                        "line": 24
                      }
                    },
                    "range": [
                      876,
                      936
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "reason",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 24
                                  }
                                },
                                "range": [
                                  886,
                                  891
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    888,
                                    891
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 24
                                    }
                                  }
                                }
                              },
                              "range": [
                                880,
                                891
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 24
                                },
                                "start": {
                                  "column": 23,
                                  "line": 24
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 24
                              },
                              "start": {
                                "column": 36,
                                "line": 24
                              }
                            },
                            "range": [
                              893,
                              916
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B1",
                                    "optional": false,
                                    "range": [
                                      896,
                                      898
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "range": [
                                    896,
                                    898
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 24
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      912,
                                      916
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B1",
                                          "optional": false,
                                          "range": [
                                            913,
                                            915
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 58,
                                              "line": 24
                                            },
                                            "start": {
                                              "column": 56,
                                              "line": 24
                                            }
                                          }
                                        },
                                        "range": [
                                          913,
                                          915
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 58,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 24
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "range": [
                                      901,
                                      912
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "range": [
                                    901,
                                    916
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 24
                                    }
                                  }
                                }
                              ],
                              "range": [
                                896,
                                916
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 24
                                },
                                "start": {
                                  "column": 39,
                                  "line": 24
                                }
                              }
                            }
                          },
                          "range": [
                            879,
                            916
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 24
                            },
                            "start": {
                              "column": 22,
                              "line": 24
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            920,
                            924
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 24
                            },
                            "start": {
                              "column": 63,
                              "line": 24
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            927,
                            936
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 24
                            },
                            "start": {
                              "column": 70,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        878,
                        936
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 24
                        },
                        "start": {
                          "column": 21,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    865,
                    936
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 25
                  },
                  "start": {
                    "column": 5,
                    "line": 25
                  }
                },
                "range": [
                  942,
                  963
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      955,
                      963
                    ],
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                956,
                                957
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 25
                                },
                                "start": {
                                  "column": 19,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              956,
                              957
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 25
                              },
                              "start": {
                                "column": 19,
                                "line": 25
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B1",
                              "optional": false,
                              "range": [
                                960,
                                962
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 25
                                },
                                "start": {
                                  "column": 23,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              960,
                              962
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 25
                              },
                              "start": {
                                "column": 23,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "range": [
                          956,
                          962
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 19,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PromiseLike",
                    "optional": false,
                    "range": [
                      944,
                      955
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 25
                      },
                      "start": {
                        "column": 7,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    944,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                },
                "range": [
                  657,
                  676
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          662,
                          663
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 20
                          },
                          "start": {
                            "column": 13,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        662,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 20
                        },
                        "start": {
                          "column": 13,
                          "line": 20
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        658,
                        659
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 20
                        },
                        "start": {
                          "column": 9,
                          "line": 20
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      658,
                      663
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "default": {
                      "type": "TSNeverKeyword",
                      "range": [
                        670,
                        675
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 20
                        },
                        "start": {
                          "column": 21,
                          "line": 20
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "range": [
                        665,
                        667
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 16,
                          "line": 20
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      665,
                      675
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
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "range": [
              653,
              1240
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 20
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
            "column": 47,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EPromise",
        "optional": false,
        "range": [
          320,
          328
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "range": [
              346,
              357
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 32,
                "line": 9
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              357,
              360
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    358,
                    359
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 9
                    },
                    "start": {
                      "column": 44,
                      "line": 9
                    }
                  }
                },
                "range": [
                  358,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 44,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 43,
                "line": 9
              }
            }
          },
          "range": [
            346,
            360
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 9
            },
            "start": {
              "column": 32,
              "line": 9
            }
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 9
          }
        },
        "range": [
          328,
          334
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                329,
                330
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              329,
              330
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 15,
                "line": 9
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
              "name": "A",
              "optional": false,
              "range": [
                332,
                333
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              332,
              333
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 18,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        314,
        1242
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
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
            "name": "withTypedFailure",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 34
                },
                "start": {
                  "column": 22,
                  "line": 34
                }
              },
              "range": [
                1266,
                1292
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1276,
                    1292
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1277,
                        1283
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 34
                        },
                        "start": {
                          "column": 33,
                          "line": 34
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        1285,
                        1291
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 34
                        },
                        "start": {
                          "column": 41,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 34
                    },
                    "start": {
                      "column": 32,
                      "line": 34
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EPromise",
                  "optional": false,
                  "range": [
                    1268,
                    1276
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 34
                    },
                    "start": {
                      "column": 24,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1268,
                  1292
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 34
                  },
                  "start": {
                    "column": 24,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              1250,
              1292
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1309,
                  1310
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 34
                  },
                  "start": {
                    "column": 65,
                    "line": 34
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
                "name": "EPromise",
                "optional": false,
                "range": [
                  1295,
                  1303
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 34
                  },
                  "start": {
                    "column": 51,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  1304,
                  1308
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 34
                  },
                  "start": {
                    "column": 60,
                    "line": 34
                  }
                }
              },
              "range": [
                1295,
                1308
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 34
                },
                "start": {
                  "column": 51,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              1295,
              1311
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 34
              },
              "start": {
                "column": 51,
                "line": 34
              }
            }
          },
          "range": [
            1250,
            1311
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1244,
        1312
      ],
      "loc": {
        "end": {
          "column": 68,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "range": [
                1525,
                1532
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 40
                },
                "start": {
                  "column": 49,
                  "line": 40
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
                1533,
                1536
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 40
                },
                "start": {
                  "column": 57,
                  "line": 40
                }
              }
            },
            "range": [
              1525,
              1536
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 40
              },
              "start": {
                "column": 49,
                "line": 40
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
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        1503,
                        1504
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 40
                        },
                        "start": {
                          "column": 27,
                          "line": 40
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "range": [
                        1505,
                        1516
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 40
                        },
                        "start": {
                          "column": 29,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1503,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 40
                      },
                      "start": {
                        "column": 27,
                        "line": 40
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1503,
                    1518
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 40
                    },
                    "start": {
                      "column": 27,
                      "line": 40
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
                    "name": "s",
                    "optional": false,
                    "range": [
                      1498,
                      1499
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 40
                      },
                      "start": {
                        "column": 22,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  1498,
                  1518
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 40
                  },
                  "start": {
                    "column": 22,
                    "line": 40
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
                "name": "withTypedFailure",
                "optional": false,
                "range": [
                  1476,
                  1492
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 40
                  },
                  "start": {
                    "column": 0,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "range": [
                  1493,
                  1497
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 40
                  },
                  "start": {
                    "column": 17,
                    "line": 40
                  }
                }
              },
              "range": [
                1476,
                1497
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 40
                },
                "start": {
                  "column": 0,
                  "line": 40
                }
              }
            },
            "optional": false,
            "range": [
              1476,
              1519
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 40
              },
              "start": {
                "column": 0,
                "line": 40
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              1520,
              1524
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 40
              },
              "start": {
                "column": 44,
                "line": 40
              }
            }
          },
          "range": [
            1476,
            1524
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "optional": false,
        "range": [
          1476,
          1537
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1476,
        1538
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "withTypedFailure",
                "optional": false,
                "range": [
                  1574,
                  1590
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 43
                  },
                  "start": {
                    "column": 10,
                    "line": 43
                  }
                }
              },
              "range": [
                1568,
                1590
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              1568,
              1591
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          1562,
          1593
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 22,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          1555,
          1559
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
      "params": [],
      "range": [
        1540,
        1593
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
