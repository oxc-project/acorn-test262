__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    2337
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
                    "type": "TSStringKeyword",
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
                    "type": "TSStringKeyword",
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
                    "type": "TSStringKeyword",
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
                    "type": "TSStringKeyword",
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
                            "type": "TSStringKeyword",
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
                            "type": "TSStringKeyword",
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    390,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
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
                      404,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 31
                      },
                      "start": {
                        "column": 51,
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
                        396,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 31
                        },
                        "start": {
                          "column": 43,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      396,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 31
                      },
                      "start": {
                        "column": 43,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    395,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 31
                    },
                    "start": {
                      "column": 42,
                      "line": 31
                    }
                  }
                },
                "range": [
                  390,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 55,
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
              410
            ],
            "loc": {
              "end": {
                "column": 57,
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
            410
          ],
          "loc": {
            "end": {
              "column": 57,
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
        411
      ],
      "loc": {
        "end": {
          "column": 58,
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
          422,
          426
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
              428,
              431
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  430,
                  431
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
                430,
                431
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
            427,
            431
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
        413,
        433
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
          443,
          447
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
              449,
              452
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  451,
                  452
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
                451,
                452
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
            448,
            452
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
        434,
        454
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
          486,
          489
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
          473,
          477
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
              479,
              484
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                481,
                484
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
            478,
            484
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
        464,
        489
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
          500,
          505
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
              507,
              510
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  509,
                  510
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
                509,
                510
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
            506,
            510
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
        491,
        512
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
          522,
          527
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
              529,
              532
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  531,
                  532
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
                531,
                532
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
            528,
            532
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
        513,
        534
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
          567,
          570
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
          553,
          558
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
              560,
              565
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                562,
                565
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
            559,
            565
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
        544,
        570
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
          581,
          586
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
              588,
              599
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  591,
                  599
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      592,
                      598
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
                  590,
                  591
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
                590,
                599
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
            587,
            599
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
        572,
        601
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
          611,
          616
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
              618,
              629
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  621,
                  629
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      622,
                      628
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
                  620,
                  621
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
                620,
                629
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
            617,
            629
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
        602,
        631
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
          664,
          667
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
          650,
          655
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
              657,
              662
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                659,
                662
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
            656,
            662
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
        641,
        667
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
          678,
          682
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
              684,
              687
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  686,
                  687
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
                686,
                687
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
            683,
            687
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
        669,
        689
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
          699,
          703
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
              705,
              708
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  707,
                  708
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
                707,
                708
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
            704,
            708
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
        690,
        710
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
          742,
          745
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
          729,
          733
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
              735,
              740
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                737,
                740
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
            734,
            740
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
        720,
        745
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
          756,
          760
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
              762,
              772
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  771,
                  772
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
                764,
                772
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
            761,
            772
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
        747,
        774
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
          784,
          788
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
              790,
              800
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  799,
                  800
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
                792,
                800
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
            789,
            800
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
        775,
        802
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
          834,
          837
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
          821,
          825
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
              827,
              832
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                829,
                832
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
            826,
            832
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
        812,
        837
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
          848,
          852
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
              854,
              864
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  863,
                  864
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
                856,
                864
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
            853,
            864
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
        839,
        866
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
          876,
          880
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
              882,
              892
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  891,
                  892
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
                884,
                892
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
            881,
            892
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
        867,
        894
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
          926,
          929
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
          913,
          917
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
              919,
              924
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                921,
                924
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
            918,
            924
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
        904,
        929
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
          940,
          944
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
              946,
              949
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  948,
                  949
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
                948,
                949
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
            945,
            949
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
        931,
        951
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
          961,
          965
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
              967,
              970
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  969,
                  970
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
                969,
                970
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
            966,
            970
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
        952,
        972
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
          1001,
          1004
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
          988,
          992
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
              994,
              999
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                996,
                999
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
            993,
            999
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
        979,
        1004
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
          1015,
          1020
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
              1022,
              1025
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1024,
                  1025
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
                1024,
                1025
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
            1021,
            1025
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
        1006,
        1027
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
          1037,
          1042
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
              1044,
              1056
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1047,
                  1056
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
                        1048,
                        1055
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
                      1048,
                      1055
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
                  1046,
                  1047
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
                1046,
                1056
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
            1043,
            1056
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
        1028,
        1058
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
          1088,
          1091
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
          1074,
          1079
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
              1081,
              1086
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1083,
                1086
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
            1080,
            1086
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
        1065,
        1091
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
          1102,
          1107
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
              1109,
              1112
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1111,
                  1112
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
                1111,
                1112
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
            1108,
            1112
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
        1093,
        1114
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
          1124,
          1129
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
              1131,
              1135
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "range": [
                  1133,
                  1135
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
                1133,
                1135
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
            1130,
            1135
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
        1115,
        1137
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
          1170,
          1173
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
          1156,
          1161
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
              1163,
              1168
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1165,
                1168
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
            1162,
            1168
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
        1147,
        1173
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
          1184,
          1189
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
              1191,
              1194
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1193,
                  1194
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
                1193,
                1194
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
            1190,
            1194
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
        1175,
        1196
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
          1206,
          1211
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
              1213,
              1217
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "range": [
                  1215,
                  1217
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
                1215,
                1217
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
            1212,
            1217
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
        1197,
        1219
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
          1249,
          1252
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
          1235,
          1240
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
              1242,
              1247
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1244,
                1247
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
            1241,
            1247
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
        1226,
        1252
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
          1263,
          1267
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
              1269,
              1272
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1271,
                  1272
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
                1271,
                1272
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
            1268,
            1272
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
        1254,
        1274
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
          1284,
          1288
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
              1290,
              1293
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  1292,
                  1293
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
                1292,
                1293
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
            1289,
            1293
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
        1275,
        1295
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
          1324,
          1327
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
          1311,
          1315
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
              1317,
              1322
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1319,
                1322
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
            1316,
            1322
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
        1302,
        1327
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
          1338,
          1342
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
              1344,
              1347
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1346,
                  1347
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
                1346,
                1347
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
            1343,
            1347
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
        1329,
        1349
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
          1359,
          1363
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
              1365,
              1375
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1374,
                  1375
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
                1367,
                1375
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
            1364,
            1375
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
        1350,
        1377
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
          1409,
          1412
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
          1396,
          1400
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
              1402,
              1407
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1404,
                1407
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
            1401,
            1407
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
        1387,
        1412
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
          1423,
          1427
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
              1429,
              1432
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1431,
                  1432
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
                1431,
                1432
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
            1428,
            1432
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
        1414,
        1434
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
          1444,
          1448
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
              1450,
              1453
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  1452,
                  1453
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
                1452,
                1453
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
            1449,
            1453
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
        1435,
        1455
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
          1487,
          1490
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
          1474,
          1478
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
              1480,
              1485
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1482,
                1485
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
            1479,
            1485
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
        1465,
        1490
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
          1501,
          1505
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
              1507,
              1510
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1509,
                  1510
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
                1509,
                1510
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
            1506,
            1510
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
        1492,
        1512
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
          1522,
          1526
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
              1528,
              1537
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1531,
                  1537
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
                        1532,
                        1536
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
                      1532,
                      1536
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
                  1530,
                  1531
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
                1530,
                1537
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
            1527,
            1537
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
        1513,
        1539
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
          1568,
          1571
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
          1555,
          1559
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
              1561,
              1566
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1563,
                1566
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
            1560,
            1566
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
        1546,
        1571
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
          1582,
          1587
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
              1589,
              1592
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1591,
                  1592
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
                1591,
                1592
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
            1588,
            1592
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
        1573,
        1594
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
          1604,
          1609
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
              1611,
              1621
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1620,
                  1621
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
                1613,
                1621
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
            1610,
            1621
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
        1595,
        1623
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
          1653,
          1656
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
          1639,
          1644
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
              1646,
              1651
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1648,
                1651
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
            1645,
            1651
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
        1630,
        1656
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
          1667,
          1672
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
              1674,
              1677
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1676,
                  1677
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
                1676,
                1677
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
            1673,
            1677
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
        1658,
        1679
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
          1689,
          1694
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
              1696,
              1706
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1705,
                  1706
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
                1698,
                1706
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
            1695,
            1706
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
        1680,
        1708
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
          1741,
          1744
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
          1727,
          1732
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
              1734,
              1739
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1736,
                1739
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
            1733,
            1739
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
        1718,
        1744
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
          1755,
          1761
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
              1763,
              1766
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1765,
                  1766
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
                1765,
                1766
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
            1762,
            1766
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
        1746,
        1768
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
          1778,
          1784
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
              1786,
              1790
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "range": [
                  1788,
                  1790
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
                1788,
                1790
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
            1785,
            1790
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
        1769,
        1792
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
          1823,
          1826
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
          1808,
          1814
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
              1816,
              1821
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1818,
                1821
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
            1815,
            1821
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
        1799,
        1826
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
          1837,
          1843
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
              1845,
              1848
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1847,
                  1848
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
                1847,
                1848
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
            1844,
            1848
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
        1828,
        1850
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
          1860,
          1866
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
              1868,
              1872
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "range": [
                  1870,
                  1872
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
                1870,
                1872
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
            1867,
            1872
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
        1851,
        1874
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
          1908,
          1911
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
          1893,
          1899
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
              1901,
              1906
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1903,
                1906
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
            1900,
            1906
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
        1884,
        1911
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
          1922,
          1927
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
              1929,
              1932
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  1931,
                  1932
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
                1931,
                1932
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
            1928,
            1932
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
        1913,
        1934
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
          1944,
          1949
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
              1951,
              1963
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1954,
                  1963
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
                        1955,
                        1962
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
                      1955,
                      1962
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
                  1953,
                  1954
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
                1953,
                1963
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
            1950,
            1963
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
        1935,
        1965
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
          1998,
          2001
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
          1984,
          1989
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
              1991,
              1996
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1993,
                1996
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
            1990,
            1996
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
        1975,
        2001
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
          2012,
          2017
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
              2019,
              2022
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2021,
                  2022
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
                2021,
                2022
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
            2018,
            2022
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
        2003,
        2024
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
          2034,
          2039
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
              2041,
              2051
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  2050,
                  2051
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
                2043,
                2051
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
            2040,
            2051
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
        2025,
        2053
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
          2083,
          2086
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
          2069,
          2074
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
              2076,
              2081
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2078,
                2081
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
            2075,
            2081
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
        2060,
        2086
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
          2097,
          2102
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
              2104,
              2107
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2106,
                  2107
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
                2106,
                2107
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
            2103,
            2107
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
        2088,
        2109
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
          2119,
          2124
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
              2126,
              2136
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  2135,
                  2136
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
                2128,
                2136
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
            2125,
            2136
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
        2110,
        2138
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
          2171,
          2174
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
          2157,
          2162
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
              2164,
              2169
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2166,
                2169
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
            2163,
            2169
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
        2148,
        2174
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
          2185,
          2190
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
              2192,
              2195
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2194,
                  2195
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
                2194,
                2195
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
            2191,
            2195
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
        2176,
        2197
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
          2207,
          2212
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
              2214,
              2218
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "range": [
                  2216,
                  2218
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
                2216,
                2218
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
            2213,
            2218
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
        2198,
        2220
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
          2250,
          2253
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
          2236,
          2241
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
              2243,
              2248
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2245,
                2248
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
            2242,
            2248
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
        2227,
        2253
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
          2264,
          2269
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
              2271,
              2274
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  2273,
                  2274
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
                2273,
                2274
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
            2270,
            2274
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
        2255,
        2276
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
          2286,
          2291
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
              2293,
              2297
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "range": [
                  2295,
                  2297
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
                2295,
                2297
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
            2292,
            2297
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
        2277,
        2299
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
          2332,
          2335
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
          2318,
          2323
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
              2325,
              2330
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2327,
                2330
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
            2324,
            2330
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
        2309,
        2335
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
