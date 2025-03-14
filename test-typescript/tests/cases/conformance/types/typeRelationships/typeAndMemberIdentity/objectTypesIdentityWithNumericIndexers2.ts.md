__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    2335
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          55,
          71
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
              "name": "foo",
              "optional": false,
              "range": [
                57,
                60
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              },
              "range": [
                60,
                68
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  62,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              57,
              69
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          50,
          54
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        44,
        71
      ],
      "loc": {
        "end": {
          "column": 27,
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
          99,
          115
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
              "name": "bar",
              "optional": false,
              "range": [
                101,
                104
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 4
                }
              },
              "range": [
                104,
                112
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  106,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              101,
              113
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 4
          },
          "start": {
            "column": 27,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          78,
          85
        ],
        "loc": {
          "end": {
            "column": 13,
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
        "name": "Base",
        "optional": false,
        "range": [
          94,
          98
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "range": [
        72,
        115
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          125,
          151
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 7
                    },
                    "start": {
                      "column": 6,
                      "line": 7
                    }
                  },
                  "range": [
                    133,
                    141
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      135,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  132,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
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
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              },
              "range": [
                142,
                148
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    144,
                    148
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
                "range": [
                  144,
                  148
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
              }
            },
            "range": [
              131,
              149
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          123,
          124
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        117,
        151
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          161,
          190
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 6,
                      "line": 11
                    }
                  },
                  "range": [
                    169,
                    177
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      171,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  168,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 11
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
                  "column": 24,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              },
              "range": [
                178,
                187
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "range": [
                    180,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 11
                    },
                    "start": {
                      "column": 17,
                      "line": 11
                    }
                  }
                },
                "range": [
                  180,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              167,
              188
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 8,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          159,
          160
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
      "superClass": null,
      "range": [
        153,
        190
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          203,
          226
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 6,
                      "line": 15
                    }
                  },
                  "range": [
                    211,
                    219
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      213,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  210,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
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
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              },
              "range": [
                220,
                223
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    222,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                "range": [
                  222,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              209,
              224
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 11,
            "line": 14
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
          198,
          199
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        },
        "range": [
          199,
          202
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
                200,
                201
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
            "out": false,
            "range": [
              200,
              201
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
          }
        ]
      },
      "range": [
        192,
        226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          240,
          269
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 6,
                      "line": 19
                    }
                  },
                  "range": [
                    248,
                    256
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      250,
                      256
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
                },
                "range": [
                  247,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 19
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
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              },
              "range": [
                257,
                266
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "range": [
                    259,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 19
                    },
                    "start": {
                      "column": 17,
                      "line": 19
                    }
                  }
                },
                "range": [
                  259,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 19
                  },
                  "start": {
                    "column": 17,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              246,
              267
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "column": 12,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          238,
          239
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        228,
        269
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          290,
          293
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 19,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PA",
        "optional": false,
        "range": [
          277,
          279
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          288,
          289
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 22
          }
        }
      },
      "range": [
        271,
        293
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          314,
          317
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 19,
            "line": 25
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PB",
        "optional": false,
        "range": [
          301,
          303
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 25
          },
          "start": {
            "column": 6,
            "line": 25
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          312,
          313
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
          }
        }
      },
      "range": [
        295,
        317
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 30
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              },
              "range": [
                324,
                352
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 29
                            },
                            "start": {
                              "column": 6,
                              "line": 29
                            }
                          },
                          "range": [
                            334,
                            342
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              336,
                              342
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 29
                              },
                              "start": {
                                "column": 8,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          333,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 29
                          },
                          "start": {
                            "column": 5,
                            "line": 29
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
                          "column": 21,
                          "line": 29
                        },
                        "start": {
                          "column": 15,
                          "line": 29
                        }
                      },
                      "range": [
                        343,
                        349
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "range": [
                            345,
                            349
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 29
                            },
                            "start": {
                              "column": 17,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          345,
                          349
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      332,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  326,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 30
                  },
                  "start": {
                    "column": 7,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              323,
              352
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            323,
            352
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
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
        319,
        352
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 5,
                  "line": 31
                }
              },
              "range": [
                358,
                385
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 31
                            },
                            "start": {
                              "column": 11,
                              "line": 31
                            }
                          },
                          "range": [
                            364,
                            372
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              366,
                              372
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 31
                              },
                              "start": {
                                "column": 13,
                                "line": 31
                              }
                            }
                          }
                        },
                        "range": [
                          363,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 31
                          },
                          "start": {
                            "column": 10,
                            "line": 31
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
                          "column": 29,
                          "line": 31
                        },
                        "start": {
                          "column": 20,
                          "line": 31
                        }
                      },
                      "range": [
                        373,
                        382
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "range": [
                            375,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 31
                            },
                            "start": {
                              "column": 22,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          375,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
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
                      362,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 31
                      },
                      "start": {
                        "column": 9,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  360,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 31
                  },
                  "start": {
                    "column": 7,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              357,
              385
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    390,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 31
                    },
                    "start": {
                      "column": 37,
                      "line": 31
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
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      402,
                      406
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 31
                      },
                      "start": {
                        "column": 49,
                        "line": 31
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        394,
                        401
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 31
                        },
                        "start": {
                          "column": 41,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      394,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 31
                      },
                      "start": {
                        "column": 41,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    393,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 31
                    },
                    "start": {
                      "column": 40,
                      "line": 31
                    }
                  }
                },
                "range": [
                  390,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 31
                  },
                  "start": {
                    "column": 37,
                    "line": 31
                  }
                }
              }
            ],
            "range": [
              388,
              408
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 31
              },
              "start": {
                "column": 35,
                "line": 31
              }
            }
          },
          "range": [
            357,
            408
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        353,
        409
      ],
      "loc": {
        "end": {
          "column": 56,
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          420,
          424
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 9,
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
                "column": 18,
                "line": 33
              },
              "start": {
                "column": 15,
                "line": 33
              }
            },
            "range": [
              426,
              429
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  428,
                  429
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
              "range": [
                428,
                429
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
            }
          },
          "range": [
            425,
            429
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "range": [
        411,
        431
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          441,
          445
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 34
              },
              "start": {
                "column": 15,
                "line": 34
              }
            },
            "range": [
              447,
              450
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  449,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 34
                  },
                  "start": {
                    "column": 17,
                    "line": 34
                  }
                }
              },
              "range": [
                449,
                450
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 34
                },
                "start": {
                  "column": 17,
                  "line": 34
                }
              }
            }
          },
          "range": [
            446,
            450
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 34
            },
            "start": {
              "column": 14,
              "line": 34
            }
          }
        }
      ],
      "range": [
        432,
        452
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 34
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
          484,
          487
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 35
          },
          "start": {
            "column": 22,
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
        "name": "foo1",
        "optional": false,
        "range": [
          471,
          475
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 35
              },
              "start": {
                "column": 15,
                "line": 35
              }
            },
            "range": [
              477,
              482
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                479,
                482
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 35
                },
                "start": {
                  "column": 17,
                  "line": 35
                }
              }
            }
          },
          "range": [
            476,
            482
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 35
            },
            "start": {
              "column": 14,
              "line": 35
            }
          }
        }
      ],
      "range": [
        462,
        487
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "range": [
          498,
          503
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
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
                "column": 19,
                "line": 37
              },
              "start": {
                "column": 16,
                "line": 37
              }
            },
            "range": [
              505,
              508
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  507,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 37
                  },
                  "start": {
                    "column": 18,
                    "line": 37
                  }
                }
              },
              "range": [
                507,
                508
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 37
                },
                "start": {
                  "column": 18,
                  "line": 37
                }
              }
            }
          },
          "range": [
            504,
            508
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 37
            },
            "start": {
              "column": 15,
              "line": 37
            }
          }
        }
      ],
      "range": [
        489,
        510
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "range": [
          520,
          525
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 16,
                "line": 38
              }
            },
            "range": [
              527,
              530
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  529,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 38
                  },
                  "start": {
                    "column": 18,
                    "line": 38
                  }
                }
              },
              "range": [
                529,
                530
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 38
                },
                "start": {
                  "column": 18,
                  "line": 38
                }
              }
            }
          },
          "range": [
            526,
            530
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 38
            },
            "start": {
              "column": 15,
              "line": 38
            }
          }
        }
      ],
      "range": [
        511,
        532
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
          565,
          568
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 39
          },
          "start": {
            "column": 23,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "range": [
          551,
          556
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
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
                "column": 21,
                "line": 39
              },
              "start": {
                "column": 16,
                "line": 39
              }
            },
            "range": [
              558,
              563
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                560,
                563
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 39
                }
              }
            }
          },
          "range": [
            557,
            563
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
        }
      ],
      "range": [
        542,
        568
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "range": [
          579,
          584
        ],
        "loc": {
          "end": {
            "column": 14,
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
                "column": 27,
                "line": 41
              },
              "start": {
                "column": 16,
                "line": 41
              }
            },
            "range": [
              586,
              597
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  589,
                  597
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      590,
                      596
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 41
                      },
                      "start": {
                        "column": 20,
                        "line": 41
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  588,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 41
                  },
                  "start": {
                    "column": 18,
                    "line": 41
                  }
                }
              },
              "range": [
                588,
                597
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 41
                },
                "start": {
                  "column": 18,
                  "line": 41
                }
              }
            }
          },
          "range": [
            585,
            597
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 41
            },
            "start": {
              "column": 15,
              "line": 41
            }
          }
        }
      ],
      "range": [
        570,
        599
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "range": [
          609,
          614
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
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
                "line": 42
              },
              "start": {
                "column": 16,
                "line": 42
              }
            },
            "range": [
              616,
              627
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  619,
                  627
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      620,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 42
                      },
                      "start": {
                        "column": 20,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 42
                  },
                  "start": {
                    "column": 19,
                    "line": 42
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  618,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 42
                  },
                  "start": {
                    "column": 18,
                    "line": 42
                  }
                }
              },
              "range": [
                618,
                627
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 42
                },
                "start": {
                  "column": 18,
                  "line": 42
                }
              }
            }
          },
          "range": [
            615,
            627
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 42
            },
            "start": {
              "column": 15,
              "line": 42
            }
          }
        }
      ],
      "range": [
        600,
        629
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
          662,
          665
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 43
          },
          "start": {
            "column": 23,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "range": [
          648,
          653
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
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
                "column": 21,
                "line": 43
              },
              "start": {
                "column": 16,
                "line": 43
              }
            },
            "range": [
              655,
              660
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                657,
                660
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 43
                },
                "start": {
                  "column": 18,
                  "line": 43
                }
              }
            }
          },
          "range": [
            654,
            660
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 43
            },
            "start": {
              "column": 15,
              "line": 43
            }
          }
        }
      ],
      "range": [
        639,
        665
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          676,
          680
        ],
        "loc": {
          "end": {
            "column": 13,
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
                "column": 18,
                "line": 45
              },
              "start": {
                "column": 15,
                "line": 45
              }
            },
            "range": [
              682,
              685
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  684,
                  685
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
              "range": [
                684,
                685
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
            }
          },
          "range": [
            681,
            685
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 45
            },
            "start": {
              "column": 14,
              "line": 45
            }
          }
        }
      ],
      "range": [
        667,
        687
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          697,
          701
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
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
                "column": 18,
                "line": 46
              },
              "start": {
                "column": 15,
                "line": 46
              }
            },
            "range": [
              703,
              706
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  705,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 46
                  },
                  "start": {
                    "column": 17,
                    "line": 46
                  }
                }
              },
              "range": [
                705,
                706
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 46
                }
              }
            }
          },
          "range": [
            702,
            706
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 46
            },
            "start": {
              "column": 14,
              "line": 46
            }
          }
        }
      ],
      "range": [
        688,
        708
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
          740,
          743
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 47
          },
          "start": {
            "column": 22,
            "line": 47
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
          727,
          731
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 47
          },
          "start": {
            "column": 9,
            "line": 47
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
                "line": 47
              },
              "start": {
                "column": 15,
                "line": 47
              }
            },
            "range": [
              733,
              738
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                735,
                738
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 47
                },
                "start": {
                  "column": 17,
                  "line": 47
                }
              }
            }
          },
          "range": [
            732,
            738
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 47
            },
            "start": {
              "column": 14,
              "line": 47
            }
          }
        }
      ],
      "range": [
        718,
        743
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          754,
          758
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
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
                "column": 25,
                "line": 49
              },
              "start": {
                "column": 15,
                "line": 49
              }
            },
            "range": [
              760,
              770
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  769,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 49
                  },
                  "start": {
                    "column": 24,
                    "line": 49
                  }
                }
              },
              "range": [
                762,
                770
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 49
                }
              }
            }
          },
          "range": [
            759,
            770
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 49
            },
            "start": {
              "column": 14,
              "line": 49
            }
          }
        }
      ],
      "range": [
        745,
        772
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          782,
          786
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
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
                "column": 25,
                "line": 50
              },
              "start": {
                "column": 15,
                "line": 50
              }
            },
            "range": [
              788,
              798
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  797,
                  798
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 50
                  },
                  "start": {
                    "column": 24,
                    "line": 50
                  }
                }
              },
              "range": [
                790,
                798
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 50
                },
                "start": {
                  "column": 17,
                  "line": 50
                }
              }
            }
          },
          "range": [
            787,
            798
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 50
            },
            "start": {
              "column": 14,
              "line": 50
            }
          }
        }
      ],
      "range": [
        773,
        800
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          832,
          835
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 51
          },
          "start": {
            "column": 22,
            "line": 51
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
          819,
          823
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
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
                "line": 51
              },
              "start": {
                "column": 15,
                "line": 51
              }
            },
            "range": [
              825,
              830
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                827,
                830
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 51
                },
                "start": {
                  "column": 17,
                  "line": 51
                }
              }
            }
          },
          "range": [
            824,
            830
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 51
            },
            "start": {
              "column": 14,
              "line": 51
            }
          }
        }
      ],
      "range": [
        810,
        835
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          846,
          850
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 53
          },
          "start": {
            "column": 9,
            "line": 53
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
                "column": 25,
                "line": 53
              },
              "start": {
                "column": 15,
                "line": 53
              }
            },
            "range": [
              852,
              862
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  861,
                  862
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 53
                  },
                  "start": {
                    "column": 24,
                    "line": 53
                  }
                }
              },
              "range": [
                854,
                862
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 53
                },
                "start": {
                  "column": 17,
                  "line": 53
                }
              }
            }
          },
          "range": [
            851,
            862
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 53
            },
            "start": {
              "column": 14,
              "line": 53
            }
          }
        }
      ],
      "range": [
        837,
        864
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          874,
          878
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 54
          },
          "start": {
            "column": 9,
            "line": 54
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
                "column": 25,
                "line": 54
              },
              "start": {
                "column": 15,
                "line": 54
              }
            },
            "range": [
              880,
              890
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  889,
                  890
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 54
                  },
                  "start": {
                    "column": 24,
                    "line": 54
                  }
                }
              },
              "range": [
                882,
                890
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 54
                },
                "start": {
                  "column": 17,
                  "line": 54
                }
              }
            }
          },
          "range": [
            879,
            890
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 54
            },
            "start": {
              "column": 14,
              "line": 54
            }
          }
        }
      ],
      "range": [
        865,
        892
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
          924,
          927
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 55
          },
          "start": {
            "column": 22,
            "line": 55
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
          911,
          915
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
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
                "line": 55
              },
              "start": {
                "column": 15,
                "line": 55
              }
            },
            "range": [
              917,
              922
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                919,
                922
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 55
                },
                "start": {
                  "column": 17,
                  "line": 55
                }
              }
            }
          },
          "range": [
            916,
            922
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 55
            },
            "start": {
              "column": 14,
              "line": 55
            }
          }
        }
      ],
      "range": [
        902,
        927
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          938,
          942
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 57
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
                "column": 18,
                "line": 57
              },
              "start": {
                "column": 15,
                "line": 57
              }
            },
            "range": [
              944,
              947
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  946,
                  947
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 57
                  },
                  "start": {
                    "column": 17,
                    "line": 57
                  }
                }
              },
              "range": [
                946,
                947
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 57
                },
                "start": {
                  "column": 17,
                  "line": 57
                }
              }
            }
          },
          "range": [
            943,
            947
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 57
            },
            "start": {
              "column": 14,
              "line": 57
            }
          }
        }
      ],
      "range": [
        929,
        949
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          959,
          963
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 58
          },
          "start": {
            "column": 9,
            "line": 58
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
                "column": 18,
                "line": 58
              },
              "start": {
                "column": 15,
                "line": 58
              }
            },
            "range": [
              965,
              968
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  967,
                  968
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 58
                  },
                  "start": {
                    "column": 17,
                    "line": 58
                  }
                }
              },
              "range": [
                967,
                968
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 58
                },
                "start": {
                  "column": 17,
                  "line": 58
                }
              }
            }
          },
          "range": [
            964,
            968
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 58
            },
            "start": {
              "column": 14,
              "line": 58
            }
          }
        }
      ],
      "range": [
        950,
        970
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
          999,
          1002
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 59
          },
          "start": {
            "column": 22,
            "line": 59
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
          986,
          990
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
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
                "line": 59
              },
              "start": {
                "column": 15,
                "line": 59
              }
            },
            "range": [
              992,
              997
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                994,
                997
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 59
                },
                "start": {
                  "column": 17,
                  "line": 59
                }
              }
            }
          },
          "range": [
            991,
            997
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 59
            },
            "start": {
              "column": 14,
              "line": 59
            }
          }
        }
      ],
      "range": [
        977,
        1002
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "range": [
          1013,
          1018
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 61
          },
          "start": {
            "column": 9,
            "line": 61
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
                "column": 19,
                "line": 61
              },
              "start": {
                "column": 16,
                "line": 61
              }
            },
            "range": [
              1020,
              1023
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1022,
                  1023
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 61
                  },
                  "start": {
                    "column": 18,
                    "line": 61
                  }
                }
              },
              "range": [
                1022,
                1023
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 61
                },
                "start": {
                  "column": 18,
                  "line": 61
                }
              }
            }
          },
          "range": [
            1019,
            1023
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 61
            },
            "start": {
              "column": 15,
              "line": 61
            }
          }
        }
      ],
      "range": [
        1004,
        1025
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "range": [
          1035,
          1040
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
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
                "line": 62
              },
              "start": {
                "column": 16,
                "line": 62
              }
            },
            "range": [
              1042,
              1054
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1045,
                  1054
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        1046,
                        1053
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 62
                        },
                        "start": {
                          "column": 20,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1046,
                      1053
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 62
                      },
                      "start": {
                        "column": 20,
                        "line": 62
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 62
                  },
                  "start": {
                    "column": 19,
                    "line": 62
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  1044,
                  1045
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 62
                  },
                  "start": {
                    "column": 18,
                    "line": 62
                  }
                }
              },
              "range": [
                1044,
                1054
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 62
                },
                "start": {
                  "column": 18,
                  "line": 62
                }
              }
            }
          },
          "range": [
            1041,
            1054
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 62
            },
            "start": {
              "column": 15,
              "line": 62
            }
          }
        }
      ],
      "range": [
        1026,
        1056
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
          1086,
          1089
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 63
          },
          "start": {
            "column": 23,
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
        "name": "foo5b",
        "optional": false,
        "range": [
          1072,
          1077
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 63
              },
              "start": {
                "column": 16,
                "line": 63
              }
            },
            "range": [
              1079,
              1084
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1081,
                1084
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 63
                },
                "start": {
                  "column": 18,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1078,
            1084
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 63
            },
            "start": {
              "column": 15,
              "line": 63
            }
          }
        }
      ],
      "range": [
        1063,
        1089
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "range": [
          1100,
          1105
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 65
          },
          "start": {
            "column": 9,
            "line": 65
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
                "column": 19,
                "line": 65
              },
              "start": {
                "column": 16,
                "line": 65
              }
            },
            "range": [
              1107,
              1110
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1109,
                  1110
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 65
                  },
                  "start": {
                    "column": 18,
                    "line": 65
                  }
                }
              },
              "range": [
                1109,
                1110
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 65
                },
                "start": {
                  "column": 18,
                  "line": 65
                }
              }
            }
          },
          "range": [
            1106,
            1110
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 65
            },
            "start": {
              "column": 15,
              "line": 65
            }
          }
        }
      ],
      "range": [
        1091,
        1112
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "range": [
          1122,
          1127
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 66
          },
          "start": {
            "column": 9,
            "line": 66
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
                "line": 66
              },
              "start": {
                "column": 16,
                "line": 66
              }
            },
            "range": [
              1129,
              1133
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "range": [
                  1131,
                  1133
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 66
                  },
                  "start": {
                    "column": 18,
                    "line": 66
                  }
                }
              },
              "range": [
                1131,
                1133
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 66
                },
                "start": {
                  "column": 18,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1128,
            1133
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 66
            },
            "start": {
              "column": 15,
              "line": 66
            }
          }
        }
      ],
      "range": [
        1113,
        1135
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
          1168,
          1171
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 67
          },
          "start": {
            "column": 23,
            "line": 67
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "range": [
          1154,
          1159
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 67
          },
          "start": {
            "column": 9,
            "line": 67
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
                "column": 21,
                "line": 67
              },
              "start": {
                "column": 16,
                "line": 67
              }
            },
            "range": [
              1161,
              1166
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1163,
                1166
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 67
                },
                "start": {
                  "column": 18,
                  "line": 67
                }
              }
            }
          },
          "range": [
            1160,
            1166
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 67
            },
            "start": {
              "column": 15,
              "line": 67
            }
          }
        }
      ],
      "range": [
        1145,
        1171
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "range": [
          1182,
          1187
        ],
        "loc": {
          "end": {
            "column": 14,
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
                "column": 19,
                "line": 69
              },
              "start": {
                "column": 16,
                "line": 69
              }
            },
            "range": [
              1189,
              1192
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1191,
                  1192
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 69
                  },
                  "start": {
                    "column": 18,
                    "line": 69
                  }
                }
              },
              "range": [
                1191,
                1192
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 69
                },
                "start": {
                  "column": 18,
                  "line": 69
                }
              }
            }
          },
          "range": [
            1188,
            1192
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 69
            },
            "start": {
              "column": 15,
              "line": 69
            }
          }
        }
      ],
      "range": [
        1173,
        1194
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "range": [
          1204,
          1209
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 70
          },
          "start": {
            "column": 9,
            "line": 70
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
                "line": 70
              },
              "start": {
                "column": 16,
                "line": 70
              }
            },
            "range": [
              1211,
              1215
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "range": [
                  1213,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 70
                  },
                  "start": {
                    "column": 18,
                    "line": 70
                  }
                }
              },
              "range": [
                1213,
                1215
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 70
                },
                "start": {
                  "column": 18,
                  "line": 70
                }
              }
            }
          },
          "range": [
            1210,
            1215
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 70
            },
            "start": {
              "column": 15,
              "line": 70
            }
          }
        }
      ],
      "range": [
        1195,
        1217
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
          1247,
          1250
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 71
          },
          "start": {
            "column": 23,
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
        "name": "foo5d",
        "optional": false,
        "range": [
          1233,
          1238
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 71
              },
              "start": {
                "column": 16,
                "line": 71
              }
            },
            "range": [
              1240,
              1245
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1242,
                1245
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 71
                },
                "start": {
                  "column": 18,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1239,
            1245
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 71
            },
            "start": {
              "column": 15,
              "line": 71
            }
          }
        }
      ],
      "range": [
        1224,
        1250
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          1261,
          1265
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 73
          },
          "start": {
            "column": 9,
            "line": 73
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
                "column": 18,
                "line": 73
              },
              "start": {
                "column": 15,
                "line": 73
              }
            },
            "range": [
              1267,
              1270
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1269,
                  1270
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 73
                  },
                  "start": {
                    "column": 17,
                    "line": 73
                  }
                }
              },
              "range": [
                1269,
                1270
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 73
                },
                "start": {
                  "column": 17,
                  "line": 73
                }
              }
            }
          },
          "range": [
            1266,
            1270
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 73
            },
            "start": {
              "column": 14,
              "line": 73
            }
          }
        }
      ],
      "range": [
        1252,
        1272
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          1282,
          1286
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 74
          },
          "start": {
            "column": 9,
            "line": 74
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
                "column": 18,
                "line": 74
              },
              "start": {
                "column": 15,
                "line": 74
              }
            },
            "range": [
              1288,
              1291
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  1290,
                  1291
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 74
                  },
                  "start": {
                    "column": 17,
                    "line": 74
                  }
                }
              },
              "range": [
                1290,
                1291
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 74
                },
                "start": {
                  "column": 17,
                  "line": 74
                }
              }
            }
          },
          "range": [
            1287,
            1291
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 74
            },
            "start": {
              "column": 14,
              "line": 74
            }
          }
        }
      ],
      "range": [
        1273,
        1293
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
          1322,
          1325
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 75
          },
          "start": {
            "column": 22,
            "line": 75
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
          1309,
          1313
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 75
          },
          "start": {
            "column": 9,
            "line": 75
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
                "line": 75
              },
              "start": {
                "column": 15,
                "line": 75
              }
            },
            "range": [
              1315,
              1320
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1317,
                1320
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 75
                },
                "start": {
                  "column": 17,
                  "line": 75
                }
              }
            }
          },
          "range": [
            1314,
            1320
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 75
            },
            "start": {
              "column": 14,
              "line": 75
            }
          }
        }
      ],
      "range": [
        1300,
        1325
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          1336,
          1340
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 77
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
                "column": 18,
                "line": 77
              },
              "start": {
                "column": 15,
                "line": 77
              }
            },
            "range": [
              1342,
              1345
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1344,
                  1345
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 77
                  },
                  "start": {
                    "column": 17,
                    "line": 77
                  }
                }
              },
              "range": [
                1344,
                1345
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 77
                },
                "start": {
                  "column": 17,
                  "line": 77
                }
              }
            }
          },
          "range": [
            1341,
            1345
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 77
            },
            "start": {
              "column": 14,
              "line": 77
            }
          }
        }
      ],
      "range": [
        1327,
        1347
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          1357,
          1361
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 78
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
                "column": 25,
                "line": 78
              },
              "start": {
                "column": 15,
                "line": 78
              }
            },
            "range": [
              1363,
              1373
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1372,
                  1373
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 78
                  },
                  "start": {
                    "column": 24,
                    "line": 78
                  }
                }
              },
              "range": [
                1365,
                1373
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 78
                },
                "start": {
                  "column": 17,
                  "line": 78
                }
              }
            }
          },
          "range": [
            1362,
            1373
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 78
            },
            "start": {
              "column": 14,
              "line": 78
            }
          }
        }
      ],
      "range": [
        1348,
        1375
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 78
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
        "body": [],
        "range": [
          1407,
          1410
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 79
          },
          "start": {
            "column": 22,
            "line": 79
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
          1394,
          1398
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 79
          },
          "start": {
            "column": 9,
            "line": 79
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
                "line": 79
              },
              "start": {
                "column": 15,
                "line": 79
              }
            },
            "range": [
              1400,
              1405
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1402,
                1405
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 79
                },
                "start": {
                  "column": 17,
                  "line": 79
                }
              }
            }
          },
          "range": [
            1399,
            1405
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 79
            },
            "start": {
              "column": 14,
              "line": 79
            }
          }
        }
      ],
      "range": [
        1385,
        1410
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "range": [
          1421,
          1425
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 81
          },
          "start": {
            "column": 9,
            "line": 81
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
                "column": 18,
                "line": 81
              },
              "start": {
                "column": 15,
                "line": 81
              }
            },
            "range": [
              1427,
              1430
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1429,
                  1430
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 81
                  },
                  "start": {
                    "column": 17,
                    "line": 81
                  }
                }
              },
              "range": [
                1429,
                1430
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 81
                },
                "start": {
                  "column": 17,
                  "line": 81
                }
              }
            }
          },
          "range": [
            1426,
            1430
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 81
            },
            "start": {
              "column": 14,
              "line": 81
            }
          }
        }
      ],
      "range": [
        1412,
        1432
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "range": [
          1442,
          1446
        ],
        "loc": {
          "end": {
            "column": 13,
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
                "column": 18,
                "line": 82
              },
              "start": {
                "column": 15,
                "line": 82
              }
            },
            "range": [
              1448,
              1451
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  1450,
                  1451
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 82
                  },
                  "start": {
                    "column": 17,
                    "line": 82
                  }
                }
              },
              "range": [
                1450,
                1451
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 82
                },
                "start": {
                  "column": 17,
                  "line": 82
                }
              }
            }
          },
          "range": [
            1447,
            1451
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 82
            },
            "start": {
              "column": 14,
              "line": 82
            }
          }
        }
      ],
      "range": [
        1433,
        1453
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 82
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
        "body": [],
        "range": [
          1485,
          1488
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 83
          },
          "start": {
            "column": 22,
            "line": 83
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
          1472,
          1476
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 83
          },
          "start": {
            "column": 9,
            "line": 83
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
                "line": 83
              },
              "start": {
                "column": 15,
                "line": 83
              }
            },
            "range": [
              1478,
              1483
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1480,
                1483
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 83
                },
                "start": {
                  "column": 17,
                  "line": 83
                }
              }
            }
          },
          "range": [
            1477,
            1483
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 83
            },
            "start": {
              "column": 14,
              "line": 83
            }
          }
        }
      ],
      "range": [
        1463,
        1488
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "range": [
          1499,
          1503
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 85
          },
          "start": {
            "column": 9,
            "line": 85
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
                "column": 18,
                "line": 85
              },
              "start": {
                "column": 15,
                "line": 85
              }
            },
            "range": [
              1505,
              1508
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1507,
                  1508
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 85
                  },
                  "start": {
                    "column": 17,
                    "line": 85
                  }
                }
              },
              "range": [
                1507,
                1508
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 85
                },
                "start": {
                  "column": 17,
                  "line": 85
                }
              }
            }
          },
          "range": [
            1504,
            1508
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 85
            },
            "start": {
              "column": 14,
              "line": 85
            }
          }
        }
      ],
      "range": [
        1490,
        1510
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "range": [
          1520,
          1524
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
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
                "column": 24,
                "line": 86
              },
              "start": {
                "column": 15,
                "line": 86
              }
            },
            "range": [
              1526,
              1535
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1529,
                  1535
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "range": [
                        1530,
                        1534
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 86
                        },
                        "start": {
                          "column": 19,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      1530,
                      1534
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 86
                      },
                      "start": {
                        "column": 19,
                        "line": 86
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 86
                  },
                  "start": {
                    "column": 18,
                    "line": 86
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  1528,
                  1529
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 86
                  },
                  "start": {
                    "column": 17,
                    "line": 86
                  }
                }
              },
              "range": [
                1528,
                1535
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 86
                },
                "start": {
                  "column": 17,
                  "line": 86
                }
              }
            }
          },
          "range": [
            1525,
            1535
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 86
            },
            "start": {
              "column": 14,
              "line": 86
            }
          }
        }
      ],
      "range": [
        1511,
        1537
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
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
          1566,
          1569
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 87
          },
          "start": {
            "column": 22,
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
        "name": "foo9",
        "optional": false,
        "range": [
          1553,
          1557
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 87
              },
              "start": {
                "column": 15,
                "line": 87
              }
            },
            "range": [
              1559,
              1564
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1561,
                1564
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 87
                },
                "start": {
                  "column": 17,
                  "line": 87
                }
              }
            }
          },
          "range": [
            1558,
            1564
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 87
            },
            "start": {
              "column": 14,
              "line": 87
            }
          }
        }
      ],
      "range": [
        1544,
        1569
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "range": [
          1580,
          1585
        ],
        "loc": {
          "end": {
            "column": 14,
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
                "column": 19,
                "line": 89
              },
              "start": {
                "column": 16,
                "line": 89
              }
            },
            "range": [
              1587,
              1590
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1589,
                  1590
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 89
                  },
                  "start": {
                    "column": 18,
                    "line": 89
                  }
                }
              },
              "range": [
                1589,
                1590
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 89
                },
                "start": {
                  "column": 18,
                  "line": 89
                }
              }
            }
          },
          "range": [
            1586,
            1590
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 89
            },
            "start": {
              "column": 15,
              "line": 89
            }
          }
        }
      ],
      "range": [
        1571,
        1592
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "range": [
          1602,
          1607
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 90
          },
          "start": {
            "column": 9,
            "line": 90
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
                "line": 90
              },
              "start": {
                "column": 16,
                "line": 90
              }
            },
            "range": [
              1609,
              1619
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1618,
                  1619
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 90
                  },
                  "start": {
                    "column": 25,
                    "line": 90
                  }
                }
              },
              "range": [
                1611,
                1619
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 90
                },
                "start": {
                  "column": 18,
                  "line": 90
                }
              }
            }
          },
          "range": [
            1608,
            1619
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 90
            },
            "start": {
              "column": 15,
              "line": 90
            }
          }
        }
      ],
      "range": [
        1593,
        1621
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
          1651,
          1654
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 91
          },
          "start": {
            "column": 23,
            "line": 91
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "range": [
          1637,
          1642
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 91
          },
          "start": {
            "column": 9,
            "line": 91
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
                "column": 21,
                "line": 91
              },
              "start": {
                "column": 16,
                "line": 91
              }
            },
            "range": [
              1644,
              1649
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1646,
                1649
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 91
                },
                "start": {
                  "column": 18,
                  "line": 91
                }
              }
            }
          },
          "range": [
            1643,
            1649
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 91
            },
            "start": {
              "column": 15,
              "line": 91
            }
          }
        }
      ],
      "range": [
        1628,
        1654
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "range": [
          1665,
          1670
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 93
          },
          "start": {
            "column": 9,
            "line": 93
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
                "column": 19,
                "line": 93
              },
              "start": {
                "column": 16,
                "line": 93
              }
            },
            "range": [
              1672,
              1675
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1674,
                  1675
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 93
                  },
                  "start": {
                    "column": 18,
                    "line": 93
                  }
                }
              },
              "range": [
                1674,
                1675
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 93
                },
                "start": {
                  "column": 18,
                  "line": 93
                }
              }
            }
          },
          "range": [
            1671,
            1675
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 93
            },
            "start": {
              "column": 15,
              "line": 93
            }
          }
        }
      ],
      "range": [
        1656,
        1677
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "range": [
          1687,
          1692
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 94
          },
          "start": {
            "column": 9,
            "line": 94
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
                "line": 94
              },
              "start": {
                "column": 16,
                "line": 94
              }
            },
            "range": [
              1694,
              1704
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1703,
                  1704
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 94
                  },
                  "start": {
                    "column": 25,
                    "line": 94
                  }
                }
              },
              "range": [
                1696,
                1704
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 94
                },
                "start": {
                  "column": 18,
                  "line": 94
                }
              }
            }
          },
          "range": [
            1693,
            1704
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 94
            },
            "start": {
              "column": 15,
              "line": 94
            }
          }
        }
      ],
      "range": [
        1678,
        1706
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
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
          1739,
          1742
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 95
          },
          "start": {
            "column": 23,
            "line": 95
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "range": [
          1725,
          1730
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 95
          },
          "start": {
            "column": 9,
            "line": 95
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
                "column": 21,
                "line": 95
              },
              "start": {
                "column": 16,
                "line": 95
              }
            },
            "range": [
              1732,
              1737
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1734,
                1737
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 95
                },
                "start": {
                  "column": 18,
                  "line": 95
                }
              }
            }
          },
          "range": [
            1731,
            1737
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 95
            },
            "start": {
              "column": 15,
              "line": 95
            }
          }
        }
      ],
      "range": [
        1716,
        1742
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "range": [
          1753,
          1759
        ],
        "loc": {
          "end": {
            "column": 15,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 97
              },
              "start": {
                "column": 17,
                "line": 97
              }
            },
            "range": [
              1761,
              1764
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1763,
                  1764
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 97
                  },
                  "start": {
                    "column": 19,
                    "line": 97
                  }
                }
              },
              "range": [
                1763,
                1764
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 97
                },
                "start": {
                  "column": 19,
                  "line": 97
                }
              }
            }
          },
          "range": [
            1760,
            1764
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 97
            },
            "start": {
              "column": 16,
              "line": 97
            }
          }
        }
      ],
      "range": [
        1744,
        1766
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "range": [
          1776,
          1782
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 98
          },
          "start": {
            "column": 9,
            "line": 98
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
                "column": 21,
                "line": 98
              },
              "start": {
                "column": 17,
                "line": 98
              }
            },
            "range": [
              1784,
              1788
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "range": [
                  1786,
                  1788
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 98
                  },
                  "start": {
                    "column": 19,
                    "line": 98
                  }
                }
              },
              "range": [
                1786,
                1788
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 98
                },
                "start": {
                  "column": 19,
                  "line": 98
                }
              }
            }
          },
          "range": [
            1783,
            1788
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 98
            },
            "start": {
              "column": 16,
              "line": 98
            }
          }
        }
      ],
      "range": [
        1767,
        1790
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
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
          1821,
          1824
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 99
          },
          "start": {
            "column": 24,
            "line": 99
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "range": [
          1806,
          1812
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 99
          },
          "start": {
            "column": 9,
            "line": 99
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
                "column": 22,
                "line": 99
              },
              "start": {
                "column": 17,
                "line": 99
              }
            },
            "range": [
              1814,
              1819
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1816,
                1819
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 99
                },
                "start": {
                  "column": 19,
                  "line": 99
                }
              }
            }
          },
          "range": [
            1813,
            1819
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 99
            },
            "start": {
              "column": 16,
              "line": 99
            }
          }
        }
      ],
      "range": [
        1797,
        1824
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "range": [
          1835,
          1841
        ],
        "loc": {
          "end": {
            "column": 15,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 101
              },
              "start": {
                "column": 17,
                "line": 101
              }
            },
            "range": [
              1843,
              1846
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1845,
                  1846
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 101
                  },
                  "start": {
                    "column": 19,
                    "line": 101
                  }
                }
              },
              "range": [
                1845,
                1846
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 101
                },
                "start": {
                  "column": 19,
                  "line": 101
                }
              }
            }
          },
          "range": [
            1842,
            1846
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 101
            },
            "start": {
              "column": 16,
              "line": 101
            }
          }
        }
      ],
      "range": [
        1826,
        1848
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "range": [
          1858,
          1864
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 102
          },
          "start": {
            "column": 9,
            "line": 102
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
                "column": 21,
                "line": 102
              },
              "start": {
                "column": 17,
                "line": 102
              }
            },
            "range": [
              1866,
              1870
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "range": [
                  1868,
                  1870
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 102
                  },
                  "start": {
                    "column": 19,
                    "line": 102
                  }
                }
              },
              "range": [
                1868,
                1870
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 102
                },
                "start": {
                  "column": 19,
                  "line": 102
                }
              }
            }
          },
          "range": [
            1865,
            1870
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 102
            },
            "start": {
              "column": 16,
              "line": 102
            }
          }
        }
      ],
      "range": [
        1849,
        1872
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 102
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
          1906,
          1909
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 103
          },
          "start": {
            "column": 24,
            "line": 103
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "range": [
          1891,
          1897
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 103
          },
          "start": {
            "column": 9,
            "line": 103
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
                "column": 22,
                "line": 103
              },
              "start": {
                "column": 17,
                "line": 103
              }
            },
            "range": [
              1899,
              1904
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1901,
                1904
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 103
                },
                "start": {
                  "column": 19,
                  "line": 103
                }
              }
            }
          },
          "range": [
            1898,
            1904
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 103
            },
            "start": {
              "column": 16,
              "line": 103
            }
          }
        }
      ],
      "range": [
        1882,
        1909
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 103
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "range": [
          1920,
          1925
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 105
          },
          "start": {
            "column": 9,
            "line": 105
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
                "column": 19,
                "line": 105
              },
              "start": {
                "column": 16,
                "line": 105
              }
            },
            "range": [
              1927,
              1930
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  1929,
                  1930
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 105
                  },
                  "start": {
                    "column": 18,
                    "line": 105
                  }
                }
              },
              "range": [
                1929,
                1930
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 105
                },
                "start": {
                  "column": 18,
                  "line": 105
                }
              }
            }
          },
          "range": [
            1926,
            1930
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 105
            },
            "start": {
              "column": 15,
              "line": 105
            }
          }
        }
      ],
      "range": [
        1911,
        1932
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "range": [
          1942,
          1947
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 106
          },
          "start": {
            "column": 9,
            "line": 106
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
                "line": 106
              },
              "start": {
                "column": 16,
                "line": 106
              }
            },
            "range": [
              1949,
              1961
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1952,
                  1961
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        1953,
                        1960
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 106
                        },
                        "start": {
                          "column": 20,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      1953,
                      1960
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 106
                      },
                      "start": {
                        "column": 20,
                        "line": 106
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 106
                  },
                  "start": {
                    "column": 19,
                    "line": 106
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  1951,
                  1952
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 106
                  },
                  "start": {
                    "column": 18,
                    "line": 106
                  }
                }
              },
              "range": [
                1951,
                1961
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 106
                },
                "start": {
                  "column": 18,
                  "line": 106
                }
              }
            }
          },
          "range": [
            1948,
            1961
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 106
            },
            "start": {
              "column": 15,
              "line": 106
            }
          }
        }
      ],
      "range": [
        1933,
        1963
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 106
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
          1996,
          1999
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 107
          },
          "start": {
            "column": 23,
            "line": 107
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "range": [
          1982,
          1987
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 107
          },
          "start": {
            "column": 9,
            "line": 107
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
                "column": 21,
                "line": 107
              },
              "start": {
                "column": 16,
                "line": 107
              }
            },
            "range": [
              1989,
              1994
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1991,
                1994
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 107
                },
                "start": {
                  "column": 18,
                  "line": 107
                }
              }
            }
          },
          "range": [
            1988,
            1994
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 107
            },
            "start": {
              "column": 15,
              "line": 107
            }
          }
        }
      ],
      "range": [
        1973,
        1999
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "range": [
          2010,
          2015
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 109
          },
          "start": {
            "column": 9,
            "line": 109
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
                "column": 19,
                "line": 109
              },
              "start": {
                "column": 16,
                "line": 109
              }
            },
            "range": [
              2017,
              2020
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2019,
                  2020
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 109
                  },
                  "start": {
                    "column": 18,
                    "line": 109
                  }
                }
              },
              "range": [
                2019,
                2020
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 109
                },
                "start": {
                  "column": 18,
                  "line": 109
                }
              }
            }
          },
          "range": [
            2016,
            2020
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 109
            },
            "start": {
              "column": 15,
              "line": 109
            }
          }
        }
      ],
      "range": [
        2001,
        2022
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "range": [
          2032,
          2037
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 110
          },
          "start": {
            "column": 9,
            "line": 110
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
                "line": 110
              },
              "start": {
                "column": 16,
                "line": 110
              }
            },
            "range": [
              2039,
              2049
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  2048,
                  2049
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 110
                  },
                  "start": {
                    "column": 25,
                    "line": 110
                  }
                }
              },
              "range": [
                2041,
                2049
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 110
                },
                "start": {
                  "column": 18,
                  "line": 110
                }
              }
            }
          },
          "range": [
            2038,
            2049
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 110
            },
            "start": {
              "column": 15,
              "line": 110
            }
          }
        }
      ],
      "range": [
        2023,
        2051
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
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
          2081,
          2084
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 111
          },
          "start": {
            "column": 23,
            "line": 111
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "range": [
          2067,
          2072
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 111
          },
          "start": {
            "column": 9,
            "line": 111
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
                "column": 21,
                "line": 111
              },
              "start": {
                "column": 16,
                "line": 111
              }
            },
            "range": [
              2074,
              2079
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2076,
                2079
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 111
                },
                "start": {
                  "column": 18,
                  "line": 111
                }
              }
            }
          },
          "range": [
            2073,
            2079
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 111
            },
            "start": {
              "column": 15,
              "line": 111
            }
          }
        }
      ],
      "range": [
        2058,
        2084
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "range": [
          2095,
          2100
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 113
          },
          "start": {
            "column": 9,
            "line": 113
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
                "column": 19,
                "line": 113
              },
              "start": {
                "column": 16,
                "line": 113
              }
            },
            "range": [
              2102,
              2105
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2104,
                  2105
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 113
                  },
                  "start": {
                    "column": 18,
                    "line": 113
                  }
                }
              },
              "range": [
                2104,
                2105
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 113
                },
                "start": {
                  "column": 18,
                  "line": 113
                }
              }
            }
          },
          "range": [
            2101,
            2105
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 113
            },
            "start": {
              "column": 15,
              "line": 113
            }
          }
        }
      ],
      "range": [
        2086,
        2107
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "range": [
          2117,
          2122
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 114
          },
          "start": {
            "column": 9,
            "line": 114
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
                "line": 114
              },
              "start": {
                "column": 16,
                "line": 114
              }
            },
            "range": [
              2124,
              2134
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  2133,
                  2134
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 114
                  },
                  "start": {
                    "column": 25,
                    "line": 114
                  }
                }
              },
              "range": [
                2126,
                2134
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 114
                },
                "start": {
                  "column": 18,
                  "line": 114
                }
              }
            }
          },
          "range": [
            2123,
            2134
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 114
            },
            "start": {
              "column": 15,
              "line": 114
            }
          }
        }
      ],
      "range": [
        2108,
        2136
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 114
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
          2169,
          2172
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 115
          },
          "start": {
            "column": 23,
            "line": 115
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "range": [
          2155,
          2160
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 115
          },
          "start": {
            "column": 9,
            "line": 115
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
                "column": 21,
                "line": 115
              },
              "start": {
                "column": 16,
                "line": 115
              }
            },
            "range": [
              2162,
              2167
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2164,
                2167
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 115
                },
                "start": {
                  "column": 18,
                  "line": 115
                }
              }
            }
          },
          "range": [
            2161,
            2167
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 115
            },
            "start": {
              "column": 15,
              "line": 115
            }
          }
        }
      ],
      "range": [
        2146,
        2172
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "range": [
          2183,
          2188
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 117
          },
          "start": {
            "column": 9,
            "line": 117
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
                "column": 19,
                "line": 117
              },
              "start": {
                "column": 16,
                "line": 117
              }
            },
            "range": [
              2190,
              2193
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2192,
                  2193
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 117
                  },
                  "start": {
                    "column": 18,
                    "line": 117
                  }
                }
              },
              "range": [
                2192,
                2193
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 117
                },
                "start": {
                  "column": 18,
                  "line": 117
                }
              }
            }
          },
          "range": [
            2189,
            2193
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 117
            },
            "start": {
              "column": 15,
              "line": 117
            }
          }
        }
      ],
      "range": [
        2174,
        2195
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "range": [
          2205,
          2210
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 118
          },
          "start": {
            "column": 9,
            "line": 118
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
                "line": 118
              },
              "start": {
                "column": 16,
                "line": 118
              }
            },
            "range": [
              2212,
              2216
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "range": [
                  2214,
                  2216
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 118
                  },
                  "start": {
                    "column": 18,
                    "line": 118
                  }
                }
              },
              "range": [
                2214,
                2216
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 118
                },
                "start": {
                  "column": 18,
                  "line": 118
                }
              }
            }
          },
          "range": [
            2211,
            2216
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 118
            },
            "start": {
              "column": 15,
              "line": 118
            }
          }
        }
      ],
      "range": [
        2196,
        2218
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 118
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
          2248,
          2251
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 119
          },
          "start": {
            "column": 23,
            "line": 119
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "range": [
          2234,
          2239
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 119
          },
          "start": {
            "column": 9,
            "line": 119
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
                "column": 21,
                "line": 119
              },
              "start": {
                "column": 16,
                "line": 119
              }
            },
            "range": [
              2241,
              2246
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2243,
                2246
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 119
                },
                "start": {
                  "column": 18,
                  "line": 119
                }
              }
            }
          },
          "range": [
            2240,
            2246
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 119
            },
            "start": {
              "column": 15,
              "line": 119
            }
          }
        }
      ],
      "range": [
        2225,
        2251
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "range": [
          2262,
          2267
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 121
          },
          "start": {
            "column": 9,
            "line": 121
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
                "column": 19,
                "line": 121
              },
              "start": {
                "column": 16,
                "line": 121
              }
            },
            "range": [
              2269,
              2272
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2271,
                  2272
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 121
                  },
                  "start": {
                    "column": 18,
                    "line": 121
                  }
                }
              },
              "range": [
                2271,
                2272
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 121
                },
                "start": {
                  "column": 18,
                  "line": 121
                }
              }
            }
          },
          "range": [
            2268,
            2272
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 121
            },
            "start": {
              "column": 15,
              "line": 121
            }
          }
        }
      ],
      "range": [
        2253,
        2274
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "range": [
          2284,
          2289
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 122
          },
          "start": {
            "column": 9,
            "line": 122
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
                "line": 122
              },
              "start": {
                "column": 16,
                "line": 122
              }
            },
            "range": [
              2291,
              2295
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "range": [
                  2293,
                  2295
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 122
                  },
                  "start": {
                    "column": 18,
                    "line": 122
                  }
                }
              },
              "range": [
                2293,
                2295
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 122
                },
                "start": {
                  "column": 18,
                  "line": 122
                }
              }
            }
          },
          "range": [
            2290,
            2295
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 122
            },
            "start": {
              "column": 15,
              "line": 122
            }
          }
        }
      ],
      "range": [
        2275,
        2297
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
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
          2330,
          2333
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 123
          },
          "start": {
            "column": 23,
            "line": 123
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "range": [
          2316,
          2321
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 123
          },
          "start": {
            "column": 9,
            "line": 123
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
                "column": 21,
                "line": 123
              },
              "start": {
                "column": 16,
                "line": 123
              }
            },
            "range": [
              2323,
              2328
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2325,
                2328
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 123
                },
                "start": {
                  "column": 18,
                  "line": 123
                }
              }
            }
          },
          "range": [
            2322,
            2328
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 123
            },
            "start": {
              "column": 15,
              "line": 123
            }
          }
        }
      ],
      "range": [
        2307,
        2333
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 125
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
