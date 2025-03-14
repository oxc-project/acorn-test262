__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    290
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
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "range": [
                    106,
                    112
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "range": [
                    113,
                    114
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
                "range": [
                  106,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  118,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              },
              "range": [
                106,
                120
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              106,
              121
            ],
            "loc": {
              "end": {
                "column": 19,
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
          100,
          132
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 84,
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
          25,
          28
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
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 3
              },
              "start": {
                "column": 59,
                "line": 3
              }
            },
            "range": [
              75,
              78
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  77,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 3
                  },
                  "start": {
                    "column": 61,
                    "line": 3
                  }
                }
              },
              "range": [
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 3
                },
                "start": {
                  "column": 61,
                  "line": 3
                }
              }
            }
          },
          "range": [
            69,
            78
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 3
            },
            "start": {
              "column": 53,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 82,
                "line": 3
              },
              "start": {
                "column": 65,
                "line": 3
              }
            },
            "range": [
              81,
              98
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    83,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 3
                    },
                    "start": {
                      "column": 67,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSSymbolKeyword",
                  "range": [
                    92,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 3
                    },
                    "start": {
                      "column": 76,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                83,
                98
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 3
                },
                "start": {
                  "column": 67,
                  "line": 3
                }
              }
            }
          },
          "range": [
            80,
            98
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 3
            },
            "start": {
              "column": 64,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          28,
          68
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  45,
                  67
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          46,
                          52
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 3
                          },
                          "start": {
                            "column": 30,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "TSSymbolKeyword",
                        "range": [
                          55,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 3
                          },
                          "start": {
                            "column": 39,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      46,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 30,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      63,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 3
                      },
                      "start": {
                        "column": 47,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  39,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "range": [
                39,
                67
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                29,
                30
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
              29,
              67
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        16,
        132
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "range": [
                    240,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
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
                    247,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  240,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  252,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              },
              "range": [
                240,
                253
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              240,
              254
            ],
            "loc": {
              "end": {
                "column": 18,
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
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "range": [
                    268,
                    274
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
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    275,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "range": [
                  268,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  280,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                }
              },
              "range": [
                268,
                281
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              268,
              282
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          234,
          290
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 100,
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
          143,
          147
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
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 7
              },
              "start": {
                "column": 75,
                "line": 7
              }
            },
            "range": [
              209,
              212
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  211,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 7
                  },
                  "start": {
                    "column": 77,
                    "line": 7
                  }
                }
              },
              "range": [
                211,
                212
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 7
                },
                "start": {
                  "column": 77,
                  "line": 7
                }
              }
            }
          },
          "range": [
            203,
            212
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 7
            },
            "start": {
              "column": 69,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 98,
                "line": 7
              },
              "start": {
                "column": 81,
                "line": 7
              }
            },
            "range": [
              215,
              232
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    217,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 7
                    },
                    "start": {
                      "column": 83,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    226,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 7
                    },
                    "start": {
                      "column": 92,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                217,
                232
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 7
                },
                "start": {
                  "column": 83,
                  "line": 7
                }
              }
            }
          },
          "range": [
            214,
            232
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 7
            },
            "start": {
              "column": 80,
              "line": 7
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 68,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 7
          }
        },
        "range": [
          147,
          202
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      158,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    158,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 24,
                      "line": 7
                    }
                  }
                },
                {
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
                                "column": 47,
                                "line": 7
                              },
                              "start": {
                                "column": 39,
                                "line": 7
                              }
                            },
                            "range": [
                              173,
                              181
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                175,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 7
                                },
                                "start": {
                                  "column": 41,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            172,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 7
                            },
                            "start": {
                              "column": 38,
                              "line": 7
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
                            "column": 65,
                            "line": 7
                          },
                          "start": {
                            "column": 48,
                            "line": 7
                          }
                        },
                        "range": [
                          182,
                          199
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                184,
                                190
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 7
                                },
                                "start": {
                                  "column": 50,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                193,
                                199
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 7
                                },
                                "start": {
                                  "column": 59,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            184,
                            199
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 7
                            },
                            "start": {
                              "column": 50,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        171,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 7
                        },
                        "start": {
                          "column": 37,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    169,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                158,
                201
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                148,
                149
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
            "out": false,
            "range": [
              148,
              201
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        134,
        290
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
