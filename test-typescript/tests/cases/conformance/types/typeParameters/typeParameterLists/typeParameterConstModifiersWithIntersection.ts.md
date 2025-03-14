__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    381
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          103,
          119
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useIt",
              "optional": false,
              "range": [
                107,
                112
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 2,
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
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                112,
                116
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "range": [
                    114,
                    116
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
                "range": [
                  114,
                  116
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
              }
            },
            "range": [
              107,
              117
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 46,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Config",
        "optional": false,
        "range": [
          67,
          73
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 45,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        },
        "range": [
          73,
          102
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      87,
                      91
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
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    },
                    "range": [
                      91,
                      99
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        93,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 36,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    87,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
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
                85,
                101
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "range": [
                74,
                76
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              74,
              101
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        119
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          138,
          142
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            },
            "range": [
              219,
              251
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
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
                        "name": "produceThing",
                        "optional": false,
                        "range": [
                          223,
                          235
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
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
                            "line": 10
                          },
                          "start": {
                            "column": 24,
                            "line": 10
                          }
                        },
                        "range": [
                          235,
                          239
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "range": [
                              237,
                              239
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 10
                              },
                              "start": {
                                "column": 26,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            237,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 10
                            },
                            "start": {
                              "column": 26,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        223,
                        239
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
                    }
                  ],
                  "range": [
                    221,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "range": [
                      244,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    244,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
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
                221,
                251
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            }
          },
          "range": [
            213,
            251
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 10
            },
            "start": {
              "column": 2,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 10
          },
          "start": {
            "column": 41,
            "line": 10
          }
        },
        "range": [
          252,
          261
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TConfig",
            "optional": false,
            "range": [
              254,
              261
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 10
              },
              "start": {
                "column": 43,
                "line": 10
              }
            }
          },
          "range": [
            254,
            261
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 10
            },
            "start": {
              "column": 43,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 21,
            "line": 7
          }
        },
        "range": [
          142,
          212
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      159,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
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
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    },
                    "range": [
                      163,
                      171
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        165,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
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
                    159,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                157,
                173
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "range": [
                146,
                148
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              146,
              173
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  205,
                  209
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "range": [
                        206,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      206,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 9
                      },
                      "start": {
                        "column": 31,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Config",
                "optional": false,
                "range": [
                  199,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                199,
                209
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TConfig",
              "optional": false,
              "range": [
                183,
                190
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              177,
              209
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        121,
        262
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 10
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
            "name": "result",
            "optional": false,
            "range": [
              270,
              276
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produceThing",
                      "optional": false,
                      "range": [
                        288,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 13
                        },
                        "start": {
                          "column": 2,
                          "line": 13
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "range": [
                          302,
                          304
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 13
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
                              "name": "type",
                              "optional": false,
                              "range": [
                                314,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 8,
                                  "line": 14
                                },
                                "start": {
                                  "column": 4,
                                  "line": 14
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
                                  "column": 15,
                                  "line": 14
                                },
                                "start": {
                                  "column": 8,
                                  "line": 14
                                }
                              },
                              "range": [
                                318,
                                325
                              ],
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "\"foo\"",
                                  "value": "foo",
                                  "range": [
                                    320,
                                    325
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 14
                                    }
                                  }
                                },
                                "range": [
                                  320,
                                  325
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 14
                                  }
                                }
                              }
                            },
                            "range": [
                              314,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 14
                              },
                              "start": {
                                "column": 4,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          308,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 15
                          },
                          "start": {
                            "column": 22,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        302,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      288,
                      330
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 15
                      },
                      "start": {
                        "column": 2,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "useIt",
                      "optional": false,
                      "range": [
                        334,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 16
                        },
                        "start": {
                          "column": 2,
                          "line": 16
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "range": [
                              347,
                              351
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 17
                              },
                              "start": {
                                "column": 4,
                                "line": 17
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"foo\"",
                            "value": "foo",
                            "range": [
                              353,
                              358
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 17
                              },
                              "start": {
                                "column": 10,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            347,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 17
                            },
                            "start": {
                              "column": 4,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        341,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 18
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      334,
                      363
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 18
                      },
                      "start": {
                        "column": 2,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        367,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 19
                        },
                        "start": {
                          "column": 2,
                          "line": 19
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        374,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      367,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  284,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                279,
                283
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
            "range": [
              279,
              380
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 20
              },
              "start": {
                "column": 15,
                "line": 12
              }
            }
          },
          "range": [
            270,
            380
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        264,
        381
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 20
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
      "column": 3,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
